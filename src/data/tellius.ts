import { Game, UnsupportedGame } from "./data.types";

interface PathOfRadianceGame {
  CharacterName: keyof typeof characters,
  ChildCharacterName: never,
  Pairings: false,
}

const characters = {
  Astrid: {
    class: "Bow Knight",
  },
  Bastian: {
    class: "Sage",
  },
  Boyd: {
    class: "Fighter",
  },
  Brom: {
    class: "Knight",
  },
  Calill: {
    class: "Sage",
  },
  Devdan: {
    class: "Halberdier",
  },
  Elincia: {
    class: "Princess Crimea",
  },
  Gatrie: {
    class: "Knight",
  },
  Geoffrey: {
    class: "Paladin (Sword/Lance)",
  },
  Haar: {
    class: "Wyvern Lord",
  },
  Ike: {
    class: "Ranger",
  },
  Ilyana: {
    class: "Mage",
  },
  Janaff: {
    class: "Hawk",
  },
  Jill: {
    class: "Wyvern Rider",
  },
  Kieran: {
    class: "Axe Knight",
  },
  Largo: {
    class: "Berserker",
  },
  Lethe: {
    class: "Cat",
  },
  Lucia: {
    class: "Swordmaster",
  },
  Makalov: {
    class: "Sword Knight",
  },
  Marcia: {
    class: "Pegasus Knight",
  },
  Mia: {
    class: "Myrmidon",
  },
  Mist: {
    class: "Cleric",
  },
  Mordecai: {
    class: "Tiger",
  },
  Muarim: {
    class: "Tiger",
  },
  Nephenee: {
    class: "Soldier",
  },
  Oscar: {
    class: "Lance Knight",
  },
  Ranulf: {
    class: "Cat",
  },
  Reyson: {
    class: "Heron",
  },
  Rhys: {
    class: "Priest",
  },
  Rolf: {
    class: "Archer",
  },
  Shinon: {
    class: "Sniper",
  },
  Soren: {
    class: "Mage",
  },
  Sothe: {
    class: "Thief",
  },
  Stefan: {
    class: "Swordmaster",
  },
  Tanith: {
    class: "Falcon Knight",
  },
  Tauroneo: {
    class: "General",
  },
  Titania: {
    class: "Paladin (Lance/Axe)",
  },
  Tormod: {
    class: "Mage",
  },
  Ulki: {
    class: "Hawk",
  },
  Volke: {
    class: "Thief (Volke)",
  },
  Zihark: {
    class: "Myrmidon",
  }
} as const;

