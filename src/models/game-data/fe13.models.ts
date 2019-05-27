import { ClassChangeGame, GameName } from "../game.models";
export type CharacterNameFE13 =
  | "Chrom"
  | "Robin (M)"
  | "Frederick"
  | "Virion"
  | "Stahl"
  | "Vaike"
  | "Kellam"
  | "Donnel"
  | "Lon'qu"
  | "Ricken"
  | "Gaius"
  | "Gregor"
  | "Libra"
  | "Henry"
  | "Basilio"
  | "Robin (F)"
  | "Lissa"
  | "Sully"
  | "Miriel"
  | "Maribelle"
  | "Panne"
  | "Cordelia"
  | "Nowi"
  | "Tharja"
  | "Olivia"
  | "Cherche"
  | "Say'ri"
  | "Sumia"
  | "Flavia"
  | "Tiki"
  | "Anna"
  | "Owain"
  | "Inigo"
  | "Brady"
  | "Gerome"
  | "Morgan (M)"
  | "Yarne"
  | "Laurent"
  | "Lucina"
  | "Kjelle"
  | "Cynthia"
  | "Severa"
  | "Morgan (F)"
  | "Noire"
  | "Nah";
export type ClassNameFE13 =
  | "Lord"
  | "Great Lord"
  | "Tactician"
  | "Grandmaster"
  | "Cavalier"
  | "Paladin"
  | "Great Knight"
  | "Knight"
  | "General"
  | "Myrmidon"
  | "Swordmaster"
  | "Mercenary"
  | "Hero"
  | "Fighter"
  | "Warrior"
  | "Barbarian"
  | "Berserker"
  | "Archer"
  | "Sniper"
  | "Bow Knight"
  | "Thief"
  | "Assassin"
  | "Trickster"
  | "Pegasus Knight"
  | "Falcon Knight"
  | "Dark Flier"
  | "Wyvern Rider"
  | "Wyvern Lord"
  | "Griffon Rider"
  | "Mage"
  | "Sage"
  | "Dark Mage"
  | "Sorcerer"
  | "Dark Knight"
  | "Priest"
  | "Cleric"
  | "War Monk"
  | "War Cleric"
  | "Troubadour"
  | "Valkyrie"
  | "Villager"
  | "Dancer"
  | "Taguel"
  | "Manakete"
  | "Lodestar"
  | "Dread Fighter"
  | "Bride"
  | "Soldier"
  | "Merchant";

