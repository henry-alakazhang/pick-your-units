import { typedObjectKeys } from "../util";
import { Game } from "./data.types";

// TODO: Implement saying "fire emblem engage" and engaging all over those guys
// TODO: Pick weapons for classes which support it, without biasing towards them
//       (if i just made them separate classes, there would be 2/3x chance of hitting one,
//        compared to a class with one set of weapons)
//       As-is, mixed-weapon classes are also heavily overrepresented in "balanced weapon type" picks

interface EngageGame {
  ClassName: keyof typeof promotedClasses | keyof typeof uniqueClasses;
  CharacterName: keyof typeof characters;
  ChildCharacterName: never;
  Pairings: false;
}

// like Three Houses, everyone can be every class,
// so we treat all characters as having the same base class
// and we let them promote into literally any of the available classes

const promotedClasses = {
  Swordmaster: {
    weapons: ["Sword"],
    stat: { STR: true, MAG: false },
  },
  Hero: {
    weaponPools: [
      ["Sword", "Axe"],
      ["Sword", "Lance"],
    ],
    subtitleWeapon: "last",
    stat: { STR: true, MAG: false },
  },
  Halberdier: {
    weapons: ["Lance"],
    stat: { STR: true, MAG: false },
  },
  "Royal Knight": {
    weapons: ["Lance", " Staff"],
    stat: { STR: true, MAG: true },
  },
  Berserker: {
    weapons: ["Axe"],
    stat: { STR: true, MAG: false },
  },
  Warrior: {
    weapons: ["Axe", "Bow"],
    stat: { STR: true, MAG: false },
  },
  Sniper: {
    weapons: ["Bow"],
    stat: { STR: true, MAG: false },
  },
  "Bow Knight": {
    weaponPools: [
      ["Bow", "Sword"],
      ["Bow", "Lance"],
      ["Bow", "Axe"],
    ],
    subtitleWeapon: "last",
    stat: { STR: true, MAG: false },
  },
  General: {
    weaponPools: [["Sword"], ["Lance"], ["Axe"]],
    subtitleWeapon: "all",
    stat: { STR: true, MAG: false },
  },
  "Great Knight": {
    weaponPools: [
      ["Sword", "Lance"],
      ["Sword", "Axe"],
      ["Lance", "Axe"],
    ],
    subtitleWeapon: "all",
    stat: { STR: true, MAG: false },
  },
  Paladin: {
    weaponPools: [["Sword"], ["Lance"], ["Axe"]],
    subtitleWeapon: "all",
    stat: { STR: true, MAG: false },
  },
  "Wolf Knight": {
    weaponPools: [
      ["Knife", "Sword"],
      ["Knife", "Lance"],
      ["Knife", "Axe"],
    ],
    subtitleWeapon: "last",
    stat: { STR: true, MAG: false },
  },
  Sage: {
    weapons: ["Tome", "Staff"],
    stat: { STR: false, MAG: true },
  },
  "Mage Knight": {
    weaponPools: [
      ["Tome", "Sword"],
      ["Tome", "Lance"],
      ["Tome", "Axe"],
    ],
    subtitleWeapon: "last",
    stat: { STR: true, MAG: true },
  },
  "Martial Master": {
    weapons: ["Staff", "Arts"],
    stat: { STR: true, MAG: true },
  },
  "High Priest": {
    weapons: ["Tome", "Staff", "Arts"],
    stat: { STR: false, MAG: true },
  },
  "Griffin Knight": {
    weaponPools: [
      ["Staff", "Sword"],
      ["Staff", "Lance"],
      ["Staff", "Axe"],
    ],
    subtitleWeapon: "last",
    stat: { STR: true, MAG: false },
  },
  "Wyvern Knight": {
    weaponPools: [
      ["Sword", "Lance"],
      ["Sword", "Axe"],
      ["Lance", "Axe"],
    ],
    subtitleWeapon: "all",
    stat: { STR: true, MAG: false },
  },
} as const;

const promotedClassNames = typedObjectKeys(promotedClasses);

const uniqueClasses = {
  "Dragon Child": {
    weapons: ["Sword"],
    promo: ["Divine Dragon", ...promotedClassNames],
  },
  "Divine Dragon": {
    weapons: ["Sword", "Arts"],
    stat: { STR: true, MAG: false },
  },
  "Fell Child (Base)": {
    weapons: ["Knife", "Tome"],
    promo: ["Fell Child", ...promotedClassNames],
  },
  // the promoted version, since it's fine to leave her in this class.
  "Fell Child": {
    weapons: ["Knife", "Tome"],
    stat: { STR: false, MAG: true },
  },
  "Noble (Alfred)": {
    weapons: ["Lance"],
    promo: ["Avenir", ...promotedClassNames],
  },
  Avenir: {
    weapons: ["Sword", "Lance"],
    stat: { STR: true, MAG: false },
  },
  "Noble (Céline)": {
    weapons: ["Sword", "Tome"],
    promo: ["Vidame", ...promotedClassNames],
  },
  Vidame: {
    weapons: ["Sword", "Tome", "Staff"],
    stat: { STR: true, MAG: true },
  },
  "Lord (Diamant)": {
    weapons: ["Sword"],
    promo: ["Successeur", ...promotedClassNames],
  },
  Successeur: {
    weapons: ["Sword", "Axe"],
    stat: { STR: true, MAG: false },
  },
  "Lord (Alcryst)": {
    weapons: ["Bow"],
    promo: ["Tireur d'élite", ...promotedClassNames],
  },
  "Tireur d'élite": {
    weapons: ["Bow"],
    stat: { STR: true, MAG: false },
  },
  "Wing Tamer (Ivy)": {
    weapons: ["Tome", "Staff"],
    promo: ["Lindwurm", ...promotedClassNames],
  },
  Lindwurm: {
    weapons: ["Tome", "Staff"],
    stat: { STR: false, MAG: true },
  },
  "Wing Tamer (Hortensia)": {
    weapons: ["Tome", "Staff"],
    promo: ["Sleipnir Rider", ...promotedClassNames],
  },
  "Sleipnir Rider": {
    weapons: ["Tome", "Staff"],
    stat: { STR: false, MAG: true },
  },
  "Sentinel (Timerra)": {
    weapons: ["Lance"],
    promo: ["Picket", ...promotedClassNames],
  },
  Picket: {
    weapons: ["Lance"],
    stat: { STR: true, MAG: false },
  },
  "Sentinel (Fogado)": {
    weapons: ["Bow"],
    promo: ["Cupido", ...promotedClassNames],
  },
  Cupido: {
    weapons: ["Sword", "Bow"],
    stat: { STR: true, MAG: false },
  },
  "Thief (Base)": {
    weapons: ["Knife"],
    promo: ["Thief", ...promotedClassNames],
  },
  Thief: {
    weapons: ["Knife"],
    stat: { STR: true, MAG: false },
  },
  "Dancer (Base)": {
    weapons: ["Arts"],
    promo: ["Dancer", ...promotedClassNames],
  },
  Dancer: {
    weapons: ["Arts"],
    stat: { STR: true, MAG: false },
  },
  Base: {
    weapons: [],
    promo: [...promotedClassNames],
  },
} as const;

