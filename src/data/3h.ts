/**
 * A little note on Three Houses class changing
 *
 * Since every character can be every class, we don't need to
 * keep track of the beginner/intermediate classes.
 *
 * The only thing that restricts classes is the character's gender,
 * so we treat those as the base classes. Then we can just let everyone
 * promote directly into their available advanced/master classe
 */

import { Game } from "./data.types";

const femaleLockedClasses = {
  "Falcon Knight": {
    stat: { STR: true, MAG: false },
    weapons: ["Sword", "Lance", "Flying"],
  },
  Gremory: {
    stat: { STR: false, MAG: true },
    weapons: ["Reason", "Faith"],
  },
};

const maleLockedClasses = {
  Hero: {
    stat: { STR: true, MAG: false },
    weapons: ["Sword", "Axe"],
  },
  "Dark Bishop": {
    stat: { STR: false, MAG: true },
    weapons: ["Reason", "Faith"],
  },
  Grappler: {
    stat: { STR: true, MAG: false },
    weapons: ["Brawling"],
  },
  "War Master": {
    stat: { STR: true, MAG: false },
    weapons: ["Axe", "Brawling"],
  },
};

const sharedClasses = {
  Swordmaster: {
    stat: { STR: true, MAG: false },
    weapons: ["Sword"],
  },
  Assassin: {
    stat: { STR: true, MAG: false },
    weapons: ["Sword", "Bow"],
  },
  "Fortress Knight": {
    stat: { STR: true, MAG: false },
    weapons: ["Lance", "Axe", "Heavy Armour"],
  },
  Paladin: {
    stat: { STR: true, MAG: false },
    weapons: ["Sword", "Lance", "Riding"],
  },
  "Wyvern Rider": {
    stat: { STR: true, MAG: false },
    weapons: ["Lance", "Axe", "Flying"],
  },
  Warrior: {
    stat: { STR: true, MAG: false },
    weapons: ["Axe"],
  },
  Sniper: {
    stat: { STR: true, MAG: false },
    weapons: ["Bow"],
  },
  Warlock: {
    stat: { STR: false, MAG: true },
    weapons: ["Reason", "Faith"],
  },
  Bishop: {
    stat: { STR: false, MAG: true },
    weapons: ["Reason", "Faith"],
  },
  "Wyvern Lord": {
    stat: { STR: true, MAG: false },
    weapons: ["Lance", "Axe", "Flying"],
  },
  "Mortal Savant": {
    stat: { STR: true, MAG: true },
    weapons: ["Sword", "Reason"],
  },
  "Great Knight": {
    stat: { STR: true, MAG: false },
    weapons: ["Lance", "Axe", "Heavy Armour"],
  },
  "Bow Knight": {
    stat: { STR: true, MAG: false },
    weapons: ["Sword", "Bow", "Riding"],
  },
  "Dark Knight": {
    stat: { STR: true, MAG: true },
    weapons: ["Lance", "Reason", "Riding"],
  },
  "Holy Knight": {
    stat: { STR: true, MAG: true },
    weapons: ["Lance", "Faith", "Riding"],
  },
};

const classes = {
  Emperor: {
    stat: { STR: true, MAG: false },
    weapons: ["Axe", "Heavy Armour"],
  },
  "Great Lord": {
    stat: { STR: true, MAG: false },
    weapons: ["Sword", "Lance"],
  },
  Barbarossa: {
    stat: { STR: true, MAG: false },
    weapons: ["Bow", "Flying"],
  },
  "Enlightened One": {
    stat: { STR: true, MAG: true },
    weapons: ["Sword", "Brawling", "Faith"],
  },
  Female: {
    weapons: [],
    promo: [...Object.keys(femaleLockedClasses), ...Object.keys(sharedClasses)],
  },
  Male: {
    weapons: [],
    promo: [...Object.keys(maleLockedClasses), ...Object.keys(sharedClasses)],
  },
  ...femaleLockedClasses,
  ...maleLockedClasses,
  ...sharedClasses,
};

const blackEaglesLockedCharacters = {
  Edelgard: {
    class: ["Female", "Emperor"],
    defaultClass: "Emperor",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Sword", "Axe", /* budding */ "Reason", "Heavy Armour"],
      weaknesses: ["Bow", "Faith"],
    },
    faction: "eagles",
  },
  Hubert: {
    class: "Male",
    defaultClass: "Dark Bishop",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: [/* budding */ "Lance", "Bow", "Reason"],
      weaknesses: ["Axe", "Faith", "Flying"],
    },
    faction: "eagles",
  },
};