// lists for pairings
const PAIRABLE_MALES: ReadonlyArray<CharacterNameFE13> = [
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
const PAIRABLE_FEMALES: ReadonlyArray<CharacterNameFE13> = [
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
const MALE_CHILDREN: ReadonlyArray<CharacterNameFE13> = [
  "Owain",
  "Inigo",
  "Brady",
  "Gerome",
  "Morgan (M)",
  "Yarne",
  "Laurent",
];
const FEMALE_CHILDREN: ReadonlyArray<CharacterNameFE13> = [
  "Lucina",
  "Kjelle",
  "Cynthia",
  "Severa",
  "Morgan (F)",
  "Noire",
  "Nah",
];

function AWAKENING_inheritClasses(
  game: ClassChangeGame<CharacterNameFE13, ClassNameFE13>,
  picks: { pairings: { [name in CharacterNameFE13]?: CharacterNameFE13 } },
  to: CharacterNameFE13
): ReadonlyArray<ClassNameFE13> {
  const pairings = picks.pairings;

  // only kids inherit in awakening
  const parent = game.characters[to].parent;
  if (!parent) {
    return game.characters[to].class;
  }

  // only other parent, since base is included in class pool
  const from = pairings[parent];
  if (!from) {
    return game.characters[to].class;
  }

  const ownClasses = game.characters[to].class.slice();
  const inheritedClasses = game.characters[from].class.slice().map(cl => {
    // replace wrong-gendered classes
    // girls:
    if (FEMALE_CHILDREN.includes(to)) {
      switch (cl) {
        case "Priest":
          return "Cleric";
        case "Villager":
          return "Troubadour";
        case "Barbarian":
          return from === "Vaike" ? "Knight" : "Troubadour";
        case "Fighter":
          return from === "Vaike" ? "Mercenary" : "Pegasus Knight";
      }
    }
    // boys don't need this, because the changes are already reflected in their personal pools
    return cl;
  });

  return [...ownClasses, ...inheritedClasses.filter(cl => cl !== "Lord")];
}
export const fe13: ClassChangeGame<CharacterNameFE13, ClassNameFE13> = {
  short: GameName.FE13,
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
      pairings: PAIRABLE_MALES,
      stat: { MAG: true },
    },
    Frederick: {
      class: ["Cavalier", "Knight", "Wyvern Rider"],
      base: "Great Knight",
      pairings: PAIRABLE_FEMALES,
      stat: { STR: true },
    },
    Sully: {
      class: ["Cavalier", "Myrmidon", "Wyvern Rider"],
      base: "Cavalier",
      pairings: PAIRABLE_MALES,
      stat: { STR: true },
    },
    Virion: {
      class: ["Archer", "Wyvern Rider", "Mage"],
      base: "Archer",
      pairings: PAIRABLE_FEMALES,
      stat: { STR: true },
    },
    Stahl: {
      class: ["Cavalier", "Archer", "Myrmidon"],
      base: "Cavalier",
      pairings: PAIRABLE_FEMALES,
      stat: { STR: true },
    },
    Vaike: {
      class: ["Fighter", "Thief", "Barbarian"],
      base: "Fighter",
      pairings: PAIRABLE_FEMALES,
      stat: { STR: true },
    },
    Miriel: {
      class: ["Mage", "Troubadour", "Dark Mage"],
      base: "Mage",
      pairings: PAIRABLE_MALES,
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
      pairings: PAIRABLE_FEMALES,
      stat: { STR: true },
    },
    Donnel: {
      class: ["Villager", "Fighter", "Mercenary"],
      base: "Hero", // hardcoded cos there's no troll Donnel
      pairings: PAIRABLE_FEMALES,
      stat: { STR: true },
    },
    "Lon'qu": {
      class: ["Myrmidon", "Thief", "Wyvern Rider"],
      base: "Myrmidon",
      pairings: PAIRABLE_FEMALES,
      stat: { STR: true },
    },
    Ricken: {
      class: ["Mage", "Cavalier", "Archer"],
      base: "Mage",
      pairings: PAIRABLE_FEMALES,
      stat: { MAG: true },
    },
    Maribelle: {
      class: ["Troubadour", "Pegasus Knight", "Mage"],
      base: "Troubadour",
      pairings: PAIRABLE_MALES,
      stat: { MAG: true },
    },
    Panne: {
      class: ["Taguel", "Thief", "Wyvern Rider"],
      base: "Taguel",
      pairings: PAIRABLE_MALES,
      stat: { STR: true },
    },
    Gaius: {
      class: ["Thief", "Fighter", "Myrmidon"],
      base: "Thief",
      pairings: [...PAIRABLE_FEMALES, "Sumia"],
      stat: { STR: true },
    },
    Cordelia: {
      class: ["Pegasus Knight", "Mercenary", "Dark Mage"],
      base: "Pegasus Knight",
      pairings: PAIRABLE_MALES,
      stat: { STR: true },
    },
    Gregor: {
      class: ["Mercenary", "Barbarian", "Myrmidon"],
      base: "Mercenary",
      pairings: PAIRABLE_FEMALES,
      stat: { STR: true },
    },
    Nowi: {
      class: ["Manakete", "Mage", "Wyvern Rider"],
      base: "Manakete",
      pairings: PAIRABLE_MALES,
      stat: { STR: true, MAG: true },
    },
    Libra: {
      class: ["Priest", "Mage", "Dark Mage"],
      base: "War Monk",
      pairings: PAIRABLE_FEMALES,
      stat: { STR: true, MAG: true },
    },
    Tharja: {
      class: ["Dark Mage", "Knight", "Archer"],
      base: "Dark Mage",
      pairings: PAIRABLE_MALES,
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
      pairings: PAIRABLE_MALES,
      stat: { STR: true },
    },
    Cherche: {
      class: ["Wyvern Rider", "Troubadour", "Cleric"],
      base: "Wyvern Rider",
      pairings: PAIRABLE_MALES,
      stat: { STR: true },
    },
    Henry: {
      class: ["Dark Mage", "Barbarian", "Thief"],
      base: "Dark Mage",
      pairings: PAIRABLE_FEMALES,
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
    Lucina: {
      class: ["Lord", "Cavalier", "Archer"],
      base: "Lord",
      stat: { STR: true },
      pairings: MALE_CHILDREN,
      parent: "Chrom",
    },
    Owain: {
      class: ["Myrmidon", "Priest", "Barbarian"],
      base: "Myrmidon",
      stat: { STR: true },
      pairings: FEMALE_CHILDREN,
      parent: "Lissa",
    },
    Inigo: {
      class: ["Mercenary", "Myrmidon", "Barbarian"],
      base: "Mercenary",
      stat: { STR: true, MAG: true },
      pairings: FEMALE_CHILDREN,
      parent: "Olivia",
    },
    Brady: {
      class: ["Priest", "Cavalier", "Mage"],
      base: "Priest",
      stat: { STR: true, MAG: true },
      pairings: FEMALE_CHILDREN,
      parent: "Maribelle",
    },
    Kjelle: {
      class: ["Knight", "Myrmidon", "Cavalier", "Wyvern Rider"],
      base: "Knight",
      stat: { STR: true },
      pairings: MALE_CHILDREN,
      parent: "Sully",
    },
    Cynthia: {
      class: ["Pegasus Knight", "Knight", "Cleric"],
      base: "Pegasus Knight",
      stat: { STR: true },
      pairings: MALE_CHILDREN,
      parent: "Sumia",
    },
    Severa: {
      class: ["Mercenary", "Pegasus Knight", "Dark Mage"],
      base: "Mercenary",
      stat: { STR: true },
      pairings: MALE_CHILDREN,
      parent: "Cordelia",
    },
    Gerome: {
      class: ["Wyvern Rider", "Fighter", "Priest"],
      base: "Wyvern Rider",
      stat: { STR: true },
      pairings: FEMALE_CHILDREN,
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
      base: "Tactician",
      stat: { STR: true, MAG: true },
      parent: "Robin (M)",
      exclude: ["Morgan (M)"],
      pairings: MALE_CHILDREN,
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
      base: "Tactician",
      stat: { STR: true, MAG: true },
      parent: "Robin (F)",
      exclude: ["Morgan (F)"],
      pairings: FEMALE_CHILDREN,
    },
    Yarne: {
      class: ["Taguel", "Thief", "Barbarian"],
      base: "Taguel",
      stat: { STR: true },
      pairings: FEMALE_CHILDREN,
      parent: "Panne",
    },
    Laurent: {
      class: ["Mage", "Barbarian", "Dark Mage"],
      base: "Mage",
      stat: { MAG: true },
      pairings: FEMALE_CHILDREN,
      parent: "Miriel",
    },
    Noire: {
      class: ["Archer", "Knight", "Dark Mage"],
      base: "Archer",
      stat: { STR: true, MAG: true },
      pairings: MALE_CHILDREN,
      parent: "Tharja",
    },
    Nah: {
      class: ["Manakete", "Wyvern Rider", "Mage"],
      base: "Manakete",
      stat: { STR: true, MAG: true },
      pairings: MALE_CHILDREN,
      parent: "Nowi",
    },
  },
  children: [...MALE_CHILDREN, ...FEMALE_CHILDREN],
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
};