const characters = {
  Alear: {
    class: "Dragon Child",
    defaultClass: "Divine Dragon",
    stat: { STR: true },
  },
  Vander: {
    class: "Base",
    defaultClass: "Paladin",
    defaultClassDefaultWeapon: ["Axe"],
    stat: { STR: true },
  },
  Clanne: {
    class: "Base",
    defaultClass: "Mage Knight",
    defaultClassDefaultWeapon: ["Tome", "Sword"],
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
    defaultClass: "Griffin Knight",
    defaultClassDefaultWeapon: ["Staff", "Lance"],
    stat: { STR: true, MAG: true },
  },
  Louis: {
    class: "Base",
    defaultClass: "General",
    defaultClassDefaultWeapon: ["Lance"],
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
    defaultClass: "Paladin",
    defaultClassDefaultWeapon: ["Lance"],
    stat: { STR: true },
  },
  Jade: {
    class: "Base",
    defaultClass: "General",
    defaultClassDefaultWeapon: ["Axe"],
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
    defaultClass: "Cupido",
    stat: { STR: true, MAG: true },
  },
  Pandreo: {
    class: "Base",
    defaultClass: "High Priest",
    stat: { MAG: true },
  },
  Bunet: {
    class: "Base",
    defaultClass: "Great Knight",
    defaultClassDefaultWeapon: ["Sword", "Axe"],
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
    defaultClass: "Wolf Knight",
    defaultClassDefaultWeapon: ["Knife", "Sword"],
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
    defaultClass: "Wyvern Knight",
    defaultClassDefaultWeapon: ["Lance", "Axe"],
    // may seem weird, but rosado's personal bases at 40 are 16.5 / 12
    // this is a similar ratio to Celine, who can definitely be a mage.
    stat: { STR: true, MAG: true },
  },
  Goldmary: {
    class: "Base",
    defaultClass: "Hero",
    defaultClassDefaultWeapon: ["Sword", "Lance"],
    stat: { STR: true },
  },
  Lindon: {
    class: "Base",
    defaultClass: "Sage",
    // old mate starts as a sage, but has 8 personal base STR and 10 personal base MAG
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
    stat: { STR: true, MAG: true },
  },
  Veyle: {
    class: "Fell Child (Base)",
    defaultClass: "Fell Child",
    // this (generally) keeps Veyle a mage so she can use at least her personal tome
    // TODO: make this support more specifics so she can be a knife class too without trolling
    stat: { MAG: true },
  },
  Jean: {
    class: "Base",
    defaultClass: "Martial Master",
    stat: { STR: true, MAG: true },
  },
  Anna: {
    class: "Base",
    defaultClass: "Mage Knight",
    defaultClassDefaultWeapon: ["Tome", "Axe"],
    stat: { MAG: true },
  },
} as const;

const emblems = {
  Marth: {},
  Sigurd: {},
  Celica: { stat: { STR: false, MAG: true } },
  Micaiah: { stat: { STR: false, MAG: true } },
  Roy: {},
  Leif: { stat: { STR: true, MAG: false } },
  Lucina: {},
  Lyn: {},
  Ike: { stat: { STR: true, MAG: false } },
  Byleth: {},
  Corrin: {},
  Eirika: {},
  Edelgard: { dlc: true, stat: { STR: true, MAG: false } },
  Tiki: { dlc: true },
  Hector: { dlc: true, stat: { STR: true, MAG: false } },
  Soren: { dlc: true, stat: { STR: false, MAG: true } },
  Camilla: { dlc: true },
  Veronica: { dlc: true, stat: { STR: false, MAG: true } },
  Chrom: { dlc: true },
} as const;

export const fe17: Game<EngageGame> = {
  short: "fe17",
  free: ["Alear"],
  flags: {
    classes: true,
    emblems: true,
    troll: true,
    dlc: true,
  },
  classes: { ...promotedClasses, ...uniqueClasses },
  characters,
  emblems,
  trollCriteria: [
    "MAG classes for a STR-based character and vice versa.",
    "Emblems that don't match the stats of the character/class",
  ],
  defaultPicks: 14,
};
