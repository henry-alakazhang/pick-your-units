import { GameName, Game } from "../game.models";

export type CharacterNamesFE2 = "Alm";
export type ClassNamesFE2 = "Mercenary";

export const fe2: Game<CharacterNamesFE2, ClassNamesFE2> = {
  short: GameName.FE2,
  disabled: "Nobody plays Gaiden",
  free: [],
  characters: { Alm: { class: "Mercenary" } },
  classes: { Mercenary: { weapons: ["Sword"] } },
  flags: {},
};
