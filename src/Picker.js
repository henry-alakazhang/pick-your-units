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
    }
  }

  /*
   * Generates picks for the given settings
   * Returns a promise to return the picks (generates asynchronously)
   */
  generatePicks() {
    return new Promise(function(resolve, reject) {
      // pick free characters
      for (const name of this.game.free) {
        this.makePick(name);
      }
      // loop and add characters
      while (this.picks.characters.length < this.numPicks) {
        this.makePick();
      }

      // if (game.routes) {
      //   picks.routes = [];
      //   for (const set of game.routes) {
      //     const pick = randIn(set);
      //     picks.routes.push(set[pick]);
      //   }
      // }

      console.log(this.picks);
      resolve(this.picks);
    }.bind(this));
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

    // pick character
    const character = this.game.characters[char];
    let pick = {
      name: char
    }

    // set class
    // if there's only one option or the random classes is set, get a random one
    if (this.options['classes'] || !this.game.flags['classes']) {
      pick.class = getOrRand(character.class);
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
    if (!this.options['troll']) {
      // a 'troll' class is a STR-only class for a MAG-only character, or vice versa
      console.log(pick, !character.stat.STR, !this.game.classes[pick.class].stat.MAG, !character.stat.MAG, !this.game.classes[pick.class].stat.STR);
      if (!character.stat.STR && !this.game.classes[pick.class].stat.MAG) {
        this.makePick();
        return;
      }
      if (!character.stat.MAG && !this.game.classes[pick.class].stat.STR) {
        this.makePick();
        return;
      }
    }

    // repick if unbalanced (forced characters remain forced)
    if (this.options['balanced'] && force === undefined && !this.maintainsBalance(pick)) {
      console.log(pick, "retrying");
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
          console.log("No room for " + char + " deleting " + pick.name)
          this.picks.characters.pop();
          this.makePick();
          return;
        }
        // if not already picked, pick them
        if (this.pool.indexOf(char) !== -1) {
          console.log("Picking " + char + " to go with " + pick.name);
          this.makePick(char);
        }
      }
    }
    if (character.exclude) {
      for (const char of character.exclude) {
        console.log("Excluding ", char);
        this.pool.splice(this.pool.indexOf(char), 1);
      }
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
}
