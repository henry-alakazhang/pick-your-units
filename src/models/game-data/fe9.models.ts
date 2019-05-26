export const fe9 = {
  short: "fe9",
  characters: {
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
    },
  },
  classes: {
    Ranger: {
      weapons: ["Sword"],
      promo: "Lord",
    },
    Lord: {
      weapons: ["Sword"],
      promo: null,
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
    Soldier: {
      weapons: ["Lance"],
      promo: "Halberdier",
    },
    Halberdier: {
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
    Archer: {
      weapons: ["Bow"],
      promo: "Sniper",
    },
    Sniper: {
      weapons: ["Bow"],
      promo: null,
    },
    Knight: {
      weapons: ["Lance"],
      promo: "General",
    },
    General: {
      weapons: ["Sword", "Lance"],
      promo: null,
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
      promo: null,
    },
    "Paladin (Sword/Axe)": {
      weapons: ["Sword", "Axe"],
      promo: null,
    },
    "Paladin (Sword/Bow)": {
      weapons: ["Sword", "Bow"],
      promo: null,
    },
    "Paladin (Lance/Axe)": {
      weapons: ["Lance", "Axe"],
      promo: null,
    },
    "Paladin (Lance/Bow)": {
      weapons: ["Lance", "Bow"],
      promo: null,
    },
    "Paladin (Axe/Bow)": {
      weapons: ["Axe", "Bow"],
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
    "Princess Crimea": {
      weapons: ["Sword", "Staff"],
      promo: null,
    },
    "Wyvern Rider": {
      weapons: ["Lance"],
      promo: "Wyvern Lord",
    },
    "Wyvern Lord": {
      weapons: ["Lance", "Axe"],
      promo: null,
    },
    Mage: {
      weapons: ["Fire", "Thunder", "Wind"],
      promo: "Sage",
    },
    Sage: {
      weapons: ["Fire", "Thunder", "Wind", "Staff", "Knife"],
      promo: null,
    },
    Priest: {
      weapons: ["Staff"],
      promo: "Bishop",
    },
    Bishop: {
      weapons: ["Staff"],
      promo: null,
    },
    Cleric: {
      weapons: ["Staff"],
      promo: "Valkyrie",
    },
    Valkyrie: {
      weapons: ["Sword", "Staff"],
      promo: null,
    },
    Thief: {
      weapons: ["Knife"],
      promo: null,
    },
    "Thief (Volke)": {
      weapons: ["Knife"],
      promo: "Assassin",
    },
    Assassin: {
      weapons: ["Knife"],
      promo: null,
    },
    Bandit: {
      weapons: ["Axe"],
      promo: "Berserker",
    },
    Berserker: {
      weapons: ["Axe"],
      promo: null,
    },
    Lion: {
      weapons: [],
      promo: null,
    },
    Tiger: {
      weapons: [],
      promo: null,
    },
    "Red Dragon": {
      weapons: [],
      promo: null,
    },
    Dragon: {
      weapons: [],
      promo: null,
    },
    Cat: {
      weapons: [],
      promo: null,
    },
    Heron: {
      weapons: [],
      promo: null,
    },
    Hawk: {
      weapons: [],
      promo: null,
    },
    Raven: {
      weapons: [],
      promo: null,
    },
  },
  free: ["Ike"],
  flags: {},
};
