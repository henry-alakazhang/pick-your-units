import Game from './Game';

export default class Picker {
  constructor(game, numPicks, options) {
    this.game = Game[game];
    this.numPicks = numPicks;
    this.options = options;
  }

  generatePicks() {
    const frees = this.game.free;
    const characters = this.game.characters.slice();
    const numPicks = this.numPicks;
    const options = this.options;
    return new Promise(function(resolve, reject) {
      let picks = frees.slice();

      // loop and add characters
      while (picks.length < numPicks) {
        const pick = Math.floor(Math.random() * (characters.length-1));
        picks.push(characters[pick]);
        characters.splice(pick, 1);
      }

      console.log(picks);
      resolve(picks);
    });
  }
}
