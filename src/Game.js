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
    characters: ["Abel", "Arran", "Astria", "Bantu", "Barst", "Vyland", "Boa", "Caesar", "Xane", "Tiki", "Draug", "Elice", "Est", "Jeorge", "Gordon", "Hardin", "Jagen", "Julian", "Cain", "Castor", "Catria", "Lorenze", "Linde", "Matthis", "Bord", "Maria", "Merric", "Midia", "Minerva", "Macellan", "Nabarl", "Ogma", "Palla", "Radd", "Lena", "Rickard", "Roshea", "Cord", "Samson", "Caeda", "Tomas", "Dolph", "Wendel", "Wolf", "Sedgar"],
    free: ["Marth"],
  },

  "Gaiden": {
    short: "fe2",
    disabled: "Nobody plays Gaiden",
    free: ["Alm", "Celica"],
    characters: [],
  },

  "Mystery of the Emblem": {
    short: "fe3",
    characters: ["Abel", "Arran", "Astria", "Bantu", "Cecil", "Xane", "Tiki", "Draug", "Ellerean", "Elice", "Est", "Feena", "Jeorge", "Gordon", "Julian", "Cain", "Castor", "Catria", "Linde", "Luke", "Matthis", "Malliesia", "Maria", "Merric", "Midia", "Minerva", "Nabarl", "Nina", "Ogma", "Palla", "Lena", "Rickard", "Rody", "Roshea", "Ryan", "Samson", "Samto", "Sheeda", "Sheema", "Sirius", "Warren", "Wendel", "Yubello", "Yumina"],
    free: ["Marth"],
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
    // nobody does PMUs for this shit anyway.
  },

  "The Binding Blade": {
    short: "fe6",
    routes: [['A', 'B'], ['Sacae', 'Ilia']],
    characters: ["Allen", "Astohl", "Barth", "Bartre", "Bors", "Cath", "Cecilia", "Chad", "Clarine", "Dayan", "Dieck", "Dorothy", "Douglas", "Echidna", "Ellen", "Elphin", "Fa", "Fir", "Garret", "Geese", "Gonzales", "Hugh", "Igrene", "Juno", "Klein", "Lalum", "Lance", "Lilina", "Lot", "Lugh", "Marcus", "Miledy", "Niime", "Noah", "Oujay", "Percival", "Raigh", "Rutger", "Saul", "Shin", "Sophia", "Sue", "Tate", "Shanna", "Trec", "Wade", "Wendy", "Wolt", "Yodel", "Zealot", "Zeiss"],
    free: ["Roy"],
    flags: {
      supports: true,
    }
  },

  "The Blazing Blade": {
    short: "fe7",
    characters: ["Bartre", "Canas", "Dart", "Dorcas", "Erk", "Farina", "Fiora", "Florina", "Geitz", "Guy", "Harken", "Hawkeye", "Heath", "Hector", "Isadora", "Jaffar", "Karel", "Karla", "Kent", "Legault", "Louise", "Lowen", "Lucius", "Lyn", "Marcus", "Matthew", "Ninian", "Nino", "Oswin", "Pent", "Priscilla", "Rath", "Raven", "Rebecca", "Renault", "Sain", "Serra", "Vaida", "Wallace", "Wil"],
    free: ["Eliwood"],
    flags: {
      supports: true,
    }
  },

  "The Sacred Stones": {
    short: "fe8",
    routes: [["Eirika", "Ephraim"]],
    characters: ["Amelia", "Artur", "Colm", "Cormag", "Dozla", "Duessel", "Ewan", "Forde", "Franz", "Garcia", "Gerik", "Gilliam", "Innes", "Joshua", "Knoll", "Kyle", "L'Arachel", "Lute", "Marisa", "Moulder", "Myrrh", "Natasha", "Neimi", "Rennac", "Ross", "Saleh", "Seth", "Syrene", "Tana", "Tethys", "Vanessa"],
    free: ["Eirika", "Ephraim"],
    flags: {
      supports: true,
      classes: true,
    }
  },

  "Path of Radiance": {
    short: "fe9",
    characters: ["Astrid", "Bastian", "Boyd", "Brom", "Calill", "Devdan", "Elincia", "Ena", "Gatrie", "Geoffrey", "Giffca", "Haar", "Ilyana", "Janaff", "Jill", "Kieran", "Largo", "Lethe", "Lucia", "Makalov", "Marcia", "Mia", "Mist", "Mordecai", "Muarim", "Naesala", "Nasir", "Nephenee", "Oscar", "Ranulf", "Reyson", "Rhys", "Rolf", "Shinon", "Soren", "Sothe", "Stefan", "Tanith", "Tauroneo", "Tibarn", "Titania", "Tormod", "Ulki", "Volke", "Zihark"],
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
    characters: ["Chrom", "Lissa", "Frederick", "Sully", "Virion", "Stahl", "Vaike", "Miriel", "Sumia", "Kellam", "Donnel", "Lon’qu", "Ricken", "Maribelle", "Panne", "Gaius", "Cordelia", "Gregor", "Nowi", "Libra", "Tharja", "Anna", "Olivia", "Cherche", "Henry", "Say’ri", "Tiki", "Basilio", "Flavia"],
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
