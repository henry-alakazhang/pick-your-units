const fe1 = {
  short: "fe1",
  characters: {
    "Abel": {
      class:"Cavalier",
    }, "Arran": {
      class:"Paladin"
    }, "Astria": {
      class:"Hero"
    }, "Bantu": {
      class:"Manakete"
    }, "Barst": {
      class:"Fighter"
    }, "Vyland": {
      class:"Cavalier"
    }, "Boa": {
      class:"Bishop"
    }, "Caesar": {
      class:"Mercenary"
    }, "Xane": {
      class:"Commando"
    }, "Tiki": {
      class:"Manakete"
    }, "Draug": {
      class:"Knight"
    }, "Elice": {
      class:"Priest"
    }, "Est": {
      class:"Pegasus Knight"
    }, "Jeorge": {
      class:"Sniper"
    }, "Gordon": {
      class:"Archer"
    }, "Hardin": {
      class:"Cavalier"
    }, "jagen": {
      class:"Paladin"
    }, "Julian": {
      class:"Thief"
    }, "Cain": {
      class:"Cavalier"
    }, "Castor": {
      class:"Archer"
    }, "Catria": {
      class:"Pegasus Knight"
    }, "Lorenze": {
      class:"General"
    }, "Linde": {
      class:"Mage"
    }, "Matthis": {
      class:"Cavalier"
    }, "Bord": {
      class:"Fighter"
    }, "Maria": {
      class:"Priest"
    }, "Merric": {
      class:"Mage"
    }, "Marth": {
      class:"Lord"
    }, "Midia": {
      class:"Paladin"
    }, "Minerva": {
      class:"Dracoknight"
    }, "Macellan": {
      class:"Knight"
    }, "Nabarl": {
      class:"Mercenary"
    }, "Ogma": {
      class:"Mercenary"
    }, "Palla": {
      class:"Pegasus Knight"
    }, "Radd": {
      class:"Mercenary"
    }, "Lena": {
      class:"Priest"
    }, "Rickard": {
      class:"Thief"
    }, "Roshea": {
      class:"Cavalier"
    }, "Cord": {
      class:"Fighter"
    }, "Samson": {
      class:"Hero"
    }, "Caeda": {
      class:"Pegasus Knight"
    }, "Tomas": {
      class:"Archer"
    }, "Dolph": {
      class:"Knight"
    }, "Wendel": {
      class:"Bishop"
    }, "Wolf": {
      class:"Bow Knight"
    }, "Sedgar": {
      class:"Bow Knight"
    }
  },
  classes: {
    "Lord": {
      weapons: ["Sword"],
      promo: null
    },
    "Mercenary": {
      weapons: ["Sword"],
      promo: "Hero"
    },
    "Hero": {
      weapons: ["Sword"],
      promo: null
    },
    "Thief": {
      weapons: ["Sword"],
      promo: null
    },
    "Commando": {
      weapons: ["Sword"],
      promo: null
    },
    "Fighter": {
      weapons: ["Axe"],
      promo: null
    },
    "Pirate": {
      weapons: ["Axe"],
      promo: null
    },
    "Archer": {
      weapons: ["Bow"],
      promo: "Sniper"
    },
    "Sniper": {
      weapons: ["Bow"],
      promo: null
    },
    "Hunter": {
      weapons: ["Bow"],
      promo: null
    },
    "Bow Knight": {
      weapons: ["Bow"],
      promo: null
    },
    "Cavalier": {
      weapons: ["Sword", "Lance"],
      promo: "Paladin"
    },
    "Paladin": {
      weapons: ["Sword", "Lance"],
      promo: null
    },
    "Knight": {
      weapons: ["Sword", "Lance"],
      promo: null
    },
    "General": {
      weapons: ["Sword"],
      promo: null
    },
    "Pegasus Knight": {
      weapons: ["Sword", "Lance"],
      promo: "Dracoknight"
    },
    "Dracoknight": {
      weapons: ["Sword", "Lance"],
      promo: null
    },
    "Shooter": {
      weapons: ["Firearm"],
      promo: null
    },
    "Mage": {
      weapons: ["Magic"],
      promo: "Bishop"
    },
    "Priest": {
      weapons: ["Staff"],
      promo: "Bishop"
    },
    "Bishop": {
      weapons: ["Magic", "Staff"],
      promo: null
    },
    "Manakete": {
      weapons: ["Dragonstone"],
      promo: null
    }
  },
  free: ["Marth"],
  flags: {},
};

const fe2 = {
  short: "fe2",
  disabled: "Nobody plays Gaiden",
  free: ["Alm", "Celica"],
  characters: [],
  flags: {},
};

const fe3 = {
  short: "fe3",
  characters: ["Marth", "Abel", "Arran", "Astria", "Bantu", "Cecil", "Xane", "Tiki", "Draug", "Ellerean", "Elice", "Est", "Feena", "Jeorge", "Gordon", "Julian", "Cain", "Castor", "Catria", "Linde", "Luke", "Matthis", "Malliesia", "Maria", "Merric", "Midia", "Minerva", "Nabarl", "Nina", "Ogma", "Palla", "Lena", "Rickard", "Rody", "Roshea", "Ryan", "Samson", "Samto", "Sheeda", "Sheema", "Sirius", "Warren", "Wendel", "Yubello", "Yumina"],
  free: ["Marth"],
  flags: {},
}

const fe4 = {
  short: "fe4",
  disabled: "Need to implement children",
  characters: [],
  free: ["Sigurd", "Seliph"],
  flags: {
    pairings: true,
    children: true,
  }
};

const fe5 = {
  short: "fe5",
  disabled: "Nobody plays Thracia",
  characters: [],
  free: ["Lief"],
  flags: {},
  // nobody does PMUs for this shit anyway.
};

const fe6 = {
  short: "fe6",
  routes: [['A', 'B'], ['Sacae', 'Ilia']],
  characters: {"Allen": {
    class:"Cavalier",
  }, "Astohl": {
    class:"Thief",
  }, "Barth": {
    class:"Knight",
  }, "Bartre": {
    class:"Warrior",
    exclude:["Lalum", "Echidna"]
  }, "Bors": {
    class:"Knight",
  }, "Cath": {
    class:"Thief",
  }, "Cecilia": {
    class:"Valkyrie",
  }, "Chad": {
    class:"Thief",
  }, "Clarine": {
    class:"Troubadour",
  }, "Dayan": {
    class:"Nomad Trooper",
    exclude: ["Juno"]
  }, "Dieck": {
    class:"Mercenary",
  }, "Dorothy": {
    class:"Archer",
  }, "Douglas": {
    class:"General",
  }, "Echidna": {
    class:"Hero",
    exclude:["Elphin", "Bartre"],
  }, "Ellen": {
    class:"Priest",
  }, "Elphin": {
    class:"Bard",
    exclude:["Lalum", "Echidna"]
  }, "Fa": {
    class:"Manakete",
  }, "Fir": {
    class:"Myrmidon",
  }, "Garret": {
    class:"Berserker",
  }, "Geese": {
    class:"Pirate",
  }, "Gonzales": {
    class:"Bandit",
  }, "Hugh": {
    class:"Mage",
  }, "Igrene": {
    class:"Sniper",
  }, "Juno": {
    class:"Falcon Knight",
    exclude:["Dayan"]
  }, "Klein": {
    class:"Archer",
  }, "Lalum": {
    class:"Dancer",
    exclude:["Elphin", "Bartre"]
  }, "Lance": {
    class:"Cavalier",
  }, "Lilina": {
    class:"Mage",
  }, "Lot": {
    class:"Fighter",
  }, "Lugh": {
    class:"Mage",
  }, "Marcus": {
    class:"Paladin",
  }, "Miledy": {
    class:"Wyvern Rider",
  }, "Niime": {
    class:"Druid",
  }, "Noah": {
    class:"Cavalier",
  }, "Oujay": {
    class:"Mercenary",
  }, "Percival": {
    class:"Paladin",
  }, "Raigh": {
    class:"Shaman",
  }, "Roy": {
    class:"Lord",
  }, "Rutger": {
    class:"Myrmidon",
  }, "Saul": {
    class:"Priest",
  }, "Shin": {
    class:"Nomad",
  }, "Sophia": {
    class:"Shaman",
  }, "Sue": {
    class:"Nomad",
  }, "Tate": {
    class:"Pegasus Knight",
  }, "Shanna": {
    class:"Pegasus Knight",
  }, "Trec": {
    class:"Cavalier",
  }, "Wade": {
    class:"Fighter",
  }, "Wendy": {
    class:"Knight",
  }, "Wolt": {
    class:"Archer",
  }, "Zealot": {
    class:"Paladin",
  }, "Zeiss": {
    class:"Wyvern Rider",
  }},
  classes: {
    "Lord": {
      weapons:["Sword"],
      promo:"Master Lord",
    }, "Master Lord": {
      weapons:["Sword"],
      promo:null,
    }, "Mercenary": {
      weapons:["Sword"],
      promo:"Hero",
    }, "Hero": {
      weapons:["Sword", "Axe"],
      promo:null,
    }, "Myrmidon": {
      weapons:["Sword"],
      promo:"Swordmaster",
    }, "Swordmaster": {
      weapons:["Sword"],
      promo:null,
    }, "Thief": {
      weapons:["Sword"],
      promo:null,
    }, "Knight": {
      weapons:["Lance"],
      promo:"General",
    }, "General": {
      weapons:["Lance", "Axe"],
      promo:null,
    }, "Soldier": {
      weapons:["Lance"],
      promo:null,
    }, "Fighter": {
      weapons:["Axe"],
      promo:"Warrior",
    }, "Warrior": {
      weapons:["Axe", "Bow"],
      promo:null,
    }, "Bandit": {
      weapons:["Axe"],
      promo:"Berserker",
    }, "Pirate": {
      weapons:["Axe"],
      promo:"Berserker",
    }, "Berserker": {
      weapons:["Axe"],
      promo:null,
    }, "Archer": {
      weapons:["Bow"],
      promo:"Sniper",
    }, "Sniper": {
      weapons:["Bow"],
      promo:null,
    }, "Nomad": {
      weapons:["Bow"],
      promo:"Nomad Trooper",
    }, "Nomad Trooper": {
      weapons:["Sword", "Bow"],
      promo:null,
    }, "Cavalier": {
      weapons:["Sword", "Lance"],
      promo:"Paladin",
    }, "Paladin": {
      weapons:["Sword", "Lance", "Axe"],
      promo:null,
    }, "Pegasus Knight": {
      weapons:["Lance"],
      promo:"Falcon Knight",
    }, "Falcon Knight": {
      weapons:["Sword", "Lance"],
      promo: null,
    }, "Wyvern Rider": {
      weapons:["Lance"],
      promo:"Wyvern Lord",
    }, "Wyvern Lord": {
      weapons:["Sword", "Lance"],
      promo: null,
    }, "Priest": {
      weapons:["Staff"],
      promo:"Bishop",
    }, "Bishop": {
      weapons:["Staff", "Light"],
      promo:null,
    }, "Troubadour": {
      weapons:["Staff"],
      promo:"Valkyrie",
    }, "Valkyrie": {
      weapons:["Staff", "Anima"],
      promo:null,
    }, "Mage": {
      weapons:["Anima"],
      promo:"Sage",
    }, "Sage": {
      weapons:["Staff", "Anima"],
      promo:null,
    }, "Shaman": {
      weapons:["Dark"],
      promo:"Druid",
    }, "Druid": {
      weapons:["Staff", "Dark"],
      promo:null,
    }, "Bard": {
      weapons: [],
      promo:null,
    }, "Dancer": {
      weapons: [],
      promo:null,
    }, "Manakete": {
      weapons: [],
      promo:null,
    }
  },
  free: ["Roy"],
  flags: {
  }
};

