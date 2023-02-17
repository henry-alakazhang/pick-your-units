import { Game } from "./data.types";

interface FatesGame {
  ClassName: keyof typeof CLASSES;
  // FIXME: properly type this mess
  CharacterName: string;
  ChildCharacterName: string;
  Pairings: true;
}

// RX is royals since you can't pair them together.
const M = ["Jakob", "Silas", "Kaze", "Corrin (M)"];
const F = ["Felicia", "Azura", "Mozu", "Corrin (F)"];
const CM = ["Kana (M)", "Shigure", "Dwyer"];
const CF = ["Sophie", "Midori"];
const BR_M = ["Saizo", "Kaden", "Hinata", "Azama", "Subaki", "Hayato"];
const BR_RM = ["Ryoma", "Takumi"];
const BR_AM = [...M, ...BR_M, ...BR_RM];
const BR_F = ["Rinkah", "Orochi", "Kagero", "Hana", "Setsuna", "Oboro"];
const BR_RF = ["Hinoka", "Sakura"];
const BR_AF = [...F, ...BR_F, ...BR_RF];
const BR_CM = ["Shiro", "Kiragi", "Asugi", "Hisame"];
const BR_CF = ["Selkie", "Mitama", "Caeldori", "Rhajat"];
const BR_ACM = [...CM, ...BR_CM];
const BR_ACF = [...CF, ...BR_CF];
const CQ_M = ["Benny", "Keaton", "Arthur", "Odin", "Laslow", "Niles"];
const CQ_RM = ["Xander", "Leo"];
const CQ_AM = [...M, ...CQ_M, ...CQ_RM];
const CQ_F = ["Charlotte", "Effie", "Peri", "Beruka", "Selena", "Nyx"];
const CQ_RF = ["Camilla", "Elise"];
const CQ_AF = [...F, ...CQ_F, ...CQ_RF];
const CQ_CM = ["Siegbert", "Forrest", "Ignatius", "Percy"];
const CQ_CF = ["Velouria", "Ophelia", "Soleil", "Nina"];
const CQ_ACM = [...CM, ...CQ_CM];
const CQ_ACF = [...CF, ...CQ_CF];
const RV_AM = [...BR_AM, ...CQ_AM];
const RV_AF = [...BR_AF, ...CQ_AF];
const RV_ACM = [...BR_ACM, ...CQ_ACM];
const RV_ACF = [...BR_ACF, ...CQ_ACF];

// inherits from one character to another's pool
// TODO: fix genderlocked classes (Maid/Butler, Monk/Shrine Maiden)
const _inheritClassesInternal = function(game, classes, from) {
  const parallel = {
    Cavalier: "Ninja",
    Knight: "Spear Fighter",
    Fighter: "Oni Savage",
    Mercenary: "Samurai",
    Outlaw: "Archer",
    Samurai: "Mercenary",
    "Oni Savage": "Fighter",
    "Spear Fighter": "Knight",
    Diviner: "Dark Mage",
    "Sky Knight": "Wyvern Rider",
    Archer: "Outlaw",
    "Wyvern Rider": "Sky Knight",
    Ninja: "Cavalier",
    "Dark Mage": "Diviner",
    Wolfskin: "Outlaw",
    Kitsune: "Apothecary",
    Songstress: "Troubadour (F)",
    Villager: "Apothecary",
  };

  const char = game.characters[from] || game.children[from];
  const inherit = char.class;
  const uninheritable = [
    "Nohr Prince",
    "Songstress",
    "Kitsune",
    "Wolfskin",
    "Villager",
  ];

  // if first slot is uninheritable class
  if (uninheritable.includes(inherit[0])) {
    // try giving second class
    if (inherit[1] && classes[0] !== inherit[1]) {
      classes.push(inherit[1]);
    } else {
      // use parallel class instead
      if (inherit[0] !== "Nohr Prince") {
        if (parallel[inherit[0]])
          // some classes have no parallel - sucked in
          classes.push(parallel[inherit[0]]);
      } else if (inherit[1]) {
        classes.push(parallel[inherit[1]]);
      }
    }
  } else {
    if (classes[0] !== inherit[0]) {
      classes.push(inherit[0]);
    } else {
      classes.push(inherit[1]);
    }
  }
  return classes;
};

const inheritClasses = function(game, picks, to) {
  const char = game.characters[to] || game.children[to];
  let classes = char.class.slice();

  // inherit from parent (if exists);
  if (game.children[to]) {
    const parent1 = game.children[to].parent;
    const parent2 = picks.pairings[parent1];
    // inherit from main parent if not automated (Kana only)
    if (parent1 && classes.length === 1)
      _inheritClassesInternal(game, classes, parent1);
    if (parent2) _inheritClassesInternal(game, classes, parent2);
  }

  // inherit from partner (if exists)
  if (picks.pairings[to]) {
    _inheritClassesInternal(game, classes, picks.pairings[to]);
  }

  if (picks.options["friends"] && picks.friends[to]) {
    _inheritClassesInternal(game, classes, picks.friends[to]);
  }

  return classes;
};

