// lists for pairings

import { Game } from "./data.types";

interface AwakeningGame {
  Pairings: true;
}

// M is males, F is females, CX is children
const AWAKE_M = [
  "Robin (M)",
  "Frederick",
  "Virion",
  "Stahl",
  "Vaike",
  "Kellam",
  "Donnel",
  "Lon'qu",
  "Ricken",
  "Gaius",
  "Gregor",
  "Libra",
  "Henry",
];
const AWAKE_F = [
  "Robin (F)",
  "Lissa",
  "Sully",
  "Miriel",
  "Maribelle",
  "Panne",
  "Cordelia",
  "Nowi",
  "Tharja",
  "Olivia",
  "Cherche",
];
const AWAKE_CM = [
  "Owain",
  "Inigo",
  "Brady",
  "Gerome",
  "Morgan (M)",
  "Yarne",
  "Laurent",
];
const AWAKE_CF = [
  "Lucina",
  "Kjelle",
  "Cynthia",
  "Severa",
  "Morgan (F)",
  "Noire",
  "Nah",
];

const inheritClasses = function(
  game: Game<AwakeningGame>,
  picks: { pairings: any },
  to: string
) {
  const pairings = picks.pairings;

  // only kids inherit in awakening
  if (!game.children || !game.children[to]) {
    return game.characters[to].class as string[];
  }

  // only other parent, since base is included in class pool
  const from = pairings[game.children[to].parent];
  // FIXME: cast types because awakening has array Classes
  let classes = game.children[to].class.slice() as string[];
  let inherits = game.characters[from].class.slice() as string[];
  // replace wrong-gendered classes
  // girls:
  if (AWAKE_CF.includes(to)) {
    inherits[inherits.indexOf("Priest")] = "Cleric";
    if (from === "Vaike") {
      inherits[inherits.indexOf("Barbarian")] = "Knight";
      inherits[inherits.indexOf("Fighter")] = "Mercenary";
    }
    if (from === "Gaius" || from === "Donnel") {
      inherits[inherits.indexOf("Fighter")] = "Pegasus Knight";
    }
    if (from === "Donnel") {
      inherits[inherits.indexOf("Villager")] = "Troubadour";
    }
    if (from === "Gregor" || from === "Henry") {
      inherits[inherits.indexOf("Barbarian")] = "Troubadour";
    }
  }
  // boys don't need this, because the changes are already reflected in their personal pools

  // add the classes
  for (const i of inherits) {
    if (i === "Lord") continue;
    if (!classes.includes(i)) {
      classes.push(i);
    }
  }
  return classes;
};

