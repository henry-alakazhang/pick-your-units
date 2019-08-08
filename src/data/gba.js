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