const CLASSES = {
  Samurai: {
    weapons: ["Sword"],
    promo: ["Swordmaster", "Master of Arms"],
    stat: { STR: true },
  },
  Villager: {
    weapons: ["Lance"],
    promo: ["Master of Arms", "Merchant"],
    stat: { STR: true },
  },
  Apothecary: {
    weapons: ["Bow"],
    promo: ["Merchant", "Mechanist"],
    stat: { STR: true },
  },
  Ninja: {
    weapons: ["Kunai"],
    promo: ["Mechanist", "Master Ninja"],
    stat: { STR: true },
  },
  "Oni Savage": {
    weapons: ["Axe"],
    promo: ["Oni Chieftain", "Blacksmith"],
    stat: { STR: true },
  },
  "Spear Fighter": {
    weapons: ["Lance"],
    promo: ["Spear Master", "Basara"],
    stat: { STR: true },
  },
  Diviner: {
    weapons: ["Tome"],
    promo: ["Basara", "Onmyoji"],
    stat: { MAG: true },
  },
  Monk: {
    weapons: ["Staff"],
    promo: ["Onmyoji", "Great Master"],
    stat: { MAG: true },
  },
  "Shrine Maiden": {
    weapons: ["Staff"],
    promo: ["Onmyoji", "Priestess"],
    stat: { MAG: true },
  },
  "Sky Knight": {
    weapons: ["Lance"],
    promo: ["Falcon Knight", "Kinshi Knight"],
    stat: { STR: true },
  },
  Archer: {
    weapons: ["Bow"],
    promo: ["Kinshi Knight", "Sniper"],
    stat: { STR: true },
  },
  Kitsune: {
    weapons: ["Stone"],
    promo: ["Ninetails"],
    stat: { STR: true },
  },
  Songstress: {
    weapons: ["Lance"],
    stat: { STR: true },
  },
  "Hoshido Noble": {
    weapons: ["Sword", "Staff", "Stone"],
    stat: { STR: true, MAG: true },
  },
  Swordmaster: {
    weapons: ["Sword"],
    stat: { STR: true },
  },
  "Master of Arms": {
    weapons: ["Sword", "Lance", "Axe"],
    stat: { STR: true },
  },
  Merchant: {
    weapons: ["Lance", "Bow"],
    stat: { STR: true },
  },
  Mechanist: {
    weapons: ["Kunai", "Bow"],
    stat: { STR: true },
  },
  "Master Ninja": {
    weapons: ["Sword", "Kunai"],
    stat: { STR: true },
  },
  "Oni Chieftain": {
    weapons: ["Axe", "Tome"],
    stat: { STR: true },
  },
  Blacksmith: {
    weapons: ["Sword", "Axe"],
    stat: { STR: true },
  },
  "Spear Master": {
    weapons: ["Lance"],
    stat: { STR: true },
  },
  Basara: {
    weapons: ["Lance", "Tome"],
    stat: { STR: true, MAG: true },
  },
  Onmyoji: {
    weapons: ["Tome", "Staff"],
    stat: { MAG: true },
  },
  "Great Master": {
    weapons: ["Lance", "Staff"],
    stat: { STR: true, MAG: true },
  },
  Priestess: {
    weapons: ["Bow", "Staff"],
    stat: { STR: true, MAG: true },
  },
  "Falcon Knight": {
    weapons: ["Lance", "Staff"],
    stat: { STR: true },
  },
  "Kinshi Knight": {
    weapons: ["Lance", "Bow"],
    stat: { STR: true },
  },
  Sniper: {
    weapons: ["Bow"],
    stat: { STR: true },
  },
  Ninetails: {
    weapons: ["Stone"],
    stat: { STR: true },
  },
  Cavalier: {
    weapons: ["Sword", "Lance"],
    promo: ["Paladin", "Great Knight"],
    stat: { STR: true },
  },
  Knight: {
    weapons: ["Lance"],
    promo: ["General", "Great Knight"],
    stat: { STR: true },
  },
  Fighter: {
    weapons: ["Axe"],
    promo: ["Berserker", "Hero"],
    stat: { STR: true },
  },
  Mercenary: {
    weapons: ["Sword"],
    promo: ["Hero", "Bow Knight"],
    stat: { STR: true },
  },
  Outlaw: {
    weapons: ["Bow"],
    promo: ["Bow Knight", "Adventurer"],
    stat: { STR: true },
  },
  "Wyvern Rider": {
    weapons: ["Axe"],
    promo: ["Wyvern Lord", "Malig Knight"],
    stat: { STR: true },
  },
  "Dark Mage": {
    weapons: ["Tome"],
    promo: ["Sorcerer", "Dark Knight"],
    stat: { MAG: true },
  },
  "Troubadour (M)": {
    weapons: ["Staff"],
    promo: ["Strategist", "Butler"],
    stat: { MAG: true },
  },
  "Troubadour (F)": {
    weapons: ["Staff"],
    promo: ["Strategist", "Maid"],
    stat: { MAG: true },
  },
  Wolfskin: {
    weapons: ["Stone"],
    promo: ["Wolfssegner"],
    stat: { STR: true },
  },
  "Nohr Noble": {
    weapons: ["Sword", "Tome", "Stone"],
    stat: { STR: true, MAG: true },
  },
  Paladin: {
    weapons: ["Sword", "Lance"],
    stat: { STR: true },
  },
  "Great Knight": {
    weapons: ["Sword", "Lance", "Axe"],
    stat: { STR: true },
  },
  General: {
    weapons: ["Lance", "Axe"],
    stat: { STR: true },
  },
  Berserker: {
    weapons: ["Axe"],
    stat: { STR: true },
  },
  Hero: {
    weapons: ["Sword", "Axe"],
    stat: { STR: true },
  },
  "Bow Knight": {
    weapons: ["Sword", "Bow"],
    stat: { STR: true },
  },
  Adventurer: {
    weapons: ["Bow", "Staff"],
    stat: { STR: true },
  },
  "Wyvern Lord": {
    weapons: ["Lance", "Axe"],
    stat: { STR: true },
  },
  "Malig Knight": {
    weapons: ["Axe", "Tome"],
    stat: { STR: true, MAG: true },
  },
  Sorcerer: {
    weapons: ["Tome"],
    stat: { MAG: true },
  },
  "Dark Knight": {
    weapons: ["Sword", "Tome"],
    stat: { STR: true, MAG: true },
  },
  Strategist: {
    weapons: ["Tome", "Staff"],
    stat: { MAG: true },
  },
  Butler: {
    weapons: ["Kunai", "Staff"],
    stat: { STR: true, MAG: true },
  },
  Maid: {
    weapons: ["Kunai", "Staff"],
    stat: { STR: true, MAG: true },
  },
  Wolfssegner: {
    weapons: ["Stone"],
    stat: { STR: true },
  },
  "Nohr Prince (Nohr)": {
    weapons: ["Sword", "Stone"],
    promo: ["Nohr Noble"],
    stat: { STR: true, MAG: true },
  },
  "Nohr Prince (Hoshido)": {
    weapons: ["Sword", "Stone"],
    promo: ["Hoshido Noble"],
    stat: { STR: true, MAG: true },
  },
  "Nohr Prince (Smash Bros)": {
    weapons: ["Sword", "Stone"],
    promo: ["Nohr Noble", "Hoshido Noble"],
    stat: { STR: true, MAG: true },
  },
} as const;