const fe7 = {
  short: "fe7",
  characters: {
    "Bartre": {
      class:"Fighter"
    },"Canas": {
      class:"Shaman"
    },"Dart": {
      class:"Pirate"
    },"Dorcas": {
      class:"Fighter"
    },"Eliwood": {
      class:"Lord (Eliwood)"
    },"Erk": {
      class:"Mage"
    },"Farina": {
      class:"Pegasus Knight"
    },"Fiora": {
      class:"Pegasus Knight"
    },"Florina": {
      class:"Pegasus Knight"
    },"Geitz": {
      class:"Warrior",
      exclude:["Wallace"]
    },"Guy": {
      class:"Myrmidon"
    },"Harken": {
      class:"Hero",
      exclude:["Karel"]
    },"Hawkeye": {
      class:"Berserker"
    },"Heath": {
      class:"Wyvern Rider"
    },"Hector": {
      class:"Lord (Hector)"
    },"Isadora": {
      class:"Paladin"
    },"Jaffar": {
      class:"Assassin"
    },"Karel": {
      class:"Swordmaster",
      exclude:["Harken"]
    },"Karla": {
      class:"Swordmaster",
      include:["Bartre"]
    },"Kent": {
      class:"Cavalier"
    },"Legault": {
      class:"Thief",
      exclude: ["Matthew"]
    },"Louise": {
      class:"Sniper"
    },"Lowen": {
      class:"Cavalier"
    },"Lucius": {
      class:"Monk"
    },"Lyn": {
      class:"Lord (Lyn)"
    },"Marcus": {
      class:"Paladin"
    },"Matthew": {
      class:"Thief",
      exclude: ["Legault"] // cos we can't have two assassins
    },"Ninian": {
      class:"Dancer"
    },"Nino": {
      class:"Mage"
    },"Oswin": {
      class:"Knight"
    },"Pent": {
      class:"Sage"
    },"Priscilla": {
      class:"Troubadour"
    },"Rath": {
      class:"Nomad"
    },"Raven": {
      class:"Mercenary"
    },"Rebecca": {
      class:"Archer"
    },"Renault": {
      class:"Bishop"
    },"Sain": {
      class:"Cavalier"
    },"Serra": {
      class:"Cleric"
    },"Vaida": {
      class:"Wyvern Lord"
    },"Wallace": {
      class:"General",
      exclude:["Geitz"]
    }, "Wil": {
      class:"Archer"
    }
  },
  classes: {
    "Lord (Lyn)": {
      weapons:["Sword"],
      promo:"Blade Lord",
    }, "Blade Lord": {
      weapons:["Sword", "Bow"],
      promo:null,
    }, "Lord (Eliwood)": {
      weapons:["Sword"],
      promo:"Knight Lord",
    }, "Knight Lord": {
      weapons:["Sword", "Lance"],
      promo:null,
    }, "Lord (Hector)": {
      weapons:["Axe"],
      promo:"Great Lord",
    }, "Great Lord": {
      weapons:["Sword", "Axe"],
      promo:null,
    }, "Mercenary": {
      weapons:["Sword"],
      promo:"Hero",
    }, "Hero": {
      weapons:["Sword", "Axe"],
      promo:null,
    }, "Myrmidon": {
      weapons:["Sword"],
      promo:"Swordmaster",
    }, "Swordmaster": {
      weapons:["Sword"],
      promo:null,
    }, "Thief": {
      weapons:["Sword"],
      promo:"Assassin",
    }, "Assassin": {
      weapons:["Sword"],
      promo:null,
    }, "Knight": {
      weapons:["Lance"],
      promo:"General",
    }, "General": {
      weapons:["Lance", "Axe"],
      promo:null,
    }, "Soldier": {
      weapons:["Lance"],
      promo:null,
    }, "Fighter": {
      weapons:["Axe"],
      promo:"Warrior",
    }, "Warrior": {
      weapons:["Axe", "Bow"],
      promo:null,
    }, "Bandit": {
      weapons:["Axe"],
      promo:"Berserker",
    }, "Pirate": {
      weapons:["Axe"],
      promo:"Berserker",
    }, "Corsair": {
      weapons:["Axe"],
      promo:null,
    }, "Berserker": {
      weapons:["Axe"],
      promo:null,
    }, "Archer": {
      weapons:["Bow"],
      promo:"Sniper",
    }, "Sniper": {
      weapons:["Bow"],
      promo:null,
    }, "Nomad": {
      weapons:["Bow"],
      promo:"Nomad Trooper",
    }, "Nomad Trooper": {
      weapons:["Sword", "Bow"],
      promo:null,
    }, "Cavalier": {
      weapons:["Sword", "Lance"],
      promo:"Paladin",
    }, "Paladin": {
      weapons:["Sword", "Lance", "Axe"],
      promo:null,
    }, "Pegasus Knight": {
      weapons:["Lance"],
      promo:"Falcon Knight",
    }, "Falcon Knight": {
      weapons:["Sword", "Lance"],
      promo:null,
    }, "Wyvern Rider": {
      weapons:["Lance"],
      promo:"Wyvern Lord",
    }, "Wyvern Lord": {
      weapons:["Sword", "Lance"],
      promo:null,
    }, "Monk": {
      weapons:["Light"],
      promo:"Bishop",
    }, "Cleric": {
      weapons:["Staff"],
      promo:"Bishop",
    }, "Bishop": {
      weapons:["Staff", "Light"],
      promo:null,
    }, "Troubadour": {
      weapons:["Staff"],
      promo:"Valkyrie",
    }, "Valkyrie": {
      weapons:["Staff", "Anima"],
      promo:null,
    }, "Mage": {
      weapons:["Anima"],
      promo:"Sage",
    }, "Sage": {
      weapons:["Staff", "Anima"],
      promo:null,
    }, "ArchSage": {
      weapons:["Staff", "Anima", "Light", "Dark"],
      promo:null,
    }, "Shaman": {
      weapons:["Dark"],
      promo:"Druid",
    }, "Druid": {
      weapons:["Staff", "Dark"],
      promo:null,
    }, "Dark Druid": {
      weapons:["Staff", "Anima", "Light", "Dark"],
      promo:null,
    }, "Dancer": {
      weapons: [],
      promo:null,
    }
  },
  free: ["Eliwood"],
  flags: { }
};

const fe8 = {
  short: "fe8",
  routes: [["Eirika", "Ephraim"]],
  characters: {"Amelia": {
    class:"Recruit"
  },"Artur": {
    class:"Monk"
  },"Colm": {
    class:"Thief"
  },"Cormag": {
    class:"Wyvern Rider"
  },"Dozla": {
    class:"Berserker"
  },"Duessel": {
    class:"Great Knight"
  },"Eirika": {
    class:"Lord (Eirika)"
  },"Ephraim": {
    class:"Lord (Ephraim)"
  },"Ewan": {
    class:"Pupil"
  },"Forde": {
    class:"Cavalier"
  },"Franz": {
    class:"Cavalier"
  },"Garcia": {
    class:"Fighter"
  },"Gerik": {
    class:"Mercenary"
  },"Gilliam": {
    class:"Knight"
  },"Innes": {
    class:"Sniper"
  },"Joshua": {
    class:"Myrmidon"
  },"Knoll": {
    class:"Shaman"
  },"Kyle": {
    class:"Cavalier"
  },"L'Arachel": {
    class:"Troubadour"
  },"Lute": {
    class:"Mage"
  },"Marisa": {
    class:"Myrmidon"
  },"Moulder": {
    class:"Priest"
  },"Myrrh": {
    class:"Manakete"
  },"Natasha": {
    class:"Cleric"
  },"Neimi": {
    class:"Archer"
  },"Rennac": {
    class:"Rogue"
  },"Ross": {
    class:"Journeyman"
  },"Saleh": {
    class:"Sage"
  },"Seth": {
    class:"Paladin"
  },"Syrene": {
    class:"Falcon Knight"
  },"Tana": {
    class:"Pegasus Knight"
  },"Tethys": {
    class:"Dancer"
  },"Vanessa": {
    class:"Pegasus Knight"
  }},
  classes: {
    "Lord (Eirika)": {
      weapons:["Sword"],
      promo:"Great Lord (Eirika)",
    }, "Great Lord (Eirika)": {
      weapons:["Sword"],
      promo:null,
    }, "Lord (Ephraim)": {
      weapons:["Lance"],
      promo:"Great Lord (Ephraim)",
    }, "Great Lord (Ephraim)": {
      weapons:["Lance"],
      promo:null,
    }, "Mercenary": {
      weapons:["Sword"],
      promo:["Hero", "Bow Knight"],
    }, "Hero": {
      weapons:["Sword", "Axe"],
      promo:null,
    }, "Myrmidon": {
      weapons:["Sword"],
      promo:["Swordmaster", "Assassin"],
    }, "Swordmaster": {
      weapons:["Sword"],
      promo:null,
    }, "Thief": {
      weapons:["Sword"],
      promo: ["Assassin", "Rogue"],
    }, "Assassin": {
      weapons:["Sword"],
      promo:null,
    }, "Rogue": {
      weapons:["Sword"],
      promo:null,
    }, "Knight": {
      weapons:["Lance"],
      promo:["General", "Great Knight"],
    }, "General": {
      weapons:["Lance", "Axe", "Sword"],
      promo:null,
    }, "Soldier": {
      weapons:["Lance"],
      promo:null,
    }, "Fighter": {
      weapons:["Axe"],
      promo:["Warrior", "Hero"],
    }, "Warrior": {
      weapons:["Axe", "Bow"],
      promo:null,
    }, "Bandit": {
      weapons:["Axe"],
      promo:["Berserker", "Warrior"],
    }, "Pirate": {
      weapons:["Axe"],
      promo:["Berserker", "Warrior"],
    }, "Berserker": {
      weapons:["Axe"],
      promo:null,
    }, "Archer": {
      weapons:["Bow"],
      promo:["Sniper", "Bow Knight"],
    }, "Sniper": {
      weapons:["Bow"],
      promo:null,
    }, "Bow Knight": {
      weapons:["Sword", "Bow"],
      promo:null,
    }, "Cavalier": {
      weapons:["Sword", "Lance"],
      promo:["Paladin", "Great Knight"],
    }, "Paladin": {
      weapons:["Sword", "Lance"],
      promo:null,
    }, "Great Knight": {
      weapons:["Sword", "Lance", "Axe"],
      promo:null,
    }, "Pegasus Knight": {
      weapons:["Lance"],
      promo:["Falcon Knight", "Wyvern Knight"],
    }, "Falcon Knight": {
      weapons:["Sword", "Lance"],
      promo:null,
    }, "Wyvern Rider": {
      weapons:["Lance"],
      promo:["Wyvern Lord", "Wyvern Knight"],
    }, "Wyvern Lord": {
      weapons:["Sword", "Lance"],
      promo:null,
    }, "Wyvern Knight": {
      weapons:["Lance"],
      promo:null,
    }, "Monk": {
      weapons:["Light"],
      promo:["Bishop", "Sage"],
    }, "Cleric": {
      weapons:["Staff"],
      promo:["Bishop", "Valkyrie"],
    }, "Priest": {
      weapons:["Staff"],
      promo:["Bishop", "Sage"]
    }, "Bishop": {
      weapons:["Staff", "Light"],
      promo:null,
    }, "Troubadour": {
      weapons:["Staff"],
      promo:["Valkyrie", "Mage Knight"],
    }, "Valkyrie": {
      weapons:["Staff", "Light"],
      promo:null,
    }, "Mage": {
      weapons:["Anima"],
      promo:["Sage", "Mage Knight"],
    }, "Mage Knight": {
      weapons:["Staff", "Anima"],
      promo:null,
    }, "Sage": {
      weapons:["Staff", "Anima", "Light"],
      promo:null,
    }, "Shaman": {
      weapons:["Dark"],
      promo:["Druid", "Summoner"],
    }, "Summoner": {
      weapons:["Staff", "Dark"],
      promo:null,
    }, "Druid": {
      weapons:["Staff", "Anima", "Dark"],
      promo:null,
    }, "Dancer": {
      weapons: [],
      promo:null,
    }, "Journeyman": {
      weapons: ["Axe"],
      promo: ["Pirate", "Fighter"]
    }, "Recruit": {
      weapons: ["Lance"],
      promo: ["Knight", "Cavalier"]
    }, "Pupil": {
      weapons:["Anima"],
      promo: ["Mage", "Shaman"]
    }, "Manakete": {
      weapons: [],
      promo:null
    }
  },
  free: ["Eirika", "Ephraim"],
  flags: {
  }
};

