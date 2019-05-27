import { Game, GameName } from "../game.models";

export type CharacterNameFE7 =
  | "Bartre"
  | "Canas"
  | "Dart"
  | "Dorcas"
  | "Eliwood"
  | "Erk"
  | "Farina"
  | "Fiora"
  | "Florina"
  | "Geitz"
  | "Guy"
  | "Harken"
  | "Hawkeye"
  | "Heath"
  | "Hector"
  | "Isadora"
  | "Jaffar"
  | "Karel"
  | "Karla"
  | "Kent"
  | "Legault"
  | "Louise"
  | "Lowen"
  | "Lucius"
  | "Lyn"
  | "Marcus"
  | "Matthew"
  | "Ninian"
  | "Nino"
  | "Oswin"
  | "Pent"
  | "Priscilla"
  | "Rath"
  | "Raven"
  | "Rebecca"
  | "Renault"
  | "Sain"
  | "Serra"
  | "Vaida"
  | "Wallace"
  | "Wil";
export type ClassNameFE7 =
  | "Lord (Lyn)"
  | "Blade Lord"
  | "Lord (Eliwood)"
  | "Knight Lord"
  | "Lord (Hector)"
  | "Great Lord"
  | "Mercenary"
  | "Hero"
  | "Myrmidon"
  | "Swordmaster"
  | "Thief"
  | "Assassin"
  | "Knight"
  | "General"
  | "Soldier"
  | "Fighter"
  | "Warrior"
  | "Bandit"
  | "Pirate"
  | "Corsair"
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
  | "Monk"
  | "Cleric"
  | "Bishop"
  | "Troubadour"
  | "Valkyrie"
  | "Mage"
  | "Sage"
  | "ArchSage"
  | "Shaman"
  | "Druid"
  | "Dark Druid"
  | "Dancer";

export const fe7: Game<CharacterNameFE7, ClassNameFE7> = {
  short: GameName.FE7,
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
      promo: ["Blade Lord"],
    },
    "Blade Lord": {
      weapons: ["Sword", "Bow"],
    },
    "Lord (Eliwood)": {
      weapons: ["Sword"],
      promo: ["Knight Lord"],
    },
    "Knight Lord": {
      weapons: ["Sword", "Lance"],
    },
    "Lord (Hector)": {
      weapons: ["Axe"],
      promo: ["Great Lord"],
    },
    "Great Lord": {
      weapons: ["Sword", "Axe"],
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
      promo: ["Assassin"],
    },
    Assassin: {
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
    Corsair: {
      weapons: ["Axe"],
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
    Monk: {
      weapons: ["Light"],
      promo: ["Bishop"],
    },
    Cleric: {
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
    ArchSage: {
      weapons: ["Staff", "Anima", "Light", "Dark"],
    },
    Shaman: {
      weapons: ["Dark"],
      promo: ["Druid"],
    },
    Druid: {
      weapons: ["Staff", "Dark"],
    },
    "Dark Druid": {
      weapons: ["Staff", "Anima", "Light", "Dark"],
    },
    Dancer: {
      weapons: [],
    },
  },
  free: ["Eliwood"],
  flags: {},
};