const blueLionsLockedCharacters = {
  Dimitri: {
    class: ["Male", "Great Lord"],
    defaultClass: "Great Lord",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Sword", "Lance", /* budding */ "Riding"],
      weaknesses: ["Axe", "Reason"],
    },
  },
  Dedue: {
    class: "Male",
    defaultClass: "Fortress Knight",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Lance", "Axe", "Brawling", "Heavy Armour"],
      weaknesses: ["Faith", "Riding", "Flying"],
    },
  },
  // TODO: is Gilbert locked to Blue Lions, or just having Annette?
  Gilbert: {
    class: "Male",
    defaultClass: "Fortress Knight",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Lance", "Axe", "Heavy Armour", "Riding"],
      weaknesses: [],
    },
  },
};

const goldenDeerLockedCharacters = {
  Claude: {
    class: ["Male", "Barbarossa"],
    defaultClass: "Barbarossa",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Sword", /*budding */ "Axe", "Bow", "Flying"],
      weaknesses: ["Lance", "Faith"],
    },
  },
};

const sharedCharacters = {
  "Byleth (M)": {
    // note: doing it like this will give a 50% chance of getting the special class
    // tbh i'm fine with that
    class: ["Male", "Enlightened One"],
    defaultClass: "Enlightened One",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Sword", "Brawling", "Faith"],
      weaknesses: [],
    },
  },
  "Byleth (F)": {
    class: ["Female", "Enlightened One"],
    defaultClass: "Enlightened One",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Sword", "Brawling", "Faith"],
      weaknesses: [],
    },
  },
  Dorothea: {
    class: "Female",
    defaultClass: "Warlock",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: ["Sword", "Reason", /* budding */ "Faith"],
      weaknesses: ["Riding", "Flying"],
    },
    faction: "eagles",
  },
  Ferdinand: {
    class: "Male",
    defaultClass: "Paladin",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Sword", "Lance", "Axe", "Heavy Armour", "Riding"],
      weaknesses: [],
    },
    faction: "eagles",
  },
  Bernadetta: {
    class: "Female",
    defaultClass: "Sniper",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Lance", "Bow", /* budding */ "Riding"],
      weaknesses: ["Sword", "Axe", "Brawling", "Heavy Armour"],
    },
    faction: "eagles",
  },
  Caspar: {
    class: "Male",
    defaultClass: "Warrior",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Axe", "Brawling"],
      weaknesses: ["Bow", "Reason"],
    },
    faction: "eagles",
  },
  Petra: {
    class: "Female",
    defaultClass: "Assassin",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Sword", "Axe", "Bow", "Flying"],
      weaknesses: ["Reason", "Faith"],
    },
    faction: "eagles",
  },
  Linhardt: {
    class: "Male",
    defaultClass: "Bishop",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: ["Reason", "Faith"],
      weaknesses: ["Axe", "Brawling"],
    },
    faction: "eagles",
  },
  Felix: {
    class: "Male",
    defaultClass: "Swordmaster",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Sword", "Bow", "Brawling", "Reason"],
      weaknesses: [],
    },
    faction: "lions",
  },
  Mercedes: {
    class: "Female",
    defaultClass: "Bishop",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: [/* budding */ "Bow", "Reason", "Faith"],
      weaknesses: ["Sword", "Lance", "Axe", "Heavy Armour"],
    },
    faction: "lions",
  },
  Ashe: {
    class: "Male",
    defaultClass: "Sniper",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: [/* budding */ "Lance", "Axe", "Bow"],
      weaknesses: ["Reason"],
    },
    faction: "lions",
  },
  Annette: {
    class: "Female",
    defaultClass: "Warlock",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: ["Axe", "Reason"],
      weaknesses: ["Bow", "Heavy Armour"],
    },
    faction: "lions",
  },
  Sylvain: {
    class: "Male",
    defaultClass: "Paladin",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Lance", "Axe", /* budding */ "Reason", "Riding"],
      weaknesses: ["Bow"],
    },
    faction: "lions",
  },
  Ingrid: {
    class: "Female",
    defaultClass: "Falcon Knight",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Sword", "Lance", "Riding", "Flying"],
      weaknesses: [],
    },
    faction: "lions",
  },
  Lorenz: {
    class: "Male",
    defaultClass: "Paladin",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Lance", "Reason", "Riding"],
      weaknesses: ["Brawling"],
    },
    faction: "deer",
  },
  Raphael: {
    class: "Male",
    defaultClass: "Grappler",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Axe", "Brawling", "Heavy Armour"],
      weaknesses: ["Bow", "Reason", "Riding"],
    },
    faction: "deer",
  },
  Lysithea: {
    class: "Female",
    defaultClass: "Warlock",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: [/* budding */ "Sword", "Reason", "Faith"],
      weaknesses: ["Lance", "Axe", "Heavy Armour"],
    },
    faction: "deer",
  },
  Ignatz: {
    class: "Male",
    defaultClass: "Sniper",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Sword", "Bow", /* budding */ "Reason"],
      weaknesses: ["Brawling", "Heavy Armour", "Flying"],
    },
    faction: "deer",
  },
  Marianne: {
    class: "Female",
    defaultClass: "Bishop",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: ["Sword", /* budding */ "Lance", "Faith", "Riding", "Flying"],
      weaknesses: ["Brawling", "Heavy Armour"],
    },
    faction: "deer",
  },
  Leonie: {
    class: "Female",
    defaultClass: "Paladin",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Lance", "Bow", "Riding"],
      weaknesses: [],
    },
    faction: "deer",
  },
  Manuela: {
    class: "Female",
    defaultClass: "Bishop",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Sword", "Faith", "Flying"],
      weaknesses: ["Reason", "Heavy Armour"],
    },
  },
  Hanneman: {
    class: "Male",
    defaultClass: "Warlock",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: ["Bow", "Reason", "Riding"],
      weaknesses: ["Heavy Armour", "Flying"],
    },
  },
  Alois: {
    class: "Male",
    defaultClass: "Warrior",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Axe", "Brawling", "Heavy Armour"],
      weaknesses: ["Reason", "Flying"],
    },
  },
};

