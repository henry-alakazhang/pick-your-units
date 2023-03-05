import { GameConfig } from "./components/GameOptions";
import { Game, GameMetaType } from "./data/data.types";
import { Games } from "./Games";

/**
 * Return a shuffled copy of an array using a Durstenfield I copied off Stack Overflow
 * https://stackoverflow.com/a/12646864
 */
function shuffle<T>(original: readonly T[]): T[] {
  const arr = [...original];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function randIn(arr: readonly unknown[]): number {
  return Math.floor(Math.random() * arr.length);
}

/**
 * Returns either a string value or a random element in an array,
 * depending on the type of the passed element
 */
function getOrRand(obj: string | readonly string[]): string {
  if (typeof obj === "string") {
    return obj;
  } else {
    return obj[randIn(obj)];
  }
}

export interface CompletedPicks {
  characters: CharacterPick[];
  weapons: { [k: string]: number };
  pairings: { [k: string]: string };
  friends: { [k: string]: string };
  // can be undefined because there aren't enough base game emblems for all picks
  emblems: { [k: string]: string | undefined };
  options: GameConfig;
}

export interface CharacterPick {
  name: string;
  class: string;

  /** Whether to show S support pair (if explicitly needed for class, or if specified) */
  showPair?: boolean;
  /** Whether to show A+ friend (if explicitly needed for class) */
  showFriend?: boolean;

  /** Stats for an avatar */
  stats?: {
    boon: string;
    bane: string;
  };
}

export class Picker<G extends GameMetaType> {
  private game: Game<G>;
  private numPicks: number;
  private options: GameConfig;
  private pool: string[];
  private picks: CompletedPicks;

  constructor(game: string, numPicks: number, options: GameConfig) {
    this.game = Games[game];
    this.numPicks = numPicks;
    this.options = options;
    this.pool = Object.keys(this.game.characters);
    this.picks = {
      characters: [],
      weapons: {},
      pairings: {},
      friends: {},
      emblems: {},
      options: { ...options },
    };
  }

  /**
   * Generates picks for the given settings
   * Returns a promise to return the picks (generates asynchronously)
   */
  generatePicks(): Promise<CompletedPicks> {
    return new Promise((resolve, reject) => {
      let avatar: string | undefined = undefined;
      if (this.game.avatar) {
        const gender = Math.random();
        if (gender >= 0.5) {
          avatar = this.game.avatar + " (F)";
          this.pool = this.pool.filter(
            char => char !== this.game.avatar + " (M)"
          );
        } else {
          avatar = this.game.avatar + " (M)";
          this.pool = this.pool.filter(
            char => char !== this.game.avatar + " (F)"
          );
        }
      }

      // set pairings
      if (this.game.flags["pairings"] && this.options["pairings"]) {
        // prioritise parents
        for (const child in this.game.children) {
          if (
            this.pairUp(this.game.children[child].parent) &&
            this.options["children"]
          ) {
            this.pool.push(child);
          }
        }
        for (const other of this.pool) {
          this.pairUp(other);
        }
      }

      if (this.game.flags["friends"] && this.options["friends"]) {
        for (const char in this.game.characters) {
          if (this.game.characters[char].friends)
            this.picks.friends[char] = getOrRand(
              this.game.characters[char].friends!
            );
        }
        for (const child in this.game.children) {
          if (this.game.children[child].friends)
            this.picks.friends[child] = getOrRand(
              this.game.children[child].friends!
            );
        }
      }

      if (avatar) {
        this.makePick(avatar);

        // FIXME: add some kind of options for avatar setting or whatever and put Alear here too
        // pick boon and bane stats for avatar
        // doesn't apply to 3 houses
        if (this.game.short !== "fe16") {
          const stats = ["Str", "Mag", "Skl", "Spd", "Luk", "Def", "Res"];
          const boon = getOrRand(stats);
          const bane = getOrRand(stats.filter(stat => stat === boon));
          this.picks.characters[0].stats = {
            boon,
            bane,
          };
        }
      }

      // if not allowing other factions, shrink down the pool size.
      if (this.game.flags["factions"] && !this.options["factions"]) {
        this.pool = this.pool.filter(
          unit =>
            // include characters from faction
            this.game.characters[unit].faction === this.game.faction ||
            // and unaligned characters
            !this.game.characters[unit].faction
        );
      }

      // constrain total character count to the amount of characters available.
      this.numPicks = Math.min(
        this.numPicks,
        this.pool.length + this.picks.characters.length
      );

      // pick free characters
      for (const forced of this.game.free) {
        this.makePick(getOrRand(forced));
      }

      // loop and add characters
      while (
        this.picks.characters.length < this.numPicks &&
        this.pool.length > 0
      ) {
        this.makePick();
      }

      if (this.game.flags["emblems"] && this.game.emblems) {
        // randomly pick N emblems to use.
        const pickedEmblems = shuffle(Object.keys(this.game.emblems)).slice(
          0,
          this.picks.characters.length
        );

        // if allowed to troll, we can just assign emblems at complete random
        if (this.options.troll) {
          // shuffle the list and assign one by one.
          this.picks.characters.forEach(char => {
            this.picks.emblems[char.name] = pickedEmblems.pop();
          });
        } else {
          const remainingCharacters = Object.fromEntries(
            this.picks.characters.map(c => [c.name, true])
          );

          // otherwise, we have to put some thought into this.
          // sort the emblems in "amount of viable units" order and assign them in that order.
          const emblemsAndViableChars = pickedEmblems
            .map(emblem => {
              // no stat requirements: anyone can use.
              if (!this.game.emblems?.[emblem].stat) {
                return { emblem, chars: this.picks.characters };
              }
              const chars = this.picks.characters.filter(char => {
                const charData = this.game.characters[
                  char.name as G["CharacterName"]
                ];
                const classData = this.game.classes[
                  char.class as G["ClassName"]
                ];

                // if the emblem has stat restrictions, it needs to match either the character or the class
                // eg. a MAG character with a MAG/STR class can use any emblems, because hopefully
                // their class gives them the base stats to be functional with STR emblems
                // eg. a MAG/STR character with a MAG class can still use STR emblems, likewise because
                // their bases and growths should give them the stats to use STR emblems
                // this makes things a LITTLE weird because eg. Wolf Knight Merrin can use Celica, but it's probably OK?
                return (
                  (this.game.emblems?.[emblem].stat?.MAG &&
                    (charData.stat?.MAG || classData.stat?.MAG)) ||
                  (this.game.emblems?.[emblem].stat?.STR &&
                    (charData.stat?.STR || classData.stat?.STR))
                );
              });
              return { emblem, chars };
            })
            .sort(
              ({ chars: charsA }, { chars: charsB }) =>
                charsA.length - charsB.length
            );

          console.log(emblemsAndViableChars);

          emblemsAndViableChars.forEach(({ emblem, chars: viableChars }) => {
            // get viable characters and filter for unpicked ones
            let available = viableChars
              .map(c => c.name)
              .filter(c => remainingCharacters[c]);
            if (available.length === 0) {
              console.log("Ran out of good units to put with emblem:", emblem);
              // if none left, just assign to any remaining character at random.
              available = Object.keys(remainingCharacters);
            }
            const matchedChar = getOrRand(available);
            this.picks.emblems[matchedChar] = emblem;
            delete remainingCharacters[matchedChar];
          });
        }
      }

      console.log(this.picks);
      resolve(this.picks);
    });
  }

  /**
   * Pairs an unpaired character with another unpaired character
   * Returns whether that character is paired
   */
  pairUp(person) {
    // more than 1 waifu will ruin your laifu
    if (this.getPartner(person)) return true;

    // how do you pair that which does not exist?
    if (!this.pool.includes(person)) return false;

    const profile =
      this.game.characters[person] || this.game.children?.[person];
    if (!profile.pairings) {
      throw new Error("Tried to pair someone without pairings");
    }

    const availables = profile.pairings.slice();
    let pair = randIn(availables);
    while (
      (!this.pool.includes(availables[pair]) ||
        this.getPartner(availables[pair])) &&
      availables.length > 0
    ) {
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

  /**
   * Makes a single pick and updates the pick list and pool
   * parameter `force` is an optional forced character name to pick
   * empty parameter results in a random pick
   */
  makePick(force?: string) {
    let char = force;
    if (char === undefined) {
      char = this.pool[randIn(this.pool)];
    }

    // can't pick someone twice.
    if (!this.pool.includes(char)) return;

    // only pick paired units for pairing runs
    if (
      this.game.flags["onlypairs"] &&
      this.options["onlypairs"] &&
      !this.getPartner(char)
    )
      return;

    const character = this.game.characters[char] || this.game.children![char];
    let pickName = char;
    let pickClass: string;
    let showPair: boolean | undefined = undefined;
    let showFriend: boolean | undefined = undefined;

    // set class
    // if there's only one option or the random classes is set, get a random one
    if (this.options["classes"] || !this.game.flags["classes"]) {
      if (
        (this.options["pairings"] || this.options["friends"]) &&
        this.game.inheritClasses
      ) {
        // check for inheritance (from partners/friends/parents)
        const classPool = this.game.inheritClasses(this.game, this.picks, char);
        const classPick = randIn(classPool);
        console.log(char, classPool);
        pickClass = classPool[classPick];

        // only show pairing if class is inherited from them
        if (
          this.game.short === "fe14" &&
          !this.options["onlypairs"] &&
          this.picks.pairings[char]
        ) {
          // first added class is partner's
          if (classPick === character.class.length) showPair = true;
          // for kids, it's the second because they inherit a class from a parent
          if (classPick === character.class.length + 1) showPair = true;
        }

        // only show friend if class is inherited from them
        if (this.options["friends"] && this.picks.friends[char]) {
          // skip over a class if paired
          const add = this.picks.pairings[char] ? 1 : 0;
          // second class added is a friend's
          if (classPick === character.class.length + add) showFriend = true;
          // for kids, it's the third because they inherit a class from a parent
          if (classPick === character.class.length + add + 1) showFriend = true;
        }
      } else {
        pickClass = getOrRand(character.class);
      }
    } else {
      // else use default
      pickClass = character.defaultClass || character.class[0];
    }

    console.log(this.game.classes, pickClass);
    let promo = this.game.classes[pickClass].promo;
    while (promo !== null && promo !== undefined) {
      pickClass = getOrRand(promo);
      promo = this.game.classes[pickClass].promo;
    }

    const pick: CharacterPick = {
      name: pickName,
      class: pickClass,
      showFriend,
      showPair,
    };

    // repick if troll characters not allowed
    if (
      this.game.flags["troll"] &&
      !this.options["troll"] &&
      this.isTrollPick(pick)
    ) {
      if (force) {
        this.makePick(force);
      }
      return;
    }

    // repick if unbalanced (forced characters remain forced)
    if (
      this.options["balanced"] &&
      force === undefined &&
      !this.maintainsBalance(pick) &&
      // don't repick if we're running low on characters
      // else we might end up looping forever
      this.pool.length > 3
    ) {
      return;
    }

    // add character to list
    this.picks.characters.push(pick);
    this.pool = this.pool.filter(char => char !== pick.name);

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
        if (this.pool.includes(char)) {
          this.makePick(char);
        }
      }
    }

    if (character.exclude) {
      this.pool = this.pool.filter(char => !character.exclude!.includes(char));
    }

    // add partner if pairing up
    if (
      this.game.flags["onlypairs"] &&
      this.options["onlypairs"] &&
      this.getPartner(pick.name)
    ) {
      this.makePick(this.getPartner(pick.name));
    }
  }

  /**
   * Returns whether a new pick would maintain weapon balance across the classes
   */
  maintainsBalance(pick: CharacterPick) {
    let counts = Object.keys(this.game.classes).reduce((acc, val) => {
      if (this.game.classes[val].weapons) {
        for (const weap of this.game.classes[val].weapons) {
          acc[weap] = 0;
        }
      }
      return acc;
    }, {});

    for (const char of this.picks.characters) {
      for (const weap of this.game.classes[char.class].weapons) {
        counts[weap]++;
      }
    }

    const avg =
      Object.keys(counts).reduce((acc, val) => acc + counts[val], 0) /
      Object.keys(counts).length;

    // for ordinary weapons users, check if they improve balance
    for (const weap of this.game.classes[pick.class].weapons) {
      // console.log(weap, counts[weap], avg);
      if (counts[weap] < avg + 1) return true;
    }

    // for non-weapon users, check if balance is ok
    for (const weap in counts) {
      if (Math.abs(counts[weap] - avg) > 2) {
        return false;
      }
    }

    return true;
  }

  isTrollPick(pick: CharacterPick) {
    const pickChar =
      this.game.characters[pick.name] || this.game.children![pick.name];
    const pickClass = this.game.classes[pick.class];

    if (pickChar.stat && pickClass.stat) {
      // a 'troll' class is a STR-only class for a MAG-only character, or vice versa
      if (!pickChar.stat.STR && !pickClass.stat.MAG) {
        return true;
      }
      if (!pickChar.stat.MAG && !pickClass.stat.STR) {
        return true;
      }
    }

    // troll picks in 3H also include:
    // - ones which require any of a unit's weaknesses
    if (pickChar.weapons && pickClass.weapons) {
      if (
        pickClass.weapons.some(w => pickChar.weapons!.weaknesses.includes(w))
      ) {
        return true;
      }
    }

    // fates has e-rank hell, which counts as a troll pick
    if (this.game.short === "fe14") {
      for (const weap of this.game.classes[pickChar.defaultClass!].weapons) {
        if (pickClass.weapons.includes(weap)) {
          return false;
        }
      }
      return true;
    }

    return false;
  }
}
