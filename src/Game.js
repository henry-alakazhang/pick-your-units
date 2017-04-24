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

  "Fire Emblem": {
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
  },

  "Gaiden": {
    short: "fe2",
    disabled: "Nobody plays Gaiden",
    free: ["Alm", "Celica"],
    characters: [],
    flags: {},
  },

  "Mystery of the Emblem": {
    short: "fe3",
    characters: ["Marth", "Abel", "Arran", "Astria", "Bantu", "Cecil", "Xane", "Tiki", "Draug", "Ellerean", "Elice", "Est", "Feena", "Jeorge", "Gordon", "Julian", "Cain", "Castor", "Catria", "Linde", "Luke", "Matthis", "Malliesia", "Maria", "Merric", "Midia", "Minerva", "Nabarl", "Nina", "Ogma", "Palla", "Lena", "Rickard", "Rody", "Roshea", "Ryan", "Samson", "Samto", "Sheeda", "Sheema", "Sirius", "Warren", "Wendel", "Yubello", "Yumina"],
    free: ["Marth"],
    flags: {},
  },

  "Genealogy of the Holy War": {
    short: "fe4",
    disabled: "Need to implement children",
    characters: [],
    free: ["Sigurd", "Seliph"],
    flags: {
      supports: true,
      children: true,
    }
  },

  "Thracia 776": {
    short: "fe5",
    disabled: "Nobody plays Thracia",
    characters: [],
    free: ["Lief"],
    flags: {},
    // nobody does PMUs for this shit anyway.
  },

  "The Binding Blade": {
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
      exclude:"Dayan"
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
      supports: true,
    }
  },

  "The Blazing Blade": {
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
        class:"Thief"
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
        class:"Thief"
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
    flags: {
      supports: true,
    }
  },

  "The Sacred Stones": {
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
      supports: true,
      classes: true,
    }
  },

  "Path of Radiance": {
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
      supports: true,
    }
  },

  "Radiant Dawn": {
    short: "fe10",
    disabled: "Need to figure out how these routes work",
    characters: ["Aran", "Astrid", "Bastian", "Boyd", "Brom", "Caineghis", "Calill", "Danved", "Edward", "Elincia", "Ena", "Fiona", "Gareth", "Gatrie", "Geoffrey", "Giffca", "Haar", "Heather", "Ike", "Ilyana", "Janaff", "Jill", "Kieran", "Kurthnaga", "Kyza", "Laura", "Leanne", "Leonardo", "Lethe", "Lucia", "Lyre", "Makalov", "Marcia", "Meg", "Mia", "Micaiah", "Mist", "Mordecai", "Muarim", "Naesala", "Nailah", "Nasir", "Nealuchi", "Nephenee", "Nolan", "Oscar", "Pelleas", "Rafiel", "Ranulf", "Reyson", "Rhys", "Rolf", "Sanaki", "Shinon", "Sigrun", "Skrimir", "Soren", "Sothe", "Stefan", "Tanith", "Tauroneo", "Tibarn", "Titania", "Tormod", "Ulki", "Vika", "Volke", "Volug", "Zihark"],
    flags: {
      supports: true,
    }
  },

  "Shadow Dragon": {
    short: "fe11",
    disabled: "Need to implement class changes",
    characters: [],
    free: ["Marth"],
    flags: {
      classes: true,
    }
  },

  "New Mystery of the Emblem": {
    short: "fe12",
    disabled: "Need to implement class changes",
    characters: [],
    free:["Marth", "Kris"],
    flags: {
      classes: true,
    }
  },

  "Awakening": {
    short: "fe13",
    disabled: "Need to implement children/class changes",
    characters: ["Chrom", "Robin", "Lissa", "Frederick", "Sully", "Virion", "Stahl", "Vaike", "Miriel", "Sumia", "Kellam", "Donnel", "Lon’qu", "Ricken", "Maribelle", "Panne", "Gaius", "Cordelia", "Gregor", "Nowi", "Libra", "Tharja", "Anna", "Olivia", "Cherche", "Henry", "Say’ri", "Tiki", "Basilio", "Flavia"],
    free: ["Chrom", "Robin"],
    flags: {
      avatar: true,
      supports: true,
      children: true,
      classes: true,
    }
  },

  "Fates: Birthright": {
    short: "fe14",
    disabled: "Need to implement children/class changes",
    characters: [],
    free: ["Corrin"],
    flags: {
      avatar: true,
      supports: true,
      children: true,
      classes: true,
    }
  },

  "Fates: Conquest": {
    short: "fe14",
    disabled: "Need to implement children/class changes",
    characters: [],
    free: ["Corrin"],
    flags: {
      avatar: true,
      supports: true,
      children: true,
      classes: true,
    }
  },

  "Fates: Revelation": {
    short: "fe14",
    disabled: "Need to implement children/class changes",
    characters: [],
    free: ["Corrin"],
    flags: {
      avatar: true,
      supports: true,
      children: true,
      classes: true,
    }
  }
}
