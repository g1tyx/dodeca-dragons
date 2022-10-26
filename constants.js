//const arrays aren't actually constant but shhh
const romanNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV"]
const alphaLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

const fireUpgradeInitialCosts = [0, 50, 100, 100, 500, 500, 2e7]
const fireUpgradeBase = [0, 1.8, 2, 1.4, 1.5, 2.5, 5]
const magicUpgradeCosts = [2, 3, 8, 12, 30, 100, 300, 1500, 4000, 20000, 100000, 400000, 1e8, 3e8, 1.5e9, 3e9, 1e11, 4e12, 1e13, 1e16]
const darkMagicUpgradeCosts = ["e110", "e125", "e165", "e240", "e285", "e320", "e360", "e450", "e2000", "e2750", "e180000", "e200000"]
const achievementNames = [
  //Gold
  ["Starting strong", "Growing stronger", "The heap", "Motherlode", "BEZOS BEZOS BEZOS", "Unending mound of cash", "Multiversal", "Endless realm of coins", "Loaded", "Mega-loaded (???)", "Gold-plated omniverse", "X-TREME GAMINGGGG"],
  //Fire
  ["Spicy", "Burning hands", "The great fire", "Towering inferno", "Hell pit", "Carolina Reapers", "Tartarus", "Pandemonium", "Infernal overlord"],
  //Platinum
  ["Alchemagoria", "Jeweller", "Putting in the work", "Magnum opus", "Simple chemistry", "Mirror polished", "Silver skyscrapers", "Advanced chemistry", "God of transmutation"],
  //Magic
  ["Funny wizard hat", "Sorcery", "Magiccery!", "THE BIGGER HAT", "Thaumaturgy", "Spells galore", "Reshape the Earth", "Unlimited potential", "Star shatterer", "Endless grimoires", "Void tapping"],
  //Magifolds
  ["4-dimensional", "5-dimensional", "10-dimensional", "Infinitely folding", "Incomprehensible", "Megafolds", "GIGAFOLDS"],
  //Uranium
  ["Ionizing", "Radiating", "Neutralizing", "Terrifying", "Devastating"],
  //Cyan sigils
  ["Chromatic", "Chaotic", "Colorific", "Catastrophic", "Catatonic"],
  //Blue sigils
  ["Bichromatic", "Basic", "Biologic", "Barbaric", "Balsamic"],
  //Indigo sigils
  ["Interdynamic", "Idealistic", "Isotropic", "Isotonic", "Idyllic"],
  //Violet sigils
  ["Volcanic", "Volumetric", "Vitriolic", "Voltaic", "Vinic"],
  //Pink sigils
  ["Panchromatic", "Psychotic", "Pathogenic", "Particularistic", "Platonic"]
]
const achievementRequirements = [
  //Gold
  ["100", "10000", "1e6", "1e12", "1e20", "1e30", "1e100", "1e250", "1e1000", "1e3000", "1e10000", "1e100000"],
  //Fire
  ["1000", "1e6", "1e12", "1e18", "1e30", "1e100", "1e250", "1e1000", "1e4000"],
  //Platinum
  ["100", "100000", "2.5e6", "1e8", "1e12", "1e20", "1e30", "1e100", "1e250"],
  //Magic
  ["1", "5", "50", "1000", "100000", "1e8", "1e20", "1e100", "1e500", "1e10000", "1e50000"],
  //Magifolds
  ["10000", "1e6", "1e20", "1e30", "1e50", "1e250", "1e1000"],
  //Uranium
  ["100", "100000", "1e7", "5e8", "1e10"],
  //Cyan sigils
  ["1", "5", "20", "100", "500"],
  //Blue sigils
  ["1", "5", "20", "100", "500"],
  //Indigo sigils
  ["1", "5", "20", "100", "500"],
  //Violet sigils
  ["1", "5", "20", "100", "500"],
  //Pink sigils
  ["1", "5", "20", "100", "500"]
]
const achievementRewards = {
  //gold
  ach0x4: "Unlocks Max All button for platinum upgrades!",
  ach0x8: "Unlocks autobuyer for miners! Also allows you to keep 1 miner when resetting.",
  ach0x10: "Unlock Buy All buttons for magic and dark magic upgrades!",
  //magic
  ach3x0: "Unlocks Buy Max button for fire upgrades!",
  ach3x1: "Unlocks Max Buy All button for fire upgrades!",
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
  ach7x0: "Sigil resets reduce scores by ^0.5 instead of resetting them!",
  ach7x1: "Feeding your dragon no longer reduces challenge scores!",
  ach7x2: "Keep all platinum upgrades on sigil reset!",
  //indigo sigils
  ach8x0: "Gain challenge score without entering challenges! Also, sigil resets no longer reduce challenge scores.",
  ach8x1: "Keep uranium upgrades on all resets!",
  //violet sigils
  ach9x0: "Unlocks the ability to pet your dragon! :O",
  //pink sigils
  ach10x0: "Automatically feed your dragon when available!",
  ach10x2: "Keep all magic and dark magic upgrades on sigil reset!"
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
  {name:"pink sigils", shortName:"P-sigils", internalName:"pinkSigils"}
]
const achievementColours = ["#fd0", "#f80", "#bff", "#90d", "#60d", "#8f8", "#06b", "#00b", "#40b", "#60b", "#b0b"]
//this array tells the display code when each achievement should be visible. each child array corresponds to a value of game.unlocks
const achievementDisplayUnlocks = [
  [3,2,1,0,0,0,0,0,0,0,0], //unlock 0 - start
  [3,2,1,0,0,0,0,0,0,0,0], //unlock 1 - dragon
  [3,2,1,0,0,0,0,0,0,0,0], //unlock 2 - fire
  [4,3,2,1,0,0,0,0,0,0,0], //unlock 3 - platinum
  [6,4,3,5,1,0,0,0,0,0,0], //unlock 4 - magic
  [6,4,3,5,1,0,0,0,0,0,0], //unlock 5 - magic challenges
  [7,5,4,6,2,1,0,0,0,0,0], //unlock 6 - more magic upgrades
  [8,6,6,7,3,1,0,0,0,0,0], //unlock 7 - uranium
  [10,6,7,8,4,3,1,0,0,0,0], //unlock 8 - more platinum and uranium
  [10,6,7,8,4,3,1,0,0,0,0], //unlock 9 - dark magic
  [10,6,7,9,4,4,3,1,0,0,0], //unlock 10 - cyan
  [11,7,8,9,5,4,4,4,1,0,0], //unlock 11 - blue
  [12,8,8,10,6,5,5,5,5,1,0], //unlock 12 - indigo
  [12,8,9,11,6,5,5,5,5,5,1], //unlock 13 - violet
  [12,9,9,11,7,5,5,5,5,5,5], //unlock 14 - pink
]