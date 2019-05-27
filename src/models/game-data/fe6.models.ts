import { Game, GameName } from "../game.models";

export type CharacterNameFE6 =
  | "Allen"
  | "Astohl"
  | "Barth"
  | "Bartre"
  | "Bors"
  | "Cath"
  | "Cecilia"
  | "Chad"
  | "Clarine"
  | "Dayan"
  | "Dieck"
  | "Dorothy"
  | "Douglas"
  | "Echidna"
  | "Ellen"
  | "Elphin"
  | "Fa"
  | "Fir"
  | "Garret"
  | "Geese"
  | "Gonzales"
  | "Hugh"
  | "Igrene"
  | "Juno"
  | "Klein"
  | "Lalum"
  | "Lance"
  | "Lilina"
  | "Lot"
  | "Lugh"
  | "Marcus"
  | "Miledy"
  | "Niime"
  | "Noah"
  | "Oujay"
  | "Percival"
  | "Raigh"
  | "Roy"
  | "Rutger"
  | "Saul"
  | "Shin"
  | "Sophia"
  | "Sue"
  | "Tate"
  | "Shanna"
  | "Trec"
  | "Wade"
  | "Wendy"
  | "Wolt"
  | "Zealot"
  | "Zeiss";
export type ClassNameFE6 =
  | "Lord"
  | "Master Lord"
  | "Mercenary"
  | "Hero"
  | "Myrmidon"
  | "Swordmaster"
  | "Thief"
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
  | "Nomad"
  | "Nomad Trooper"
  | "Cavalier"
  | "Paladin"
  | "Pegasus Knight"
  | "Falcon Knight"
  | "Wyvern Rider"
  | "Wyvern Lord"
  | "Priest"
  | "Bishop"
  | "Troubadour"
  | "Valkyrie"
  | "Mage"
  | "Sage"
  | "Shaman"
  | "Druid"
  | "Bard"
  | "Dancer"
  | "Manakete";

export const fe6: Game<CharacterNameFE6, ClassNameFE6> = {
  short: GameName.FE6,
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
      promo: ["Master Lord"],
    },
    "Master Lord": {
      weapons: ["Sword"],
    },
    Mercenary: {
      weapons: ["Sword"],
      promo: ["Hero"],
    },
    Hero: {
      weapons: ["Sword", "Axe"],
    },
    Myrmidon: {
      weapons: ["Sword"],
      promo: ["Swordmaster"],
    },
    Swordmaster: {
      weapons: ["Sword"],
    },
    Thief: {
      weapons: ["Sword"],
    },
    Knight: {
      weapons: ["Lance"],
      promo: ["General"],
    },
    General: {
      weapons: ["Lance", "Axe"],
    },
    Soldier: {
      weapons: ["Lance"],
    },
    Fighter: {
      weapons: ["Axe"],
      promo: ["Warrior"],
    },
    Warrior: {
      weapons: ["Axe", "Bow"],
    },
    Bandit: {
      weapons: ["Axe"],
      promo: ["Berserker"],
    },
    Pirate: {
      weapons: ["Axe"],
      promo: ["Berserker"],
    },
    Berserker: {
      weapons: ["Axe"],
    },
    Archer: {
      weapons: ["Bow"],
      promo: ["Sniper"],
    },
    Sniper: {
      weapons: ["Bow"],
    },
    Nomad: {
      weapons: ["Bow"],
      promo: ["Nomad Trooper"],
    },
    "Nomad Trooper": {
      weapons: ["Sword", "Bow"],
    },
    Cavalier: {
      weapons: ["Sword", "Lance"],
      promo: ["Paladin"],
    },
    Paladin: {
      weapons: ["Sword", "Lance", "Axe"],
    },
    "Pegasus Knight": {
      weapons: ["Lance"],
      promo: ["Falcon Knight"],
    },
    "Falcon Knight": {
      weapons: ["Sword", "Lance"],
    },
    "Wyvern Rider": {
      weapons: ["Lance"],
      promo: ["Wyvern Lord"],
    },
    "Wyvern Lord": {
      weapons: ["Sword", "Lance"],
    },
    Priest: {
      weapons: ["Staff"],
      promo: ["Bishop"],
    },
    Bishop: {
      weapons: ["Staff", "Light"],
    },
    Troubadour: {
      weapons: ["Staff"],
      promo: ["Valkyrie"],
    },
    Valkyrie: {
      weapons: ["Staff", "Anima"],
    },
    Mage: {
      weapons: ["Anima"],
      promo: ["Sage"],
    },
    Sage: {
      weapons: ["Staff", "Anima"],
    },
    Shaman: {
      weapons: ["Dark"],
      promo: ["Druid"],
    },
    Druid: {
      weapons: ["Staff", "Dark"],
    },
    Bard: {
      weapons: [],
    },
    Dancer: {
      weapons: [],
    },
    Manakete: {
      weapons: [],
    },
  },
  free: ["Roy"],
  flags: {},
};