export const fe9: Game<PathOfRadianceGame> = {
  short: "fe9",
  defaultPicks: 13,
  characters,
  classes: {
    Ranger: {
      weapons: ["Sword"],
      promo: "Lord",
    },
    Lord: {
      weapons: ["Sword"],
    },
    Hero: {
      weapons: ["Sword", "Axe"],
    },
    Myrmidon: {
      weapons: ["Sword"],
      promo: "Swordmaster",
    },
    Swordmaster: {
      weapons: ["Sword"],
    },
    Soldier: {
      weapons: ["Lance"],
      promo: "Halberdier",
    },
    Halberdier: {
      weapons: ["Lance"],
    },
    Fighter: {
      weapons: ["Axe"],
      promo: "Warrior",
    },
    Warrior: {
      weapons: ["Axe", "Bow"],
    },
    Archer: {
      weapons: ["Bow"],
      promo: "Sniper",
    },
    Sniper: {
      weapons: ["Bow"],
    },
    Knight: {
      weapons: ["Lance"],
      promo: "General",
    },
    General: {
      weapons: ["Sword", "Lance"],
    },
    "Sword Knight": {
      weapons: ["Sword"],
      promo: [
        "Paladin (Sword/Lance)",
        "Paladin (Sword/Axe)",
        "Paladin (Sword/Bow)",
      ],
    },
    "Lance Knight": {
      weapons: ["Lance"],
      promo: [
        "Paladin (Sword/Lance)",
        "Paladin (Lance/Axe)",
        "Paladin (Lance/Bow)",
      ],
    },
    "Axe Knight": {
      weapons: ["Axe"],
      promo: [
        "Paladin (Sword/Axe)",
        "Paladin (Lance/Axe)",
        "Paladin (Axe/Bow)",
      ],
    },
    "Bow Knight": {
      weapons: ["Bow"],
      promo: [
        "Paladin (Sword/Bow)",
        "Paladin (Lance/Bow)",
        "Paladin (Axe/Bow)",
      ],
    },
    "Paladin (Sword/Lance)": {
      weapons: ["Sword", "Lance"],
    },
    "Paladin (Sword/Axe)": {
      weapons: ["Sword", "Axe"],
    },
    "Paladin (Sword/Bow)": {
      weapons: ["Sword", "Bow"],
    },
    "Paladin (Lance/Axe)": {
      weapons: ["Lance", "Axe"],
    },
    "Paladin (Lance/Bow)": {
      weapons: ["Lance", "Bow"],
    },
    "Paladin (Axe/Bow)": {
      weapons: ["Axe", "Bow"],
    },
    "Pegasus Knight": {
      weapons: ["Lance"],
      promo: "Falcon Knight",
    },
    "Falcon Knight": {
      weapons: ["Sword", "Lance"],
    },
    "Princess Crimea": {
      weapons: ["Sword", "Staff"],
    },
    "Wyvern Rider": {
      weapons: ["Lance"],
      promo: "Wyvern Lord",
    },
    "Wyvern Lord": {
      weapons: ["Lance", "Axe"],
    },
    Mage: {
      weapons: ["Fire", "Thunder", "Wind"],
      promo: "Sage",
    },
    Sage: {
      weapons: ["Fire", "Thunder", "Wind", "Staff", "Knife"],
    },
    Priest: {
      weapons: ["Staff"],
      promo: "Bishop",
    },
    Bishop: {
      weapons: ["Staff"],
    },
    Cleric: {
      weapons: ["Staff"],
      promo: "Valkyrie",
    },
    Valkyrie: {
      weapons: ["Sword", "Staff"],
    },
    Thief: {
      weapons: ["Knife"],
    },
    "Thief (Volke)": {
      weapons: ["Knife"],
      promo: "Assassin",
    },
    Assassin: {
      weapons: ["Knife"],
    },
    Bandit: {
      weapons: ["Axe"],
      promo: "Berserker",
    },
    Berserker: {
      weapons: ["Axe"],
    },
    Lion: {
      weapons: [],
    },
    Tiger: {
      weapons: [],
    },
    "Red Dragon": {
      weapons: [],
    },
    Dragon: {
      weapons: [],
    },
    Cat: {
      weapons: [],
    },
    Heron: {
      weapons: [],
    },
    Hawk: {
      weapons: [],
    },
    Raven: {
      weapons: [],
    },
  },
  free: ["Ike"],
  flags: {},
};

export const fe10: Game<UnsupportedGame> = {
  short: "fe10",
  defaultPicks: 0,
  free: ["Micaiah", "Ike"],
  disabled: "Need to figure out how these routes work",
  characters: {
    // "Aran",
    // "Astrid",
    // "Bastian",
    // "Boyd",
    // "Brom",
    // "Caineghis",
    // "Calill",
    // "Danved",
    // "Edward",
    // "Elincia",
    // "Ena",
    // "Fiona",
    // "Gareth",
    // "Gatrie",
    // "Geoffrey",
    // "Giffca",
    // "Haar",
    // "Heather",
    // "Ike",
    // "Ilyana",
    // "Janaff",
    // "Jill",
    // "Kieran",
    // "Kurthnaga",
    // "Kyza",
    // "Laura",
    // "Leanne",
    // "Leonardo",
    // "Lethe",
    // "Lucia",
    // "Lyre",
    // "Makalov",
    // "Marcia",
    // "Meg",
    // "Mia",
    // "Micaiah",
    // "Mist",
    // "Mordecai",
    // "Muarim",
    // "Naesala",
    // "Nailah",
    // "Nasir",
    // "Nealuchi",
    // "Nephenee",
    // "Nolan",
    // "Oscar",
    // "Pelleas",
    // "Rafiel",
    // "Ranulf",
    // "Reyson",
    // "Rhys",
    // "Rolf",
    // "Sanaki",
    // "Shinon",
    // "Sigrun",
    // "Skrimir",
    // "Soren",
    // "Sothe",
    // "Stefan",
    // "Tanith",
    // "Tauroneo",
    // "Tibarn",
    // "Titania",
    // "Tormod",
    // "Ulki",
    // "Vika",
    // "Volke",
    // "Volug",
    // "Zihark",
  },
  classes: {},
  flags: {},
};
