//const arrays aren't actually constant but shhh
//I am constantly suffering
const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"]

//any DOM element with an id in this array will prevent panning when it is the active element
const panResistantFields = ["dragonNameBox", "knowledgeLevelRange", "knowledgeLevelInput", "sigilResetterType", "sigilResetterMode", "sigilResetterAmount"];

const fireUpgradeInitialCosts = [0, 50, 100, 100, 500, 500, 2e7]
const fireUpgradeBase = [0, 1.8, 2, 1.4, 1.5, 2.5, 5]
const magicUpgradeCosts = [2, 3, 8, 12, 30, 100, 300, 1500, 4000, 20000, 100000, 400000, 1e8, 3e8, 1.5e9, 3e9, 1e11, 4e12, 1e13, 1e16]
const darkMagicUpgradeCosts = ["e110", "e125", "e165", "e240", "e285", "e320", "e360", "e450", "e120000", "e140000", "e3e8", "e4.5e8", "e5e8", "e6e8", "e6.75e8", "e8e8", "e1.2e9", "e1.45e9", "e1.6e9", "e1.65e9"]
const sigilColours = ["cyan", "blue", "indigo", "violet", "pink", "red", "orange", "yellow"]
const sigilResetterModes = ["Amount","Gold","Time"]
const sigilResetterModesFull = ["Potential Sigil Amount", "Gold Amount", "Seconds Since Reset"]
const knowledgeMultipliers = [450, 112.5, 18.75, 10, 1]
const tomeUpgradeCosts = [1, 1, 2, 2, 4, 20, 75, 175, 500, 1000, 1500, 2250, 2800, 7500]
const blueFireUpgradeInitialCosts = [0, 500, 1000, 50000, 5e7, 1.5e8, 1e11]
const blueFireUpgradeBase = [0, 1.8, 2, 2.5, 1.8, 2.2, 2]
const hellLayerNames = ["limbo", "lust", "gluttony", "greed", "wrath", "heresy", "violence", "fraud", "treachery"]
const hellLayerEffects = ["-<a style='color: #fd0'>Gold</a> gain is severely reduced (log(x)^5)<br>-<a style='color: #bff'>Platinum</a> gain is ^0.1<br>-<a style='color: #60d'>Magifold</a> amount is always 1<br>-<a style='color: #8f8'>Uranium</a> gain is ^0.1",
"-<a style='color: #fd0'>Gold</a> gain is severely reduced (log(x)^2)<br>-<a style='color: #f80'>Fire</a> gain is severely reduced (log(x))<br>-<a style='color: #bff'>Platinum</a> gain is ^0.01<br>-<a style='color: #60d'>Magifold</a> amount is always 1<br>-<a style='color: #8f8'>Uranium</a> gain is ^0.01<br>-<a style='color: #06b'>Cyan sigil</a> upgrade 3 is useless",
"-<a style='color: #fd0'>Gold</a> gain is severely reduced (log(x))<br>-<a style='color: #f80'>Fire</a> gain is severely reduced (log(x))<br>-<a style='color: #bff'>Platinum</a> gain is severely reduced (log(x))<br>-<a style='color: #60d'>Magifold</a> amount is always 1<br>-<a style='color: #8f8'>Uranium</a> gain is severely reduced (log(x))<br>-<a style='color: #06b'>Cyan sigil</a> upgrade 3 is useless",
"-<a style='color: #fd0'>Gold</a> gain is severely reduced (log(x)^0.5)<br>-<a style='color: #f80'>Fire</a> gain is always 0<br>-<a style='color: #bff'>Platinum</a> gain is severely reduced (log(x))<br>-<a style='color: #60d'>Magifold</a> amount is always 1<br>-<a style='color: #8f8'>Uranium</a> gain is severely reduced (log(x))<br>-<a style='color: #06b'>Cyan sigil</a> upgrade 3 is useless",
"-<a style='color: #fd0'>Gold</a> gain is severely reduced (log(x)^0.2)<br>-<a style='color: #f80'>Fire</a> gain is always 0<br>-<a style='color: #bff'>Platinum</a> gain is severely reduced (log(x)^0.5)<br>-<a style='color: #90d'>Magic</a> amount is severely reduced (log(x))<br>-<a style='color: #60d'>Magifold</a> amount is always 1<br>-<a style='color: #8f8'>Uranium</a> gain is severely reduced (log(x)^0.5)<br>-<a style='color: #06b'>Cyan sigil</a> upgrade 3 is useless",
"-<a style='color: #f00'>Heresy does nothing yet!</a>"
]
const holyTetrahedronUpgradeCosts = [1, 1, 1, 1, 2, 2, 2, 5, 5, 15, 50, 2000, 50000]
const holyOctahedronUpgradeCosts = [1, 1, 1, 2, 4, 2, 50]
const holyFireUpgradeInitialCosts = [0, 500, 1000, 10000, 50000, 1e7, 1e11]
const holyFireUpgradeBase = [0, 1.8, 2, 3, 2, 2.5, 2]
const achievementNames = [
  //Gold
  ["Starting strong", "Growing stronger", "The heap", "Motherlode", "BEZOS BEZOS BEZOS", "Unending mound of cash", "Multiversal", "Endless realm of coins", "Loaded", "Mega-loaded (???)", "Sbiisics", "On my dime!"],
  //Fire
  ["Spicy", "Burning hands", "The great fire", "Towering inferno", "Hell pit", "Carolina reapers", "Tartarus", "Pandemonium", "Infernal overlord", "Unfortunate events", "Global warming", "The end of everything"],
  //Platinum
  ["Alchemagoria", "Jeweller", "Putting in the work", "Magnum opus", "Simple chemistry", "Mirror polish", "Silver skyscrapers", "Advanced chemistry", "God of transmutation", "Platisynthesis", "Mystical barista", "Completing the work"],
  //Magic
  ["Funny wizard hat", "Sorcery", "Magiccery!", "THE BIGGER HAT", "Thaumaturgy", "Spells galore", "Reshape the Earth", "Unlimited potential", "Star shatterer", "Endless grimoires", "Void tapping", "Threshold memories"],
  //Magifolds
  ["4-dimensional", "10-dimensional", "Superstring theory", "Infinitely folding", "Incomprehensible", "Megafolds", "GIGAFOLDS", "Spacetime origami", "Nonagon Infinity", "Holonomy breakdown", "Simplex complex", "Basket case"],
  //Uranium
  ["Ionizing", "Radiating", "Neutralizing", "Terrifying", "Devastating", "Decaying", "Annihilating", "Obliterating", "Glowing", "Reducing", "Inspiring", "Ending"],
  //Cyan sigils
  ["Chromatic", "Chaotic", "Colorific", "Catastrophic", "Catatonic", "Chromatic II", "Chaotic II", "Colorific II", "Catastrophic II", "Catatonic II", "Chromatic III", "Chaotic III"],
  //Blue sigils
  ["Bichromatic", "Basic", "Biologic", "Barbaric", "Balsamic", "Bichromatic II", "Basic II", "Biologic II", "Barbaric II", "Balsamic II", "Bichromatic III", "Basic III"],
  //Indigo sigils
  ["Interdynamic", "Idealistic", "Isotropic", "Isotonic", "Idyllic", "Interdynamic II", "Idealistic II", "Isotropic II", "Isotonic II", "Idyllic II", "Interdynamic III", "Idealistic III"],
  //Violet sigils
  ["Volcanic", "Volumetric", "Vitriolic", "Voltaic", "Vinic", "Volcanic II", "Volumetric II", "Vitrolic II", "Voltaic II", "Vinic II", "Volcanic III", "Volumetric III"],
  //Pink sigils
  ["Panchromatic", "Psychotic", "Pathogenic", "Particularistic", "Platonic", "Panchromatic II", "Psychotic II", "Pathogenic II", "Particularistic II", "Platonic II", "Panchromatic III", "Psychotic III"],
  //Knowledge
  ["Big brain moment", "Deep thought", "Immaterialistic", "Planning ahead", "I conject", "Megamind", "Incremental IQ", "Shared Brainpower", "Think tank", "Intelligence singularity", "The thinker", "Epistemological"],
  //Tomes
  ["History locked away", "The mystical bookshelf", "Necronomicon", "Fully legible", "Biblical", "Rune rooms", "Library of babel", "Recursive knowledge", "No longer lost"],
  //Blue fire
  ["Burning cold", "Frostbite", "Tundra", "The burn that cures", "Hell frozen over", "Absolute Zero", "What's cooler than being cool?", "Kamchatka", "Superfluid"],
  //Blood
  ["Coagulation", "Brutal", "Rivers of red", "Ultraviolent", "Turbo killer", "When the imposter is sus!", "Hellstar Remina"],
  //Plutonium
  ["Ionizing II", "Radiating II", "Neutralizing II", "Terrifying II", "Devastating II", "Decaying II", "Annihilating II"],
  //Red sigils
  ["Rhythmic", "Realistic", "Robotic", "Romantic", "Relativistic", "Rhythmic II"],
  //Orange sigils
  ["Organic", "Orthographic", "Overenergetic", "Orthochromatic", "Overchromatic", "Organic II"],
  //Yellow sigils
  ["Yellow", "Very yellow", "Extremely yellow", "Super yellow", "Hyper yellow", "Yellow II"],
  //Holy tetrahedrons
  ["｢Made in Heaven｣", "Resets all the way down", "Cloudy with a chance of numbers", "God rays", "Heaven sent", "Convex complex"],
  //Holy octahedrons
  ["Dual", "Empyrean", "Ramiel", "Precisely the point"],
  //Holy fire
  ["White hot", "God's wrath"],
]
const achievementRequirements = [
  //Gold
  ["100", "10000", "1e6", "1e12", "1e20", "1e30", "1e100", "1e250", "1e1000", "1e3000", "1e10000", "1e100000"],
  //Fire
  ["1000", "1e6", "1e12", "1e18", "1e30", "1e100", "1e250", "1e1000", "1e4000", "1e20000", "1e500000", "e5e7"],
  //Platinum
  ["100", "100000", "2.5e6", "1e8", "1e12", "1e20", "1e30", "1e100", "1e250", "1e1000", "1e20000", "1e150000"],
  //Magic
  ["1", "5", "50", "1000", "100000", "1e8", "1e20", "1e100", "1e500", "1e10000", "1e50000", "1e1000000"],
  //Magifolds
  ["10000", "1e6", "1e20", "1e30", "1e50", "1e250", "1e1000", "1e2500", "1e10000", "1e500000", "1e2500000", "e2e7"],
  //Uranium
  ["100", "100000", "1e7", "5e8", "1e10", "1e100", "1e1000", "1e25000", "1e1000000", "e1e8", "e1e12", "e1e15"],
  //Cyan sigils
  ["1", "5", "20", "100", "500", "1000000", "1e12", "1e25", "1e100", "1e250", "1e500", "1e1000"],
  //Blue sigils
  ["1", "5", "20", "100", "500", "1000000", "1e12", "1e25", "1e100", "1e250", "1e500", "1e1000"],
  //Indigo sigils
  ["1", "5", "20", "100", "500", "1000000", "1e12", "1e25", "1e100", "1e250", "1e500", "1e1000"],
  //Violet sigils
  ["1", "5", "20", "100", "500", "1000000", "1e12", "1e25", "1e100", "1e250", "1e500", "1e1000"],
  //Pink sigils
  ["1", "5", "20", "100", "500", "1000000", "1e12", "1e25", "1e100", "1e250", "1e500", "1e1000"],
  //Knowledge
  ["1", "10", "250", "10000", "1e9", "1e30", "1e100", "1e300", "1e750", "1e1500", "1e3000", "1e6000"],
  //Tomes
  ["1", "10", "100", "1000", "5000", "15000", "30000", "75000", "150000"],
  //Blue fire
  ["1000", "1e6", "1e20", "1e35", "1e60", "1e100", "1e250", "1e600", "1e1500"],
  //Blood
  ["1", "10000", "5e7", "1e10", "1e20", "1e30", "1e100"],
  //Plutonium
  ["100", "10000", "1e6", "1e20", "1e30", "1e100", "1e500"],
  //Red sigils
  ["1", "20", "1000", "100000", "1e8", "1e12"],
  //Orange sigils
  ["1", "20", "1000", "100000", "1e8", "1e12"],
  //Yellow sigils
  ["1", "20", "1000", "100000", "1e8", "1e12"],
  //Holy tetrahedrons
  ["1", "3", "10", "50", "2500", "1000000"],
  //Holy octahedrons
  ["1", "3", "10", "50"],
  //Holy fire
  ["1000", "100000"],
]
const achievementStarRequirements = [
  //Gold
  ["e1000000", "e5000000", "e2.5e7", "ee8", "ee10", "ee12", "ee15", "ee20", "ee25", "ee30", "ee50", "ee100"],
  //Fire
  ["e5e8", "ee10", "ee12", "ee15", "ee20", "ee30", "ee40", "ee60"],
  //Platinum
  ["e1000000", "ee7", "ee10", "ee14", "ee20", "ee30", "ee50"],
  //Magic
  ["ee8", "e2.5e8", "e5e8", "ee9", "e5e9"],
  //Magifolds
  ["e2.5e8", "ee9", "ee12", "ee18", "ee30", "ee45"],
  //Uranium
  ["ee20", "ee25", "ee30"],
  //Cyan Sigils
  ["1e2500", "ee100"],
  //Blue Sigils
  ["1e2500"],
  //Indigo Sigils
  ["1e2500"],
  //Violet Sigils
  ["1e2500"],
  //Pink Sigils
  ["1e2500"],
  //Knowledge
  [],
  //Tomes
  [],
  //Blue Fire
  [],
  //Blood
  [],
  //Plutonium
  [],
  //Red Sigils
  [],
  //Orange Sigils
  [],
  //Yellow Sigils
  [],
  //Holy tetrahedrons
  []
]
const achievementRewards = {
  //gold
  ach0x4: "Unlocks Max All button for platinum upgrades!",
  ach0x8: "Unlocks autobuyer for miners! Also allows you to keep 1 miner when resetting.",
  ach0x10: "Unlocks Buy Max buttons for magic and dark magic upgrades!",
  //magic
  ach3x0: "Unlocks Buy Max buttons for fire upgrades!",
  ach3x1: "Unlocks Max All button for fire upgrades!",
  ach3x4: "Keep all platinum upgrades on magic reset!",
  ach3x5: "Gain 1% of potential magic per second!",
  ach3x7: "Gain 100% of potential magic per second!",
  //uranium
  ach5x2: "Unlocks Max All button for uranium upgrades!",
  ach5x3: "Automatically gain uranium without resetting!",
  //cyan sigils
  ach6x0: "Automatically spend time with your dragon when available! Also allows you to enter challenges while on cooldown.",
  ach6x1: "Feeding your dragon reduces scores by ^0.5 instead of resetting them!",
  ach6x2: "Automatically max all fire upgrades!",
  //blue sigils
  ach7x0: "Feeding your dragon no longer reduces challenge scores!",
  ach7x1: "Gain challenge score without entering challenges! Also, sigil resets no longer reduce challenge scores.",
  ach7x2: "Keep platinum upgrades on sigil resets!",
  //indigo sigils
  ach8x0: "Keep uranium upgrades on magic and sigil resets!",
  //violet sigils
  ach9x0: "Unlocks the ability to pet your dragon! :O",
  //pink sigils
  ach10x0: "Automatically feed your dragon when available!",
  ach10x1: "Unlocks Max All button for sigil upgrades!",
  ach10x2: "Keep all magic and dark magic upgrades on sigil reset!",
  //knowledge
  ach11x0: "Unlocks some automation for sigil resets!",
  ach11x7: "Automatically max all knowledge upgrades!",
  //Tomes
  ach12x2: "Unlocks Max All button for knowledge upgrades!",
  //Blue fire
  ach13x0: "Gain 10% of potential sigils per second!",
  ach13x2: "Unlocks Buy Max buttons for blue fire upgrades!",
  ach13x4: "Unlocks Max All and Auto Max All for blue fire upgrades!",
  //Blood
  ach14x1: "Automatically gain max tomes, at no cost!",
  //Plutonium
  ach15x0: "Automatically gain knowledge, at no cost!",
  ach15x3: "Automatically gain plutonium without resetting!",
  //Holy tetrahedrons
  ach19x0: "Unlocks Max All button for plutonium upgrades!",
  ach19x2: "Unlocks Buy Max button for tome upgrades!",
  ach19x4: "Keep tome upgrades on holy resets!",
  //Holy octahedrons
  ach20x0: "Automatically max all sigil upgrades!",
  ach20x1: "Keep alchemy upgrades on holy resets!",
}
const achievementResources = [
  {name:"gold", shortName:"&#8202;&#8202;Gold", internalName:"gold"},
  {name:"fire", shortName:"&#8202;&#8202;Fire", internalName:"fire"},
  {name:"platinum", shortName:"Platinum", internalName:"platinum"},
  {name:"magic", shortName:"Magic", internalName:"magic"},
  {name:"magifolds", shortName:"Magifolds", internalName:"magifolds"},
  {name:"uranium", shortName:"Uranium", internalName:"uranium"},
  {name:"cyan sigils", shortName:"C-sigils", internalName:"cyanSigils"},
  {name:"blue sigils", shortName:"&#8202;&#8202;B-sigils", internalName:"blueSigils"},
  {name:"indigo sigils", shortName:"&#8202;&#8202;I-sigils", internalName:"indigoSigils"},
  {name:"violet sigils", shortName:"&#8202;&#8202;V-sigils", internalName:"violetSigils"},
  {name:"pink sigils", shortName:"P-sigils", internalName:"pinkSigils"},
  {name:"knowledge", shortName:"&#8202;&#8202;Knwlege", internalName:"knowledge"},
  {name:"total tomes", shortName:"Tomes", internalName:"totalTomes"},
  {name:"blue fire", shortName:"B-fire", internalName:"blueFire"},
  {name:"blood", shortName:"Blood", internalName:"blood"},
  {name:"plutonium", shortName:"Plutonium", internalName:"plutonium"},
  {name:"red sigils", shortName:"R-sigils", internalName:"redSigils"},
  {name:"orange sigils", shortName:"O-sigils", internalName:"orangeSigils"},
  {name:"yellow sigils", shortName:"&#8202;&#8202;Y-sigils", internalName:"yellowSigils"},
  {name:"holy tetrahedrons", shortName:"Tetra", internalName:"holyTetrahedrons"},
  {name:"holy octahedrons", shortName:"Octa", internalName:"holyOctahedrons"},
  {name:"holy fire", shortName:"H-fire", internalName:"holyFire"}
]
const achievementColours = ["#fd0", "#f80", "#bff", "#90d", "#60d", "#8f8", "#06b", "#00b", "#40b", "#60b", "#b0b", "#987", "#965", "#66f", "#f00", "#25e", "#b00", "#b60", "#bb0", "#6dd", "#d6d", "#ff9"]
//this array tells the display code when each achievement should be visible. each child array corresponds to a value of game.unlocks
const achievementDisplayUnlocks = [
  [3,2,1], //unlock 0 - start
  [3,2,1], //unlock 1 - dragon
  [3,2,1], //unlock 2 - fire
  [4,3,2,1], //unlock 3 - platinum
  [6,4,3,5,1], //unlock 4 - magic
  [6,4,3,5,1], //unlock 5 - magic challenges
  [7,5,4,6,2,1], //unlock 6 - more magic upgrades
  [8,6,6,7,3,1], //unlock 7 - uranium
  [10,6,7,8,4,3,1], //unlock 8 - more platinum and uranium
  [10,6,7,8,4,3,1], //unlock 9 - dark magic
  [10,6,7,9,4,4,3,1], //unlock 10 - cyan sigils
  [11,7,8,9,5,4,4,4,1], //unlock 11 - blue sigils
  [12,8,8,10,6,5,5,5,5,1], //unlock 12 - indigo sigils
  [12,8,9,11,6,5,5,5,5,5,1], //unlock 13 - violet sigils
  [12,9,9,11,7,5,5,5,5,5,5,1], //unlock 14 - pink sigils
  [12,10,10,12,8,6,6,6,6,6,6,4,1], //unlock 15 - knowledge
  [12,10,10,12,9,7,7,7,7,7,7,5,2,1], //unlock 16 - tomes
  [12,12,12,12,12,10,8,8,8,8,8,7,4,2,1], //unlock 17 - blue fire
  [12,12,12,12,12,11,9,9,9,9,9,7,5,3,2,1], //unlock 18 - blood
  [12,12,12,12,12,11,9,9,9,9,9,7,5,3,2,1], //unlock 19 - more dark magic upgrades
  [12,12,12,12,12,12,10,10,10,10,10,8,5,4,3,3,1], //unlock 20 - plutonium
  [12,12,12,12,12,12,10,10,10,10,10,8,5,5,4,3,2,1], //unlock 21 - red sigils
  [12,12,12,12,12,12,10,10,10,10,10,8,5,5,4,3,3,2,1], //unlock 22 - orange sigils
  [12,12,12,12,12,12,11,11,11,11,11,9,6,6,6,4,4,4,3,1], //unlock 23 - yellow sigils
  [12,12,12,12,12,12,12,12,12,12,12,10,7,7,6,4,4,4,4,4,1], //unlock 24 - holy tetrahedrons
  [12,12,12,12,12,12,12,12,12,12,12,11,8,8,7,5,5,5,5,4,2,1], //unlock 25 - holy octahedrons
  [12,12,12,12,12,12,12,12,12,12,12,12,9,9,7,7,6,6,6,6,4,2], //unlock 25 - holy fire
]

