import { Game, GameName } from "../game.models";

export type CharacterNameFE1 =
  | "Abel"
  | "Arran"
  | "Astria"
  | "Bantu"
  | "Barst"
  | "Vyland"
  | "Boa"
  | "Caesar"
  | "Xane"
  | "Tiki"
  | "Draug"
  | "Elice"
  | "Est"
  | "Jeorge"
  | "Gordon"
  | "Hardin"
  | "jagen"
  | "Julian"
  | "Cain"
  | "Castor"
  | "Catria"
  | "Lorenze"
  | "Linde"
  | "Matthis"
  | "Bord"
  | "Maria"
  | "Merric"
  | "Marth"
  | "Midia"
  | "Minerva"
  | "Macellan"
  | "Nabarl"
  | "Ogma"
  | "Palla"
  | "Radd"
  | "Lena"
  | "Rickard"
  | "Roshea"
  | "Cord"
  | "Samson"
  | "Caeda"
  | "Tomas"
  | "Dolph"
  | "Wendel"
  | "Wolf"
  | "Sedgar";
export type ClassNameFE1 =
  | "Lord"
  | "Mercenary"
  | "Hero"
  | "Thief"
  | "Commando"
  | "Fighter"
  | "Pirate"
  | "Archer"
  | "Sniper"
  | "Hunter"
  | "Bow Knight"
  | "Cavalier"
  | "Paladin"
  | "Knight"
  | "General"
  | "Pegasus Knight"
  | "Dracoknight"
  | "Shooter"
  | "Mage"
  | "Priest"
  | "Bishop"
  | "Manakete";

export const fe1: Game<CharacterNameFE1, ClassNameFE1> = {
  short: GameName.FE1,
  characters: {
    Abel: {
      class: "Cavalier",
    },
    Arran: {
      class: "Paladin",
      exclude: ["Samson"],
    },
    Astria: {
      class: "Hero",
    },
    Bantu: {
      class: "Manakete",
    },
    Barst: {
      class: "Fighter",
    },
    Vyland: {
      class: "Cavalier",
    },
    Boa: {
      class: "Bishop",
    },
    Caesar: {
      class: "Mercenary",
    },
    Xane: {
      class: "Commando",
    },
    Tiki: {
      class: "Manakete",
    },
    Draug: {
      class: "Knight",
    },
    Elice: {
      class: "Priest",
    },
    Est: {
      class: "Pegasus Knight",
    },
    Jeorge: {
      class: "Sniper",
    },
    Gordon: {
      class: "Archer",
    },
    Hardin: {
      class: "Cavalier",
    },
    jagen: {
      class: "Paladin",
    },
    Julian: {
      class: "Thief",
    },
    Cain: {
      class: "Cavalier",
    },
    Castor: {
      class: "Archer",
    },
    Catria: {
      class: "Pegasus Knight",
    },
    Lorenze: {
      class: "General",
    },
    Linde: {
      class: "Mage",
    },
    Matthis: {
      class: "Cavalier",
    },
    Bord: {
      class: "Fighter",
    },
    Maria: {
      class: "Priest",
    },
    Merric: {
      class: "Mage",
    },
    Marth: {
      class: "Lord",
    },
    Midia: {
      class: "Paladin",
    },
    Minerva: {
      class: "Dracoknight",
    },
    Macellan: {
      class: "Knight",
    },
    Nabarl: {
      class: "Mercenary",
    },
    Ogma: {
      class: "Mercenary",
    },
    Palla: {
      class: "Pegasus Knight",
    },
    Radd: {
      class: "Mercenary",
    },
    Lena: {
      class: "Priest",
    },
    Rickard: {
      class: "Thief",
    },
    Roshea: {
      class: "Cavalier",
    },
    Cord: {
      class: "Fighter",
    },
    Samson: {
      class: "Hero",
      exclude: ["Arran"],
    },
    Caeda: {
      class: "Pegasus Knight",
    },
    Tomas: {
      class: "Archer",
    },
    Dolph: {
      class: "Knight",
    },
    Wendel: {
      class: "Bishop",
    },
    Wolf: {
      class: "Bow Knight",
    },
    Sedgar: {
      class: "Bow Knight",
    },
  },
  classes: {
    Lord: {
      weapons: ["Sword"],
    },
    Mercenary: {
      weapons: ["Sword"],
      promo: ["Hero"],
    },
    Hero: {
      weapons: ["Sword"],
    },
    Thief: {
      weapons: ["Sword"],
    },
    Commando: {
      weapons: ["Sword"],
    },
    Fighter: {
      weapons: ["Axe"],
    },
    Pirate: {
      weapons: ["Axe"],
    },
    Archer: {
      weapons: ["Bow"],
      promo: ["Sniper"],
    },
    Sniper: {
      weapons: ["Bow"],
    },
    Hunter: {
      weapons: ["Bow"],
      promo: ["Sniper"],
    },
    "Bow Knight": {
      weapons: ["Bow"],
    },
    Cavalier: {
      weapons: ["Sword", "Lance"],
      promo: ["Paladin"],
    },
    Paladin: {
      weapons: ["Sword", "Lance"],
    },
    Knight: {
      weapons: ["Sword", "Lance"],
    },
    General: {
      weapons: ["Sword"],
    },
    "Pegasus Knight": {
      weapons: ["Sword", "Lance"],
      promo: ["Dracoknight"],
    },
    Dracoknight: {
      weapons: ["Sword", "Lance"],
    },
    Shooter: {
      weapons: ["Firearm"],
    },
    Mage: {
      weapons: ["Magic"],
      promo: ["Bishop"],
    },
    Priest: {
      weapons: ["Staff"],
      promo: ["Bishop"],
    },
    Bishop: {
      weapons: ["Magic", "Staff"],
    },
    Manakete: {
      weapons: ["Dragonstone"],
    },
  },
  free: ["Marth"],
  flags: {},
};