export const fe14br: Game<FatesGame> = {
  short: "fe14",
  inheritClasses: inheritClasses,
  characters: {
    "Corrin (M)": {
      class: [
        "Nohr Prince (Hoshido)",
        "Samurai",
        "Villager",
        "Apothecary",
        "Ninja",
        "Oni Savage",
        "Spear Fighter",
        "Diviner",
        "Monk",
        "Sky Knight",
        "Archer",
        "Cavalier",
        "Knight",
        "Fighter",
        "Mercenary",
        "Outlaw",
        "Wyvern Rider",
        "Dark Mage",
        "Troubadour (M)",
      ],
      defaultClass: "Nohr Prince (Hoshido)",
      pairings: [...BR_AF, "Scarlet", "Reina"],
      stat: { STR: true, MAG: true },
    },
    "Corrin (F)": {
      class: [
        "Nohr Prince (Hoshido)",
        "Samurai",
        "Villager",
        "Apothecary",
        "Ninja",
        "Oni Savage",
        "Spear Fighter",
        "Diviner",
        "Shrine Maiden",
        "Sky Knight",
        "Archer",
        "Cavalier",
        "Knight",
        "Fighter",
        "Mercenary",
        "Outlaw",
        "Wyvern Rider",
        "Dark Mage",
        "Troubadour (F)",
      ],
      defaultClass: "Nohr Prince (Hoshido)",
      pairings: [...BR_AM, "Yukimura", "Shura", "Izana"],
      stat: { STR: true, MAG: true },
    },
    Felicia: {
      class: ["Troubadour (F)", "Mercenary"],
      defaultClass: "Maid",
      pairings: BR_AM,
      friends: ["Hana"],
      stat: { MAG: true },
    },
    Jakob: {
      class: ["Troubadour (M)", "Cavalier"],
      defaultClass: "Butler",
      pairings: BR_AF,
      friends: ["Silas", "Takumi"],
      stat: { STR: true },
    },
    Kaze: {
      class: ["Ninja", "Samurai"],
      defaultClass: "Ninja",
      pairings: BR_AF,
      friends: ["Saizo", "Silas"],
      stat: { STR: true },
    },
    Azura: {
      class: ["Songstress", "Sky Knight"],
      defaultClass: "Songstress",
      pairings: BR_AM,
      friends: ["Hinoka", "Sakura"],
      stat: { STR: true },
    },
    Silas: {
      class: ["Cavalier", "Mercenary"],
      defaultClass: "Cavalier",
      pairings: BR_AF,
      friends: ["Ryoma", "Jakob", "Kaze"],
      stat: { STR: true },
    },
    Shura: {
      class: ["Outlaw", "Ninja", "Fighter"],
      defaultClass: "Adventurer",
      pairings: ["Corrin (F)"],
      stat: { STR: true },
    },
    Mozu: {
      class: ["Villager", "Archer"],
      defaultClass: "Villager",
      pairings: BR_AM,
      friends: ["Oboro"],
      stat: { STR: true },
    },
    Rinkah: {
      class: ["Oni Savage", "Ninja"],
      defaultClass: "Oni Savage",
      pairings: BR_AM,
      friends: ["Orochi", "Kagero", "Oboro"],
      stat: { STR: true },
    },
    Sakura: {
      class: ["Shrine Maiden", "Sky Knight"],
      defaultClass: "Shrine Maiden",
      pairings: [...M, ...BR_M],
      friends: ["Hinoka", "Hana", "Azura"],
      stat: { STR: true, MAG: true },
    },
    Hana: {
      class: ["Samurai", "Shrine Maiden"],
      defaultClass: "Samurai",
      pairings: BR_AM,
      friends: ["Sakura", "Setsuna"],
      stat: { STR: true },
    },
    Subaki: {
      class: ["Sky Knight", "Samurai"],
      defaultClass: "Sky Knight",
      pairings: BR_AF,
      friends: ["Azama", "Saizo", "Hinata"],
      stat: { STR: true },
    },
    Saizo: {
      class: ["Ninja", "Samurai"],
      defaultClass: "Ninja",
      pairings: BR_AF,
      friends: ["Ryoma", "Subaki", "Kaze"],
      stat: { STR: true, MAG: true },
    },
    Orochi: {
      class: ["Diviner", "Apothecary"],
      defaultClass: "Diviner",
      pairings: BR_AM,
      friends: ["Rinkah", "Kagero", "Oboro"],
      stat: { MAG: true },
    },
    Hinoka: {
      class: ["Sky Knight", "Spear Fighter"],
      defaultClass: "Sky Knight",
      pairings: [...M, ...BR_M],
      friends: ["Sakura", "Setsuna", "Azura"],
      stat: { STR: true },
    },
    Azama: {
      class: ["Monk", "Apothecary"],
      defaultClass: "Monk",
      pairings: BR_AF,
      friends: ["Kaden", "Subaki", "Hayato"],
      stat: { STR: true },
    },
    Setsuna: {
      class: ["Archer", "Ninja"],
      defaultClass: "Archer",
      pairings: BR_AM,
      friends: ["Hinoka", "Kagero", "Hana"],
      stat: { STR: true },
    },
    Hayato: {
      class: ["Diviner", "Oni Savage"],
      defaultClass: "Diviner",
      pairings: BR_AF,
      friends: ["Kaden", "Azama"],
      stat: { STR: true, MAG: true },
    },
    Oboro: {
      class: ["Spear Fighter", "Apothecary"],
      defaultClass: "Spear Fighter",
      pairings: BR_AM,
      friends: ["Orochi", "Rinkah", "Mozu"],
      stat: { STR: true },
    },
    Hinata: {
      class: ["Samurai", "Oni Savage"],
      defaultClass: "Samurai",
      pairings: BR_AF,
      friends: ["Takumi", "Kaden", "Subaki"],
      stat: { STR: true },
    },
    Takumi: {
      class: ["Archer", "Spear Fighter"],
      defaultClass: "Archer",
      pairings: [...F, ...BR_F],
      friends: ["Ryoma", "Hinata", "Jakob"],
      stat: { STR: true },
    },
    Kagero: {
      class: ["Ninja", "Diviner"],
      defaultClass: "Ninja",
      pairings: BR_AM,
      friends: ["Orochi", "Rinkah", "Setsuna"],
      stat: { STR: true },
    },
    Reina: {
      class: ["Sky Knight", "Diviner", "Ninja"],
      defaultClass: "Kinshi Knight",
      pairings: ["Corrin (M)"],
      stat: { STR: true },
    },
    Kaden: {
      class: ["Kitsune", "Diviner"],
      defaultClass: "Kitsune",
      pairings: BR_AF,
      friends: ["Hinata", "Azama", "Hayato"],
      stat: { STR: true },
    },
    Ryoma: {
      class: ["Samurai", "Sky Knight"],
      defaultClass: "Swordmaster",
      pairings: [...F, ...BR_F],
      friends: ["Saizo", "Silas", "Takumi"],
      stat: { STR: true },
    },
    Izana: {
      class: ["Monk", "Samurai", "Apothecary"],
      defaultClass: "Onmyoji",
      pairings: ["Corrin (F)"],
      stat: { MAG: true },
    },
    Scarlet: {
      class: ["Wyvern Rider", "Outlaw", "Knight"],
      defaultClass: "Wyvern Rider",
      pairings: ["Corrin (M)"],
      stat: { STR: true },
    },
    Yukimura: {
      class: ["Apothecary", "Samurai", "Monk"],
      defaultClass: "Mechanist",
      pairings: ["Corrin (F)"],
      stat: { STR: true },
    },
  },
  children: {
    "Kana (M)": {
      defaultClass: "Nohr Prince (Hoshido)",
      class: ["Nohr Prince (Hoshido)"],
      pairings: BR_ACF,
      friends: ["Shiro"],
      stat: { STR: true, MAG: true },
      parent: "Corrin (F)",
    },
    "Kana (F)": {
      defaultClass: "Nohr Prince (Hoshido)",
      class: ["Nohr Prince (Hoshido)"],
      pairings: BR_ACM,
      friends: ["Midori", "Mitama", "Selkie"],
      stat: { STR: true, MAG: true },
      parent: "Corrin (M)",
    },
    Shigure: {
      defaultClass: "Sky Knight",
      class: ["Sky Knight", "Troubadour (M)"],
      pairings: BR_ACF,
      friends: ["Hisame"],
      stat: { STR: true },
      parent: "Azura",
    },
    Dwyer: {
      defaultClass: "Troubadour (M)",
      class: ["Troubadour (F)", "Cavalier"],
      pairings: BR_ACF,
      friends: ["Asugi", "Kiragi"],
      stat: { STR: true },
      parent: "Jakob",
    },
    Sophie: {
      defaultClass: "Cavalier",
      class: ["Cavalier", "Mercenary"],
      pairings: BR_ACM,
      friends: ["Caeldori"],
      stat: { STR: true },
      parent: "Silas",
    },
    Midori: {
      defaultClass: "Apothecary",
      class: ["Apothecary", "Ninja"],
      pairings: BR_ACM,
      friends: ["Selkie", "Kana (F)"],
      stat: { STR: true },
      parent: "Kaze",
    },
    Shiro: {
      defaultClass: "Spear Fighter",
      class: ["Spear Fighter", "Samurai"],
      pairings: BR_ACF,
      friends: ["Kiragi", "Asugi", "Kana (M)"],
      stat: { STR: true },
      parent: "Ryoma",
    },
    Kiragi: {
      defaultClass: "Archer",
      class: ["Archer", "Spear Fighter"],
      pairings: BR_ACF,
      friends: ["Shiro", "Hisame", "Dwyer"],
      stat: { STR: true },
      parent: "Takumi",
    },
    Asugi: {
      defaultClass: "Ninja",
      class: ["Ninja", "Samurai"],
      pairings: BR_ACF,
      friends: ["Shiro", "Hisame", "Dwyer"],
      stat: { STR: true, MAG: true },
      parent: "Saizo",
    },
    Selkie: {
      defaultClass: "Kitsune",
      class: ["Kitsune", "Diviner"],
      pairings: BR_ACM,
      friends: ["Rhajat", "Midori", "Kana (F)"],
      stat: { STR: true },
      parent: "Kaden",
    },
    Hisame: {
      defaultClass: "Samurai",
      class: ["Samurai", "Oni Savage"],
      pairings: BR_ACF,
      friends: ["Kiragi", "Asugi", "Shigure"],
      stat: { STR: true },
      parent: "Hinata",
    },
    Mitama: {
      defaultClass: "Shrine Maiden",
      class: ["Shrine Maiden", "Apothecary"],
      pairings: BR_ACM,
      friends: ["Caeldori", "Rhajat", "Kana (F)"],
      stat: { STR: true, MAG: true },
      parent: "Azama",
    },
    Caeldori: {
      defaultClass: "Sky Knight",
      class: ["Sky Knight", "Samurai"],
      pairings: BR_ACM,
      friends: ["Mitama", "Rhajat", "Sophie"],
      stat: { STR: true },
      parent: "Subaki",
    },
    Rhajat: {
      defaultClass: "Diviner",
      class: ["Diviner", "Oni Savage"],
      pairings: [...BR_ACM, "Corrin (F)"],
      friends: ["Caeldori", "Mitama", "Selkie"],
      stat: { MAG: true },
      parent: "Hayato",
    },
  },
  classes: CLASSES,
  free: [],
  avatar: "Corrin",
  flags: {
    pairings: true,
    friends: true,
    onlypairs: true,
    children: true,
    classes: true,
    troll: true,
  },
  trollCriteria: [
    "MAG classes for a STR-based character and vice versa.",
    "Classes that require going through E-rank hell",
  ],
  defaultPicks: 14,
};

