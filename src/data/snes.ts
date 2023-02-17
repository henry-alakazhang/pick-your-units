import { Game, UnsupportedGame } from "./data.types";

interface ShadowDragonGame {
  ClassName: keyof typeof fe1classes;
  CharacterName: keyof typeof fe1characters;
  ChildCharacterName: never;
  Pairings: false;
}

const fe1characters = {
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
} as const;

const fe1classes = {
  Lord: {
    weapons: ["Sword"],
  },
  Mercenary: {
    weapons: ["Sword"],
    promo: "Hero",
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
    promo: "Sniper",
  },
  Sniper: {
    weapons: ["Bow"],
  },
  Hunter: {
    weapons: ["Bow"],
    promo: "Sniper",
  },
  "Bow Knight": {
    weapons: ["Bow"],
  },
  Cavalier: {
    weapons: ["Sword", "Lance"],
    promo: "Paladin",
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
    promo: "Dracoknight",
  },
  Dracoknight: {
    weapons: ["Sword", "Lance"],
  },
  Shooter: {
    weapons: ["Firearm"],
  },
  Mage: {
    weapons: ["Magic"],
    promo: "Bishop",
  },
  Priest: {
    weapons: ["Staff"],
    promo: "Bishop",
  },
  Bishop: {
    weapons: ["Magic", "Staff"],
  },
  Manakete: {
    weapons: ["Dragonstone"],
  },
} as const;

export const fe1: Game<ShadowDragonGame> = {
  short: "fe1",
  defaultPicks: 14,
  characters: fe1characters,
  classes: fe1classes,
  free: ["Marth"],
  flags: {},
};

export const fe2: Game<UnsupportedGame> = {
  short: "fe2",
  defaultPicks: 0,
  disabled: "Use the Shadows of Valentia pickers instead",
  free: [],
  characters: {},
  classes: {},
  flags: {},
};

export const fe3: Game<UnsupportedGame> = {
  short: "fe3",
  defaultPicks: 0,
  disabled: "I'll get around to this eventually",
  characters: {
    // "Marth",
    // "Abel",
    // "Arran",
    // "Astria",
    // "Bantu",
    // "Cecil",
    // "Xane",
    // "Tiki",
    // "Draug",
    // "Ellerean",
    // "Elice",
    // "Est",
    // "Feena",
    // "Jeorge",
    // "Gordon",
    // "Julian",
    // "Cain",
    // "Castor",
    // "Catria",
    // "Linde",
    // "Luke",
    // "Matthis",
    // "Malliesia",
    // "Maria",
    // "Merric",
    // "Midia",
    // "Minerva",
    // "Nabarl",
    // "Nina",
    // "Ogma",
    // "Palla",
    // "Lena",
    // "Rickard",
    // "Rody",
    // "Roshea",
    // "Ryan",
    // "Samson",
    // "Samto",
    // "Sheeda",
    // "Sheema",
    // "Sirius",
    // "Warren",
    // "Wendel",
    // "Yubello",
    // "Yumina",
  },
  classes: {},
  free: [],
  flags: {},
};

export const fe4: Game<UnsupportedGame> = {
  short: "fe4",
  defaultPicks: 0,
  disabled: "You can use everyone anyway",
  characters: {},
  classes: {},
  free: [],
  flags: {
    // pairings: true,
    // children: true,
  },
};

interface ThraciaGame {
  ClassName: keyof typeof fe5classes;
  CharacterName: keyof typeof fe5characters;
  ChildCharacterName: never;
  Pairings: false;
}

const fe5characters = {
  Leaf: { class: "Lord" },
  Fin: { class: "Lance Knight" },
  Othin: { class: "Axe Fighter" },
  Halvan: { class: "Axe Fighter" },
  Evayle: { class: "Swordmaster" },
  Dagda: { class: "Warrior" },
  Tania: { class: "Bow Fighter" },
  Marty: { class: "Mountain Thief" },
  Ronan: { class: "Bow Fighter" },
  Safy: { class: "Priest" },
  Rifis: { class: "Thief" },
  Machua: { class: "Swordfighter (Machua)" },
  Brighton: { class: "Axe Knight" },
  Lara: { class: "Thief (Lara)" },
  Felgus: { class: "Free Knight" },
  Karin: { class: "Pegasus Rider" },
  Dalsin: { class: "Axe Armour" },
  Asvel: { class: "Mage (Asvel)" },
  Nanna: { class: "Troubadour" },
  Hicks: { class: "Axe Knight" },
  Shiva: { class: "Swordfighter" },
  Carrion: { class: "Social Knight" },
  Selphina: { class: "Arch Knight" },
  Kein: { class: "Lance Knight" },
  Alva: { class: "Lance Knight" },
  Robert: { class: "Arch Knight" },
  Fred: { class: "Paladin (M)" },
  Olwen: { class: "Mage Knight", exclude: ["Eyrios"] },
  Mareeta: { class: "Swordfighter" },
  Salem: { class: "Loputo Mage" },
  Pahn: { class: "Thief Fighter" },
  Trewd: { class: "Swordfighter" },
  Tina: { class: "Priest" },
  Glade: { class: "Duke Knight" },
  Dean: { class: "Dragon Knight" },
  Eda: { class: "Dragon Rider" },
  Homeros: { class: "Bard" },
  Linoan: { class: "Sister" },
  Ralph: { class: "Mercenary" },
  Eyrios: {
    class: "Mage Knight",
    exclude: ["Olwen", "Miranda", "Shanam", "Conomore"],
  },
  Sleuf: { class: "Priest", exclude: ["Miranda", "Shanam", "Conomore"] },
  Misha: {
    class: "Pegasus Knight",
    exclude: ["Miranda", "Shanam", "Conomore"],
  },
  Sara: { class: "Sister" },
  Shanam: {
    class: "Swordmaster",
    exclude: ["Sleuf", "Misha", "Amalda", "Eyrios"],
  },
  Miranda: { class: "Mage", exclude: ["Sleuf", "Misha", "Amalda", "Eyrios"] },
  Xavier: { class: "General" },
  Amalda: {
    class: "Paladin (F)",
    exclude: ["Miranda", "Shanam", "Conomore"],
  },
  Conomore: {
    class: "Paladin (M)",
    exclude: ["Sleuf", "Misha", "Amalda", "Eyrios"],
  },
  Delmud: { class: "Forrest Knight" },
  Cyas: { class: "High Priest", exclude: ["Sety"] },
  Sety: { class: "Sage", exclude: ["Cyas"] },
  Galzus: { class: "Mercenary" },
} as const;

