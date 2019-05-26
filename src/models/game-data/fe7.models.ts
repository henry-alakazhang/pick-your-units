export const fe7 = {
  short: "fe7",
  characters: {
    Bartre: {
      class: "Fighter",
    },
    Canas: {
      class: "Shaman",
    },
    Dart: {
      class: "Pirate",
    },
    Dorcas: {
      class: "Fighter",
    },
    Eliwood: {
      class: "Lord (Eliwood)",
    },
    Erk: {
      class: "Mage",
    },
    Farina: {
      class: "Pegasus Knight",
    },
    Fiora: {
      class: "Pegasus Knight",
    },
    Florina: {
      class: "Pegasus Knight",
    },
    Geitz: {
      class: "Warrior",
      exclude: ["Wallace"],
    },
    Guy: {
      class: "Myrmidon",
    },
    Harken: {
      class: "Hero",
      exclude: ["Karel"],
    },
    Hawkeye: {
      class: "Berserker",
    },
    Heath: {
      class: "Wyvern Rider",
    },
    Hector: {
      class: "Lord (Hector)",
    },
    Isadora: {
      class: "Paladin",
    },
    Jaffar: {
      class: "Assassin",
    },
    Karel: {
      class: "Swordmaster",
      exclude: ["Harken"],
    },
    Karla: {
      class: "Swordmaster",
      include: ["Bartre"],
    },
    Kent: {
      class: "Cavalier",
    },
    Legault: {
      class: "Thief",
      exclude: ["Matthew"],
    },
    Louise: {
      class: "Sniper",
    },
    Lowen: {
      class: "Cavalier",
    },
    Lucius: {
      class: "Monk",
    },
    Lyn: {
      class: "Lord (Lyn)",
    },
    Marcus: {
      class: "Paladin",
    },
    Matthew: {
      class: "Thief",
      exclude: ["Legault"], // cos we can't have two assassins
    },
    Ninian: {
      class: "Dancer",
    },
    Nino: {
      class: "Mage",
    },
    Oswin: {
      class: "Knight",
    },
    Pent: {
      class: "Sage",
    },
    Priscilla: {
      class: "Troubadour",
    },
    Rath: {
      class: "Nomad",
    },
    Raven: {
      class: "Mercenary",
    },
    Rebecca: {
      class: "Archer",
    },
    Renault: {
      class: "Bishop",
    },
    Sain: {
      class: "Cavalier",
    },
    Serra: {
      class: "Cleric",
    },
    Vaida: {
      class: "Wyvern Lord",
    },
    Wallace: {
      class: "General",
      exclude: ["Geitz"],
    },
    Wil: {
      class: "Archer",
    },
  },
  classes: {
    "Lord (Lyn)": {
      weapons: ["Sword"],
      promo: "Blade Lord",
    },
    "Blade Lord": {
      weapons: ["Sword", "Bow"],
      promo: null,
    },
    "Lord (Eliwood)": {
      weapons: ["Sword"],
      promo: "Knight Lord",
    },
    "Knight Lord": {
      weapons: ["Sword", "Lance"],
      promo: null,
    },
    "Lord (Hector)": {
      weapons: ["Axe"],
      promo: "Great Lord",
    },
    "Great Lord": {
      weapons: ["Sword", "Axe"],
      promo: null,
    },
    Mercenary: {
      weapons: ["Sword"],
      promo: "Hero",
    },
    Hero: {
      weapons: ["Sword", "Axe"],
      promo: null,
    },
    Myrmidon: {
      weapons: ["Sword"],
      promo: "Swordmaster",
    },
    Swordmaster: {
      weapons: ["Sword"],
      promo: null,
    },
    Thief: {
      weapons: ["Sword"],
      promo: "Assassin",
    },
    Assassin: {
      weapons: ["Sword"],
      promo: null,
    },
    Knight: {
      weapons: ["Lance"],
      promo: "General",
    },
    General: {
      weapons: ["Lance", "Axe"],
      promo: null,
    },
    Soldier: {
      weapons: ["Lance"],
      promo: null,
    },
    Fighter: {
      weapons: ["Axe"],
      promo: "Warrior",
    },
    Warrior: {
      weapons: ["Axe", "Bow"],
      promo: null,
    },
    Bandit: {
      weapons: ["Axe"],
      promo: "Berserker",
    },
    Pirate: {
      weapons: ["Axe"],
      promo: "Berserker",
    },
    Corsair: {
      weapons: ["Axe"],
      promo: null,
    },
    Berserker: {
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
    Nomad: {
      weapons: ["Bow"],
      promo: "Nomad Trooper",
    },
    "Nomad Trooper": {
      weapons: ["Sword", "Bow"],
      promo: null,
    },
    Cavalier: {
      weapons: ["Sword", "Lance"],
      promo: "Paladin",
    },
    Paladin: {
      weapons: ["Sword", "Lance", "Axe"],
      promo: null,
    },
    "Pegasus Knight": {
      weapons: ["Lance"],
      promo: "Falcon Knight",
    },
    "Falcon Knight": {
      weapons: ["Sword", "Lance"],
      promo: null,
    },
    "Wyvern Rider": {
      weapons: ["Lance"],
      promo: "Wyvern Lord",
    },
    "Wyvern Lord": {
      weapons: ["Sword", "Lance"],
      promo: null,
    },
    Monk: {
      weapons: ["Light"],
      promo: "Bishop",
    },
    Cleric: {
      weapons: ["Staff"],
      promo: "Bishop",
    },
    Bishop: {
      weapons: ["Staff", "Light"],
      promo: null,
    },
    Troubadour: {
      weapons: ["Staff"],
      promo: "Valkyrie",
    },
    Valkyrie: {
      weapons: ["Staff", "Anima"],
      promo: null,
    },
    Mage: {
      weapons: ["Anima"],
      promo: "Sage",
    },
    Sage: {
      weapons: ["Staff", "Anima"],
      promo: null,
    },
    ArchSage: {
      weapons: ["Staff", "Anima", "Light", "Dark"],
      promo: null,
    },
    Shaman: {
      weapons: ["Dark"],
      promo: "Druid",
    },
    Druid: {
      weapons: ["Staff", "Dark"],
      promo: null,
    },
    "Dark Druid": {
      weapons: ["Staff", "Anima", "Light", "Dark"],
      promo: null,
    },
    Dancer: {
      weapons: [],
      promo: null,
    },
  },
  free: ["Eliwood"],
  flags: {},
};