export const fe14cq: Game<FatesGame> = {
  short: "fe14",
  inheritClasses: inheritClasses,
  characters: {
    "Corrin (M)": {
      class: [
        "Nohr Prince (Nohr)",
        "Samurai",
        "Villager",
        "Apothecary",
        "Ninja",
        "Oni Savage",
        "Spear Fighter",
        "Diviner",
        "Monk",
        "Sky Knight",
        "Archer",
        "Cavalier",
        "Knight",
        "Fighter",
        "Mercenary",
        "Outlaw",
        "Wyvern Rider",
        "Dark Mage",
        "Troubadour (M)",
      ],
      defaultClass: "Nohr Prince (Nohr)",
      pairings: [...CQ_AF, "Niles", "Flora"],
      stat: { STR: true, MAG: true },
    },
    "Corrin (F)": {
      class: [
        "Nohr Prince (Nohr)",
        "Samurai",
        "Villager",
        "Apothecary",
        "Ninja",
        "Oni Savage",
        "Spear Fighter",
        "Diviner",
        "Shrine Maiden",
        "Sky Knight",
        "Archer",
        "Cavalier",
        "Knight",
        "Fighter",
        "Mercenary",
        "Outlaw",
        "Wyvern Rider",
        "Dark Mage",
        "Troubadour (F)",
      ],
      defaultClass: "Nohr Prince (Nohr)",
      pairings: [...CQ_AM, "Gunter", "Shura", "Izana"],
      stat: { STR: true, MAG: true },
    },
    Felicia: {
      class: ["Troubadour (F)", "Mercenary"],
      defaultClass: "Maid",
      pairings: CQ_AM,
      friends: ["Peri", "Flora"],
      stat: { MAG: true },
    },
    Jakob: {
      class: ["Troubadour (M)", "Cavalier"],
      defaultClass: "Butler",
      pairings: CQ_AF,
      friends: ["Gunter", "Silas"],
      stat: { STR: true },
    },
    Kaze: {
      class: ["Ninja", "Samurai"],
      defaultClass: "Ninja",
      pairings: CQ_AF,
      friends: ["Silas", "Xander"],
      stat: { STR: true },
    },
    Azura: {
      class: ["Songstress", "Sky Knight"],
      defaultClass: "Songstress",
      pairings: CQ_AM,
      friends: ["Elise"],
      stat: { STR: true },
    },
    Silas: {
      class: ["Cavalier", "Mercenary"],
      defaultClass: "Cavalier",
      pairings: CQ_AF,
      friends: ["Jakob", "Kaze"],
      stat: { STR: true },
    },
    Shura: {
      class: ["Outlaw", "Ninja", "Fighter"],
      defaultClass: "Adventurer",
      pairings: ["Corrin (F)"],
      stat: { STR: true },
    },
    Mozu: {
      class: ["Villager", "Archer"],
      defaultClass: "Villager",
      pairings: CQ_AM,
      friends: ["Effie", "Nyx"],
      stat: { STR: true },
    },
    Gunter: {
      class: ["Cavalier", "Mercenary", "Wyvern Rider"],
      defaultClass: "Great Knight",
      pairings: ["Corrin (F)"],
      stat: { STR: true },
    },
    Elise: {
      class: ["Troubadour (F)", "Wyvern Rider"],
      defaultClass: "Troubadour (F)",
      pairings: [...M, ...CQ_M],
      friends: ["Camilla", "Azura", "Effie"],
      stat: { MAG: true },
    },
    Arthur: {
      class: ["Fighter", "Cavalier"],
      defaultClass: "Fighter",
      pairings: CQ_AF,
      friends: ["Benny", "Keaton", "Niles"],
      stat: { STR: true },
    },
    Effie: {
      class: ["Knight", "Troubadour (F)"],
      defaultClass: "Knight",
      pairings: CQ_AM,
      friends: ["Elise", "Mozu", "Nyx"],
      stat: { STR: true },
    },
    Odin: {
      class: ["Dark Mage", "Samurai"],
      defaultClass: "Dark Mage",
      pairings: CQ_AF,
      friends: ["Leo", "Laslow", "Niles"],
      stat: { STR: true, MAG: true },
    },
    Niles: {
      class: ["Outlaw", "Dark Mage"],
      defaultClass: "Outlaw",
      pairings: [...CQ_AF, "Corrin (M)"],
      friends: ["Leo", "Odin", "Arthur"],
      stat: { STR: true },
    },
    Nyx: {
      class: ["Dark Mage", "Outlaw"],
      defaultClass: "Dark Mage",
      pairings: CQ_AM,
      friends: ["Mozu", "Charlotte", "Effie"],
      stat: { MAG: true },
    },
    Camilla: {
      class: ["Wyvern Rider", "Dark Mage"],
      defaultClass: "Malig Knight",
      pairings: [...M, ...CQ_M],
      friends: ["Elise", "Beruka", "Selena"],
      stat: { STR: true, MAG: true },
    },
    Selena: {
      class: ["Mercenary", "Sky Knight"],
      defaultClass: "Mercenary",
      pairings: CQ_AM,
      friends: ["Camilla", "Beruka", "Peri"],
      stat: { STR: true },
    },
    Beruka: {
      class: ["Wyvern Rider", "Fighter"],
      defaultClass: "Wyvern Rider",
      pairings: CQ_AM,
      friends: ["Camilla", "Charlotte", "Selena"],
      stat: { STR: true },
    },
    Laslow: {
      class: ["Mercenary", "Ninja"],
      defaultClass: "Mercenary",
      pairings: CQ_AF,
      friends: ["Xander", "Odin", "Keaton"],
      stat: { STR: true },
    },
    Peri: {
      class: ["Cavalier", "Dark Mage"],
      defaultClass: "Cavalier",
      pairings: CQ_AM,
      friends: ["Felicia", "Charlotte", "Selena"],
      stat: { STR: true },
    },
    Benny: {
      class: ["Knight", "Fighter"],
      defaultClass: "Knight",
      pairings: CQ_AF,
      friends: ["Keaton", "Arthur"],
      stat: { STR: true },
    },
    Charlotte: {
      class: ["Fighter", "Troubadour (F)"],
      defaultClass: "Fighter",
      pairings: CQ_AM,
      friends: ["Peri", "Beruka", "Nyx"],
      stat: { STR: true },
    },
    Leo: {
      class: ["Dark Mage", "Troubadour (M)"],
      defaultClass: "Dark Knight",
      pairings: [...F, ...CQ_F],
      friends: ["Xander", "Odin", "Niles"],
      stat: { STR: true, MAG: true },
    },
    Keaton: {
      class: ["Wolfskin", "Fighter"],
      defaultClass: "Wolfskin",
      pairings: CQ_AF,
      friends: ["Benny", "Arthur", "Laslow"],
      stat: { STR: true },
    },
    Xander: {
      class: ["Cavalier", "Wyvern Rider"],
      defaultClass: "Paladin",
      pairings: [...F, ...CQ_F],
      friends: ["Kaze", "Laslow", "Leo"],
      stat: { STR: true },
    },
    Flora: {
      class: ["Troubadour (F)", "Dark Mage", "Mercenary"],
      defaultClass: "Maid",
      pairings: ["Corrin (M)"],
      friends: ["Felicia"],
      stat: { STR: true },
    },
    Izana: {
      class: ["Monk", "Samurai", "Apothecary"],
      defaultClass: "Onmyoji",
      pairings: ["Corrin (F)"],
      stat: { MAG: true },
    },
  },
  children: {
    "Kana (M)": {
      defaultClass: "Nohr Prince (Nohr)",
      class: ["Nohr Prince (Nohr)"],
      pairings: CQ_ACF,
      friends: ["Siegbert", "Percy"],
      stat: { STR: true, MAG: true },
      parent: "Corrin (F)",
    },
    "Kana (F)": {
      defaultClass: "Nohr Prince (Nohr)",
      class: ["Nohr Prince (Nohr)"],
      pairings: CQ_ACM,
      friends: ["Midori", "Velouria"],
      stat: { STR: true, MAG: true },
      parent: "Corrin (M)",
    },
    Shigure: {
      defaultClass: "Sky Knight",
      class: ["Sky Knight", "Troubadour (M)"],
      pairings: CQ_ACF,
      friends: ["Forrest"],
      stat: { STR: true },
      parent: "Azura",
    },
    Dwyer: {
      defaultClass: "Troubadour (M)",
      class: ["Troubadour (M)", "Cavalier"],
      pairings: CQ_ACF,
      friends: ["Percy"],
      stat: { STR: true },
      parent: "Jakob",
    },
    Sophie: {
      defaultClass: "Cavalier",
      class: ["Cavalier", "Mercenary"],
      pairings: CQ_ACM,
      friends: ["Velouria", "Soleil"],
      stat: { STR: true },
      parent: "Silas",
    },
    Midori: {
      defaultClass: "Apothecary",
      class: ["Apothecary", "Ninja"],
      pairings: CQ_ACM,
      friends: ["Kana (F)", "Ophelia"],
      stat: { STR: true },
      parent: "Kaze",
    },
    Siegbert: {
      defaultClass: "Cavalier",
      class: ["Cavalier", "Wyvern Rider"],
      pairings: CQ_ACF,
      friends: ["Kana (M)", "Forrest", "Ignatius"],
      stat: { STR: true },
      parent: "Xander",
    },
    Forrest: {
      defaultClass: "Troubadour (M)",
      class: ["Troubadour (M)", "Dark Mage"],
      pairings: CQ_ACF,
      friends: ["Siegbert", "Shigure", "Ignatius"],
      stat: { MAG: true },
      parent: "Leo",
    },
    Ignatius: {
      defaultClass: "Knight",
      class: ["Knight", "Fighter"],
      pairings: CQ_ACF,
      friends: ["Siegbert", "Forrest", "Percy"],
      stat: { STR: true },
      parent: "Benny",
    },
    Velouria: {
      defaultClass: "Wolfskin",
      class: ["Wolfskin", "Fighter"],
      pairings: CQ_ACM,
      friends: ["Sophie", "Kana (F)", "Nina"],
      stat: { STR: true },
      parent: "Keaton",
    },
    Percy: {
      defaultClass: "Wyvern Rider",
      class: ["Wyvern Rider", "Fighter"],
      pairings: CQ_ACF,
      friends: ["Ignatius", "Dwyer", "Kana (M)"],
      stat: { STR: true },
      parent: "Arthur",
    },
    Ophelia: {
      defaultClass: "Dark Mage",
      class: ["Dark Mage", "Samurai"],
      pairings: CQ_ACM,
      friends: ["Midori", "Soleil"],
      stat: { MAG: true },
      parent: "Odin",
    },
    Soleil: {
      defaultClass: "Mercenary",
      class: ["Mercenary", "Ninja"],
      pairings: CQ_ACM,
      friends: ["Ophelia", "Sophie", "Nina"],
      stat: { STR: true },
      parent: "Laslow",
    },
    Nina: {
      defaultClass: "Outlaw",
      class: ["Outlaw", "Dark Mage"],
      pairings: CQ_ACM,
      friends: ["Soleil", "Velouria"],
      stat: { STR: true },
      parent: "Niles",
    },
  },
  classes: CLASSES,
  free: [],
  avatar: "Corrin",
  flags: {
    pairings: true,
    friends: true,
    onlypairs: true,
    children: true,
    classes: true,
    troll: true,
  },
  trollCriteria: [
    "MAG classes for a STR-based character and vice versa.",
    "Classes that require going through E-rank hell",
  ],
  defaultPicks: 14,
};

