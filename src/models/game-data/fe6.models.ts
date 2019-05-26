export const fe6 = {
  short: "fe6",
  routes: [["A", "B"], ["Sacae", "Ilia"]],
  characters: {
    Allen: {
      class: "Cavalier",
    },
    Astohl: {
      class: "Thief",
    },
    Barth: {
      class: "Knight",
    },
    Bartre: {
      class: "Warrior",
      exclude: ["Lalum", "Echidna"],
    },
    Bors: {
      class: "Knight",
    },
    Cath: {
      class: "Thief",
    },
    Cecilia: {
      class: "Valkyrie",
    },
    Chad: {
      class: "Thief",
    },
    Clarine: {
      class: "Troubadour",
    },
    Dayan: {
      class: "Nomad Trooper",
      exclude: ["Juno"],
    },
    Dieck: {
      class: "Mercenary",
    },
    Dorothy: {
      class: "Archer",
    },
    Douglas: {
      class: "General",
    },
    Echidna: {
      class: "Hero",
      exclude: ["Elphin", "Bartre"],
    },
    Ellen: {
      class: "Priest",
    },
    Elphin: {
      class: "Bard",
      exclude: ["Lalum", "Echidna"],
    },
    Fa: {
      class: "Manakete",
    },
    Fir: {
      class: "Myrmidon",
    },
    Garret: {
      class: "Berserker",
    },
    Geese: {
      class: "Pirate",
    },
    Gonzales: {
      class: "Bandit",
    },
    Hugh: {
      class: "Mage",
    },
    Igrene: {
      class: "Sniper",
    },
    Juno: {
      class: "Falcon Knight",
      exclude: ["Dayan"],
    },
    Klein: {
      class: "Archer",
    },
    Lalum: {
      class: "Dancer",
      exclude: ["Elphin", "Bartre"],
    },
    Lance: {
      class: "Cavalier",
    },
    Lilina: {
      class: "Mage",
    },
    Lot: {
      class: "Fighter",
    },
    Lugh: {
      class: "Mage",
    },
    Marcus: {
      class: "Paladin",
    },
    Miledy: {
      class: "Wyvern Rider",
    },
    Niime: {
      class: "Druid",
    },
    Noah: {
      class: "Cavalier",
    },
    Oujay: {
      class: "Mercenary",
    },
    Percival: {
      class: "Paladin",
    },
    Raigh: {
      class: "Shaman",
    },
    Roy: {
      class: "Lord",
    },
    Rutger: {
      class: "Myrmidon",
    },
    Saul: {
      class: "Priest",
    },
    Shin: {
      class: "Nomad",
    },
    Sophia: {
      class: "Shaman",
    },
    Sue: {
      class: "Nomad",
    },
    Tate: {
      class: "Pegasus Knight",
    },
    Shanna: {
      class: "Pegasus Knight",
    },
    Trec: {
      class: "Cavalier",
    },
    Wade: {
      class: "Fighter",
    },
    Wendy: {
      class: "Knight",
    },
    Wolt: {
      class: "Archer",
    },
    Zealot: {
      class: "Paladin",
    },
    Zeiss: {
      class: "Wyvern Rider",
    },
  },
  classes: {
    Lord: {
      weapons: ["Sword"],
      promo: "Master Lord",
    },
    "Master Lord": {
      weapons: ["Sword"],
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
    Priest: {
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
    Shaman: {
      weapons: ["Dark"],
      promo: "Druid",
    },
    Druid: {
      weapons: ["Staff", "Dark"],
      promo: null,
    },
    Bard: {
      weapons: [],
      promo: null,
    },
    Dancer: {
      weapons: [],
      promo: null,
    },
    Manakete: {
      weapons: [],
      promo: null,
    },
  },
  free: ["Roy"],
  flags: {},
};
