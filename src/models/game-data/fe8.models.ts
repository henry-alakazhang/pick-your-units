import { Game, GameName } from "../game.models";

export type CharacterNameFE8 =
  | "Amelia"
  | "Artur"
  | "Colm"
  | "Cormag"
  | "Dozla"
  | "Duessel"
  | "Eirika"
  | "Ephraim"
  | "Ewan"
  | "Forde"
  | "Franz"
  | "Garcia"
  | "Gerik"
  | "Gilliam"
  | "Innes"
  | "Joshua"
  | "Knoll"
  | "Kyle"
  | "L'Arachel"
  | "Lute"
  | "Marisa"
  | "Moulder"
  | "Myrrh"
  | "Natasha"
  | "Neimi"
  | "Rennac"
  | "Ross"
  | "Saleh"
  | "Seth"
  | "Syrene"
  | "Tana"
  | "Tethys"
  | "Vanessa";

export type ClassNameFE8 =
  | "Lord (Eirika)"
  | "Great Lord (Eirika)"
  | "Lord (Ephraim)"
  | "Great Lord (Ephraim)"
  | "Mercenary"
  | "Hero"
  | "Myrmidon"
  | "Swordmaster"
  | "Thief"
  | "Assassin"
  | "Rogue"
  | "Knight"
  | "General"
  | "Soldier"
  | "Fighter"
  | "Warrior"
  | "Bandit"
  | "Pirate"
  | "Berserker"
  | "Archer"
  | "Sniper"
  | "Bow Knight"
  | "Cavalier"
  | "Paladin"
  | "Great Knight"
  | "Pegasus Knight"
  | "Falcon Knight"
  | "Wyvern Rider"
  | "Wyvern Lord"
  | "Wyvern Knight"
  | "Monk"
  | "Cleric"
  | "Priest"
  | "Bishop"
  | "Troubadour"
  | "Valkyrie"
  | "Mage"
  | "Mage Knight"
  | "Sage"
  | "Shaman"
  | "Summoner"
  | "Druid"
  | "Dancer"
  | "Journeyman"
  | "Recruit"
  | "Pupil"
  | "Manakete";

export const fe8: Game<CharacterNameFE8, ClassNameFE8> = {
  short: GameName.FE8,
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
      promo: ["Great Lord (Eirika)"],
    },
    "Great Lord (Eirika)": {
      weapons: ["Sword"],
    },
    "Lord (Ephraim)": {
      weapons: ["Lance"],
      promo: ["Great Lord (Ephraim)"],
    },
    "Great Lord (Ephraim)": {
      weapons: ["Lance"],
    },
    Mercenary: {
      weapons: ["Sword"],
      promo: ["Hero", "Bow Knight"],
    },
    Hero: {
      weapons: ["Sword", "Axe"],
    },
    Myrmidon: {
      weapons: ["Sword"],
      promo: ["Swordmaster", "Assassin"],
    },
    Swordmaster: {
      weapons: ["Sword"],
    },
    Thief: {
      weapons: ["Sword"],
      promo: ["Assassin", "Rogue"],
    },
    Assassin: {
      weapons: ["Sword"],
    },
    Rogue: {
      weapons: ["Sword"],
    },
    Knight: {
      weapons: ["Lance"],
      promo: ["General", "Great Knight"],
    },
    General: {
      weapons: ["Lance", "Axe", "Sword"],
    },
    Soldier: {
      weapons: ["Lance"],
    },
    Fighter: {
      weapons: ["Axe"],
      promo: ["Warrior", "Hero"],
    },
    Warrior: {
      weapons: ["Axe", "Bow"],
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
    },
    Archer: {
      weapons: ["Bow"],
      promo: ["Sniper", "Bow Knight"],
    },
    Sniper: {
      weapons: ["Bow"],
    },
    "Bow Knight": {
      weapons: ["Sword", "Bow"],
    },
    Cavalier: {
      weapons: ["Sword", "Lance"],
      promo: ["Paladin", "Great Knight"],
    },
    Paladin: {
      weapons: ["Sword", "Lance"],
    },
    "Great Knight": {
      weapons: ["Sword", "Lance", "Axe"],
    },
    "Pegasus Knight": {
      weapons: ["Lance"],
      promo: ["Falcon Knight", "Wyvern Knight"],
    },
    "Falcon Knight": {
      weapons: ["Sword", "Lance"],
    },
    "Wyvern Rider": {
      weapons: ["Lance"],
      promo: ["Wyvern Lord", "Wyvern Knight"],
    },
    "Wyvern Lord": {
      weapons: ["Sword", "Lance"],
    },
    "Wyvern Knight": {
      weapons: ["Lance"],
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
    },
    Troubadour: {
      weapons: ["Staff"],
      promo: ["Valkyrie", "Mage Knight"],
    },
    Valkyrie: {
      weapons: ["Staff", "Light"],
    },
    Mage: {
      weapons: ["Anima"],
      promo: ["Sage", "Mage Knight"],
    },
    "Mage Knight": {
      weapons: ["Staff", "Anima"],
    },
    Sage: {
      weapons: ["Staff", "Anima", "Light"],
    },
    Shaman: {
      weapons: ["Dark"],
      promo: ["Druid", "Summoner"],
    },
    Summoner: {
      weapons: ["Staff", "Dark"],
    },
    Druid: {
      weapons: ["Staff", "Anima", "Dark"],
    },
    Dancer: {
      weapons: [],
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
    },
  },
  free: ["Eirika", "Ephraim"],
  flags: {},
};
