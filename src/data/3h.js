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
    promo: [...Object.keys(femaleLockedClasses), ...Object.keys(sharedClasses)],
  },
  Male: {
    promo: [...Object.keys(maleLockedClasses), ...Object.keys(sharedClasses)],
  },
  ...femaleLockedClasses,
  ...maleLockedClasses,
  ...sharedClasses,
};

const characters = {
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
  Edelgard: {
    class: ["Female", "Emperor"],
    defaultClass: "Emperor",
    exclude: ["Dimitri", "Dedue", "Claude", "Hilda"],
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Sword", "Axe", /* budding */ "Reason", "Heavy Armour"],
      weaknesses: ["Bow", "Faith"],
    },
  },
  Hubert: {
    class: "Male",
    defaultClass: "Dark Bishop",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: [/* budding */ "Lance", "Bow", "Reason"],
      weaknesses: ["Axe", "Faith", "Flying"],
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
  },
  Ferdinand: {
    class: "Male",
    defaultClass: "Paladin",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Sword", "Lance", "Axe", "Heavy Armour", "Riding"],
      weaknesses: [],
    },
  },
  Bernadetta: {
    class: "Female",
    defaultClass: "Sniper",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Lance", "Bow", /* budding */ "Riding"],
      weaknesses: ["Sword", "Axe", "Brawling", "Heavy Armour"],
    },
  },
  Caspar: {
    class: "Male",
    defaultClass: "Warrior",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Axe", "Brawling"],
      weaknesses: ["Bow", "Reason"],
    },
  },
  Petra: {
    class: "Female",
    defaultClass: "Swordmaster",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Sword", "Axe", "Bow", "Flying"],
      weaknesses: ["Reason", "Faith"],
    },
  },
  Linhardt: {
    class: "Male",
    defaultClass: "Warlock",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: ["Reason", "Faith"],
      weaknesses: ["Axe", "Brawling"],
    },
  },
  Dimitri: {
    class: ["Male", "Great Lord"],
    defaultClass: "Great Lord",
    exclude: ["Claude", "Edelgard", "Hubert"],
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
  Felix: {
    class: "Male",
    defaultClass: "Swordmaster",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Sword", "Bow", "Brawling", "Reason"],
      weaknesses: [],
    },
  },
  Mercedes: {
    class: "Female",
    defaultClass: "Bishop",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: [/* budding */ "Bow", "Reason", "Faith"],
      weaknesses: ["Sword", "Lance", "Axe", "Heavy Armour"],
    },
  },
  Ashe: {
    class: "Male",
    defaultClass: "Sniper",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: [/* budding */ "Lance", "Axe", "Bow"],
      weaknesses: ["Reason"],
    },
  },
  Annette: {
    class: "Female",
    defaultClass: "Warlock",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: ["Axe", "Reason"],
      weaknesses: ["Bow", "Heavy Armour"],
    },
  },
  Sylvain: {
    class: "Male",
    defaultClass: "Paladin",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Lance", "Axe", /* budding */ "Reason", "Riding"],
      weaknesses: ["Bow"],
    },
  },
  Ingrid: {
    class: "Female",
    defaultClass: "Falcon Knight",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Sword", "Lance", "Riding", "Flying"],
      weaknesses: [],
    },
  },
  Claude: {
    class: ["Male", "Barbarossa"],
    defaultClass: "Barbarossa",
    exclude: ["Dimitri", "Dedue", "Edelgard", "Hubert"],
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Sword", /*budding */ "Axe", "Bow", "Flying"],
      weaknesses: ["Lance", "Faith"],
    },
  },
  Lorenz: {
    class: "Male",
    defaultClass: "Paladin",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Lance", "Reason", "Riding"],
      weaknesses: ["Brawling"],
    },
  },
  Hilda: {
    class: "Female",
    defaultClass: "Warrior",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Lance", "Axe", /* budding */ "Heavy Armour"],
      weaknesses: ["Faith"],
    },
  },
  Raphael: {
    class: "Male",
    defaultClass: "Grappler",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Axe", "Brawling", "Heavy Armour"],
      weaknesses: ["Bow", "Reason", "Riding"],
    },
  },
  Lysithea: {
    class: "Female",
    defaultClass: "Warlock",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: [/* budding */ "Sword", "Reason", "Faith"],
      weaknesses: ["Lance", "Axe", "Heavy Armour"],
    },
  },
  Ignatz: {
    class: "Male",
    defaultClass: "Assassin",
    stat: { STR: true, MAG: true },
    weapons: {
      strengths: ["Sword", "Bow", /* budding */ "Reason"],
      weaknesses: ["Brawling", "Heavy Armour", "Flying"],
    },
  },
  Marianne: {
    class: "Female",
    defaultClass: "Bishop",
    stat: { STR: false, MAG: true },
    weapons: {
      strengths: ["Sword", /* budding */ "Lance", "Faith", "Riding", "Flying"],
      weaknesses: ["Brawling", "Heavy Armour"],
    },
  },
  Leonie: {
    class: "Female",
    defaultClass: "Paladin",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Lance", "Bow", "Riding"],
      weaknesses: [],
    },
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
  Alois: {
    class: "Male",
    defaultClass: "Warrior",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Axe", "Brawling", "Heavy Armour"],
      weaknesses: ["Reason", "Flying"],
    },
  },
  Gilbert: {
    class: "Male",
    defaultClass: "Fortress Knight",
    stat: { STR: true, MAG: false },
    weapons: {
      strengths: ["Lance", "Axe", "Heavy Armour", "Riding"],
      weaknesses: [],
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

export const fe16 = {
  short: "fe16",
  free: [["Claude", "Dimitri", "Edelgard"]],
  avatar: "Byleth",
  classes,
  characters,
  flags: {
    classes: true,
    troll: true,
  },
  defaultPicks: 12,
  imgExtension: "jpg",
};
