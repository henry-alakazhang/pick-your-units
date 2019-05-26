export const fe8 = {
  short: "fe8",
  routes: [["Eirika", "Ephraim"]],
  characters: {
    Amelia: {
      class: "Recruit",
    },
    Artur: {
      class: "Monk",
    },
    Colm: {
      class: "Thief",
    },
    Cormag: {
      class: "Wyvern Rider",
    },
    Dozla: {
      class: "Berserker",
    },
    Duessel: {
      class: "Great Knight",
    },
    Eirika: {
      class: "Lord (Eirika)",
    },
    Ephraim: {
      class: "Lord (Ephraim)",
    },
    Ewan: {
      class: "Pupil",
    },
    Forde: {
      class: "Cavalier",
    },
    Franz: {
      class: "Cavalier",
    },
    Garcia: {
      class: "Fighter",
    },
    Gerik: {
      class: "Mercenary",
    },
    Gilliam: {
      class: "Knight",
    },
    Innes: {
      class: "Sniper",
    },
    Joshua: {
      class: "Myrmidon",
    },
    Knoll: {
      class: "Shaman",
    },
    Kyle: {
      class: "Cavalier",
    },
    "L'Arachel": {
      class: "Troubadour",
    },
    Lute: {
      class: "Mage",
    },
    Marisa: {
      class: "Myrmidon",
    },
    Moulder: {
      class: "Priest",
    },
    Myrrh: {
      class: "Manakete",
    },
    Natasha: {
      class: "Cleric",
    },
    Neimi: {
      class: "Archer",
    },
    Rennac: {
      class: "Rogue",
    },
    Ross: {
      class: "Journeyman",
    },
    Saleh: {
      class: "Sage",
    },
    Seth: {
      class: "Paladin",
    },
    Syrene: {
      class: "Falcon Knight",
    },
    Tana: {
      class: "Pegasus Knight",
    },
    Tethys: {
      class: "Dancer",
    },
    Vanessa: {
      class: "Pegasus Knight",
    },
  },
  classes: {
    "Lord (Eirika)": {
      weapons: ["Sword"],
      promo: "Great Lord (Eirika)",
    },
    "Great Lord (Eirika)": {
      weapons: ["Sword"],
      promo: null,
    },
    "Lord (Ephraim)": {
      weapons: ["Lance"],
      promo: "Great Lord (Ephraim)",
    },
    "Great Lord (Ephraim)": {
      weapons: ["Lance"],
      promo: null,
    },
    Mercenary: {
      weapons: ["Sword"],
      promo: ["Hero", "Bow Knight"],
    },
    Hero: {
      weapons: ["Sword", "Axe"],
      promo: null,
    },
    Myrmidon: {
      weapons: ["Sword"],
      promo: ["Swordmaster", "Assassin"],
    },
    Swordmaster: {
      weapons: ["Sword"],
      promo: null,
    },
    Thief: {
      weapons: ["Sword"],
      promo: ["Assassin", "Rogue"],
    },
    Assassin: {
      weapons: ["Sword"],
      promo: null,
    },
    Rogue: {
      weapons: ["Sword"],
      promo: null,
    },
    Knight: {
      weapons: ["Lance"],
      promo: ["General", "Great Knight"],
    },
    General: {
      weapons: ["Lance", "Axe", "Sword"],
      promo: null,
    },
    Soldier: {
      weapons: ["Lance"],
      promo: null,
    },
    Fighter: {
      weapons: ["Axe"],
      promo: ["Warrior", "Hero"],
    },
    Warrior: {
      weapons: ["Axe", "Bow"],
      promo: null,
    },
    Bandit: {
      weapons: ["Axe"],
      promo: ["Berserker", "Warrior"],
    },
    Pirate: {
      weapons: ["Axe"],
      promo: ["Berserker", "Warrior"],
    },
    Berserker: {
      weapons: ["Axe"],
      promo: null,
    },
    Archer: {
      weapons: ["Bow"],
      promo: ["Sniper", "Bow Knight"],
    },
    Sniper: {
      weapons: ["Bow"],
      promo: null,
    },
    "Bow Knight": {
      weapons: ["Sword", "Bow"],
      promo: null,
    },
    Cavalier: {
      weapons: ["Sword", "Lance"],
      promo: ["Paladin", "Great Knight"],
    },
    Paladin: {
      weapons: ["Sword", "Lance"],
      promo: null,
    },
    "Great Knight": {
      weapons: ["Sword", "Lance", "Axe"],
      promo: null,
    },
    "Pegasus Knight": {
      weapons: ["Lance"],
      promo: ["Falcon Knight", "Wyvern Knight"],
    },
    "Falcon Knight": {
      weapons: ["Sword", "Lance"],
      promo: null,
    },
    "Wyvern Rider": {
      weapons: ["Lance"],
      promo: ["Wyvern Lord", "Wyvern Knight"],
    },
    "Wyvern Lord": {
      weapons: ["Sword", "Lance"],
      promo: null,
    },
    "Wyvern Knight": {
      weapons: ["Lance"],
      promo: null,
    },
    Monk: {
      weapons: ["Light"],
      promo: ["Bishop", "Sage"],
    },
    Cleric: {
      weapons: ["Staff"],
      promo: ["Bishop", "Valkyrie"],
    },
    Priest: {
      weapons: ["Staff"],
      promo: ["Bishop", "Sage"],
    },
    Bishop: {
      weapons: ["Staff", "Light"],
      promo: null,
    },
    Troubadour: {
      weapons: ["Staff"],
      promo: ["Valkyrie", "Mage Knight"],
    },
    Valkyrie: {
      weapons: ["Staff", "Light"],
      promo: null,
    },
    Mage: {
      weapons: ["Anima"],
      promo: ["Sage", "Mage Knight"],
    },
    "Mage Knight": {
      weapons: ["Staff", "Anima"],
      promo: null,
    },
    Sage: {
      weapons: ["Staff", "Anima", "Light"],
      promo: null,
    },
    Shaman: {
      weapons: ["Dark"],
      promo: ["Druid", "Summoner"],
    },
    Summoner: {
      weapons: ["Staff", "Dark"],
      promo: null,
    },
    Druid: {
      weapons: ["Staff", "Anima", "Dark"],
      promo: null,
    },
    Dancer: {
      weapons: [],
      promo: null,
    },
    Journeyman: {
      weapons: ["Axe"],
      promo: ["Pirate", "Fighter"],
    },
    Recruit: {
      weapons: ["Lance"],
      promo: ["Knight", "Cavalier"],
    },
    Pupil: {
      weapons: ["Anima"],
      promo: ["Mage", "Shaman"],
    },
    Manakete: {
      weapons: [],
      promo: null,
    },
  },
  free: ["Eirika", "Ephraim"],
  flags: {},
};