const churchCharacters = {
  // slight hack: put Hilda in the church characters,
  // because this is really a pool of "not Edelgard route" characters.
  Hilda: {
    class: "Female",
    defaultClass: "Warrior",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Lance", "Axe", /* budding */ "Heavy Armour"],
      weaknesses: ["Faith"],
    },
    faction: "deer",
  },
  Seteth: {
    class: "Male",
    defaultClass: "Wyvern Rider",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Sword", "Lance", "Axe", "Flying"],
      weaknesses: ["Riding"],
    },
  },
  Flayn: {
    class: "Female",
    defaultClass: "Bishop",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: ["Lance", /* budding */ "Reason", "Faith"],
      weaknesses: ["Heavy Armour", "Riding"],
    },
  },
  Cyril: {
    class: "Male",
    defaultClass: "Wyvern Rider",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Lance", "Axe", "Bow", "Riding", "Flying"],
      weaknesses: ["Reason", "Faith"],
    },
  },
  Catherine: {
    class: "Female",
    defaultClass: "Swordmaster",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Sword", "Brawling"],
      weaknesses: ["Reason"],
    },
  },
  Shamir: {
    class: "Female",
    defaultClass: "Sniper",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Lance", "Bow"],
      weaknesses: ["Faith"],
    },
  },
};

const fe16base = {
  short: "fe16",
  avatar: "Byleth",
  classes,
  flags: {
    classes: true,
    troll: true,
    factions: true,
  },
  trollCriteria: [
    "MAG classes for a STR-based character and vice versa.",
    "Classes that require a character's weaknesses",
  ],
  defaultPicks: 12,
  imgExtension: "jpg",
};

export const fe16eagles: Game = {
  ...fe16base,
  free: ["Edelgard"],
  faction: "eagles",
  characters: {
    ...sharedCharacters,
    ...blackEaglesLockedCharacters,
  },
  // without the church, there are only 10 characters lol
  defaultPicks: 10,
};

export const fe16lions: Game = {
  ...fe16base,
  free: ["Dimitri"],
  faction: "lions",
  characters: {
    ...sharedCharacters,
    ...churchCharacters,
    ...blueLionsLockedCharacters,
  },
};

export const fe16deer: Game = {
  ...fe16base,
  free: ["Claude"],
  faction: "deer",
  characters: {
    ...sharedCharacters,
    ...churchCharacters,
    ...goldenDeerLockedCharacters,
  },
};

export const fe16church: Game = {
  ...fe16base,
  free: [],
  faction: "eagles",
  characters: {
    ...sharedCharacters,
    ...churchCharacters,
  },
};
