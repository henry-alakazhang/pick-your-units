import Game from './Game';

function randIn(arr) {
  return Math.floor(Math.random() * arr.length);
}

export default class Picker {
  constructor(game, numPicks, options) {
    this.game = Game[game];
    this.numPicks = numPicks;
    this.options = options;
  }

  generatePicks() {
    if (this.game.short === "fe14" || this.game.short === "fe13") {
      return this.pick3DS(this.game, this.game.characters, this.numPicks, this.options);
    } else if (this.game.short === "fe11" || this.game.short === "fe12") {
      return this.pickDS(this.game, this.game.characters, this.numPicks, this.options);
    } else if (this.game.short === "fe4") {
      return this.pickFE4(this.game, this.game.characters, this.numPicks, this.options);
    } else {
      return this.pickGeneric(this.game, this.game.characters, this.numPicks, this.options);
    }
  }

  pickGeneric(game, characters, numPicks, options) {
    return new Promise(function(resolve, reject) {
      let picks = {
        characters: game.free.slice()
      }

      // if (game.routes) {
      //   picks.routes = [];
      //   for (const set of game.routes) {
      //     const pick = randIn(set);
      //     picks.routes.push(set[pick]);
      //   }
      // }

      // loop and add characters
      while (picks.characters.length < numPicks) {
        const pick = randIn(characters);
        picks.characters.push(characters[pick]);
        characters.splice(pick, 1);
      }

      console.log(picks);
      resolve(picks);
    });
  }

  pick3DS(game, characters, numPicks, options) {
    // TODO
    // needs options for supports, children, and partner/friend seal shenanigans
  }

  pickDS(game, characters, numPicks, options) {
    // TODO
    // needs options for class changing to any class in set, but with limits
  }

  pickFE4(game, characters, numPicks, options) {
    // TODO
    // needs options for supports and children
  }
}
