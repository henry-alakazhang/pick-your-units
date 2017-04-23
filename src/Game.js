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
    characters: ["Abel", "Arran", "Astria", "Bantu", "Barst", "Biraku", "Boa", "Caesar", "Xane", "Tiki", "Draug", "Elice", "Est", "Jeorge", "Gordon", "Hardin", "Jeigan", "Julian", "Cain", "Castor", "Catria", "Lorenze", "Linde", "Matthis", "Bord", "Maria", "Merric", "Midia", "Minerva", "Macellan", "Nabarl", "Ogma", "Palla", "Radd", "Lena", "Rickard", "Roshea", "Cord", "Samson", "Caeda", "Thomas", "Dolph", "Wendel", "Wolf", "Sedgar"],
    free: ["Marth"],
  },

  "Gaiden": {
    disabled: "Nobody plays Gaiden",
    free: ["Alm", "Celica"],
    characters: [],
  },

  "Mystery of the Emblem": {
    characters: ["Abel", "Arran", "Astria", "Bantu", "Cecil", "Xane", "Tiki", "Draug", "Ellerean", "Elice", "Est", "Feena", "Jeorge", "Gordon", "Julian", "Cain", "Castor", "Catria", "Linde", "Luke", "Matthis", "Malliesia", "Maria", "Merric", "Midia", "Minerva", "Nabarl", "Nina", "Ogma", "Palla", "Lena", "Rickard", "Rody", "Roshea", "Ryan", "Samson", "Samto", "Sheeda", "Sheema", "Sirius", "Warren", "Wendel", "Yubello", "Yumina"],
    free: ["Marth"],
  },

  "Genealogy of the Holy War": {
    disabled: "Need to implement children",
    characters: [],
    free: ["Sigurd", "Seliph"],
    flags: {
      supports: true,
      children: true,
    }
  },

  "Thracia 776": {
    disabled: "Nobody plays Thracia",
    characters: [],
    free: ["Lief"],
    // nobody does PMUs for this shit anyway.
  },

  "The Binding Blade": {
    routes: [['A', 'B'], ['Sacae', 'Ilia']],
    characters: ["Allen", "Astohl", "Barth", "Bartre", "Bors", "Cath", "Cecilia", "Chad", "Clarine", "Dayan", "Dieck", "Dorothy", "Douglas", "Ekhidna", "Ellen", "Elphin", "Fa", "Fir", "Garret", "Geese", "Gonzales", "Hugh", "Igrene", "Juno", "Klein", "Lalum", "Lance", "Lilina", "Lott", "Lugh", "Marcus", "Merlinus", "Miledy", "Niime", "Noah", "Oujay", "Percival", "Raigh", "Rutger", "Saul", "Shin", "Sophia", "Sue", "Tate", "Shanna", "Trec", "Wade", "Wendy", "Wolt", "Yodel", "Jerrot", "Zeiss"],
    free: ["Roy"],
    flags: {
      supports: true,
    }
  },

  "The Blazing Blade": {
    characters: ["Bartre", "Canas", "Dart", "Dorcas", "Erk", "Farina", "Fiora", "Florina", "Geitz", "Guy", "Harken", "Hawkeye", "Heath", "Hector", "Isadora", "Jaffar", "Karel", "Karla", "Kent", "Legault", "Louise", "Lowen", "Lucius", "Lyn", "Marcus", "Matthew", "Ninian", "Nino", "Oswin", "Pent", "Priscilla", "Rath", "Raven", "Rebecca", "Renault", "Sain", "Serra", "Vaida", "Wallace", "Wil"],
    free: ["Eliwood"],
    flags: {
      supports: true,
    }
  },

  "The Sacred Stones": {
    routes: [["Eirika", "Ephraim"]],
    characters: ["Amelia", "Artur", "Colm", "Cormag", "Dozla", "Duessel", "Ewan", "Forde", "Franz", "Garcia", "Gerik", "Gilliam", "Innes", "Joshua", "Knoll", "Kyle", "L'Arachel", "Lute", "Marisa", "Moulder", "Myrrh", "Natasha", "Neimi", "Rennac", "Ross", "Saleh", "Seth", "Syrene", "Tana", "Tethys", "Vanessa"],
    free: ["Eirika", "Ephraim"],
    flags: {
      supports: true,
      classes: true,
    }
  },

  "Path of Radiance": {
    characters: ["Astrid", "Bastian", "Boyd", "Brom", "Calill", "Devdan", "Elincia", "Ena", "Gatrie", "Geoffrey", "Giffca", "Haar", "Ilyana", "Janaff", "Jill", "Kieran", "Largo", "Lethe", "Lucia", "Makalov", "Marcia", "Mia", "Mist", "Mordecai", "Muarim", "Naesala", "Nasir", "Nephenee", "Oscar", "Ranulf", "Reyson", "Rhys", "Rolf", "Shinon", "Soren", "Sothe", "Stefan", "Tanith", "Tauroneo", "Tibarn", "Titania", "Tormod", "Ulki", "Volke", "Zihark"],
    free: ["Ike"],
    flags: {
      supports: true,
    }
  },

  "Radiant Dawn": {
    disabled: "Need to figure out how these routes work",
    characters: ["Aran", "Astrid", "Bastian", "Boyd", "Brom", "Caineghis", "Calill", "Danved", "Edward", "Elincia", "Ena", "Fiona", "Gareth", "Gatrie", "Geoffrey", "Giffca", "Haar", "Heather", "Ike", "Ilyana", "Janaff", "Jill", "Kieran", "Kurthnaga", "Kyza", "Laura", "Leanne", "Leonardo", "Lethe", "Lucia", "Lyre", "Makalov", "Marcia", "Meg", "Mia", "Micaiah", "Mist", "Mordecai", "Muarim", "Naesala", "Nailah", "Nasir", "Nealuchi", "Nephenee", "Nolan", "Oscar", "Pelleas", "Rafiel", "Ranulf", "Reyson", "Rhys", "Rolf", "Sanaki", "Shinon", "Sigrun", "Skrimir", "Soren", "Sothe", "Stefan", "Tanith", "Tauroneo", "Tibarn", "Titania", "Tormod", "Ulki", "Vika", "Volke", "Volug", "Zihark"],
    flags: {
      supports: true,
    }
  },

  "Shadow Dragon": {
    disabled: "Need to implement class changes",
    characters: [],
    free: ["Marth"],
    flags: {
      classes: true,
    }
  },

  "New Mystery of the Emblem": {
    disabled: "Need to implement class changes",
    characters: [],
    free:["Marth", "Kris"],
    flags: {
      classes: true,
    }
  },

  "Awakening": {
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
