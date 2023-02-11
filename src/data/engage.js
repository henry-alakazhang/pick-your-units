// like Three Houses, everyone can be every class,
// so we treat all characters as having the same base class
// and we let them promote into literally any of the available classes

const promotedClasses = {
  Swordmaster: {
    weapons: ["Sword"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  "Hero (Any)": {
    weapons: ["Sword", "Axe", "Lance"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  Halberdier: {
    weapons: ["Lance"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  "Royal Knight": {
    weapons: ["Lance", " Staff"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  Berserker: {
    weapons: ["Axe"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  Warrior: {
    weapons: ["Axe", "Bow"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  Sniper: {
    weapons: ["Bow"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  "Bow Knight (Any)": {
    weapons: ["Bow", "Sword", "Lance", "Axe"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  "General (Any)": {
    weapons: ["Sword", "Lance", "Axe"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  "Great Knight (Any)": {
    weapons: ["Sword", "Lance", "Axe"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  "Paladin (Any)": {
    weapons: ["Sword", "Lance", "Axe"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  "Wolf Knight (Any)": {
    weapons: ["Knife", "Sword", "Lance", "Axe"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  Sage: {
    weapons: ["Tome", "Staff"],
    promo: null,
    stat: { STR: false, MAG: true },
  },
  "Mage Knight (Any)": {
    weapons: ["Tome", "Sword", "Lance", "Axe"],
    promo: null,
    stat: { STR: true, MAG: true },
  },
  "Martial Master": {
    weapons: ["Staff", "Arts"],
    promo: null,
    stat: { STR: true, MAG: true },
  },
  "High Priest": {
    weapons: ["Tome", "Staff", "Arts"],
    promo: null,
    stat: { STR: false, MAG: true },
  },
  "Griffin Knight (Any)": {
    weapons: ["Staff", "Sword", "Lance", "Axe"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
  "Wyvern Knight (Any)": {
    weapons: ["Sword", "Lance", "Axe"],
    promo: null,
    stat: { STR: true, MAG: false },
  },
};

const promotedClassNames = Object.keys(promotedClasses);

const uniqueClasses = {
  "Dragon Child": {
    weapons: ["Sword"],
    promo: ["Divine Dragon", ...promotedClassNames],
  },
  "Divine Dragon": {
    weapons: ["Sword", "Arts"],
    stat: { STR: true, MAG: false },
    promo: null,
  },
  "Fell Child (Base)": {
    weapons: ["Knife", "Tome"],
    promo: ["Fell Child", ...promotedClassNames],
  },
  // the promoted version, since it's fine to leave her in this class.
  "Fell Child": {
    weapons: ["Knife", "Tome"],
    stat: { STR: false, MAG: true },
    promo: null,
  },
  "Noble (Alfred)": {
    weapons: ["Lance"],
    promo: ["Avenir", ...promotedClassNames],
  },
  Avenir: {
    weapons: ["Sword", "Lance"],
    stat: { STR: true, MAG: false },
    promo: null,
  },
  "Noble (Céline)": {
    weapons: ["Sword", "Tome"],
    promo: ["Vidame", ...promotedClassNames],
  },
  Vidame: {
    weapons: ["Sword", "Tome", "Staff"],
    stat: { STR: true, MAG: true },
    promo: null,
  },
  "Lord (Diamant)": {
    weapons: ["Sword"],
    promo: ["Successeur", ...promotedClassNames],
  },
  Successeur: {
    weapons: ["Sword", "Axe"],
    stat: { STR: true, MAG: false },
    promo: null,
  },
  "Lord (Alcryst)": {
    weapons: ["Bow"],
    promo: ["Tireur d'élite", ...promotedClassNames],
  },
  "Tireur d'élite": {
    weapons: ["Bow"],
    stat: { STR: true, MAG: false },
    promo: null,
  },
  "Wing Tamer (Ivy)": {
    weapons: ["Tome", "Staff"],
    promo: ["Lindwurm", ...promotedClassNames],
  },
  Lindwurm: {
    weapons: ["Tome", "Staff"],
    stat: { STR: false, MAG: true },
    promo: null,
  },
  "Wing Tamer (Hortensia)": {
    weapons: ["Tome", "Staff"],
    promo: ["Sleipnir Rider", ...promotedClassNames],
  },
  "Sleipnir Rider": {
    weapons: ["Tome", "Staff"],
    stat: { STR: false, MAG: true },
    promo: null,
  },
  "Sentinel (Timerra)": {
    weapons: ["Lance"],
    promo: ["Picket", ...promotedClassNames],
  },
  Picket: {
    weapons: ["Lance"],
    stat: { STR: true, MAG: false },
    promo: null,
  },
  "Sentinel (Fogado)": {
    weapons: ["Bow"],
    promo: ["Cupido", ...promotedClassNames],
  },
  Cupido: {
    weapons: ["Sword", "Bow"],
    stat: { STR: true, MAG: false },
    promo: null,
  },
  "Thief (Base)": {
    weapons: ["Knife"],
    promo: ["Thief", ...promotedClassNames],
  },
  Thief: {
    weapons: ["Knife"],
    stat: { STR: true, MAG: false },
    promo: null,
  },
  "Dancer (Base)": {
    weapons: ["Arts"],
    promo: ["Dancer", ...promotedClassNames],
  },
  Dancer: {
    weapons: ["Arts"],
    stat: { STR: true, MAG: false },
    promo: null,
  },
  Base: {
    weapons: [],
    promo: [...promotedClassNames],
  },
};

export const fe17 = {
  short: "fe17",
  free: ["Alear"],
  flags: {
    classes: true,
    emblems: true,
    troll: true,
  },
  classes: { ...promotedClasses, ...uniqueClasses },
  characters: {
    Alear: {
      class: "Dragon Child",
      defaultClass: "Divine Dragon",
      stat: { STR: true },
    },
    Vander: {
      class: "Base",
      defaultClass: "Paladin (Any)",
      stat: { STR: true },
    },
    Clanne: {
      class: "Base",
      defaultClass: "Mage Knight",
      stat: { STR: true },
    },
    Framme: {
      class: "Base",
      defaultClass: "Martial Master",
      stat: { STR: true, MAG: true },
    },
    Alfred: {
      class: "Noble (Alfred)",
      defaultClass: "Avenir",
      stat: { STR: true },
    },
    Etie: {
      class: "Base",
      defaultClass: "Sniper",
      stat: { STR: true },
    },
    Boucheron: {
      class: "Base",
      defaultClass: "Berserker",
      stat: { STR: true },
    },
    Céline: {
      class: "Noble (Céline)",
      defaultClass: "Vidame",
      stat: { STR: true, MAG: true },
    },
    Chloé: {
      class: "Base",
      defaultClass: "Griffin Knight (Any)",
      stat: { STR: true, MAG: true },
    },
    Louis: {
      class: "Base",
      defaultClass: "General",
      stat: { STR: true },
    },
    Yunaka: {
      class: "Thief (Base)",
      defaultClass: "Thief",
      stat: { STR: true, MAG: true },
    },
    Alcryst: {
      class: "Lord (Alcryst)",
      defaultClass: "Tireur d'élite",
      stat: { STR: true },
    },
    Citrinne: {
      class: "Base",
      defaultClass: "Sage",
      stat: { MAG: true },
    },
    Lapis: {
      class: "Base",
      defaultClass: "Swordmaster",
      stat: { STR: true, MAG: true },
    },
    Diamant: {
      class: "Lord (Diamant)",
      defaultClass: "Successeur",
      stat: { STR: true },
    },
    Amber: {
      class: "Base",
      defaultClass: "Paladin (Any)",
      stat: { STR: true },
    },
    Jade: {
      class: "Base",
      defaultClass: "General (Any)",
      stat: { STR: true, MAG: true },
    },
    Ivy: {
      class: "Wing Tamer (Ivy)",
      defaultClass: "Lindwurm",
      stat: { STR: true, MAG: true },
    },
    Kagetsu: {
      class: "Base",
      defaultClass: "Swordmaster",
      stat: { STR: true },
    },
    Zelkov: {
      class: "Thief (Base)",
      defaultClass: "Thief",
      stat: { STR: true },
    },
    Fogado: {
      class: "Sentinel (Fogado)",
      defaultClass: "Cupid",
      stat: { STR: true, MAG: true },
    },
    Pandreo: {
      class: "Base",
      defaultClass: "High Priest",
      stat: { MAG: true },
    },
    Bunet: {
      class: "Base",
      defaultClass: "Great Knight (Any)",
      stat: { STR: true },
    },
    Timerra: {
      class: "Sentinel (Timerra)",
      defaultClass: "Picket",
      stat: { STR: true, MAG: true },
    },
    Panette: {
      class: "Base",
      defaultClass: "Berserker",
      stat: { STR: true },
    },
    Merrin: {
      class: "Base",
      defaultClass: "Wolf Knigh (Any)",
      stat: { STR: true, MAG: true },
    },
    Hortensia: {
      class: "Wing Tamer (Hortensia)",
      defaultClass: "Sleipnir Rider",
      stat: { STR: true, MAG: true },
    },
    Seadall: {
      class: "Dancer (Base)",
      defaultClass: "Dancer",
      stat: { STR: true },
    },
    Rosado: {
      class: "Base",
      defaultClass: "Wyvern Knight (Any)",
      stat: { STR: true },
    },
    Goldmary: {
      class: "Base",
      defaultClass: "Hero (Any)",
      stat: { STR: true },
    },
    Lindon: {
      class: "Base",
      defaultClass: "Sage",
      stat: { STR: true, MAG: true },
    },
    Saphir: {
      class: "Base",
      defaultClass: "Warrior",
      stat: { STR: true },
    },
    Mauvier: {
      class: "Base",
      defaultClass: "Royal Knight",
      stat: { STR: true },
    },
    Veyle: {
      class: "Fell Child (Base)",
      defaultClass: "Fell Child",
      stat: { MAG: true },
    },
    Jean: {
      class: "Base",
      defaultClass: "Martial Monk",
      stat: { MAG: true },
    },
    Anna: {
      class: "Base",
      defaultClass: "Axe Fighter",
      stat: { STR: true, MAG: true },
    },
  },
  trollCriteria: ["MAG classes for a STR-based character and vice versa."],
  defaultPicks: 14,
};