export const fe1 = {
  short: "fe1",
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
      promo: null,
    },
    Mercenary: {
      weapons: ["Sword"],
      promo: "Hero",
    },
    Hero: {
      weapons: ["Sword"],
      promo: null,
    },
    Thief: {
      weapons: ["Sword"],
      promo: null,
    },
    Commando: {
      weapons: ["Sword"],
      promo: null,
    },
    Fighter: {
      weapons: ["Axe"],
      promo: null,
    },
    Pirate: {
      weapons: ["Axe"],
      promo: null,
    },
    Archer: {
      weapons: ["Bow"],
      promo: "Sniper",
    },
    Sniper: {
      weapons: ["Bow"],
      promo: null,
    },
    Hunter: {
      weapons: ["Bow"],
      promo: "Sniper",
    },
    "Bow Knight": {
      weapons: ["Bow"],
      promo: null,
    },
    Cavalier: {
      weapons: ["Sword", "Lance"],
      promo: "Paladin",
    },
    Paladin: {
      weapons: ["Sword", "Lance"],
      promo: null,
    },
    Knight: {
      weapons: ["Sword", "Lance"],
      promo: null,
    },
    General: {
      weapons: ["Sword"],
      promo: null,
    },
    "Pegasus Knight": {
      weapons: ["Sword", "Lance"],
      promo: "Dracoknight",
    },
    Dracoknight: {
      weapons: ["Sword", "Lance"],
      promo: null,
    },
    Shooter: {
      weapons: ["Firearm"],
      promo: null,
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
      promo: null,
    },
    Manakete: {
      weapons: ["Dragonstone"],
      promo: null,
    },
  },
  free: ["Marth"],
  flags: {},
  defaultPicks: 14,
};

export const fe2 = {
  short: "fe2",
  disabled: "Use the Shadows of Valentia pickers instead",
  free: ["Alm", "Celica"],
  characters: [],
  flags: {},
};

export const fe3 = {
  short: "fe3",
  disabled: "I'll get around to this eventually",
  characters: [
    "Marth",
    "Abel",
    "Arran",
    "Astria",
    "Bantu",
    "Cecil",
    "Xane",
    "Tiki",
    "Draug",
    "Ellerean",
    "Elice",
    "Est",
    "Feena",
    "Jeorge",
    "Gordon",
    "Julian",
    "Cain",
    "Castor",
    "Catria",
    "Linde",
    "Luke",
    "Matthis",
    "Malliesia",
    "Maria",
    "Merric",
    "Midia",
    "Minerva",
    "Nabarl",
    "Nina",
    "Ogma",
    "Palla",
    "Lena",
    "Rickard",
    "Rody",
    "Roshea",
    "Ryan",
    "Samson",
    "Samto",
    "Sheeda",
    "Sheema",
    "Sirius",
    "Warren",
    "Wendel",
    "Yubello",
    "Yumina",
  ],
  free: ["Marth"],
  flags: {},
};

export const fe4 = {
  short: "fe4",
  disabled: "You can use everyone anyway",
  characters: [],
  free: ["Sigurd", "Seliph"],
  flags: {
    pairings: true,
    children: true,
  },
};

export const fe5 = {
  short: "fe5",
  characters: {
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
  },
  classes: {
    Lord: { weapons: ["Sword"], promo: "Prince" },
    Prince: { weapons: ["Sword"], promo: null },
    Swordfighter: { weapons: ["Sword"], promo: "Swordmaster" },
    "Swordfighter (Machua)": { weapons: ["Sword"], promo: "Mercenary" },
    Swordmaster: { weapons: ["Sword"], promo: null },
    Thief: { weapons: ["Sword"], promo: "Thief Fighter" },
    "Thief (Lara)": { weapons: ["Sword"], promo: "Dancer" },
    "Thief Fighter": { weapons: ["Sword"], promo: null },
    Dancer: { weapons: ["Sword"], promo: null },
    Soldier: { weapons: ["Lance"], promo: null },
    "Axe Fighter": { weapons: ["Axe"], promo: "Mercenary" },
    Mercenary: { weapons: ["Sword", "Axe"], promo: null },
    "Mountain Thief": { weapons: ["Axe"], promo: "Warrior" },
    Warrior: { weapons: ["Axe", "Bow"], promo: null },
    Pirate: { weapons: ["Axe"], promo: null },
    Berserker: { weapons: ["Axe"], promo: null },
    "Bow Fighter": { weapons: ["Bow"], promo: "Sniper" },
    Sniper: { weapons: ["Bow"], promo: null },
    "Social Knight": { weapons: ["Sword", "Lance"], promo: "Paladin (M)" },
    "Paladin (M)": { weapons: ["Sword", "Lance"], promo: null },
    Troubadour: { weapons: ["Sword", "Staff"], promo: "Paladin (F)" },
    "Paladin (F)": { weapons: ["Sword", "Staff"], promo: null },
    "Free Knight": { weapons: ["Sword"], promo: "Forrest Knight" },
    "Forrest Knight": { weapons: ["Sword"], promo: null },
    "Lance Knight": { weapons: ["Lance"], promo: "Duke Knight" },
    "Duke Knight": { weapons: ["Lance"], promo: null },
    "Axe Knight": { weapons: ["Axe"], promo: "Great Knight" },
    "Great Knight": { weapons: ["Axe"], promo: null },
    "Arch Knight": { weapons: ["Bow"], promo: "Bow Knight" },
    "Bow Knight": { weapons: ["Bow"], promo: null },
    "Axe Armour": { weapons: ["Axe"], promo: "General" },
    "Bow Armour": { weapons: ["Bow"], promo: null },
    General: { weapons: ["Sword", "Lance", "Axe", "Bow"], promo: null },
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
      promo: null,
    },
    "Pegasus Rider": {
      weapons: ["Lance"],
      promo: "Pegasus Knight",
    },
    "Pegasus Knight": { weapons: ["Lance"], promo: null },
    "Dragon Rider": {
      weapons: ["Lance"],
      promo: "Dragon Knight",
    },
    "Dragon Knight": { weapons: ["Lance"], promo: null },
    "Long Arch": { weapons: ["Bow"], promo: null },
    "Iron Arch": { weapons: ["Bow"], promo: null },
    "Poison Arch": { weapons: ["Bow"], promo: null },
    Mage: { weapons: ["Fire", "Thunder", "Wind"], promo: "Mage Knight" },
    "Mage (Asvel)": { weapons: ["Fire", "Thunder", "Wind"], promo: "Sage" },
    "Mage Knight": {
      weapons: ["Sword", "Fire", "Thunder", "Wind"],
      promo: null,
    },
    Bard: { weapons: ["Fire", "Thunder", "Wind", "Light"], promo: "Sage" },
    Sister: {
      weapons: ["Staff", "Fire", "Thunder", "Wind", "Light"],
      promo: "Sage",
    },
    Sage: {
      weapons: ["Staff", "Fire", "Thunder", "Wind", "Light"],
      promo: null,
    },
    Priest: { weapons: ["Staff"], promo: "High Priest" },
    "High Priest": { weapons: ["Staff", "Light"], promo: null },
    "Loputo Mage": {
      weapons: ["Staff", "Fire", "Thunder", "Wind", "Dark"],
      promo: "Dark Mage",
    },
    "Dark Mage": {
      weapons: ["Staff", "Fire", "Thunder", "Wind", "Dark"],
      promo: null,
    },
  },
  free: ["Leaf"],
  flags: {},
  // slightly higher because of fatigue + weird character joining/leaving shenanigans
  defaultPicks: 20,
};