const fe9 = {
  short: "fe9",
  characters: {
    "Astrid": {
      class:"Bow Knight"
    },"Bastian": {
      class:"Sage"
    },"Boyd": {
      class:"Fighter"
    },"Brom": {
      class:"Knight"
    },"Calill": {
      class:"Sage"
    },"Devdan": {
      class:"Halberdier"
    },"Elincia": {
      class:"Princess Crimea"
    },"Gatrie": {
      class:"Knight"
    },"Geoffrey": {
      class:"Paladin (Sword/Lance)"
    },"Haar": {
      class:"Wyvern Lord"
    },"Ike": {
      class:"Ranger"
    },"Ilyana": {
      class:"Mage"
    },"Janaff": {
      class:"Hawk"
    },"Jill": {
      class:"Wyvern Rider"
    },"Kieran": {
      class:"Axe Knight"
    },"Largo": {
      class:"Berserker"
    },"Lethe": {
      class:"Cat"
    },"Lucia": {
      class:"Swordmaster"
    },"Makalov": {
      class:"Sword Knight"
    },"Marcia": {
      class:"Pegasus Knight"
    },"Mia": {
      class:"Myrmidon"
    },"Mist": {
      class:"Cleric"
    },"Mordecai": {
      class:"Tiger"
    },"Muarim": {
      class:"Tiger"
    },"Naesala": {
      class:"Raven"
    },"Nephenee": {
      class:"Soldier"
    },"Oscar": {
      class:"Lance Knight"
    },"Ranulf": {
      class:"Cat"
    },"Reyson": {
      class:"Heron"
    },"Rhys": {
      class:"Priest"
    },"Rolf": {
      class:"Archer"
    },"Shinon": {
      class:"Sniper"
    },"Soren": {
      class:"Mage"
    },"Sothe": {
      class:"Thief"
    },"Stefan": {
      class:"Swordmaster"
    },"Tanith": {
      class:"Falcon Knight"
    },"Tauroneo": {
      class:"General"
    },"Tibarn": {
      class:"Hawk"
    },"Titania": {
      class:"Paladin (Lance/Axe)"
    },"Tormod": {
      class:"Mage"
    },"Ulki": {
      class:"Hawk"
    },"Volke": {
      class:"Thief (Volke)"
    },"Zihark": {
      class:"Myrmidon"
    }
  },
  classes: {
    "Ranger": {
      weapons:["Sword"],
      promo:"Lord"
    }, "Lord": {
      weapons:["Sword"],
      promo:null
    }, "Hero": {
      weapons:["Sword", "Axe"],
      promo:null
    }, "Myrmidon": {
      weapons:["Sword"],
      promo:"Swordmaster"
    }, "Swordmaster": {
      weapons:["Sword"],
      promo:null
    }, "Soldier": {
      weapons:["Lance"],
      promo:"Halberdier"
    }, "Halberdier": {
      weapons:["Lance"],
      promo:null
    }, "Fighter": {
      weapons:["Axe"],
      promo:"Warrior"
    }, "Warrior": {
      weapons:["Axe", "Bow"],
      promo:null
    }, "Archer": {
      weapons:["Bow"],
      promo:"Sniper"
    }, "Sniper": {
      weapons:["Bow"],
      promo:null
    }, "Knight": {
      weapons:["Lance"],
      promo:"General"
    }, "General": {
      weapons:["Sword", "Lance"],
      promo:null
    }, "Sword Knight": {
      weapons:["Sword"],
      promo: ["Paladin (Sword/Lance)", "Paladin (Sword/Axe)", "Paladin (Sword/Bow)"]
    }, "Lance Knight": {
      weapons:["Lance"],
      promo: ["Paladin (Sword/Lance)", "Paladin (Lance/Axe)", "Paladin (Lance/Bow)"]
    }, "Axe Knight": {
      weapons:["Axe"],
      promo: ["Paladin (Sword/Axe)", "Paladin (Lance/Axe)", "Paladin (Axe/Bow)"]
    }, "Bow Knight": {
      weapons:["Bow"],
      promo: ["Paladin (Sword/Bow)", "Paladin (Lance/Bow)", "Paladin (Axe/Bow)"]
    }, "Paladin (Sword/Lance)": {
      weapons:["Sword", "Lance"],
      promo:null
    }, "Paladin (Sword/Axe)": {
      weapons:["Sword", "Axe"],
      promo:null
    }, "Paladin (Sword/Bow)": {
      weapons:["Sword", "Bow"],
      promo:null
    }, "Paladin (Lance/Axe)": {
      weapons:["Lance", "Axe"],
      promo:null
    }, "Paladin (Lance/Bow)": {
      weapons:["Lance", "Bow"],
      promo:null
    }, "Paladin (Axe/Bow)": {
      weapons:["Axe", "Bow"],
      promo:null
    }, "Pegasus Knight": {
      weapons:["Lance"],
      promo:"Falcon Knight"
    }, "Falcon Knight": {
      weapons:["Sword", "Lance"],
      promo:null
    }, "Princess Crimea": {
      weapons:["Sword", "Staff"],
      promo:null
    }, "Wyvern Rider": {
      weapons:["Lance"],
      promo:"Wyvern Lord"
    }, "Wyvern Lord": {
      weapons:["Lance", "Axe"],
      promo:null
    }, "Mage": {
      weapons:["Fire", "Thunder", "Wind"],
      promo:"Sage"
    }, "Sage": {
      weapons:["Fire", "Thunder", "Wind", "Staff", "Knife"],
      promo:null
    }, "Priest": {
      weapons:["Staff"],
      promo:"Bishop"
    }, "Bishop": {
      weapons:["Staff"],
      promo:null
    }, "Cleric": {
      weapons:["Staff"],
      promo:"Valkyrie"
    }, "Valkyrie": {
      weapons:["Sword", "Staff"],
      promo:null
    }, "Thief": {
      weapons:["Knife"],
      promo:null
    }, "Thief (Volke)": {
      weapons:["Knife"],
      promo:"Assassin"
    }, "Assassin": {
      weapons:["Knife"],
      promo:null
    }, "Bandit": {
      weapons:["Axe"],
      promo:"Berserker"
    }, "Berserker": {
      weapons:["Axe"],
      promo:null
    }, "Lion": {
      weapons: [],
      promo:null
    }, "Tiger": {
      weapons: [],
      promo:null
    }, "Red Dragon": {
      weapons: [],
      promo:null
    }, "Dragon": {
      weapons: [],
      promo:null
    }, "Cat": {
      weapons: [],
      promo:null
    }, "Heron": {
      weapons: [],
      promo:null
    }, "Hawk": {
      weapons: [],
      promo:null
    }, "Raven": {
      weapons: [],
      promo:null
    }
  },
  free: ["Ike"],
  flags: {
  }
};

const fe10 = {
  short: "fe10",
  disabled: "Need to figure out how these routes work",
  characters: ["Aran", "Astrid", "Bastian", "Boyd", "Brom", "Caineghis", "Calill", "Danved", "Edward", "Elincia", "Ena", "Fiona", "Gareth", "Gatrie", "Geoffrey", "Giffca", "Haar", "Heather", "Ike", "Ilyana", "Janaff", "Jill", "Kieran", "Kurthnaga", "Kyza", "Laura", "Leanne", "Leonardo", "Lethe", "Lucia", "Lyre", "Makalov", "Marcia", "Meg", "Mia", "Micaiah", "Mist", "Mordecai", "Muarim", "Naesala", "Nailah", "Nasir", "Nealuchi", "Nephenee", "Nolan", "Oscar", "Pelleas", "Rafiel", "Ranulf", "Reyson", "Rhys", "Rolf", "Sanaki", "Shinon", "Sigrun", "Skrimir", "Soren", "Sothe", "Stefan", "Tanith", "Tauroneo", "Tibarn", "Titania", "Tormod", "Ulki", "Vika", "Volke", "Volug", "Zihark"],
  flags: {
  }
};

const fe11 = {
  short: "fe11",
  disabled: "Need to implement class changes",
  characters: [],
  free: ["Marth"],
  flags: {
    classes: true,
    troll: true
  }
};

const fe12 = {
  short: "fe12",
  disabled: "Need to implement class changes",
  characters: [],
  free:["Marth", "Kris"],
  flags: {
    classes: true,
    troll: true
  }
};

// lists for pairings
// M is males, F is females, CX is children
const AWAKE_M = ["Robin (M)", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Donnel", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry"];
const AWAKE_F = ["Robin (F)", "Lissa", "Sully", "Miriel", "Maribelle", "Panne", "Cordelia", "Nowi", "Tharja", "Olivia", "Cherche"];
const AWAKE_CM = ["Owain", "Inigo", "Brady", "Gerome", "Morgan (M)", "Yarne", "Laurent"];
const AWAKE_CF = ["Lucina", "Kjelle", "Cynthia", "Severa", "Morgan (F)", "Noire", "Nah"];

const AWAKENING_inheritClasses = function(game, pairings, to) {
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
    if (i === "Lord")
      continue;
    if (classes.indexOf(i) === -1) {
      classes.push(i);
    }
  }
  return classes;
}

