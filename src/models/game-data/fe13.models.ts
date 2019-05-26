// lists for pairings
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

export function AWAKENING_inheritClasses(game: any, picks: any, to: any) {
  const pairings = picks.pairings;

  // only kids inherit in awakening
  if (!game.children[to]) {
    return game.characters[to].class;
  }

  // only other parent, since base is included in class pool
  const from = pairings[game.children[to].parent];
  let classes = game.children[to].class.slice();
  let inherits = game.characters[from].class.slice();
  // replace wrong-gendered classes
  // girls:
  if (AWAKE_CF.indexOf(to) !== -1) {
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
    if (classes.indexOf(i) === -1) {
      classes.push(i);
    }
  }
  return classes;
}

export const fe13 = {
  short: "fe13",
  inheritClasses: AWAKENING_inheritClasses,
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
      base: "Tactician",
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
      base: "Tactician",
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
      base: "Lord",
      pairings: ["Sully", "Sumia", "Maribelle", "Olivia"],
      stat: { STR: true },
    },
    Lissa: {
      class: ["Cleric", "Pegasus Knight", "Troubadour"],
      base: "Cleric",
      pairings: AWAKE_M,
      stat: { MAG: true },
    },
    Frederick: {
      class: ["Cavalier", "Knight", "Wyvern Rider"],
      base: "Great Knight",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Sully: {
      class: ["Cavalier", "Myrmidon", "Wyvern Rider"],
      base: "Cavalier",
      pairings: AWAKE_M,
      stat: { STR: true },
    },
    Virion: {
      class: ["Archer", "Wyvern Rider", "Mage"],
      base: "Archer",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Stahl: {
      class: ["Cavalier", "Archer", "Myrmidon"],
      base: "Cavalier",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Vaike: {
      class: ["Fighter", "Thief", "Barbarian"],
      base: "Fighter",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Miriel: {
      class: ["Mage", "Troubadour", "Dark Mage"],
      base: "Mage",
      pairings: AWAKE_M,
      stat: { MAG: true },
    },
    Sumia: {
      class: ["Pegasus Knight", "Knight", "Cleric"],
      base: "Pegasus Knight",
      pairings: ["Chrom", "Frederick", "Gaius", "Henry"],
      stat: { STR: true },
    },
    Kellam: {
      class: ["Knight", "Thief", "Priest"],
      base: "Knight",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Donnel: {
      class: ["Villager", "Fighter", "Mercenary"],
      base: "Hero", // hardcoded cos there's no troll Donnel
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    "Lon'qu": {
      class: ["Myrmidon", "Thief", "Wyvern Rider"],
      base: "Myrmidon",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Ricken: {
      class: ["Mage", "Cavalier", "Archer"],
      base: "Mage",
      pairings: AWAKE_F,
      stat: { MAG: true },
    },
    Maribelle: {
      class: ["Troubadour", "Pegasus Knight", "Mage"],
      base: "Troubadour",
      pairings: AWAKE_M,
      stat: { MAG: true },
    },
    Panne: {
      class: ["Taguel", "Thief", "Wyvern Rider"],
      base: "Taguel",
      pairings: AWAKE_M,
      stat: { STR: true },
    },
    Gaius: {
      class: ["Thief", "Fighter", "Myrmidon"],
      base: "Thief",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Cordelia: {
      class: ["Pegasus Knight", "Mercenary", "Dark Mage"],
      base: "Pegasus Knight",
      pairings: AWAKE_M,
      stat: { STR: true },
    },
    Gregor: {
      class: ["Mercenary", "Barbarian", "Myrmidon"],
      base: "Mercenary",
      pairings: AWAKE_F,
      stat: { STR: true },
    },
    Nowi: {
      class: ["Manakete", "Mage", "Wyvern Rider"],
      base: "Manakete",
      pairings: AWAKE_M,
      stat: { STR: true, MAG: true },
    },
    Libra: {
      class: ["Priest", "Mage", "Dark Mage"],
      base: "War Priest",
      pairings: AWAKE_F,
      stat: { STR: true, MAG: true },
    },
    Tharja: {
      class: ["Dark Mage", "Knight", "Archer"],
      base: "Dark Mage",
      pairings: AWAKE_M,
      stat: { MAG: true },
    },
    Anna: {
      class: ["Thief", "Archer", "Mage"],
      base: "Trickster",
      pairings: ["Robin (M)"],
      stat: { STR: true, MAG: true },
    },
    Olivia: {
      class: ["Dancer", "Myrmidon", "Pegasus Knight"],
      base: "Dancer",
      pairings: AWAKE_M,
      stat: { STR: true },
    },
    Cherche: {
      class: ["Wyvern Rider", "Troubadour", "Cleric"],
      base: "Wyvern Rider",
      pairings: AWAKE_M,
      stat: { STR: true },
    },
    Henry: {
      class: ["Dark Mage", "Barbarian", "Thief"],
      base: "Dark Mage",
      pairings: AWAKE_F,
      stat: { STR: true, MAG: true },
    },
    "Say'ri": {
      class: ["Myrmidon", "Pegasus Knight", "Wyvern Rider"],
      base: "Swordmaster",
      pairings: ["Robin (M)"],
      stat: { STR: true },
    },
    Tiki: {
      class: ["Manakete", "Wyvern Rider", "Mage"],
      base: "Manakete",
      pairings: ["Robin (M)"],
      stat: { STR: true },
    },
    Basilio: {
      class: ["Fighter", "Barbarian", "Knight"],
      base: "Warrior",
      pairings: ["Robin (F)"],
      stat: { STR: true },
    },
    Flavia: {
      class: ["Mercenary", "Thief", "Knight"],
      base: "Hero",
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
      promo: null,
      stat: { STR: true },
    },
    Tactician: {
      weapons: ["Sword", "Tome"],
      promo: ["Grandmaster"],
      stat: { STR: true, MAG: true },
    },
    Grandmaster: {
      weapons: ["Sword", "Tome"],
      promo: null,
      stat: { STR: true, MAG: true },
    },
    Cavalier: {
      weapons: ["Sword", "Lance"],
      promo: ["Paladin", "Great Knight"],
      stat: { STR: true },
    },
    Paladin: {
      weapons: ["Sword", "Lance"],
      promo: null,
      stat: { STR: true },
    },
    "Great Knight": {
      weapons: ["Sword", "Lance", "Axe"],
      promo: null,
      stat: { STR: true },
    },
    Knight: {
      weapons: ["Lance"],
      promo: ["Great Knight", "General"],
      stat: { STR: true },
    },
    General: {
      weapons: ["Lance", "Axe"],
      promo: null,
      stat: { STR: true },
    },
    Myrmidon: {
      weapons: ["Sword"],
      promo: ["Swordmaster", "Assassin"],
      stat: { STR: true },
    },
    Swordmaster: {
      weapons: ["Sword"],
      promo: null,
      stat: { STR: true },
    },
    Mercenary: {
      weapons: ["Sword"],
      promo: ["Hero", "Bow Knight"],
      stat: { STR: true },
    },
    Hero: {
      weapons: ["Sword", "Axe"],
      promo: null,
      stat: { STR: true },
    },
    Fighter: {
      weapons: ["Axe"],
      promo: ["Hero", "Warrior"],
      stat: { STR: true },
    },
    Warrior: {
      weapons: ["Axe", "Bow"],
      promo: null,
      stat: { STR: true },
    },
    Barbarian: {
      weapons: ["Axe"],
      promo: ["Berserker", "Warrior"],
      stat: { STR: true },
    },
    Berserker: {
      weapons: ["Axe"],
      promo: null,
      stat: { STR: true },
    },
    Archer: {
      weapons: ["Bow"],
      promo: ["Sniper", "Bow Knight"],
      stat: { STR: true },
    },
    Sniper: {
      weapons: ["Bow"],
      promo: null,
      stat: { STR: true },
    },
    "Bow Knight": {
      weapons: ["Sword", "Bow"],
      promo: null,
      stat: { STR: true },
    },
    Thief: {
      weapons: ["Sword"],
      promo: ["Assassin", "Trickster"],
      stat: { STR: true },
    },
    Assassin: {
      weapons: ["Sword", "Bow"],
      promo: null,
      stat: { STR: true },
    },
    Trickster: {
      weapons: ["Sword", "Staff"],
      promo: null,
      stat: { STR: true },
    },
    "Pegasus Knight": {
      weapons: ["Lance"],
      promo: ["Falcon Knight", "Dark Flier"],
      stat: { STR: true },
    },
    "Falcon Knight": {
      weapons: ["Lance", "Staff"],
      promo: null,
      stat: { STR: true },
    },
    "Dark Flier": {
      weapons: ["Lance", "Tome"],
      promo: null,
      stat: { STR: true, MAG: true },
    },
    "Wyvern Rider": {
      weapons: ["Axe"],
      promo: ["Wyvern Lord", "Griffon Rider"],
      stat: { STR: true },
    },
    "Wyvern Lord": {
      weapons: ["Lance", "Axe"],
      promo: null,
      stat: { STR: true },
    },
    "Griffon Rider": {
      weapons: ["Axe"],
      promo: null,
      stat: { STR: true },
    },
    Mage: {
      weapons: ["Tome"],
      promo: ["Sage", "Dark Knight"],
      stat: { MAG: true },
    },
    Sage: {
      weapons: ["Tome", "Staff"],
      promo: null,
      stat: { MAG: true },
    },
    "Dark Mage": {
      weapons: ["Tome"],
      promo: ["Sorcerer", "Dark Knight"],
      stat: { MAG: true },
    },
    Sorcerer: {
      weapons: ["Tome"],
      promo: null,
      stat: { MAG: true },
    },
    "Dark Knight": {
      weapons: ["Sword", "Tome"],
      promo: null,
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
      promo: null,
      stat: { STR: true, MAG: true },
    },
    "War Cleric": {
      weapons: ["Axe", "Staff"],
      promo: null,
      stat: { STR: true, MAG: true },
    },
    Troubadour: {
      weapons: ["Staff"],
      promo: ["War Cleric", "Valkyrie"],
      stat: { MAG: true },
    },
    Valkyrie: {
      weapons: ["Tome", "Staff"],
      promo: null,
      stat: { MAG: true },
    },
    Villager: {
      weapons: ["Lance"],
      promo: ["Fighter", "Mercenary"],
      stat: { STR: true },
    },
    Dancer: {
      weapons: ["Sword"],
      promo: null,
      stat: { STR: true },
    },
    Taguel: {
      weapons: ["Stone"],
      promo: null,
      stat: { STR: true },
    },
    Manakete: {
      weapons: ["Stone"],
      promo: null,
      stat: { STR: true },
    },
    Lodestar: {
      weapons: ["Sword"],
      promo: null,
      stat: { STR: true },
    },
    "Dread Fighter": {
      weapons: ["Sword", "Axe", "Tome"],
      promo: null,
      stat: { STR: true, MAG: true },
    },
    Bride: {
      weapons: ["Lance", "Bow", "Staff"],
      promo: null,
      stat: { STR: true },
    },
    Soldier: {
      weapons: ["Lance"],
      promo: null,
      stat: { STR: true },
    },
    Merchant: {
      weapons: ["Lance"],
      promo: null,
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
};