export const fe13: Game<AwakeningGame> = {
  short: "fe13",
  inheritClasses: inheritClasses,
  characters: {
    "Robin (M)": {
      class: [
        "Tactician",
        "Cavalier",
        "Knight",
        "Myrmidon",
        "Mercenary",
        "Fighter",
        "Barbarian",
        "Archer",
        "Thief",
        "Wyvern Rider",
        "Mage",
        "Dark Mage",
        "Priest",
        "Cleric",
      ],
      defaultClass: "Tactician",
      pairings: [
        "Sumia",
        "Lissa",
        "Sully",
        "Miriel",
        "Maribelle",
        "Panne",
        "Cordelia",
        "Nowi",
        "Tharja",
        "Olivia",
        "Cherche",
        "Say'ri",
        "Flavia",
        "Tiki",
      ],
      stat: { STR: true, MAG: true },
    },
    "Robin (F)": {
      class: [
        "Tactician",
        "Cavalier",
        "Knight",
        "Myrmidon",
        "Mercenary",
        "Archer",
        "Thief",
        "Pegasus Knight",
        "Wyvern Rider",
        "Mage",
        "Dark Mage",
        "Priest",
        "Cleric",
        "Troubadour",
      ],
      defaultClass: "Tactician",
      pairings: [
        "Chrom",
        "Frederick",
        "Virion",
        "Stahl",
        "Vaike",
        "Kellam",
        "Donnel",
        "Lon'qu",
        "Ricken",
        "Gaius",
        "Gregor",
        "Libra",
        "Henry",
        "Basilio",
      ],
      stat: { STR: true, MAG: true },
    },
    Chrom: {
      class: ["Lord", "Cavalier", "Archer"],
      defaultClass: "Lord",
      pairings: ["Robin (F)", "Sully", "Sumia", "Maribelle", "Olivia"],
      stat: { STR: true },
    },
    Lissa: {
      class: ["Cleric", "Pegasus Knight", "Troubadour"],
      defaultClass: "Cleric",
      pairings: AWAKE_M,
      stat: { MAG: true },
    },
    Frederick: {
      class: ["Cavalier", "Knight", "Wyvern Rider"],
      defaultClass: "Great Knight",
      pairings: [...AWAKE_F, "Sumia"],
      stat: { STR: true },
    },
    Sully: {
      class: ["Cavalier", "Myrmidon", "Wyvern Rider"],
      defaultClass: "Cavalier",
      pairings: [...AWAKE_M, "Chrom"],
      stat: { STR: true },
    },
    Virion: {
      class: ["Archer", "Wyvern Rider", "Mage"],
      defaultClass: "Archer",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Stahl: {
      class: ["Cavalier", "Archer", "Myrmidon"],
      defaultClass: "Cavalier",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Vaike: {
      class: ["Fighter", "Thief", "Barbarian"],
      defaultClass: "Fighter",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Miriel: {
      class: ["Mage", "Troubadour", "Dark Mage"],
      defaultClass: "Mage",
      pairings: AWAKE_M,
      stat: { MAG: true },
    },
    Sumia: {
      class: ["Pegasus Knight", "Knight", "Cleric"],
      defaultClass: "Pegasus Knight",
      pairings: ["Robin (M)", "Chrom", "Frederick", "Gaius", "Henry"],
      stat: { STR: true },
    },
    Kellam: {
      class: ["Knight", "Thief", "Priest"],
      defaultClass: "Knight",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Donnel: {
      class: ["Villager", "Fighter", "Mercenary"],
      defaultClass: "Hero", // hardcoded cos there's no troll Donnel
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    "Lon'qu": {
      class: ["Myrmidon", "Thief", "Wyvern Rider"],
      defaultClass: "Myrmidon",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Ricken: {
      class: ["Mage", "Cavalier", "Archer"],
      defaultClass: "Mage",
      pairings: AWAKE_F,
      stat: { MAG: true },
    },
    Maribelle: {
      class: ["Troubadour", "Pegasus Knight", "Mage"],
      defaultClass: "Troubadour",
      pairings: [...AWAKE_M, "Chrom"],
      stat: { MAG: true },
    },
    Panne: {
      class: ["Taguel", "Thief", "Wyvern Rider"],
      defaultClass: "Taguel",
      pairings: AWAKE_M,
      stat: { STR: true },
    },
    Gaius: {
      class: ["Thief", "Fighter", "Myrmidon"],
      defaultClass: "Thief",
      pairings: [...AWAKE_F, "Sumia"],
      stat: { STR: true },
    },
    Cordelia: {
      class: ["Pegasus Knight", "Mercenary", "Dark Mage"],
      defaultClass: "Pegasus Knight",
      pairings: AWAKE_M,
      stat: { STR: true },
    },
    Gregor: {
      class: ["Mercenary", "Barbarian", "Myrmidon"],
      defaultClass: "Mercenary",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Nowi: {
      class: ["Manakete", "Mage", "Wyvern Rider"],
      defaultClass: "Manakete",
      pairings: AWAKE_M,
      stat: { STR: true, MAG: true },
    },
    Libra: {
      class: ["Priest", "Mage", "Dark Mage"],
      defaultClass: "War Monk",
      pairings: AWAKE_F,
      stat: { STR: true, MAG: true },
    },
    Tharja: {
      class: ["Dark Mage", "Knight", "Archer"],
      defaultClass: "Dark Mage",
      pairings: AWAKE_M,
      stat: { MAG: true },
    },
    Anna: {
      class: ["Thief", "Archer", "Mage"],
      defaultClass: "Trickster",
      pairings: ["Robin (M)"],
      stat: { STR: true, MAG: true },
    },
    Olivia: {
      class: ["Dancer", "Myrmidon", "Pegasus Knight"],
      defaultClass: "Dancer",
      pairings: [...AWAKE_M, "Chrom"],
      stat: { STR: true },
    },
    Cherche: {
      class: ["Wyvern Rider", "Troubadour", "Cleric"],
      defaultClass: "Wyvern Rider",
      pairings: AWAKE_M,
      stat: { STR: true },
    },
    Henry: {
      class: ["Dark Mage", "Barbarian", "Thief"],
      defaultClass: "Dark Mage",
      pairings: [...AWAKE_F, "Sumia"],
      stat: { STR: true, MAG: true },
    },
    "Say'ri": {
      class: ["Myrmidon", "Pegasus Knight", "Wyvern Rider"],
      defaultClass: "Swordmaster",
      pairings: ["Robin (M)"],
      stat: { STR: true },
    },
    Tiki: {
      class: ["Manakete", "Wyvern Rider", "Mage"],
      defaultClass: "Manakete",
      pairings: ["Robin (M)"],
      stat: { STR: true },
    },
    Basilio: {
      class: ["Fighter", "Barbarian", "Knight"],
      defaultClass: "Warrior",
      pairings: ["Robin (F)"],
      stat: { STR: true },
    },
    Flavia: {
      class: ["Mercenary", "Thief", "Knight"],
      defaultClass: "Hero",
      pairings: ["Robin (M)"],
      stat: { STR: true },
    },
  },
  children: {
    Lucina: {
      class: ["Lord", "Cavalier", "Archer"],
      stat: { STR: true },
      pairings: AWAKE_CM,
      parent: "Chrom",
    },
    Owain: {
      class: ["Myrmidon", "Priest", "Barbarian"],
      stat: { STR: true },
      pairings: AWAKE_CF,
      parent: "Lissa",
    },
    Inigo: {
      class: ["Mercenary", "Myrmidon", "Barbarian"],
      stat: { STR: true, MAG: true },
      pairings: AWAKE_CF,
      parent: "Olivia",
    },
    Brady: {
      class: ["Priest", "Cavalier", "Mage"],
      stat: { STR: true, MAG: true },
      pairings: AWAKE_CF,
      parent: "Maribelle",
    },
    Kjelle: {
      class: ["Knight", "Myrmidon", "Cavalier", "Wyvern Rider"],
      stat: { STR: true },
      pairings: AWAKE_CM,
      parent: "Sully",
    },
    Cynthia: {
      class: ["Pegasus Knight", "Knight", "Cleric"],
      stat: { STR: true },
      pairings: AWAKE_CM,
      parent: "Sumia",
    },
    Severa: {
      class: ["Mercenary", "Pegasus Knight", "Dark Mage"],
      stat: { STR: true },
      pairings: AWAKE_CM,
      parent: "Cordelia",
    },
    Gerome: {
      class: ["Wyvern Rider", "Fighter", "Priest"],
      stat: { STR: true },
      pairings: AWAKE_CF,
      parent: "Cherche",
    },
    "Morgan (F)": {
      class: [
        "Tactician",
        "Cavalier",
        "Knight",
        "Myrmidon",
        "Mercenary",
        "Pegasus Knight",
        "Archer",
        "Thief",
        "Wyvern Rider",
        "Mage",
        "Dark Mage",
        "Cleric",
      ],
      stat: { STR: true, MAG: true },
      parent: "Robin (M)",
      pairings: AWAKE_CM,
    },
    "Morgan (M)": {
      class: [
        "Tactician",
        "Cavalier",
        "Knight",
        "Myrmidon",
        "Mercenary",
        "Fighter",
        "Barbarian",
        "Archer",
        "Thief",
        "Wyvern Rider",
        "Mage",
        "Dark Mage",
        "Priest",
      ],
      stat: { STR: true, MAG: true },
      parent: "Robin (F)",
      pairings: AWAKE_CF,
    },
    Yarne: {
      class: ["Taguel", "Thief", "Barbarian"],
      stat: { STR: true },
      pairings: AWAKE_CF,
      parent: "Panne",
    },
    Laurent: {
      class: ["Mage", "Barbarian", "Dark Mage"],
      stat: { MAG: true },
      pairings: AWAKE_CF,
      parent: "Miriel",
    },
    Noire: {
      class: ["Archer", "Knight", "Dark Mage"],
      stat: { STR: true, MAG: true },
      pairings: AWAKE_CM,
      parent: "Tharja",
    },
    Nah: {
      class: ["Manakete", "Wyvern Rider", "Mage"],
      stat: { STR: true, MAG: true },
      pairings: AWAKE_CM,
      parent: "Nowi",
    },
  },
  classes: {
    Lord: {
      weapons: ["Sword"],
      promo: ["Great Lord"],
      stat: { STR: true },
    },
    "Great Lord": {
      weapons: ["Sword", "Lance"],
      stat: { STR: true },
    },
    Tactician: {
      weapons: ["Sword", "Tome"],
      promo: ["Grandmaster"],
      stat: { STR: true, MAG: true },
    },
    Grandmaster: {
      weapons: ["Sword", "Tome"],
      stat: { STR: true, MAG: true },
    },
    Cavalier: {
      weapons: ["Sword", "Lance"],
      promo: ["Paladin", "Great Knight"],
      stat: { STR: true },
    },
    Paladin: {
      weapons: ["Sword", "Lance"],
      stat: { STR: true },
    },
    "Great Knight": {
      weapons: ["Sword", "Lance", "Axe"],
      stat: { STR: true },
    },
    Knight: {
      weapons: ["Lance"],
      promo: ["Great Knight", "General"],
      stat: { STR: true },
    },
    General: {
      weapons: ["Lance", "Axe"],
      stat: { STR: true },
    },
    Myrmidon: {
      weapons: ["Sword"],
      promo: ["Swordmaster", "Assassin"],
      stat: { STR: true },
    },
    Swordmaster: {
      weapons: ["Sword"],
      stat: { STR: true },
    },
    Mercenary: {
      weapons: ["Sword"],
      promo: ["Hero", "Bow Knight"],
      stat: { STR: true },
    },
    Hero: {
      weapons: ["Sword", "Axe"],
      stat: { STR: true },
    },
    Fighter: {
      weapons: ["Axe"],
      promo: ["Hero", "Warrior"],
      stat: { STR: true },
    },
    Warrior: {
      weapons: ["Axe", "Bow"],
      stat: { STR: true },
    },
    Barbarian: {
      weapons: ["Axe"],
      promo: ["Berserker", "Warrior"],
      stat: { STR: true },
    },
    Berserker: {
      weapons: ["Axe"],
      stat: { STR: true },
    },
    Archer: {
      weapons: ["Bow"],
      promo: ["Sniper", "Bow Knight"],
      stat: { STR: true },
    },
    Sniper: {
      weapons: ["Bow"],
      stat: { STR: true },
    },
    "Bow Knight": {
      weapons: ["Sword", "Bow"],
      stat: { STR: true },
    },
    Thief: {
      weapons: ["Sword"],
      promo: ["Assassin", "Trickster"],
      stat: { STR: true },
    },
    Assassin: {
      weapons: ["Sword", "Bow"],
      stat: { STR: true },
    },
    Trickster: {
      weapons: ["Sword", "Staff"],
      stat: { STR: true },
    },
    "Pegasus Knight": {
      weapons: ["Lance"],
      promo: ["Falcon Knight", "Dark Flier"],
      stat: { STR: true },
    },
    "Falcon Knight": {
      weapons: ["Lance", "Staff"],
      stat: { STR: true },
    },
    "Dark Flier": {
      weapons: ["Lance", "Tome"],
      stat: { STR: true, MAG: true },
    },
    "Wyvern Rider": {
      weapons: ["Axe"],
      promo: ["Wyvern Lord", "Griffon Rider"],
      stat: { STR: true },
    },
    "Wyvern Lord": {
      weapons: ["Lance", "Axe"],
      stat: { STR: true },
    },
    "Griffon Rider": {
      weapons: ["Axe"],
      stat: { STR: true },
    },
    Mage: {
      weapons: ["Tome"],
      promo: ["Sage", "Dark Knight"],
      stat: { MAG: true },
    },
    Sage: {
      weapons: ["Tome", "Staff"],
      stat: { MAG: true },
    },
    "Dark Mage": {
      weapons: ["Tome"],
      promo: ["Sorcerer", "Dark Knight"],
      stat: { MAG: true },
    },
    Sorcerer: {
      weapons: ["Tome"],
      stat: { MAG: true },
    },
    "Dark Knight": {
      weapons: ["Sword", "Tome"],
      stat: { STR: true, MAG: true },
    },
    Priest: {
      weapons: ["Staff"],
      promo: ["War Monk", "Sage"],
      stat: { MAG: true },
    },
    Cleric: {
      weapons: ["Staff"],
      promo: ["War Cleric", "Sage"],
      stat: { MAG: true },
    },
    "War Monk": {
      weapons: ["Axe", "Staff"],
      stat: { STR: true, MAG: true },
    },
    "War Cleric": {
      weapons: ["Axe", "Staff"],
      stat: { STR: true, MAG: true },
    },
    Troubadour: {
      weapons: ["Staff"],
      promo: ["War Cleric", "Valkyrie"],
      stat: { MAG: true },
    },
    Valkyrie: {
      weapons: ["Tome", "Staff"],
      stat: { MAG: true },
    },
    Villager: {
      weapons: ["Lance"],
      promo: ["Fighter", "Mercenary"],
      stat: { STR: true },
    },
    Dancer: {
      weapons: ["Sword"],
      stat: { STR: true },
    },
    Taguel: {
      weapons: ["Stone"],
      stat: { STR: true },
    },
    Manakete: {
      weapons: ["Stone"],
      stat: { STR: true },
    },
    Lodestar: {
      weapons: ["Sword"],
      stat: { STR: true },
    },
    "Dread Fighter": {
      weapons: ["Sword", "Axe", "Tome"],
      stat: { STR: true, MAG: true },
    },
    Bride: {
      weapons: ["Lance", "Bow", "Staff"],
      stat: { STR: true },
    },
    Soldier: {
      weapons: ["Lance"],
      stat: { STR: true },
    },
    Merchant: {
      weapons: ["Lance"],
      stat: { STR: true },
    },
  },
  free: ["Chrom"],
  avatar: "Robin",
  flags: {
    pairings: true,
    onlypairs: true,
    children: true,
    classes: true,
    troll: true,
  },
  trollCriteria: ["MAG classes for a STR-based character and vice versa."],
  defaultPicks: 14,
};