const fe13 = {
  short: "fe13",
  inheritClasses: AWAKENING_inheritClasses,
  characters: {
    "Robin (M)": {
      class: ["Tactician","Cavalier","Knight","Myrmidon","Mercenary","Fighter","Barbarian","Archer","Thief","Wyvern Rider","Mage","Dark Mage","Priest","Cleric"],
      base: "Tactician",
      pairings: ["Sumia", "Lissa", "Sully", "Miriel", "Maribelle", "Panne", "Cordelia", "Nowi", "Tharja", "Olivia", "Cherche", "Say'ri", "Flavia", "Tiki"],
      stat: { STR: true, MAG: true }
    },
    "Robin (F)": {
      class: ["Tactician","Cavalier","Knight","Myrmidon","Mercenary","Archer","Thief","Pegasus Knight","Wyvern Rider","Mage","Dark Mage","Priest","Cleric","Troubadour"],
      base: "Tactician",
      pairings: ["Chrom", "Frederick", "Virion", "Stahl", "Vaike", "Kellam", "Donnel", "Lon'qu", "Ricken", "Gaius", "Gregor", "Libra", "Henry", "Basilio"],
      stat: { STR: true, MAG: true }
    },
    "Chrom": {
      class:["Lord", "Cavalier", "Archer"],
      base: "Lord",
      pairings: ["Sully", "Sumia", "Maribelle", "Olivia"],
      stat: { STR: true }
    },"Lissa": {
      class:["Cleric", "Pegasus Knight", "Troubadour"],
      base: "Cleric",
      pairings: AWAKE_M,
      stat: { MAG: true }
    },"Frederick": {
      class:["Cavalier", "Knight", "Wyvern Rider"],
      base: "Great Knight",
      pairings: AWAKE_F,
      stat: { STR: true }
    },"Sully": {
      class:["Cavalier", "Myrmidon", "Wyvern Rider"],
      base: "Cavalier",
      pairings: AWAKE_M,
      stat: { STR: true }
    },"Virion": {
      class:["Archer", "Wyvern Rider", "Mage"],
      base: "Archer",
      pairings: AWAKE_F,
      stat: { STR: true }
    },"Stahl": {
      class:["Cavalier", "Archer", "Myrmidon"],
      base: "Cavalier",
      pairings: AWAKE_F,
      stat: { STR: true }
    },"Vaike": {
      class:["Fighter", "Thief", "Barbarian"],
      base: "Fighter",
      pairings: AWAKE_F,
      stat: { STR: true }
    },"Miriel": {
      class:["Mage", "Troubadour", "Dark Mage"],
      base: "Mage",
      pairings: AWAKE_M,
      stat: { MAG: true }
    },"Sumia": {
      class:["Pegasus Knight", "Knight", "Cleric"],
      base: "Pegasus Knight",
      pairings: ["Chrom", "Frederick", "Gaius", "Henry"],
      stat: { STR: true }
    },"Kellam": {
      class:["Knight", "Thief", "Priest"],
      base: "Knight",
      pairings: AWAKE_F,
      stat: { STR: true }
    },"Donnel": {
      class:["Villager", "Fighter", "Mercenary"],
      base: "Hero", // hardcoded cos there's no troll Donnel
      pairings: AWAKE_F,
      stat: { STR: true }
    },"Lon'qu": {
      class:["Myrmidon", "Thief", "Wyvern Rider"],
      base: "Myrmidon",
      pairings: AWAKE_F,
      stat: { STR: true }
    },"Ricken": {
      class:["Mage", "Cavalier", "Archer"],
      base: "Mage",
      pairings: AWAKE_F,
      stat: { MAG: true }
    },"Maribelle": {
      class:["Troubadour", "Pegasus Knight", "Mage"],
      base: "Troubadour",
      pairings: AWAKE_M,
      stat: { MAG: true }
    },"Panne": {
      class:["Taguel", "Thief", "Wyvern Rider"],
      base: "Taguel",
      pairings: AWAKE_M,
      stat: { STR: true }
    },"Gaius": {
      class:["Thief", "Fighter", "Myrmidon"],
      base: "Thief",
      pairings: AWAKE_F,
      stat: { STR: true }
    },"Cordelia": {
      class:["Pegasus Knight", "Mercenary", "Dark Mage"],
      base: "Pegasus Knight",
      pairings: AWAKE_M,
      stat: { STR: true }
    },"Gregor": {
      class:["Mercenary", "Barbarian", "Myrmidon"],
      base: "Mercenary",
      pairings: AWAKE_F,
      stat: { STR: true }
    },"Nowi": {
      class:["Manakete", "Mage", "Wyvern Rider"],
      base: "Manakete",
      pairings: AWAKE_M,
      stat: { STR: true, MAG: true }
    },"Libra": {
      class:["Priest", "Mage", "Dark Mage"],
      base: "War Priest",
      pairings: AWAKE_F,
      stat: { STR: true, MAG: true }
    },"Tharja": {
      class:["Dark Mage", "Knight", "Archer"],
      base: "Dark Mage",
      pairings: AWAKE_M,
      stat: { MAG: true }
    },"Anna": {
      class:["Thief", "Archer", "Mage"],
      base: "Trickster",
      pairings: ["Robin (M)"],
      stat: { STR: true, MAG: true }
    },"Olivia": {
      class:["Dancer", "Myrmidon", "Pegasus Knight"],
      base: "Dancer",
      pairings: AWAKE_M,
      stat: { STR: true }
    },"Cherche": {
      class:["Wyvern Rider", "Troubadour", "Cleric"],
      base: "Wyvern Rider",
      pairings: AWAKE_M,
      stat: { STR: true }
    },"Henry": {
      class:["Dark Mage", "Barbarian", "Thief"],
      base: "Dark Mage",
      pairings: AWAKE_F,
      stat: { STR: true, MAG: true }
    },"Say'ri": {
      class:["Myrmidon", "Pegasus Knight", "Wyvern Rider"],
      base: "Swordmaster",
      pairings: ["Robin (M)"],
      stat: { STR: true }
    },"Tiki": {
      class:["Manakete", "Wyvern Rider", "Mage"],
      base: "Manakete",
      pairings: ["Robin (M)"],
      stat: { STR: true }
    },"Basilio": {
      class:["Fighter", "Barbarian", "Knight"],
      base: "Warrior",
      pairings: ["Robin (F)"],
      stat: { STR: true }
    },"Flavia": {
      class:["Mercenary", "Thief", "Knight"],
      base: "Hero",
      pairings: ["Robin (M)"],
      stat: { STR: true }
    }
  },
  children: {
    "Lucina": {
      class: ["Lord", "Cavalier", "Archer"],
      stat: { STR: true },
      pairings: AWAKE_CM,
      parent: "Chrom",
    }, "Owain": {
      class: ["Myrmidon", "Priest", "Barbarian"],
      stat: { STR: true },
      pairings: AWAKE_CF,
      parent: "Lissa",
    }, "Inigo": {
      class: ["Mercenary", "Myrmidon", "Barbarian"],
      stat: { STR: true, MAG: true},
      pairings: AWAKE_CF,
      parent: "Olivia"
    }, "Brady": {
      class: ["Priest", "Cavalier", "Mage"],
      stat: { STR: true, MAG: true},
      pairings: AWAKE_CF,
      parent: "Maribelle"
    }, "Kjelle": {
      class: ["Knight", "Myrmidon", "Cavalier", "Wyvern Rider"],
      stat: { STR: true },
      pairings:  AWAKE_CM,
      parent: "Sully"
    }, "Cynthia": {
      class: ["Pegasus Knight", "Knight", "Cleric"],
      stat: { STR: true },
      pairings:  AWAKE_CM,
      parent: "Sumia"
    }, "Severa": {
      class: ["Mercenary", "Pegasus Knight", "Dark Mage"],
      stat: { STR: true },
      pairings:  AWAKE_CM,
      parent: "Cordelia"
    }, "Gerome": {
      class: ["Wyvern Rider", "Fighter", "Priest"],
      stat: { STR: true },
      pairings: AWAKE_CF,
      parent: "Cherche"
    }, "Morgan (F)": {
      class: ["Tactician","Cavalier","Knight","Myrmidon","Mercenary","Pegasus Knight","Archer","Thief","Wyvern Rider","Mage","Dark Mage","Cleric"],
      stat: { STR: true, MAG: true },
      parent: "Robin (M)",
      pairings: AWAKE_CM,
    }, "Morgan (M)": {
      class: ["Tactician","Cavalier","Knight","Myrmidon","Mercenary","Fighter","Barbarian","Archer","Thief","Wyvern Rider","Mage","Dark Mage","Priest"],
      stat: { STR: true, MAG: true },
      parent: "Robin (F)",
      pairings: AWAKE_CF,
    }, "Yarne": {
      class: ["Taguel", "Thief", "Barbarian"],
      stat: { STR: true },
      pairings:  AWAKE_CF,
      parent: "Panne"
    }, "Laurent": {
      class: ["Mage", "Barbarian", "Dark Mage"],
      stat: { MAG: true },
      pairings: AWAKE_CF,
      parent: "Miriel"
    }, "Noire": {
      class: ["Archer", "Knight", "Dark Mage"],
      stat: { STR: true, MAG: true },
      pairings:  AWAKE_CM,
      parent: "Tharja"
    }, "Nah": {
      class: ["Manakete", "Wyvern Rider", "Mage"],
      stat: { STR: true, MAG: true },
      pairings: AWAKE_CM,
      parent: "Nowi"
    }
  },
  classes: {
    "Lord": {
      weapons:["Sword"],
      promo: ["Great Lord"],
      stat: { STR: true }
    }, "Great Lord": {
      weapons:["Sword", "Lance"],
      promo: null,
      stat: { STR: true }
    }, "Tactician": {
      weapons:["Sword", "Tome"],
      promo: ["Grandmaster"],
      stat: { STR: true, MAG: true }
    }, "Grandmaster": {
      weapons:["Sword", "Tome"],
      promo: null,
      stat: { STR: true, MAG: true }
    }, "Cavalier": {
      weapons:["Sword", "Lance"],
      promo: ["Paladin", "Great Knight"],
      stat: { STR: true }
    }, "Paladin": {
      weapons:["Sword", "Lance"],
      promo: null,
      stat: { STR: true }
    }, "Great Knight": {
      weapons:["Sword", "Lance", "Axe"],
      promo: null,
      stat: { STR: true }
    }, "Knight": {
      weapons:["Lance"],
      promo: ["Great Knight", "General"],
      stat: { STR: true }
    }, "General": {
      weapons:["Lance", "Axe"],
      promo: null,
      stat: { STR: true }
    }, "Myrmidon": {
      weapons:["Sword"],
      promo: ["Swordmaster", "Assassin"],
      stat: { STR: true }
    }, "Swordmaster": {
      weapons:["Sword"],
      promo: null,
      stat: { STR: true }
    }, "Mercenary": {
      weapons:["Sword"],
      promo: ["Hero", "Bow Knight"],
      stat: { STR: true }
    }, "Hero": {
      weapons:["Sword", "Axe"],
      promo: null,
      stat: { STR: true }
    }, "Fighter": {
      weapons:["Axe"],
      promo: ["Hero", "Warrior"],
      stat: { STR: true }
    }, "Warrior": {
      weapons:["Axe", "Bow"],
      promo: null,
      stat: { STR: true }
    }, "Barbarian": {
      weapons:["Axe"],
      promo: ["Berserker", "Warrior"],
      stat: { STR: true }
    }, "Berserker": {
      weapons:["Axe"],
      promo: null,
      stat: { STR: true }
    }, "Archer": {
      weapons:["Bow"],
      promo: ["Sniper", "Bow Knight"],
      stat: { STR: true }
    }, "Sniper": {
      weapons:["Bow"],
      promo: null,
      stat: { STR: true }
    }, "Bow Knight": {
      weapons:["Sword", "Bow"],
      promo: null,
      stat: { STR: true }
    }, "Thief": {
      weapons:["Sword"],
      promo: ["Assassin", "Trickster"],
      stat: { STR: true }
    }, "Assassin": {
      weapons:["Sword", "Bow"],
      promo: null,
      stat: { STR: true }
    }, "Trickster": {
      weapons:["Sword", "Staff"],
      promo: null,
      stat: { STR: true }
    }, "Pegasus Knight": {
      weapons:["Lance"],
      promo: ["Falcon Knight", "Dark Flier"],
      stat: { STR: true }
    }, "Falcon Knight": {
      weapons:["Lance", "Staff"],
      promo: null,
      stat: { STR: true }
    }, "Dark Flier": {
      weapons:["Lance", "Tome"],
      promo: null,
      stat: { STR: true, MAG: true }
    }, "Wyvern Rider": {
      weapons:["Axe"],
      promo: ["Wyvern Lord", "Griffon Rider"],
      stat: { STR: true }
    }, "Wyvern Lord": {
      weapons:["Lance", "Axe"],
      promo: null,
      stat: { STR: true }
    }, "Griffon Rider": {
      weapons:["Axe"],
      promo: null,
      stat: { STR: true }
    }, "Mage": {
      weapons:["Tome"],
      promo: ["Sage", "Dark Knight"],
      stat: { MAG: true }
    }, "Sage": {
      weapons:["Tome", "Staff"],
      promo: null,
      stat: { MAG: true }
    }, "Dark Mage": {
      weapons:["Tome"],
      promo: ["Sorcerer", "Dark Knight"],
      stat: { MAG: true }
    }, "Sorcerer": {
      weapons:["Tome"],
      promo: null,
      stat: { MAG: true }
    }, "Dark Knight": {
      weapons:["Sword", "Tome"],
      promo: null,
      stat: { STR: true, MAG: true }
    }, "Priest": {
      weapons:["Staff"],
      promo: ["War Monk", "Sage"],
      stat: { MAG: true }
    }, "Cleric": {
      weapons:["Staff"],
      promo: ["War Cleric", "Sage"],
      stat: { MAG: true }
    }, "War Monk": {
      weapons:["Axe", "Staff"],
      promo: null,
      stat: { STR: true, MAG: true }
    }, "War Cleric": {
      weapons:["Axe", "Staff"],
      promo: null,
      stat: { STR: true, MAG: true }
    }, "Troubadour": {
      weapons:["Staff"],
      promo: ["War Cleric", "Valkyrie"],
      stat: { MAG: true }
    }, "Valkyrie": {
      weapons:["Tome", "Staff"],
      promo: null,
      stat: { MAG: true }
    }, "Villager": {
      weapons:["Lance"],
      promo: ["Fighter", "Mercenary"],
      stat: { STR: true }
    }, "Dancer": {
      weapons:["Sword"],
      promo: null,
      stat: { STR: true }
    }, "Taguel": {
      weapons:["Stone"],
      promo: null,
      stat: { STR: true }
    }, "Manakete": {
      weapons:["Stone"],
      promo: null,
      stat: { STR: true }
    }, "Lodestar": {
      weapons:["Sword"],
      promo: null,
      stat: { STR: true }
    }, "Dread Fighter": {
      weapons:["Sword", "Axe", "Tome"],
      promo: null,
      stat: { STR: true, MAG: true }
    }, "Bride": {
      weapons:["Lance", "Bow", "Staff"],
      promo: null,
      stat: { STR: true }
    }, "Soldier": {
      weapons:["Lance"],
      promo: null,
      stat: { STR: true }
    }, "Merchant": {
      weapons:["Lance"],
      promo: null,
      stat: { STR: true }
    }
  },
  free: ["Chrom"],
  avatar: "Robin",
  flags: {
    pairings: true,
    onlypairs: true,
    children: true,
    classes: true,
    troll: true
  }
};

