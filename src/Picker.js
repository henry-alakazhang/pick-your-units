import Game from './Game';

function randIn(arr) {
  return Math.floor(Math.random() * arr.length);
}

/*
 * Returns either a string value or a random element in an array,
 * depending on the type of the passed element
 */
function getOrRand(obj) {
  if (typeof obj === 'string') {
    return obj;
  } else {
    return obj[randIn(obj)];
  }
}

export default class Picker {
  constructor(game, numPicks, options) {
    console.log(game, numPicks, options);
    this.game = Game[game];
    this.numPicks = numPicks;
    this.options = options;
    this.pool = Object.keys(this.game.characters);
    this.picks = {
      characters: [],
      weapons: {},
      pairings: {},
      usePairings: options['pairings'],
    }
  }

  /*
   * Generates picks for the given settings
   * Returns a promise to return the picks (generates asynchronously)
   */
  generatePicks() {
    console.log(this.pool);
    return new Promise(function(resolve, reject) {
      let avatar = null;
      if (this.game.avatar) {
        const gender = Math.floor(Math.random()*2);
        if (gender == 1) {
          avatar = this.game.avatar + " (F)";
          this.pool.splice(this.pool.indexOf(this.game.avatar + " (M)"), 1);
        } else {
          avatar = this.game.avatar + " (M)";
          this.pool.splice(this.pool.indexOf(this.game.avatar + " (F)"), 1);
        }
      }

      // set pairings - done even if the 'pairings' option isn't checked
      // because we need pairings for children
      if (this.game.flags['pairings']) {
        // prioritise parents
        for (const child in this.game.children) {
          if (this.pairUp(this.game.children[child].parent) && this.options['children']) {
            this.pool.push(child);
          }
        }
        for (const other of this.pool) {
          this.pairUp(other);
        }
      }

      if (avatar)
        this.makePick(avatar);

      // pick free characters
      for (const forced of this.game.free) {
        this.makePick(getOrRand(forced));
      }

      // loop and add characters
      while (this.picks.characters.length < this.numPicks) {
        this.makePick();
      }

      console.log(this.picks);
      resolve(this.picks);
    }.bind(this));
  }

  /*
   * Pairs an unpaired character with another unpaired character
   * Returns whether that character is paired
   */
  pairUp(person) {
    // more than 1 waifu will ruin your laifu
    if (this.getPartner(person))
      return true;

    // how do you pair that which does not exist?
    if (this.pool.indexOf(person) === -1)
      return false;

    const profile = this.game.characters[person] || this.game.children[person];
    const availables = profile.pairings.slice();
    let pair = randIn(availables);
    while ((this.pool.indexOf(availables[pair]) === -1 || this.getPartner(availables[pair])) && availables.length > 0) {
      availables.splice(pair, 1);
      pair = randIn(availables);
    }
    // if there's someone in the pool, then there's someone left to pair
    if (availables.length > 0) {
      this.picks.pairings[person] = availables[pair];
      this.picks.pairings[availables[pair]] = person;
      return true;
    }
    return false;
  }

  getPartner(person) {
    return this.picks.pairings[person];
  }

  /*
   * Makes a single pick and updates the pick list and pool
   * parameter 'pick' is an optional forced character pick
   * empty parameter results in a random pick
   */
  makePick(force) {
    let char = force;
    if (char === undefined) {
      char = this.pool[randIn(this.pool)];
    }

    // can't pick someone twice.
    if (this.pool.indexOf(char) === -1)
      return;

    // only pick paired units for pairing runs
    if (this.game.flags['pairings'] && this.options['pairings'] && !this.getPartner(char))
      return;


    const character = this.game.characters[char] || this.game.children[char];
    let pick = {
      name: char
    }

    // set class
    // if there's only one option or the random classes is set, get a random one
    if (this.options['classes'] || !this.game.flags['classes']) {
      if (this.game.inheritClasses) {
        // check for inheritance (from partners/friends/parents)
        pick.class = getOrRand(this.game.inheritClasses(this.game, this.picks.pairings, char));
      } else {
        pick.class = getOrRand(character.class);
      }
    } else {
      // else use default
      pick.class = character.class[0];
    }

    console.log(pick);
    let promo = this.game.classes[pick.class].promo;
    while (promo != null) {
      pick.class = getOrRand(promo);
      promo = this.game.classes[pick.class].promo;
    }

    // repick if troll characters not allowed
    if (!this.options['troll'] && this.isTrollPick(pick)) {
      this.makePick(force);
      return;
    }

    // repick if unbalanced (forced characters remain forced)
    if (this.options['balanced'] && force === undefined && !this.maintainsBalance(pick)) {
      this.makePick();
      return;
    }

    // add character to list
    this.picks.characters.push(pick);
    this.pool.splice(this.pool.indexOf(pick.name), 1);

    // include must-haves and exclude exclusions
    if (character.include) {
      for (const char of character.include) {
        // no room; remove this character and pick another one
        if (this.picks.characters.length === this.numPicks) {
          this.picks.characters.pop();
          this.makePick();
          return;
        }
        // if not already picked, pick them
        if (this.pool.indexOf(char) !== -1) {
          this.makePick(char);
        }
      }
    }
    if (character.exclude) {
      for (const char of character.exclude) {
        this.pool.splice(this.pool.indexOf(char), 1);
      }
    }
    // add partner if pairing up
    if (this.game.flags['pairings'] && this.options['pairings'] && this.getPartner(pick.name)) {
      this.makePick(this.getPartner(pick.name));
    }
  }

  /**
   * Returns whether a new pick would maintain weapon balance across the classes
   */
  maintainsBalance(pick) {
    let counts = Object.keys(this.game.classes).reduce(function(acc, val) {
      for (const weap of this.game.classes[val].weapons) {
        acc[weap] = 0;
      }
      return acc;
    }.bind(this), {});

    for (const char of this.picks.characters) {
      for (const weap of this.game.classes[char.class].weapons) {
        counts[weap]++;
      }
    }

    const avg = Object.keys(counts).reduce((acc, val) => acc + counts[val], 0) / Object.keys(counts).length;

    // for ordinary weapons users, check if they improve balance
    for (const weap of this.game.classes[pick.class].weapons) {
      // console.log(weap, counts[weap], avg);
      if (counts[weap] < avg + 1)
        return true;
    }

    // for non-weapon users, check if balance is ok
    for (const weap in counts) {
      if (Math.abs(counts[weap] - avg) > 2) {
        return false;
      }
    }

    return true;
  }

  isTrollPick(pick) {
    const pickChar = this.game.characters[pick.name] || this.game.children[pick.name];
    const pickClass = this.game.classes[pick.class];

    // games without class changes have no troll picks
    if (!pickChar.stat)
      return false;

    // a 'troll' class is a STR-only class for a MAG-only character, or vice versa
    if (!pickChar.stat.STR && !pickClass.stat.MAG) {
      return true;
    }
    if (!pickChar.stat.MAG && !pickClass.stat.STR) {
      return true;
    }

    // fates has e-rank hell, which counts as a troll pick
    if (this.game.short === 'fe14') {
      for (const weap of this.game.classes[pickChar.base].weapons) {
        if (pickClass.weapons.indexOf(weap) !== -1) {
          return false;
        }
      }
      return true;
    } else{
      return false;
    }
  }
}
