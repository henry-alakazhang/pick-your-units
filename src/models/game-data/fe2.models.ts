import { GameName, Game } from "../game.models";

export type CharacterNameFE2 = "Alm";
export type ClassNameFE2 = "Mercenary";

export const fe2: Game<CharacterNameFE2, ClassNameFE2> = {
  short: GameName.FE2,
  disabled: "Nobody plays Gaiden",
  free: [],
  characters: { Alm: { class: "Mercenary" } },
  classes: { Mercenary: { weapons: ["Sword"] } },
  flags: {},
};