// RX is royals since you can't pair them together.
const FATES_M = ["Jakob", "Silas", "Kaze", "Corrin (M)"];
const FATES_F = ["Felicia", "Azura", "Mozu", "Corrin (F)"];
const FATES_CM = ["Kana (M)", "Shigure", "Dwyer"];
const FATES_CF = ["Sophie", "Midori"];
const BR_M = ["Saizo", "Kaden", "Hinata", "Azama", "Subaki", "Hayato"];
const BR_RM = ["Ryoma", "Takumi"];
const BR_AM = FATES_M.concat(BR_M, BR_RM);
const BR_F = ["Hinoka", "Sakura", "Rinkah", "Orochi", "Kagero", "Hana", "Setsuna", "Oboro"];
const BR_RF = ["Hinoka", "Sakura"];
const BR_AF = FATES_F.concat(BR_F, BR_RF);
const BR_CM = ["Shiro", "Kiragi", "Asugi", "Hisame"];
const BR_CF = ["Selkie", "Mitama", "Caeldori", "Rhajat"];
const BR_ACM = FATES_CM.concat(BR_CM);
const BR_ACF = FATES_CF.concat(BR_CF);
const CQ_M = ["Benny", "Keaton", "Arthur", "Odin", "Laslow", "Niles"];
const CQ_RM = ["Xander", "Leo"];
const CQ_AM = FATES_M.concat(CQ_M, CQ_RM);
const CQ_F = ["Charlotte", "Effie", "Peri", "Beruka", "Selena", "Nyx"];
const CQ_RF = ["Camilla", "Elise"];
const CQ_AF = FATES_F.concat(CQ_F, CQ_RF);
const CQ_CM = ["Siegbert", "Forrest", "Ignatius", "Percy"];
const CQ_CF = ["Velouria", "Ophelia", "Soleil", "Nina"];
const CQ_ACM = FATES_CM.concat(CQ_CM);
const CQ_ACF = FATES_CF.concat(CQ_CF);
const RV_AM = BR_AM.concat(CQ_AM);
const RV_AF = BR_AF.concat(CQ_AF)
const RV_ACM = BR_ACM.concat(CQ_ACM);
const RV_ACF = BR_ACF.concat(CQ_ACF);