export const fe14rev: Game<FatesGame> = {
  short: "fe14",
  inheritClasses: inheritClasses,
  characters: {
    "Corrin (M)": {
      class: [
        "Nohr Prince (Smash Bros)",
        "Samurai",
        "Villager",
        "Apothecary",
        "Ninja",
        "Oni Savage",
        "Spear Fighter",
        "Diviner",
        "Monk",
        "Sky Knight",
        "Archer",
        "Cavalier",
        "Knight",
        "Fighter",
        "Mercenary",
        "Outlaw",
        "Wyvern Rider",
        "Dark Mage",
        "Troubadour (M)",
      ],
      defaultClass: "Nohr Prince (Smash Bros)",
      pairings: [...RV_AF, "Niles", "Reina", "Flora"],
      stat: { STR: true, MAG: true },
    },
    "Corrin (F)": {
      class: [
        "Nohr Prince (Smash Bros)",
        "Samurai",
        "Villager",
        "Apothecary",
        "Ninja",
        "Oni Savage",
        "Spear Fighter",
        "Diviner",
        "Shrine Maiden",
        "Sky Knight",
        "Archer",
        "Cavalier",
        "Knight",
        "Fighter",
        "Mercenary",
        "Outlaw",
        "Wyvern Rider",
        "Dark Mage",
        "Troubadour (F)",
      ],
      defaultClass: "Nohr Prince (Smash Bros)",
      pairings: [...RV_AM, "Shura", "Fuga"],
      stat: { STR: true, MAG: true },
    },
    Felicia: {
      class: ["Troubadour (F)", "Mercenary"],
      defaultClass: "Maid",
      pairings: RV_AM,
      friends: ["Hana", "Peri", "Flora"],
      stat: { MAG: true },
    },
    Jakob: {
      class: ["Troubadour (M)", "Cavalier"],
      defaultClass: "Butler",
      pairings: RV_AF,
      friends: ["Silas", "Takumi"],
      stat: { STR: true },
    },
    Kaze: {
      class: ["Ninja", "Samurai"],
      defaultClass: "Ninja",
      pairings: RV_AF,
      friends: ["Saizo", "Silas", "Xander"],
      stat: { STR: true },
    },
    Azura: {
      class: ["Songstress", "Sky Knight"],
      defaultClass: "Songstress",
      pairings: RV_AM,
      friends: ["Hinoka", "Sakura", "Elise"],
      stat: { STR: true },
    },
    Silas: {
      class: ["Cavalier", "Mercenary"],
      defaultClass: "Cavalier",
      pairings: RV_AF,
      friends: ["Ryoma", "Jakob", "Kaze"],
      stat: { STR: true },
    },
    Shura: {
      class: ["Outlaw", "Ninja", "Fighter"],
      defaultClass: "Adventurer",
      pairings: ["Corrin (F)"],
      stat: { STR: true },
    },
    Mozu: {
      class: ["Villager", "Archer"],
      defaultClass: "Villager",
      pairings: RV_AM,
      friends: ["Oboro", "Effie", "Nyx"],
      stat: { STR: true },
    },
    Gunter: {
      class: ["Cavalier", "Mercenary", "Wyvern Rider"],
      defaultClass: "Great Knight",
      pairings: ["Corrin (F)"],
      stat: { STR: true },
    },
    Elise: {
      class: ["Troubadour (F)", "Wyvern Rider"],
      defaultClass: "Troubadour (F)",
      pairings: [...M, ...CQ_M, ...BR_RM],
      friends: ["Camilla", "Azura", "Effie", "Sakura"],
      stat: { MAG: true },
    },
    Arthur: {
      class: ["Fighter", "Cavalier"],
      defaultClass: "Fighter",
      pairings: [...CQ_AF, "Kagero", "Setsuna"],
      friends: ["Benny", "Keaton", "Niles", "Azama"],
      stat: { STR: true },
    },
    Effie: {
      class: ["Knight", "Troubadour (F)"],
      defaultClass: "Knight",
      pairings: [...CQ_AM, "Hayato", "Azama"],
      friends: ["Elise", "Mozu", "Nyx", "Hana"],
      stat: { STR: true },
    },
    Odin: {
      class: ["Dark Mage", "Samurai"],
      defaultClass: "Dark Mage",
      pairings: [...CQ_AF, "Orochi", "Kagero"],
      friends: ["Leo", "Laslow", "Niles", "Hinata"],
      stat: { STR: true, MAG: true },
    },
    Niles: {
      class: ["Outlaw", "Dark Mage"],
      defaultClass: "Outlaw",
      pairings: [...CQ_AF, "Corrin (M)", "Setsuna", "Oboro"],
      friends: ["Leo", "Odin", "Arthur", "Subaki"],
      stat: { STR: true },
    },
    Nyx: {
      class: ["Dark Mage", "Outlaw"],
      defaultClass: "Dark Mage",
      pairings: [...CQ_AM, "Hayato", "Subaki"],
      friends: ["Mozu", "Charlotte", "Effie", "Orochi"],
      stat: { MAG: true },
    },
    Camilla: {
      class: ["Wyvern Rider", "Dark Mage"],
      defaultClass: "Malig Knight",
      pairings: [...M, ...CQ_M, ...BR_RM],
      friends: ["Elise", "Beruka", "Selena", "Hinoka"],
      stat: { STR: true, MAG: true },
    },
    Selena: {
      class: ["Mercenary", "Sky Knight"],
      defaultClass: "Mercenary",
      pairings: [...CQ_AM, "Subaki", "Hinata"],
      friends: ["Camilla", "Beruka", "Peri", "Setsuna"],
      stat: { STR: true },
    },
    Beruka: {
      class: ["Wyvern Rider", "Fighter"],
      defaultClass: "Wyvern Rider",
      pairings: [...CQ_AM, "Azama", "Saizo"],
      friends: ["Camilla", "Charlotte", "Selena", "Oboro"],
      stat: { STR: true },
    },
    Laslow: {
      class: ["Mercenary", "Ninja"],
      defaultClass: "Mercenary",
      pairings: [...CQ_AF, "Orochi", "Hana"],
      friends: ["Xander", "Odin", "Keaton", "Saizo"],
      stat: { STR: true },
    },
    Peri: {
      class: ["Cavalier", "Dark Mage"],
      defaultClass: "Cavalier",
      pairings: [...CQ_AM, "Hinata", "Kaden"],
      friends: ["Felicia", "Charlotte", "Selena", "Kagero"],
      stat: { STR: true },
    },
    Benny: {
      class: ["Knight", "Fighter"],
      defaultClass: "Knight",
      pairings: [...CQ_AF, "Rinkah", "Oboro"],
      friends: ["Keaton", "Arthur", "Hayato"],
      stat: { STR: true },
    },
    Charlotte: {
      class: ["Fighter", "Troubadour (F)"],
      defaultClass: "Fighter",
      pairings: [...CQ_AM, "Saizo", "Kaden"],
      friends: ["Peri", "Beruka", "Nyx", "Rinkah"],
      stat: { STR: true },
    },
    Leo: {
      class: ["Dark Mage", "Troubadour (M)"],
      defaultClass: "Dark Knight",
      pairings: [...F, ...CQ_F, ...BR_RF],
      friends: ["Xander", "Odin", "Niles", "Takumi"],
      stat: { STR: true, MAG: true },
    },
    Keaton: {
      class: ["Wolfskin", "Fighter"],
      defaultClass: "Wolfskin",
      pairings: [...CQ_AF, "Rinkah", "Hana"],
      friends: ["Benny", "Arthur", "Laslow", "Kaden"],
      stat: { STR: true },
    },
    Xander: {
      class: ["Cavalier", "Wyvern Rider"],
      defaultClass: "Paladin",
      pairings: [...F, ...CQ_F, ...BR_RF],
      friends: ["Kaze", "Laslow", "Leo", "Ryoma"],
      stat: { STR: true },
    },
    Flora: {
      class: ["Troubadour (F)", "Dark Mage", "Mercenary"],
      defaultClass: "Maid",
      pairings: ["Corrin (M)"],
      friends: ["Felicia"],
      stat: { STR: true },
    },
    Rinkah: {
      class: ["Oni Savage", "Ninja"],
      defaultClass: "Oni Savage",
      pairings: [...BR_AM, "Benny", "Keaton"],
      friends: ["Orochi", "Kagero", "Oboro", "Charlotte"],
      stat: { STR: true },
    },
    Sakura: {
      class: ["Shrine Maiden", "Sky Knight"],
      defaultClass: "Shrine Maiden",
      pairings: [...M, ...BR_M, ...CQ_RM],
      friends: ["Hinoka", "Hana", "Azura", "Elise"],
      stat: { STR: true, MAG: true },
    },
    Hana: {
      class: ["Samurai", "Shrine Maiden"],
      defaultClass: "Samurai",
      pairings: [...BR_AM, "Laslow", "Keaton"],
      friends: ["Sakura", "Setsuna", "Effie"],
      stat: { STR: true },
    },
    Subaki: {
      class: ["Sky Knight", "Samurai"],
      defaultClass: "Sky Knight",
      pairings: [...BR_AF, "Selena", "Nyx"],
      friends: ["Azama", "Saizo", "Hinata", "Niles"],
      stat: { STR: true },
    },
    Saizo: {
      class: ["Ninja", "Samurai"],
      defaultClass: "Ninja",
      pairings: [...BR_AF, "Charlotte", "Beruka"],
      friends: ["Ryoma", "Subaki", "Kaze", "Laslow"],
      stat: { STR: true, MAG: true },
    },
    Orochi: {
      class: ["Diviner", "Apothecary"],
      defaultClass: "Diviner",
      pairings: [...BR_AM, "Laslow", "Odin"],
      friends: ["Rinkah", "Kagero", "Oboro", "Nyx"],
      stat: { MAG: true },
    },
    Hinoka: {
      class: ["Sky Knight", "Spear Fighter"],
      defaultClass: "Sky Knight",
      pairings: [...M, ...BR_M, ...CQ_RM],
      friends: ["Sakura", "Setsuna", "Azura", "Camilla"],
      stat: { STR: true },
    },
    Azama: {
      class: ["Monk", "Apothecary"],
      defaultClass: "Monk",
      pairings: [...BR_AF, "Effie", "Beruka"],
      friends: ["Kaden", "Subaki", "Hayato", "Arthur"],
      stat: { STR: true },
    },
    Setsuna: {
      class: ["Archer", "Ninja"],
      defaultClass: "Archer",
      pairings: [...BR_AM, "Niles", "Arthur"],
      friends: ["Hinoka", "Kagero", "Hana", "Selena"],
      stat: { STR: true },
    },
    Hayato: {
      class: ["Diviner", "Oni Savage"],
      defaultClass: "Diviner",
      pairings: [...BR_AF, "Nyx", "Effie"],
      friends: ["Kaden", "Azama", "Benny"],
      stat: { STR: true, MAG: true },
    },
    Oboro: {
      class: ["Spear Fighter", "Apothecary"],
      defaultClass: "Spear Fighter",
      pairings: [...BR_AM, "Benny", "Niles"],
      friends: ["Orochi", "Rinkah", "Mozu", "Beruka"],
      stat: { STR: true },
    },
    Hinata: {
      class: ["Samurai", "Oni Savage"],
      defaultClass: "Samurai",
      pairings: [...BR_AF, "Peri", "Selena"],
      friends: ["Takumi", "Kaden", "Subaki", "Odin"],
      stat: { STR: true },
    },
    Takumi: {
      class: ["Archer", "Spear Fighter"],
      defaultClass: "Archer",
      pairings: [...F, ...BR_F, ...CQ_RF],
      friends: ["Ryoma", "Hinata", "Jakob", "Leo"],
      stat: { STR: true },
    },
    Kagero: {
      class: ["Ninja", "Diviner"],
      defaultClass: "Ninja",
      pairings: [...BR_AM, "Odin", "Arthur"],
      friends: ["Orochi", "Rinkah", "Setsuna", "Peri"],
      stat: { STR: true },
    },
    Reina: {
      class: ["Sky Knight", "Diviner", "Ninja"],
      defaultClass: "Kinshi Knight",
      pairings: ["Corrin (M)"],
      stat: { STR: true },
    },
    Kaden: {
      class: ["Kitsune", "Diviner"],
      defaultClass: "Kitsune",
      pairings: [...BR_AF, "Charlotte", "Peri"],
      friends: ["Hinata", "Azama", "Hayato", "Keaton"],
      stat: { STR: true },
    },
    Ryoma: {
      class: ["Samurai", "Sky Knight"],
      defaultClass: "Swordmaster",
      pairings: [...F, ...BR_F, ...CQ_RF],
      friends: ["Saizo", "Silas", "Takumi", "Xander"],
      stat: { STR: true },
    },
    Fuga: {
      class: ["Samurai", "Oni Savage", "Monk"],
      defaultClass: "Master of Arms",
      pairings: ["Corrin (F)"],
      friends: ["Hayato"],
      stat: { STR: true },
    },
  },
  children: {
    "Kana (M)": {
      defaultClass: "Nohr Prince (Smash Bros)",
      class: ["Nohr Prince (Smash Bros)"],
      pairings: RV_ACF,
      friends: ["Shiro", "Siegbert", "Percy"],
      stat: { STR: true, MAG: true },
      parent: "Corrin (F)",
    },
    "Kana (F)": {
      defaultClass: "Nohr Prince (Smash Bros)",
      class: ["Nohr Prince (Smash Bros)"],
      pairings: RV_ACM,
      friends: ["Midori", "Mitama", "Selkie", "Velouria"],
      stat: { STR: true, MAG: true },
      parent: "Corrin (M)",
    },
    Shigure: {
      defaultClass: "Sky Knight",
      class: ["Sky Knight", "Troubadour (M)"],
      pairings: RV_ACF,
      friends: ["Hisame", "Forrest"],
      stat: { STR: true },
      parent: "Azura",
    },
    Dwyer: {
      defaultClass: "Troubadour (M)",
      class: ["Troubadour (M)", "Cavalier"],
      pairings: RV_ACF,
      friends: ["Asugi", "Kiragi", "Percy"],
      stat: { STR: true },
      parent: "Jakob",
    },
    Sophie: {
      defaultClass: "Cavalier",
      class: ["Cavalier", "Mercenary"],
      pairings: RV_ACM,
      friends: ["Caeldori", "Velouria", "Soleil"],
      stat: { STR: true },
      parent: "Silas",
    },
    Midori: {
      defaultClass: "Apothecary",
      class: ["Apothecary", "Ninja"],
      pairings: RV_ACM,
      friends: ["Selkie", "Kana (F)", "Ophelia"],
      stat: { STR: true },
      parent: "Kaze",
    },
    Shiro: {
      defaultClass: "Spear Fighter",
      class: ["Spear Fighter", "Samurai"],
      pairings: BR_ACF,
      friends: ["Kiragi", "Asugi", "Kana (M)", "Siegbert"],
      stat: { STR: true },
      parent: "Ryoma",
    },
    Kiragi: {
      defaultClass: "Archer",
      class: ["Archer", "Spear Fighter"],
      pairings: BR_ACF,
      friends: ["Shiro", "Hisame", "Dwyer", "Forrest"],
      stat: { STR: true },
      parent: "Takumi",
    },
    Asugi: {
      defaultClass: "Ninja",
      class: ["Ninja", "Samurai"],
      pairings: BR_ACF,
      friends: ["Shiro", "Hisame", "Dwyer", "Ignatius"],
      stat: { STR: true, MAG: true },
      parent: "Saizo",
    },
    Selkie: {
      defaultClass: "Kitsune",
      class: ["Kitsune", "Diviner"],
      pairings: BR_ACM,
      friends: ["Rhajat", "Midori", "Kana (F)", "Velouria"],
      stat: { STR: true },
      parent: "Kaden",
    },
    Hisame: {
      defaultClass: "Samurai",
      class: ["Samurai", "Oni Savage"],
      pairings: BR_ACF,
      friends: ["Kiragi", "Asugi", "Shigure", "Percy"],
      stat: { STR: true },
      parent: "Hinata",
    },
    Mitama: {
      defaultClass: "Shrine Maiden",
      class: ["Shrine Maiden", "Apothecary"],
      pairings: BR_ACM,
      friends: ["Caeldori", "Rhajat", "Kana (F)", "Soleil"],
      stat: { STR: true, MAG: true },
      parent: "Azama",
    },
    Caeldori: {
      defaultClass: "Sky Knight",
      class: ["Sky Knight", "Samurai"],
      pairings: BR_ACM,
      friends: ["Mitama", "Rhajat", "Sophie", "Nina"],
      stat: { STR: true },
      parent: "Subaki",
    },
    Rhajat: {
      defaultClass: "Diviner",
      class: ["Diviner", "Oni Savage"],
      pairings: [...BR_ACM, "Corrin (F)"],
      friends: ["Caeldori", "Mitama", "Selkie", "Ophelia"],
      stat: { MAG: true },
      parent: "Hayato",
    },
    Siegbert: {
      defaultClass: "Cavalier",
      class: ["Cavalier", "Wyvern Rider"],
      pairings: CQ_ACF,
      friends: ["Kana (M)", "Forrest", "Ignatius", "Shiro"],
      stat: { STR: true },
      parent: "Xander",
    },
    Forrest: {
      defaultClass: "Troubadour (M)",
      class: ["Troubadour (M)", "Dark Mage"],
      pairings: CQ_ACF,
      friends: ["Siegbert", "Shigure", "Ignatius", "Kiragi"],
      stat: { MAG: true },
      parent: "Leo",
    },
    Ignatius: {
      defaultClass: "Knight",
      class: ["Knight", "Fighter"],
      pairings: CQ_ACF,
      friends: ["Siegbert", "Forrest", "Percy", "Asugi"],
      stat: { STR: true },
      parent: "Benny",
    },
    Velouria: {
      defaultClass: "Wolfskin",
      class: ["Wolfskin", "Fighter"],
      pairings: CQ_ACM,
      friends: ["Sophie", "Kana (F)", "Nina", "Selkie"],
      stat: { STR: true },
      parent: "Keaton",
    },
    Percy: {
      defaultClass: "Wyvern Rider",
      class: ["Wyvern Rider", "Fighter"],
      pairings: CQ_ACF,
      friends: ["Ignatius", "Dwyer", "Kana (M)", "Hisame"],
      stat: { STR: true },
      parent: "Arthur",
    },
    Ophelia: {
      defaultClass: "Dark Mage",
      class: ["Dark Mage", "Samurai"],
      pairings: CQ_ACM,
      friends: ["Midori", "Soleil", "Rhajat"],
      stat: { MAG: true },
      parent: "Odin",
    },
    Soleil: {
      defaultClass: "Mercenary",
      class: ["Mercenary", "Ninja"],
      pairings: CQ_ACM,
      friends: ["Ophelia", "Sophie", "Nina", "Mitama"],
      stat: { STR: true },
      parent: "Laslow",
    },
    Nina: {
      defaultClass: "Outlaw",
      class: ["Outlaw", "Dark Mage"],
      pairings: CQ_ACM,
      friends: ["Soleil", "Velouria", "Caeldori"],
      stat: { STR: true },
      parent: "Niles",
    },
  },
  classes: CLASSES,
  free: [],
  avatar: "Corrin",
  flags: {
    pairings: true,
    friends: true,
    onlypairs: true,
    children: true,
    classes: true,
    troll: true,
  },
  trollCriteria: [
    "MAG classes for a STR-based character and vice versa.",
    "Classes that require going through E-rank hell",
  ],
  defaultPicks: 14,
};