//stores position and unlock data for each display tab. structure is [x, y, unlock]
const tabData = {
  main: [0, 0, 0],
  dragon: [0,330,1],
  fire: [-365, 365, 2],
  platinum: [320, 100, 3],
  magic: [0, -287, 4],
  magicUpgrades: [-365, 235, 4],
  magicChallenges: [390, -365, 5],
  uranium: [595, 100, 7],
  darkMagic: [-730, -130, 9],
  cyanSigils: [365, 515, 10],
  blueSigils: [730, 515, 11],
  indigoSigils: [1095, 515, 12],
  violetSigils: [365, 830, 13],
  pinkSigils: [730, 830, 14],
  sigilAutomation: [1095, 830, 14],
  knowledge: [-440, 850, 15],
  tomes: [-905, 850, 16],
  blueFire: [-780, 365, 17],
  blood: [-50, -650, 18],
  plutonium: [870, 100, 20],
  redSigils: [365, 1145, 21],
  orangeSigils: [730, 1145, 22],
  yellowSigils: [1095, 1145, 23],
  holyTetrahedrons: [830, -250, 24],
  holyTetrahedronTree: [830, -680, 24],
  holyOctahedrons: [1295, -250, 25],
  holyOctahedronTree: [1295, -520, 25],
  holyFire: [-1245, 365, 26]
}

//this is what I want the render function to see
/*
const tabPositions = [
  {
    main: [0, 0] //unlock 0 - dragon is handled with special case in render
  },
  {
    fire: [-365, 365] //unlock 1
  },
  {
    //etc
  }
]
*/