// inherits from one character to another's pool
// TODO: fix genderlocked classes (Maid/Butler, Monk/Shrine Maiden)
const _FATES_inheritClassesInternal = function(game, classes, from) {
  const parallel = {
    "Cavalier": "Ninja",
    "Knight": "Spear Fighter",
    "Fighter": "Oni Savage",
    "Mercenary": "Samurai",
    "Outlaw": "Archer",
    "Samurai": "Mercenary",
    "Oni Savage": "Fighter",
    "Spear Fighter": "Knight",
    "Diviner": "Dark Mage",
    "Sky Knight": "Wyvern Rider",
    "Archer": "Outlaw",
    "Wyvern Rider": "Sky Knight",
    "Ninja": "Cavalier",
    "Dark Mage": "Diviner",
    "Wolfskin": "Outlaw",
    "Kitsune": "Apothecary",
    "Songstress": "Troubadour (F)",
    "Villager": "Apothecary",
  }

  const char = game.characters[from] || game.children[from];
  const inherit = char.class;
  const uninheritable = ["Nohr Prince", "Songstress", "Kitsune", "Wolfskin", "Villager"];

  // if first slot is uninheritable class
  if (uninheritable.indexOf(inherit[0]) !== -1) {
    // try giving second class
    if (inherit[1] && classes[0] !== inherit[1]) {
      classes.push(inherit[1]);
    } else {
      // use parallel class instead
      if (inherit[0] !== "Nohr Prince") {
        if (parallel[inherit[0]]) // some classes have no parallel - sucked in
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
}

const FATES_inheritClasses = function(game, pairings, to) {
  const char = game.characters[to] || game.children[to];
  let classes = char.class.slice();

  // inherit from partner (if exists)
  if (pairings[to]) {
    _FATES_inheritClassesInternal(game, classes, pairings[to]);
  }

  // inherit from parent (if exists);
  if (game.children[to]) {
    const parent1 = game.children[to].parent;
    const parent2 = pairings[parent1];
    // inherit from main parent if not automated (Kana only)
    if (parent1 && classes.length === 1)
      _FATES_inheritClassesInternal(game, classes, parent1);
    if (parent2)
      _FATES_inheritClassesInternal(game, classes, parent2);
  }

  console.log(to, pairings, classes);
  return classes;
}

const FATES_CLASSES = {
  "Samurai": {
    weapons: ["Sword"],
    promo: ["Swordmaster", "Master of Arms"],
    stat: { STR: true }
  }, "Villager": {
    weapons: ["Lance"],
    promo: ["Master of Arms", "Merchant"],
    stat: { STR: true }
  }, "Apothecary": {
    weapons: ["Bow"],
    promo: ["Merchant", "Mechanist"],
    stat: { STR: true }
  }, "Ninja": {
    weapons: ["Kunai"],
    promo: ["Mechanist", "Master Ninja"],
    stat: { STR: true }
  }, "Oni Savage": {
    weapons: ["Axe"],
    promo: ["Oni Chieftain", "Blacksmith"],
    stat: { STR: true }
  }, "Spear Fighter": {
    weapons: ["Lance"],
    promo: ["Spear Master", "Basara"],
    stat: { STR: true }
  }, "Diviner": {
    weapons: ["Tome"],
    promo: ["Basara", "Onmyoji"],
    stat: { MAG: true }
  }, "Monk": {
    weapons: ["Staff"],
    promo: ["Onmyoji", "Great Master"],
    stat: { MAG: true }
  }, "Shrine Maiden": {
    weapons: ["Staff"],
    promo: ["Onmyoji", "Priestess"],
    stat: { MAG: true }
  }, "Sky Knight": {
    weapons: ["Lance"],
    promo: ["Falcon Knight", "Kinshi Knight"],
    stat: { STR: true }
  }, "Archer": {
    weapons: ["Bow"],
    promo: ["Kinshi Knight", "Sniper"],
    stat: { STR: true }
  }, "Kitsune": {
    weapons: ["Stone"],
    promo: ["Ninetails"],
    stat: { STR: true }
  }, "Songstress": {
    weapons: ["Lance"],
    promo: null,
    stat: { STR: true }
  }, "Hoshido Noble": {
    weapons: ["Sword", "Staff", "Stone"],
    promo: null,
    stat: { STR: true, MAG: true }
  }, "Swordmaster": {
    weapons: ["Sword"],
    promo: null,
    stat: { STR: true }
  }, "Master of Arms": {
    weapons: ["Sword", "Lance", "Axe"],
    promo: null,
    stat: { STR: true }
  }, "Merchant": {
    weapons: ["Lance", "Bow"],
    promo: null,
    stat: { STR: true }
  }, "Mechanist": {
    weapons: ["Kunai", "Bow"],
    promo: null,
    stat: { STR: true }
  }, "Master Ninja": {
    weapons: ["Sword", "Kunai"],
    promo: null,
    stat: { STR: true }
  }, "Oni Chieftain": {
    weapons: ["Axe", "Tome"],
    promo: null,
    stat: { STR: true }
  }, "Blacksmith": {
    weapons: ["Sword", "Axe"],
    promo: null,
    stat: { STR: true }
  }, "Spear Master": {
    weapons: ["Lance"],
    promo: null,
    stat: { STR: true }
  }, "Basara": {
    weapons: ["Lance", "Tome"],
    promo: null,
    stat: { STR: true, MAG: true }
  }, "Onmyoji": {
    weapons: ["Tome", "Staff"],
    promo: null,
    stat: { MAG: true }
  }, "Great Master": {
    weapons: ["Lance", "Staff"],
    promo: null,
    stat: { STR: true, MAG: true }
  }, "Priestess": {
    weapons: ["Bow", "Staff"],
    promo: null,
    stat: { STR: true, MAG: true }
  }, "Falcon Knight": {
    weapons: ["Lance", "Staff"],
    promo: null,
    stat: { STR: true }
  }, "Kinshi Knight": {
    weapons: ["Lance", "Bow"],
    promo: null,
    stat: { STR: true }
  }, "Sniper": {
    weapons: ["Bow"],
    promo: null,
    stat: { STR: true }
  }, "Ninetails": {
    weapons: ["Stone"],
    promo: null,
    stat: { STR: true }
  }, "Cavalier": {
    weapons: ["Sword", "Lance"],
    promo: ["Paladin", "Great Knight"],
    stat: { STR: true }
  }, "Knight": {
    weapons: ["Lance"],
    promo: ["General", "Great Knight"],
    stat: { STR: true }
  }, "Fighter": {
    weapons: ["Axe"],
    promo: ["Berserker", "Hero"],
    stat: { STR: true }
  }, "Mercenary": {
    weapons: ["Sword"],
    promo: ["Hero", "Bow Knight"],
    stat: { STR: true }
  }, "Outlaw": {
    weapons: ["Bow"],
    promo: ["Bow Knight", "Adventurer"],
    stat: { STR: true }
  }, "Wyvern Rider": {
    weapons: ["Axe"],
    promo: ["Wyvern Lord", "Malig Knight"],
    stat: { STR: true }
  }, "Dark Mage": {
    weapons: ["Tome"],
    promo: ["Sorcerer", "Dark Knight"],
    stat: { MAG: true }
  }, "Troubadour (M)": {
    weapons: ["Staff"],
    promo: ["Strategist", "Butler"],
    stat: { MAG: true }
  }, "Troubadour (F)": {
    weapons: ["Staff"],
    promo: ["Strategist", "Maid"],
    stat: { MAG: true }
  }, "Wolfskin": {
    weapons: ["Stone"],
    promo: ["Wolfssegner"],
    stat: { STR: true }
  }, "Nohr Noble": {
    weapons: ["Sword", "Tome", "Stone"],
    promo: null,
    stat: { STR: true, MAG: true }
  }, "Paladin": {
    weapons: ["Sword", "Lance"],
    promo: null,
    stat: { STR: true }
  }, "Great Knight": {
    weapons: ["Sword", "Lance", "Axe"],
    promo: null,
    stat: { STR: true }
  }, "General": {
    weapons: ["Lance", "Axe"],
    promo: null,
    stat: { STR: true }
  }, "Berserker": {
    weapons: ["Axe"],
    promo: null,
    stat: { STR: true }
  }, "Hero": {
    weapons: ["Sword", "Axe"],
    promo: null,
    stat: { STR: true }
  }, "Bow Knight": {
    weapons: ["Sword", "Bow"],
    promo: null,
    stat: { STR: true }
  }, "Adventurer": {
    weapons: ["Bow", "Staff"],
    promo: null,
    stat: { STR: true }
  }, "Wyvern Lord": {
    weapons: ["Lance", "Axe"],
    promo: null,
    stat: { STR: true }
  }, "Malig Knight": {
    weapons: ["Axe", "Tome"],
    promo: null,
    stat: { STR: true, MAG: true }
  }, "Sorcerer": {
    weapons: ["Tome"],
    promo: null,
    stat: { MAG: true }
  }, "Dark Knight": {
    weapons: ["Sword", "Tome"],
    promo: null,
    stat: { STR: true, MAG: true }
  }, "Strategist": {
    weapons: ["Tome", "Staff"],
    promo: null,
    stat: { MAG: true }
  }, "Butler": {
    weapons: ["Kunai", "Staff"],
    promo: null,
    stat: { STR: true, MAG: true }
  }, "Maid": {
    weapons: ["Kunai", "Staff"],
    promo: null,
    stat: { STR: true, MAG: true }
  }, "Wolfssegner": {
    weapons: ["Stone"],
    promo: null,
    stat: { STR: true }
  }
}

const fe14br = {
  short: "fe14",
  inheritClasses: FATES_inheritClasses,
  characters: {
    "Corrin (M)": {
      class: ["Nohr Prince", "Samurai", "Villager", "Apothecary", "Ninja", "Oni Savage", "Spear Fighter", "Diviner", "Monk", "Sky Knight", "Archer", "Cavalier", "Knight", "Fighter", "Mercenary", "Outlaw", "Wyvern Rider", "Dark Mage", "Troubadour (M)"],
      base: "Nohr Prince",
      pairings: BR_AF.concat(["Scarlet", "Reina"]),
      stat: { STR: true, MAG: true }
    },
    "Corrin (F)": {
      class: ["Nohr Prince", "Samurai", "Villager", "Apothecary", "Ninja", "Oni Savage", "Spear Fighter", "Diviner", "Shrine Maiden", "Sky Knight", "Archer", "Cavalier", "Knight", "Fighter", "Mercenary", "Outlaw", "Wyvern Rider", "Dark Mage", "Troubadour (F)"],
      base: "Nohr Prince",
      pairings: BR_AM.concat(["Yukimura", "Shura", "Izana"]),
      stat: { STR: true, MAG: true }
    },
    "Felicia": {
      class:["Troubadour (F)", "Mercenary"],
      base: "Maid",
      pairings: BR_AM,
      stat: { MAG: true }
    },
    "Jakob": {
      class:["Troubadour (M)", "Cavalier"],
      base: "Butler",
      pairings: BR_AF,
      stat: { STR: true }
    },
    "Kaze": {
      class:["Ninja", "Samurai"],
      base: "Ninja",
      pairings: BR_AF,
      stat: { STR: true }
    },
    "Azura": {
      class:["Songstress", "Sky Knight"],
      base: "Songstress",
      pairings: BR_AM,
      stat: { STR: true }
    },
    "Silas": {
      class:["Cavalier", "Mercenary"],
      base: "Cavalier",
      pairings: BR_AF,
      stat: { STR: true }
    },
    "Shura": {
      class:["Outlaw", "Ninja", "Fighter"],
      base: "Adventurer",
      pairings: ["Corrin (F)"],
      stat: { STR: true }
    },
    "Mozu": {
      class:["Villager", "Archer"],
      base: "Villager",
      pairings: BR_AM,
      stat: { STR: true }
    },
    "Rinkah": {
      class:["Oni Savage", "Ninja"],
      base: "Oni Savage",
      pairings: BR_AM,
      stat: { STR: true }
    },
    "Sakura": {
      class:["Shrine Maiden", "Sky Knight"],
      base: "Shrine Maiden",
      pairings: FATES_M.concat(BR_M),
      stat: { STR: true, MAG: true }
    },
    "Hana": {
      class:["Samurai", "Shrine Maiden"],
      base: "Samurai",
      pairings: BR_AM,
      stat: { STR: true }
    },
    "Subaki": {
      class:["Sky Knight", "Samurai"],
      base: "Sky Knight",
      pairings: BR_AF,
      stat: { STR: true }
    },
    "Saizo": {
      class:["Ninja", "Samurai"],
      base: "Ninja",
      pairings: BR_AF,
      stat: { STR: true, MAG: true }
    },
    "Orochi": {
      class:["Diviner", "Apothecary"],
      base: "Diviner",
      pairings: BR_AM,
      stat: { MAG: true }
    },
    "Hinoka": {
      class:["Sky Knight", "Spear Fighter"],
      base: "Sky Knight",
      pairings: FATES_M.concat(BR_M),
      stat: { STR: true }
    },
    "Azama": {
      class:["Monk", "Apothecary"],
      base: "Monk",
      pairings: BR_AF,
      stat: { STR: true }
    },
    "Setsuna": {
      class:["Archer", "Ninja"],
      base: "Archer",
      pairings: BR_AM,
      stat: { STR: true }
    },
    "Hayato": {
      class:["Diviner", "Oni Savage"],
      base: "Diviner",
      pairings: BR_AF,
      stat: { STR: true, MAG: true }
    },
    "Oboro": {
      class:["Spear Fighter", "Apothecary"],
      base: "Spear Fighter",
      pairings: BR_AM,
      stat: { STR: true }
    },
    "Hinata": {
      class:["Samurai", "Oni Savage"],
      base: "Samurai",
      pairings: BR_AF,
      stat: { STR: true }
    },
    "Takumi": {
      class:["Archer", "Spear Fighter"],
      base: "Archer",
      pairings: FATES_F.concat(BR_F),
      stat: { STR: true }
    },
    "Kagero": {
      class:["Ninja", "Diviner"],
      base: "Ninja",
      pairings: BR_AM,
      stat: { STR: true }
    },
    "Reina": {
      class:["Sky Knight", "Diviner", "Ninja"],
      base: "Kinshi Knight",
      pairings: ["Corrin (M)"],
      stat: { STR: true }
    },
    "Kaden": {
      class:["Kitsune", "Diviner"],
      base: "Kitsune",
      pairings: BR_AF,
      stat: { STR: true }
    },
    "Ryoma": {
      class:["Samurai", "Sky Knight"],
      base: "Swordmaster",
      pairings: FATES_F.concat(BR_F),
      stat: { STR: true }
    },
    "Izana": {
      class:["Monk", "Samurai", "Apothecary"],
      base: "Onmyoji",
      pairings: ["Corrin (F)"],
      stat: { MAG: true }
    },
    "Scarlet": {
      class:["Wyvern Rider", "Outlaw", "Knight"],
      base: "Wyvern Rider",
      pairings: ["Corrin (M)"],
      stat: { STR: true }
    },
    "Yukimura": {
      class:["Apothecary", "Samurai", "Monk"],
      base: "Mechanist",
      pairings: ["Corrin (F)"],
      stat: { STR: true }
    }
  },
  children: {
    "Kana (M)": {
      base: "Nohr Prince",
      class: ["Nohr Prince"],
      pairings: BR_ACF,
      stat: { STR: true, MAG: true },
      parent: "Corrin (F)",
    }, "Kana (F)": {
      base: "Nohr Prince",
      class: ["Nohr Prince"],
      pairings: BR_ACM,
      stat: { STR: true, MAG: true },
      parent: "Corrin (M)",
    }, "Shigure": {
      base: "Sky Knight",
      class: ["Sky Knight", "Troubadour (M)"],
      pairings: BR_ACF,
      stat: { STR: true },
      parent: "Azura",
    }, "Dwyer": {
      base: "Troubadour (M)",
      class: ["Troubadour (F)", "Cavalier"],
      pairings: BR_ACF,
      stat: { STR: true },
      parent: "Jakob",
    }, "Sophie": {
      base: "Cavalier",
      class: ["Cavalier", "Mercenary"],
      pairings: BR_ACM,
      stat: { STR: true },
      parent: "Silas",
    }, "Midori": {
      base: "Apothecary",
      class: ["Apothecary", "Ninja"],
      pairings: BR_ACM,
      stat: { STR: true },
      parent: "Kaze",
    }, "Shiro": {
      base: "Spear Fighter",
      class: ["Spear Fighter", "Samurai"],
      pairings: BR_ACF,
      stat: { STR: true },
      parent: "Ryoma",
    }, "Kiragi": {
      base: "Archer",
      class: ["Archer", "Spear Fighter"],
      pairings: BR_ACF,
      stat: { STR: true },
      parent: "Takumi",
    }, "Asugi": {
      base: "Ninja",
      class: ["Ninja", "Samurai"],
      pairings: BR_ACF,
      stat: { STR: true, MAG: true },
      parent: "Saizo",
    }, "Selkie": {
      base: "Kitsune",
      class: ["Kitsune", "Diviner"],
      pairings: BR_ACM,
      stat: { STR: true },
      parent: "Kaden",
    }, "Hisame": {
      base: "Samurai",
      class: ["Samurai", "Oni Savage"],
      pairings: BR_ACF,
      stat: { STR: true },
      parent: "Hinata",
    }, "Mitama": {
      base: "Shrine Maiden",
      class: ["Shrine Maiden", "Apothecary"],
      pairings: BR_ACM,
      stat: { STR: true, MAG: true },
      parent: "Azama",
    }, "Caeldori": {
      base: "Sky Knight",
      class: ["Sky Knight", "Samurai"],
      pairings: BR_ACM,
      stat: { STR: true },
      parent: "Subaki",
    }, "Rhajat": {
      base: "Diviner",
      class: ["Diviner", "Oni Savage"],
      pairings: BR_ACM.concat(["Corrin (F)"]),
      stat: { MAG: true },
      parent: "Hayato",
    }
  },
  classes: {
    ...FATES_CLASSES,
    ...{
      "Nohr Prince": {
        weapons: ["Sword", "Stone"],
        promo: ["Hoshido Noble"],
        stat: { STR: true, MAG: true }
      }
    }
  },
  free: [],
  avatar: "Corrin",
  flags: {
    pairings: true,
    friends: true,
    onlypairs: true,
    children: true,
    classes: true,
    troll: true
  }
};

const fe14cq = {
  short: "fe14",
  inheritClasses: FATES_inheritClasses,
  characters: {
    "Corrin (M)": {
      class: ["Nohr Prince", "Samurai", "Villager", "Apothecary", "Ninja", "Oni Savage", "Spear Fighter", "Diviner", "Monk", "Sky Knight", "Archer", "Cavalier", "Knight", "Fighter", "Mercenary", "Outlaw", "Wyvern Rider", "Dark Mage", "Troubadour (M)"],
      base: "Nohr Prince",
      pairings: CQ_AF.concat(["Niles", "Flora"]),
      stat: { STR: true, MAG: true }
    },
    "Corrin (F)": {
      class: ["Nohr Prince", "Samurai", "Villager", "Apothecary", "Ninja", "Oni Savage", "Spear Fighter", "Diviner", "Shrine Maiden", "Sky Knight", "Archer", "Cavalier", "Knight", "Fighter", "Mercenary", "Outlaw", "Wyvern Rider", "Dark Mage", "Troubadour (F)"],
      base: "Nohr Prince",
      pairings: CQ_AM.concat(["Gunter", "Shura", "Izana"]),
      stat: { STR: true, MAG: true }
    },
    "Felicia": {
      class:["Troubadour (F)", "Mercenary"],
      base: "Maid",
      pairings: CQ_AM,
      stat: { MAG: true }
    },
    "Jakob": {
      class:["Troubadour (M)", "Cavalier"],
      base: "Butler",
      pairings: CQ_AF,
      stat: { STR: true }
    },
    "Kaze": {
      class:["Ninja", "Samurai"],
      base: "Ninja",
      pairings: CQ_AF,
      stat: { STR: true }
    },
    "Azura": {
      class:["Songstress", "Sky Knight"],
      base: "Songstress",
      pairings: CQ_AM,
      stat: { STR: true }
    },
    "Silas": {
      class:["Cavalier", "Mercenary"],
      base: "Cavalier",
      pairings: CQ_AF,
      stat: { STR: true }
    },
    "Shura": {
      class:["Outlaw", "Ninja", "Fighter"],
      base: "Adventurer",
      pairings: ["Corrin (F)"],
      stat: { STR: true }
    },
    "Mozu": {
      class:["Villager", "Archer"],
      base: "Villager",
      pairings: CQ_AM,
      stat: { STR: true }
    },
    "Gunter": {
      class:["Cavalier", "Mercenary", "Wyvern Rider"],
      base: "Great Knight",
      pairings: ["Corrin (F)"],
      stat: { STR: true }
    },
    "Elise": {
      class:["Troubadour (F)", "Wyvern Rider"],
      base: "Troubadour (F)",
      pairings: FATES_M.concat(CQ_M),
      stat: { MAG: true }
    },
    "Arthur": {
      class:["Fighter", "Cavalier"],
      base: "Fighter",
      pairings: CQ_AF,
      stat: { STR: true }
    },
    "Effie": {
      class:["Knight", "Troubadour (F)"],
      base: "Knight",
      pairings: CQ_AM,
      stat: { STR: true }
    },
    "Odin": {
      class:["Dark Mage", "Samurai"],
      base: "Dark Mage",
      pairings: CQ_AF,
      stat: { STR: true, MAG: true }
    },
    "Niles": {
      class:["Outlaw", "Dark Mage"],
      base: "Outlaw",
      pairings: CQ_AF.concat(["Corrin (M)"]),
      stat: { STR: true }
    },
    "Nyx": {
      class:["Dark Mage", "Outlaw"],
      base: "Dark Mage",
      pairings: CQ_AM,
      stat: { MAG: true }
    },
    "Camilla": {
      class:["Wyvern Rider", "Dark Mage"],
      base: "Malig Knight",
      pairings: FATES_M.concat(CQ_M),
      stat: { STR: true, MAG: true }
    },
    "Selena": {
      class:["Mercenary", "Sky Knight"],
      base: "Mercenary",
      pairings: CQ_AM,
      stat: { STR: true }
    },
    "Beruka": {
      class:["Wyvern Rider", "Fighter"],
      base: "Wyvern Rider",
      pairings: CQ_AM,
      stat: { STR: true }
    },
    "Laslow": {
      class:["Mercenary", "Ninja"],
      base: "Mercenary",
      pairings: CQ_AF,
      stat: { STR: true }
    },
    "Peri": {
      class:["Cavalier", "Dark Mage"],
      base: "Cavalier",
      pairings: CQ_AM,
      stat: { STR: true }
    },
    "Benny": {
      class:["Knight", "Fighter"],
      base: "Knight",
      pairings: CQ_AF,
      stat: { STR: true }
    },
    "Charlotte": {
      class:["Fighter", "Troubadour (F)"],
      base: "Fighter",
      pairings: CQ_AM,
      stat: { STR: true }
    },
    "Leo": {
      class:["Dark Mage", "Troubadour (M)"],
      base: "Dark Knight",
      pairings: FATES_F.concat(CQ_F),
      stat: { STR: true, MAG: true }
    },
    "Keaton": {
      class:["Wolfskin", "Fighter"],
      base: "Wolfskin",
      pairings: CQ_AF,
      stat: { STR: true }
    },
    "Xander": {
      class:["Cavalier", "Wyvern Rider"],
      base: "Paladin",
      pairings: FATES_F.concat(CQ_F),
      stat: { STR: true }
    },
    "Flora": {
      class:["Troubadour (F)", "Dark Mage", "Mercenary"],
      base: "Maid",
      pairings: ["Corrin (M)"],
      stat: { STR: true }
    },
    "Izana": {
      class:["Monk", "Samurai", "Apothecary"],
      base: "Onmyoji",
      pairings: ["Corrin (F)"],
      stat: { MAG: true }
    }
  },
  children: {
    "Kana (M)": {
      base: "Nohr Prince",
      class: ["Nohr Prince"],
      pairings: CQ_ACF,
      stat: { STR: true, MAG: true },
      parent: "Corrin (F)",
    }, "Kana (F)": {
      base: "Nohr Prince",
      class: ["Nohr Prince"],
      pairings: CQ_ACM,
      stat: { STR: true, MAG: true },
      parent: "Corrin (M)",
    }, "Shigure": {
      base: "Sky Knight",
      class: ["Sky Knight", "Troubadour (M)"],
      pairings: CQ_ACF,
      stat: { STR: true },
      parent: "Azura",
    }, "Dwyer": {
      base: "Troubadour (M)",
      class: ["Troubadour (M)", "Cavalier"],
      pairings: CQ_ACF,
      stat: { STR: true },
      parent: "Jakob",
    }, "Sophie": {
      base: "Cavalier",
      class: ["Cavalier", "Mercenary"],
      pairings: CQ_ACM,
      stat: { STR: true },
      parent: "Silas",
    }, "Midori": {
      base: "Apothecary",
      class: ["Apothecary", "Ninja"],
      pairings: CQ_ACM,
      stat: { STR: true },
      parent: "Kaze",
    }, "Siegbert": {
      base: "Cavalier",
      class: ["Cavalier", "Wyvern Rider"],
      pairings: CQ_ACF,
      stat: { STR: true },
      parent: "Xander",
    }, "Forrest": {
      base: "Troubadour (M)",
      class: ["Troubadour (M)", "Dark Mage"],
      pairings: CQ_ACF,
      stat: { MAG: true },
      parent: "Leo",
    }, "Ignatius": {
      base: "Knight",
      class: ["Knight", "Fighter"],
      pairings: CQ_ACF,
      stat: { STR: true },
      parent: "Benny",
    }, "Velouria": {
      base: "Wolfskin",
      class: ["Wolfskin", "Fighter"],
      pairings: CQ_ACM,
      stat: { STR: true },
      parent: "Keaton",
    }, "Percy": {
      base: "Wyvern Rider",
      class: ["Wyvern Rider", "Fighter"],
      pairings: CQ_ACF,
      stat: { STR: true },
      parent: "Arthur",
    }, "Ophelia": {
      base: "Dark Mage",
      class: ["Dark Mage", "Samurai"],
      pairings: CQ_ACM,
      stat: { MAG: true },
      parent: "Odin",
    }, "Soleil": {
      base: "Mercenary",
      class: ["Mercenary", "Ninja"],
      pairings: CQ_ACM,
      stat: { STR: true },
      parent: "Laslow",
    }, "Nina": {
      base: "Outlaw",
      class: ["Outlaw", "Dark Mage"],
      pairings: CQ_ACM,
      stat: { STR: true },
      parent: "Niles"
    }
  },
  classes:  {
    ...FATES_CLASSES,
    ...{
      "Nohr Prince": {
        weapons: ["Sword", "Stone"],
        promo: ["Nohr Noble"],
        stat: { STR: true, MAG: true }
      }
    }
  },
  free: [],
  avatar: "Corrin",
  flags: {
    pairings: true,
    friends: true,
    onlypairs: true,
    children: true,
    classes: true,
    troll: true
  }
};

const fe14rev = {
  short: "fe14",
  inheritClasses: FATES_inheritClasses,
  characters: {
    "Corrin (M)": {
      class: ["Nohr Prince", "Samurai", "Villager", "Apothecary", "Ninja", "Oni Savage", "Spear Fighter", "Diviner", "Monk", "Sky Knight", "Archer", "Cavalier", "Knight", "Fighter", "Mercenary", "Outlaw", "Wyvern Rider", "Dark Mage", "Troubadour (M)"],
      base: "Nohr Prince",
      pairings: RV_AF.concat(["Niles", "Reina", "Flora"]),
      stat: { STR: true, MAG: true }
    },
    "Corrin (F)": {
      class: ["Nohr Prince", "Samurai", "Villager", "Apothecary", "Ninja", "Oni Savage", "Spear Fighter", "Diviner", "Shrine Maiden", "Sky Knight", "Archer", "Cavalier", "Knight", "Fighter", "Mercenary", "Outlaw", "Wyvern Rider", "Dark Mage", "Troubadour (F)"],
      base: "Nohr Prince",
      pairings: RV_AM.concat(["Shura", "Fuga"]),
      stat: { STR: true, MAG: true }
    },
    "Felicia": {
      class:["Troubadour (F)", "Mercenary"],
      base: "Maid",
      pairings: RV_AM,
      stat: { MAG: true }
    },
    "Jakob": {
      class:["Troubadour (M)", "Cavalier"],
      base: "Butler",
      pairings: RV_AF,
      stat: { STR: true }
    },
    "Kaze": {
      class:["Ninja", "Samurai"],
      base: "Ninja",
      pairings: RV_AF,
      stat: { STR: true }
    },
    "Azura": {
      class:["Songstress", "Sky Knight"],
      base: "Songstress",
      pairings: RV_AM,
      stat: { STR: true }
    },
    "Silas": {
      class:["Cavalier", "Mercenary"],
      base: "Cavalier",
      pairings: RV_AF,
      stat: { STR: true }
    },
    "Shura": {
      class:["Outlaw", "Ninja", "Fighter"],
      base: "Adventurer",
      pairings: ["Corrin (F)"],
      stat: { STR: true }
    },
    "Mozu": {
      class:["Villager", "Archer"],
      base: "Villager",
      pairings: RV_AM,
      stat: { STR: true }
    },
    "Gunter": {
      class:["Cavalier", "Mercenary", "Wyvern Rider"],
      base: "Great Knight",
      pairings: ["Corrin (F)"],
      stat: { STR: true }
    },
    "Elise": {
      class:["Troubadour (F)", "Wyvern Rider"],
      base: "Troubadour (F)",
      pairings: FATES_M.concat(CQ_M).concat(BR_RM),
      stat: { MAG: true }
    },
    "Arthur": {
      class:["Fighter", "Cavalier"],
      base: "Fighter",
      pairings: CQ_AF.concat(["Kagero", "Setsuna"]),
      stat: { STR: true }
    },
    "Effie": {
      class:["Knight", "Troubadour (F)"],
      base: "Knight",
      pairings: CQ_AM.concat(["Hayato", "Azama"]),
      stat: { STR: true }
    },
    "Odin": {
      class:["Dark Mage", "Samurai"],
      base: "Dark Mage",
      pairings: CQ_AF.concat(["Orochi", "Kagero"]),
      stat: { STR: true, MAG: true }
    },
    "Niles": {
      class:["Outlaw", "Dark Mage"],
      base: "Outlaw",
      pairings: CQ_AF.concat(["Corrin (M)", "Setsuna", "Oboro"]),
      stat: { STR: true }
    },
    "Nyx": {
      class:["Dark Mage", "Outlaw"],
      base: "Dark Mage",
      pairings: CQ_AM.concat(["Hayato", "Subaki"]),
      stat: { MAG: true }
    },
    "Camilla": {
      class:["Wyvern Rider", "Dark Mage"],
      base: "Malig Knight",
      pairings: FATES_M.concat(CQ_M).concat(BR_RM),
      stat: { STR: true, MAG: true }
    },
    "Selena": {
      class:["Mercenary", "Sky Knight"],
      base: "Mercenary",
      pairings: CQ_AM.concat(["Subaki", "Hinata"]),
      stat: { STR: true }
    },
    "Beruka": {
      class:["Wyvern Rider", "Fighter"],
      base: "Wyvern Rider",
      pairings: CQ_AM.concat(["Azama", "Saizo"]),
      stat: { STR: true }
    },
    "Laslow": {
      class:["Mercenary", "Ninja"],
      base: "Mercenary",
      pairings: CQ_AF.concat(["Orochi", "Hana"]),
      stat: { STR: true }
    },
    "Peri": {
      class:["Cavalier", "Dark Mage"],
      base: "Cavalier",
      pairings: CQ_AM.concat(["Hinata", "Kaden"]),
      stat: { STR: true }
    },
    "Benny": {
      class:["Knight", "Fighter"],
      base: "Knight",
      pairings: CQ_AF.concat(["Rinkah", "Oboro"]),
      stat: { STR: true }
    },
    "Charlotte": {
      class:["Fighter", "Troubadour (F)"],
      base: "Fighter",
      pairings: CQ_AM.concat(["Saizo", "Kaden"]),
      stat: { STR: true }
    },
    "Leo": {
      class:["Dark Mage", "Troubadour (M)"],
      base: "Dark Knight",
      pairings: FATES_F.concat(CQ_F).concat(BR_RF),
      stat: { STR: true, MAG: true }
    },
    "Keaton": {
      class:["Wolfskin", "Fighter"],
      base: "Wolfskin",
      pairings: CQ_AF.concat(["Rinkah", "Hana"]),
      stat: { STR: true }
    },
    "Xander": {
      class:["Cavalier", "Wyvern Rider"],
      base: "Paladin",
      pairings: FATES_F.concat(CQ_F).concat(BR_RF),
      stat: { STR: true }
    },
    "Flora": {
      class:["Troubadour (F)", "Dark Mage", "Mercenary"],
      base: "Maid",
      pairings: ["Corrin (M)"],
      stat: { STR: true }
    },
    "Rinkah": {
      class:["Oni Savage", "Ninja"],
      base: "Oni Savage",
      pairings: BR_AM.concat(["Benny", "Keaton"]),
      stat: { STR: true }
    },
    "Sakura": {
      class:["Shrine Maiden", "Sky Knight"],
      base: "Shrine Maiden",
      pairings: FATES_M.concat(BR_M).concat(CQ_RM),
      stat: { STR: true, MAG: true }
    },
    "Hana": {
      class:["Samurai", "Shrine Maiden"],
      base: "Samurai",
      pairings: BR_AM.concat(["Laslow", "Keaton"]),
      stat: { STR: true }
    },
    "Subaki": {
      class:["Sky Knight", "Samurai"],
      base: "Sky Knight",
      pairings: BR_AF.concat(["Selena", "Nyx"]),
      stat: { STR: true }
    },
    "Saizo": {
      class:["Ninja", "Samurai"],
      base: "Ninja",
      pairings: BR_AF.concat(["Charlotte", "Beruka"]),
      stat: { STR: true, MAG: true }
    },
    "Orochi": {
      class:["Diviner", "Apothecary"],
      base: "Diviner",
      pairings: BR_AM.concat(["Laslow", "Odin"]),
      stat: { MAG: true }
    },
    "Hinoka": {
      class:["Sky Knight", "Spear Fighter"],
      base: "Sky Knight",
      pairings: FATES_M.concat(BR_M).concat(CQ_RM),
      stat: { STR: true }
    },
    "Azama": {
      class:["Monk", "Apothecary"],
      base: "Monk",
      pairings: BR_AF.concat(["Effie", "Beruka"]),
      stat: { STR: true }
    },
    "Setsuna": {
      class:["Archer", "Ninja"],
      base: "Archer",
      pairings: BR_AM.concat(["Niles", "Arthur"]),
      stat: { STR: true }
    },
    "Hayato": {
      class:["Diviner", "Oni Savage"],
      base: "Diviner",
      pairings: BR_AF.concat(["Nyx", "Effie"]),
      stat: { STR: true, MAG: true }
    },
    "Oboro": {
      class:["Spear Fighter", "Apothecary"],
      base: "Spear Fighter",
      pairings: BR_AM.concat(["Benny", "Niles"]),
      stat: { STR: true }
    },
    "Hinata": {
      class:["Samurai", "Oni Savage"],
      base: "Samurai",
      pairings: BR_AF.concat(["Peri", "Selena"]),
      stat: { STR: true }
    },
    "Takumi": {
      class:["Archer", "Spear Fighter"],
      base: "Archer",
      pairings: FATES_F.concat(BR_F).concat(CQ_RF),
      stat: { STR: true }
    },
    "Kagero": {
      class:["Ninja", "Diviner"],
      base: "Ninja",
      pairings: BR_AM.concat(["Odin", "Arthur"]),
      stat: { STR: true }
    },
    "Reina": {
      class:["Sky Knight", "Diviner", "Ninja"],
      base: "Kinshi Knight",
      pairings: ["Corrin (M)"],
      stat: { STR: true }
    },
    "Kaden": {
      class:["Kitsune", "Diviner"],
      base: "Kitsune",
      pairings: BR_AF.concat(["Charlotte", "Peri"]),
      stat: { STR: true }
    },
    "Ryoma": {
      class:["Samurai", "Sky Knight"],
      base: "Swordmaster",
      pairings: FATES_F.concat(BR_F).concat(CQ_RF),
      stat: { STR: true }
    },
    "Fuga": {
      class:["Samurai", "Oni Savage", "Monk"],
      base: "Master of Arms",
      pairings: ["Corrin (F)"],
      stat: { STR: true }
    }
  },
  children: {
    "Kana (M)": {
      base: "Nohr Prince",
      class: ["Nohr Prince"],
      pairings: RV_ACF,
      stat: { STR: true, MAG: true },
      parent: "Corrin (F)",
    }, "Kana (F)": {
      base: "Nohr Prince",
      class: ["Nohr Prince"],
      pairings: RV_ACM,
      stat: { STR: true, MAG: true },
      parent: "Corrin (M)",
    }, "Shigure": {
      base: "Sky Knight",
      class: ["Sky Knight", "Troubadour (M)"],
      pairings: RV_ACF,
      stat: { STR: true },
      parent: "Azura",
    }, "Dwyer": {
      base: "Troubadour (M)",
      class: ["Troubadour (M)", "Cavalier"],
      pairings: RV_ACF,
      stat: { STR: true },
      parent: "Jakob",
    }, "Sophie": {
      base: "Cavalier",
      class: ["Cavalier", "Mercenary"],
      pairings: RV_ACM,
      stat: { STR: true },
      parent: "Silas",
    }, "Midori": {
      base: "Apothecary",
      class: ["Apothecary", "Ninja"],
      pairings: RV_ACM,
      stat: { STR: true },
      parent: "Kaze",
    }, "Shiro": {
      base: "Spear Fighter",
      class: ["Spear Fighter", "Samurai"],
      pairings: BR_ACF,
      stat: { STR: true },
      parent: "Ryoma",
    }, "Kiragi": {
      base: "Archer",
      class: ["Archer", "Spear Fighter"],
      pairings: BR_ACF,
      stat: { STR: true },
      parent: "Takumi",
    }, "Asugi": {
      base: "Ninja",
      class: ["Ninja", "Samurai"],
      pairings: BR_ACF,
      stat: { STR: true, MAG: true },
      parent: "Saizo",
    }, "Selkie": {
      base: "Kitsune",
      class: ["Kitsune", "Diviner"],
      pairings: BR_ACM,
      stat: { STR: true },
      parent: "Kaden",
    }, "Hisame": {
      base: "Samurai",
      class: ["Samurai", "Oni Savage"],
      pairings: BR_ACF,
      stat: { STR: true },
      parent: "Hinata",
    }, "Mitama": {
      base: "Shrine Maiden",
      class: ["Shrine Maiden", "Apothecary"],
      pairings: BR_ACM,
      stat: { STR: true, MAG: true },
      parent: "Azama",
    }, "Caeldori": {
      base: "Sky Knight",
      class: ["Sky Knight", "Samurai"],
      pairings: BR_ACM,
      stat: { STR: true },
      parent: "Subaki",
    }, "Rhajat": {
      base: "Diviner",
      class: ["Diviner", "Oni Savage"],
      pairings: BR_ACM.concat(["Corrin (F)"]),
      stat: { MAG: true },
      parent: "Hayato",
    }, "Siegbert": {
      base: "Cavalier",
      class: ["Cavalier", "Wyvern Rider"],
      pairings: CQ_ACF,
      stat: { STR: true },
      parent: "Xander",
    }, "Forrest": {
      base: "Troubadour (M)",
      class: ["Troubadour (M)", "Dark Mage"],
      pairings: CQ_ACF,
      stat: { MAG: true },
      parent: "Leo",
    }, "Ignatius": {
      base: "Knight",
      class: ["Knight", "Fighter"],
      pairings: CQ_ACF,
      stat: { STR: true },
      parent: "Benny",
    }, "Velouria": {
      base: "Wolfskin",
      class: ["Wolfskin", "Fighter"],
      pairings: CQ_ACM,
      stat: { STR: true },
      parent: "Keaton",
    }, "Percy": {
      base: "Wyvern Rider",
      class: ["Wyvern Rider", "Fighter"],
      pairings: CQ_ACF,
      stat: { STR: true },
      parent: "Arthur",
    }, "Ophelia": {
      base: "Dark Mage",
      class: ["Dark Mage", "Samurai"],
      pairings: CQ_ACM,
      stat: { MAG: true },
      parent: "Odin",
    }, "Soleil": {
      base: "Mercenary",
      class: ["Mercenary", "Ninja"],
      pairings: CQ_ACM,
      stat: { STR: true },
      parent: "Laslow",
    }, "Nina": {
      base: "Outlaw",
      class: ["Outlaw", "Dark Mage"],
      pairings: CQ_ACM,
      stat: { STR: true },
      parent: "Niles"
    }
  },
  classes: {
    ...FATES_CLASSES,
    ...{
      "Nohr Prince": {
        weapons: ["Sword", "Stone"],
        promo: ["Nohr Noble", "Hoshido Noble"],
        stat: { STR: true, MAG: true }
      }
    }
  },
  free: [],
  avatar: "Corrin",
  flags: {
    pairings: true,
    friends: true,
    onlypairs: true,
    children: true,
    classes: true,
    troll: true
  }
};

export default {
  list: [
    "Fire Emblem",
    "Gaiden",
    "Mystery of the Emblem",
    "Genealogy of the Holy War",
    "Thracia 776",
    "The Binding Blade",
    "The Blazing Blade",
    "The Sacred Stones",
    "Path of Radiance",
    "Radiant Dawn",
    "Shadow Dragon",
    "New Mystery of the Emblem",
    "Awakening",
    "Fates: Birthright",
    "Fates: Conquest",
    "Fates: Revelation" /*,
    "Shadows of Valentia" */
    // when it comes out
  ],

  "Fire Emblem": fe1,
  "Gaiden": fe2,
  "Mystery of the Emblem": fe3,
  "Genealogy of the Holy War": fe4,
  "Thracia 776": fe5,
  "The Binding Blade": fe6,
  "The Blazing Blade": fe7,
  "The Sacred Stones": fe8,
  "Path of Radiance": fe9,
  "Radiant Dawn": fe10,
  "Shadow Dragon": fe11,
  "New Mystery of the Emblem": fe12,
  "Awakening": fe13,
  "Fates: Birthright": fe14br,
  "Fates: Conquest": fe14cq,
  "Fates: Revelation": fe14rev,
}
