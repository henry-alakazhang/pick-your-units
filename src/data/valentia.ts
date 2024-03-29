import { Game } from "./data.types";

interface ShadowsOfValentiaGame {
  ClassName: keyof typeof VALENTIA_CLASSES;
  ChildCharacterName: never;
  Pairings: false;
}

const VALENTIA_CLASSES = {
  "Villager (M)": {
    weapons: ["Sword"],
    promo: ["Mercenary", "Soldier", "Archer", "Cavalier", "Mage (M)"],
  },
  "Villager (F)": {
    weapons: ["Sword"],
    promo: ["Cavalier", "Pegasus Knight", "Cleric", "Mage (F)"],
  },
  Cavalier: { weapons: ["Lance"], promo: ["Paladin"] },
  Paladin: { weapons: ["Lance"], promo: ["Gold Knight"] },
  "Gold Knight": { weapons: ["Lance"] },
  Soldier: { weapons: ["Lance"], promo: ["Knight"] },
  Knight: { weapons: ["Lance"], promo: ["Baron"] },
  Baron: { weapons: ["Lance"] },
  Mercenary: { weapons: ["Sword"], promo: ["Myrmidon"] },
  Myrmidon: { weapons: ["Sword"], promo: ["Dread Fighter"] },
  "Dread Fighter": { weapons: ["Sword"] },
  Archer: { weapons: ["Bow"], promo: ["Sniper"] },
  Sniper: { weapons: ["Bow"], promo: ["Bow Knight"] },
  "Bow Knight": { weapons: ["Bow"] },
  Fighter: { weapons: ["Sword"], promo: ["Hero"] },
  Hero: { weapons: ["Sword", "Bow"] },
  "Mage (M)": { weapons: ["Black Magic"], promo: ["Sage"] },
  "Mage (F)": { weapons: ["Black Magic"], promo: ["Priestess"] },
  Sage: { weapons: ["Black Magic", "White Magic"] },
  "Pegasus Knight": { weapons: ["Lance"], promo: ["Falcon Knight"] },
  "Falcon Knight": { weapons: ["Lance"] },
  Cleric: { weapons: ["Black Magic", "White Magic"], promo: ["Saint"] },
  Saint: { weapons: ["Black Magic", "White Magic"] },
  Priestess: { weapons: ["Sword", "Black Magic", "White Magic"] },
  Princess: { weapons: ["Sword", "Black Magic", "White Magic"] },
} as const;

const almCharacters = {
  Alm: { class: "Fighter" },
  Gray: { class: "Villager (M)" },
  Tobin: { class: "Villager (M)" },
  Kliff: { class: "Villager (M)" },
  Faye: { class: "Villager (F)" },
  Lukas: { class: "Soldier" },
  Silque: { class: "Cleric" },
  Clive: { class: "Cavalier" },
  Clair: { class: "Pegasus Knight" },
  Luthier: { class: "Mage (M)" },
  Delthea: { class: "Mage (F)" },
  Python: { class: "Archer" },
  Zeke: { class: "Gold Knight" },
  Forsyth: { class: "Soldier" },
} as const;

export const fe15alm: Game<ShadowsOfValentiaGame & {
  CharacterName: keyof typeof almCharacters;
}> = {
  short: "fe15",
  characters: almCharacters,
  classes: VALENTIA_CLASSES,
  free: ["Alm"],
  flags: {},
  imgExtension: "jpg",
  defaultPicks: 10,
};

const celicaCharacters = {
  Celica: { class: "Princess" },
  Mae: { class: "Mage (F)" },
  Boey: { class: "Mage (M)" },
  Genny: { class: "Cleric" },
  Saber: { class: "Mercenary" },
  Valbar: { class: "Knight" },
  Leon: { class: "Archer" },
  Kamui: { class: "Mercenary" },
  Palla: { class: "Pegasus Knight" },
  Catria: { class: "Pegasus Knight" },
  Est: { class: "Pegasus Knight" },
  Sonya: { class: "Mage (F)", exclude: ["Deen"] },
  Conrad: { class: "Cavalier" },
  Atlas: { class: "Villager (M)" },
  Jesse: { class: "Mercenary" },
  Deen: { class: "Myrmidon", exclude: ["Sonya"] },
  Nomah: { class: "Sage" },
} as const;

export const fe15celica: Game<ShadowsOfValentiaGame & {
  CharacterName: keyof typeof celicaCharacters;
}> = {
  short: "fe15",
  characters: celicaCharacters,
  classes: VALENTIA_CLASSES,
  free: ["Celica"],
  flags: {},
  imgExtension: "jpg",
  defaultPicks: 10,
};