const fe5classes = {
  Lord: { weapons: ["Sword"], promo: "Prince" },
  Prince: { weapons: ["Sword"] },
  Swordfighter: { weapons: ["Sword"], promo: "Swordmaster" },
  "Swordfighter (Machua)": { weapons: ["Sword"], promo: "Mercenary" },
  Swordmaster: { weapons: ["Sword"] },
  Thief: { weapons: ["Sword"], promo: "Thief Fighter" },
  "Thief (Lara)": { weapons: ["Sword"], promo: "Dancer" },
  "Thief Fighter": { weapons: ["Sword"] },
  Dancer: { weapons: ["Sword"] },
  Soldier: { weapons: ["Lance"] },
  "Axe Fighter": { weapons: ["Axe"], promo: "Mercenary" },
  Mercenary: { weapons: ["Sword", "Axe"] },
  "Mountain Thief": { weapons: ["Axe"], promo: "Warrior" },
  Warrior: { weapons: ["Axe", "Bow"] },
  Pirate: { weapons: ["Axe"] },
  Berserker: { weapons: ["Axe"] },
  "Bow Fighter": { weapons: ["Bow"], promo: "Sniper" },
  Sniper: { weapons: ["Bow"] },
  "Social Knight": { weapons: ["Sword", "Lance"], promo: "Paladin (M)" },
  "Paladin (M)": { weapons: ["Sword", "Lance"] },
  Troubadour: { weapons: ["Sword", "Staff"], promo: "Paladin (F)" },
  "Paladin (F)": { weapons: ["Sword", "Staff"] },
  "Free Knight": { weapons: ["Sword"], promo: "Forrest Knight" },
  "Forrest Knight": { weapons: ["Sword"] },
  "Lance Knight": { weapons: ["Lance"], promo: "Duke Knight" },
  "Duke Knight": { weapons: ["Lance"] },
  "Axe Knight": { weapons: ["Axe"], promo: "Great Knight" },
  "Great Knight": { weapons: ["Axe"] },
  "Arch Knight": { weapons: ["Bow"], promo: "Bow Knight" },
  "Bow Knight": { weapons: ["Bow"] },
  "Axe Armour": { weapons: ["Axe"], promo: "General" },
  "Bow Armour": { weapons: ["Bow"] },
  General: { weapons: ["Sword", "Lance", "Axe", "Bow"] },
  Baron: {
    weapons: [
      "Sword",
      "Lance",
      "Axe",
      "Bow",
      "Staff",
      "Fire",
      "Thunder",
      "Wind",
    ],
  },
  "Pegasus Rider": {
    weapons: ["Lance"],
    promo: "Pegasus Knight",
  },
  "Pegasus Knight": { weapons: ["Lance"] },
  "Dragon Rider": {
    weapons: ["Lance"],
    promo: "Dragon Knight",
  },
  "Dragon Knight": { weapons: ["Lance"] },
  "Long Arch": { weapons: ["Bow"] },
  "Iron Arch": { weapons: ["Bow"] },
  "Poison Arch": { weapons: ["Bow"] },
  Mage: { weapons: ["Fire", "Thunder", "Wind"], promo: "Mage Knight" },
  "Mage (Asvel)": { weapons: ["Fire", "Thunder", "Wind"], promo: "Sage" },
  "Mage Knight": {
    weapons: ["Sword", "Fire", "Thunder", "Wind"],
  },
  Bard: { weapons: ["Fire", "Thunder", "Wind", "Light"], promo: "Sage" },
  Sister: {
    weapons: ["Staff", "Fire", "Thunder", "Wind", "Light"],
    promo: "Sage",
  },
  Sage: {
    weapons: ["Staff", "Fire", "Thunder", "Wind", "Light"],
  },
  Priest: { weapons: ["Staff"], promo: "High Priest" },
  "High Priest": { weapons: ["Staff", "Light"] },
  "Loputo Mage": {
    weapons: ["Staff", "Fire", "Thunder", "Wind", "Dark"],
    promo: "Dark Mage",
  },
  "Dark Mage": {
    weapons: ["Staff", "Fire", "Thunder", "Wind", "Dark"],
  },
} as const;

export const fe5: Game<ThraciaGame> = {
  short: "fe5",
  characters: fe5characters,
  classes: fe5classes,
  free: ["Leaf"],
  flags: {},
  // slightly higher because of fatigue + weird character joining/leaving shenanigans
  defaultPicks: 20,
};
