//TO DO LIST
//Change rich info link in <head>

//Stolen code to check if the user is on a mobile device
window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
if (mobileCheck()) {
  //document.getElementById("mobileCover").style.display = "block"
  document.getElementById("navArrows").style.display = "block"
  window.oncontextmenu = function(event) {
     event.preventDefault();
     event.stopPropagation();
     return false;
  };
}

//Formatting code taken from RedShark77's games
function format(ex, acc=2, max=9) {
  function E(x) {return new Decimal(x)}
  ex = E(ex)
  neg = ex.lt(0)?"-":""
  if (ex.mag == Infinity) return neg + 'Infinity'
  if (Number.isNaN(ex.mag)) return neg + 'NaN'
  //The bit I added, this rounds the mag if it's extremely close to an integer due to rounding errors during calculations
  if (ex.layer > 0 && ex.mag % 1 != 0 && (ex.mag % 1) > 0.9999) ex.mag = Math.round(ex.mag)
  if (ex.lt(0)) ex = ex.mul(-1)
  if (ex.eq(0)) return ex.toFixed(acc)
  let e = ex.log10().floor()
  if (ex.log10().lt(Math.min(-acc,0)) && acc > 1) {
    let e = ex.log10().ceil()
    let m = ex.div(e.eq(-1)?E(0.1):E(10).pow(e))
    let be = e.mul(-1).max(1).log10().gte(9)
    return neg+(be?'':m.toFixed(2))+'e'+format(e, 0, max)
  }
  else if (e.lt(max)) {
    let a = Math.max(Math.min(acc-e.toNumber(), acc), 0)
    return neg+(a>0?ex.toFixed(a):ex.toFixed(a).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
  }
  else {
    if (ex.gte("eeee10")) {
      let slog = ex.slog()
      return (slog.gte(1e9)?'':E(10).pow(slog.sub(slog.floor())).toFixed(4)) + "F" + format(slog.floor(), 0)
    }
    let m = ex.div(E(10).pow(e))
    let be = e.log10().gte(4)
    return neg+(be?'':m.toFixed(2))+'e'+format(e, 0, max)
  }
}

//Sets all variables to their base values
function reset() {
	game = {
    gold: new Decimal(0),
    goldPerSecond: new Decimal(0),
    miners: new Decimal(0),
    minerCost: new Decimal(20),
    unlocks: 0,
    
    fire: new Decimal(0),
    firePerSecond: new Decimal(1),
    //I hate that these don't work when I condense them into an array *cries*
    fireGoldMultiplier: new Decimal(1),
    fireUpgrade1Bought: new Decimal(0),
    fireUpgrade1Cost: new Decimal(50),
    fireUpgrade2Bought: new Decimal(0),
    fireUpgrade2Cost: new Decimal(100),
    fireUpgrade3Bought: new Decimal(0),
    fireUpgrade3Cost: new Decimal(100),
    fireUpgrade4Bought: new Decimal(0),
    fireUpgrade4Cost: new Decimal(500),
    fireUpgrade5Bought: new Decimal(0),
    fireUpgrade5Cost: new Decimal(500),
    dragonStage: 1,
    
    platinumConvertCooldown: 0,
    platinumToGet: new Decimal(0),
    platinum: new Decimal(0),
    platinumUpgradesBought: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    fireUpgrade6Bought: new Decimal(0),
    fireUpgrade6Cost: new Decimal(2e7),

    magic: new Decimal(0),
    magicToGet: new Decimal(0),
    magicEffect: new Decimal(1),
    goldPerClick: new Decimal(1),
    magicUpgradesBought: [],

    selectedChallenges: [false, false, false, false],
    challengesActive: false,
    noOfSelectedChallenges: 0,
    magicScoreToGet: new Decimal(0),
    magicScore1: new Decimal(0),
    magicScore2: new Decimal(0),
    magicScore3: new Decimal(0),
    magicScore4: new Decimal(0),
    magifolds: new Decimal(1),
    confirmations: [true, true],

    uraniumConvertCooldown: 0,
    uraniumToGet: new Decimal(0),
    uranium: new Decimal(0),
    uraniumUpgradesBought: [0, 0, 0, 0, 0, 0],

    dragonTimeSpent: new Decimal(0),
    dragonTimeCooldown: 0,
    dragonFood: new Decimal(0),
    dragonFeedCost: new Decimal(100000000),

    darkMagicUpgradesBought: [],
    dragonTimeEffect: new Decimal(1),

    //Sigil stuff (SOMEBODY PLEASE TELL ME HOW TO PUT THESE IN ARRAYS SO I DON'T NEED SO MANY VARIABLES AAAAGGGGHHHHH)
    cyanSigils: new Decimal(0),
    cyanSigilsToGet: new Decimal(0),
    cyanSigilPower: new Decimal(0),
    cyanSigilPowerPerSecond: new Decimal(0),
    cyanSigilUpgrade1Bought: new Decimal(0),
    cyanSigilUpgrade1Cost: new Decimal(1),
    cyanSigilUpgrade2Bought: new Decimal(0),
    cyanSigilUpgrade2Cost: new Decimal(20),
    cyanSigilUpgrade3Bought: new Decimal(0),
    cyanSigilUpgrade3Cost: new Decimal(500),
    cyanSigilUpgrade4Bought: new Decimal(0),
    cyanSigilUpgrade5Bought: new Decimal(0),
    cyanSigilUpgrade6Bought: new Decimal(0),

    blueSigils: new Decimal(0),
    blueSigilsToGet: new Decimal(0),
    blueSigilPower: new Decimal(0),
    blueSigilPowerPerSecond: new Decimal(0),
    blueSigilUpgrade1Bought: new Decimal(0),
    blueSigilUpgrade1Cost: new Decimal(1),
    blueSigilUpgrade2Bought: new Decimal(0),
    blueSigilUpgrade2Cost: new Decimal(20),
    blueSigilUpgrade3Bought: new Decimal(0),
    blueSigilUpgrade3Cost: new Decimal(100),
    blueSigilUpgrade4Bought: new Decimal(0),
    blueSigilUpgrade5Bought: new Decimal(0),
    blueSigilUpgrade6Bought: new Decimal(0),
    fireAutoMaxAll: true,

    timePlayed: 0,

    indigoSigils: new Decimal(0),
    indigoSigilsToGet: new Decimal(0),
    indigoSigilPower: new Decimal(0),
    indigoSigilPowerPerSecond: new Decimal(0),
    indigoSigilUpgrade1Bought: new Decimal(0),
    indigoSigilUpgrade1Cost: new Decimal(1),
    indigoSigilUpgrade2Bought: new Decimal(0),
    indigoSigilUpgrade2Cost: new Decimal(20),
    indigoSigilUpgrade3Bought: new Decimal(0),
    indigoSigilUpgrade3Cost: new Decimal(100),
    indigoSigilUpgrade4Bought: new Decimal(0),
    indigoSigilUpgrade4Cost: new Decimal(400),
    indigoSigilUpgrade5Bought: new Decimal(0),
    indigoSigilUpgrade6Bought: new Decimal(0),

    backgroundPatternOn: true,

    violetSigils: new Decimal(0),
    violetSigilsToGet: new Decimal(0),
    violetSigilPower: new Decimal(0),
    violetSigilPowerPerSecond: new Decimal(0),
    violetSigilUpgrade1Bought: new Decimal(0),
    violetSigilUpgrade1Cost: new Decimal(1),
    violetSigilUpgrade2Bought: new Decimal(0),
    violetSigilUpgrade2Cost: new Decimal(5),
    violetSigilUpgrade3Bought: new Decimal(0),
    violetSigilUpgrade4Bought: new Decimal(0),
    violetSigilUpgrade5Bought: new Decimal(0),
    violetSigilUpgrade6Bought: new Decimal(0),

    dragonPets: 0,
    minerAutoBuyMax: true,

    pinkSigils: new Decimal(0),
    pinkSigilsToGet: new Decimal(0),
    pinkSigilPower: new Decimal(0),
    pinkSigilPowerPerSecond: new Decimal(0),
    pinkSigilUpgradesBought: [0, 0, 0, 0, 0, 0],
  }

  for (i=3;i<17;i++) document.getElementsByClassName("box")[i].style.display = "none"
  for (i=1;i<12;i++) document.getElementsByClassName("resourceRow")[i].style.display = "none"
  for (i=12;i<20;i++) {document.getElementsByClassName("magicUpgrade")[i].style.display = "none"}
  for (i=8;i<12;i++) {document.getElementsByClassName("darkMagicUpgrade")[i].style.display = "none"}
  document.getElementsByClassName("fireUpgrade")[5].style.display = "none"
  document.getElementById("fireMaxAllButton").style.display = "none"
  for (i=0;i<6;i++) document.getElementsByClassName("fireBuyMaxButton")[i].style.display = "none"
  document.getElementById("platinumMaxAllButton").style.display = "none"
  document.getElementsByClassName("platinumUpgrade")[6].style.display = "none"
  document.getElementById("magicUpgradeBuyMaxButton").style.display = "none"
  document.getElementById("uraniumMaxAllButton").style.display = "none"
  document.getElementById("fireAutoMaxAllButton").style.display = "none"
  document.getElementById("dragonPetStuff").style.display = "none"
  document.getElementById("minerAutoBuyMaxButton").style.display = "none"
  document.getElementById("darkMagicUpgradeBuyMaxButton").style.display = "none"
  document.getElementById("dragonPetButton").disabled = false
}

reset()

//If the user confirms the hard reset, resets all variables, saves and refreshes the page
function hardReset() {
  if (confirm("Are you sure you want to reset? You will lose everything!")) {
    reset()
    save()
    location.reload()
  }
}

function save() {
	localStorage.setItem("dodecaSave", JSON.stringify(game))
}

setInterval(save, 5000)

function exportGame() {
  save()
  navigator.clipboard.writeText(btoa(JSON.stringify(game))).then(function() {
    alert("Copied to clipboard!")
  }, function() {
    alert("Error copying to clipboard, try again...")
  });
}

function importGame() {
  loadgame = JSON.parse(atob(prompt("Input your save here:")))
  if (loadgame && loadgame != null && loadgame != "") {
    reset()
    loadGame(loadgame)
    save()
  }
  else {
    alert("Invalid input.")
  }
}

function load() {
	reset()
	let loadgame = JSON.parse(localStorage.getItem("dodecaSave"))
	if (loadgame != null) {
		loadGame(loadgame)
	}
}

load()

function loadGame(loadgame) {
  //Sets each variable in 'game' to the equivalent variable in 'loadgame' (the saved file)
  //This could be a lot better! Since it compares each item in the save file to each item in the game object one by one, variables in the game object cannot ever be moved around (This is a total pain in my ass and I'm not smart enough to know how to fix it)
  for (i=0; i<Object.keys(loadgame).length; i++) {
    if (loadgame[Object.keys(loadgame)[i]] != "undefined") {
      if (typeof loadgame[Object.keys(loadgame)[i]] == "string") {game[Object.keys(loadgame)[i]] = new Decimal(loadgame[Object.keys(loadgame)[i]])}
      else {game[Object.keys(game)[i]] = loadgame[Object.keys(loadgame)[i]]}
    }
  }

  //All of these change what's visible/available based on game progress
  document.getElementById("minerCost").innerHTML = format(game.minerCost, 0)
  if (game.miners.gte(1)) document.getElementsByClassName("resourceRow")[1].style.display = "block"
  //Make the sigil confirmation toggle "true" if it's not defined
  if (game.confirmations[1] != true && game.confirmations[1] != false) game.confirmations[1] = true
  //Disables the background pattern if the toggle is off
  if (!game.backgroundPatternOn) {
    document.getElementById("backgroundPatternButton").innerHTML = "Background Pattern: Off"
    document.body.style.backgroundImage = "none"
  }
  //Dragon box stuff
  if (game.unlocks >= 1) {
    document.getElementById("unlockDragonButton").style.display = "none"
    document.getElementById("unlockAlchemyButton").style.display = "block"
    document.getElementsByClassName("box")[3].style.display = "block"
    document.getElementsByClassName("resourceRow")[2].style.display = "block"
  }
  //Fire stuff
  if (game.unlocks >= 2) {
    document.getElementById("buyFireUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[4].style.display = "block"
    document.getElementsByClassName("upgradeDragonButton")[0].style.display = "block"
    document.getElementById("fireUpgrade1Cost").innerHTML = format(game.fireUpgrade1Cost, 0)
    document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6)), 2)
    document.getElementById("fireUpgrade2Cost").innerHTML = format(game.fireUpgrade2Cost, 0)
    document.getElementById("fireUpgrade3Cost").innerHTML = format(game.fireUpgrade3Cost, 0)
    document.getElementById("fireUpgrade4Cost").innerHTML = format(game.fireUpgrade4Cost, 0)
    document.getElementById("fireUpgrade5Cost").innerHTML = format(game.fireUpgrade5Cost, 0)
    document.getElementById("fireUpgrade6Cost").innerHTML = format(game.fireUpgrade6Cost, 0)
    document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)
  }
  //Platinum stuff
  if (game.unlocks >= 3) {
    document.getElementById("unlockAlchemyButton").style.display = "none"
    document.getElementById("unlockMagicButton").style.display = "block"
    document.getElementsByClassName("box")[5].style.display = "block"
    document.getElementsByClassName("resourceRow")[3].style.display = "block"
    document.getElementById("platinumConvertCooldown").innerHTML = game.platinumConvertCooldown
    if (game.platinumConvertCooldown > 0) {document.getElementById("platinumConvertButton").disabled = true}
    else {document.getElementById("platinumConvertButton").disabled = false}
    //Ugh, this is what happens when you keep adding new platinum upgrades
    if (game.platinumUpgradesBought.length < 6) game.platinumUpgradesBought[5] = 0
    if (game.platinumUpgradesBought.length < 7) game.platinumUpgradesBought[6] = 0
    if (game.platinumUpgradesBought.length < 8) game.platinumUpgradesBought[7] = 0
    if (game.platinumUpgradesBought.length < 9) game.platinumUpgradesBought[8] = 0
    for (i=0;i<9;i++) document.getElementsByClassName("platinumUpgradesBought")[i].innerHTML = game.platinumUpgradesBought[i]
    //Could be shortened
    if (game.platinumUpgradesBought[0] == 20) {document.getElementsByClassName("platinumUpgrade")[0].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[0].disabled = false}
    if (game.platinumUpgradesBought[1] == 20) {document.getElementsByClassName("platinumUpgrade")[1].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[1].disabled = false}
    if (game.platinumUpgradesBought[2] == 1) {
      document.getElementsByClassName("platinumUpgrade")[2].disabled = true
      document.getElementsByClassName("fireUpgrade")[5].style.display = "inline-block"
    }
    else {document.getElementsByClassName("platinumUpgrade")[2].disabled = false}
    if (game.platinumUpgradesBought[3] == 5) {document.getElementsByClassName("platinumUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[3].disabled = false}
    if (game.platinumUpgradesBought[4] == 1) {document.getElementsByClassName("platinumUpgrade")[4].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[4].disabled = false}
    if (game.platinumUpgradesBought[5] == 4) {document.getElementsByClassName("platinumUpgrade")[5].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[5].disabled = false}
    if (game.platinumUpgradesBought[6] == 20) {document.getElementsByClassName("platinumUpgrade")[6].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[6].disabled = false}
    if (game.platinumUpgradesBought[7] == 5) {document.getElementsByClassName("platinumUpgrade")[7].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[7].disabled = false}
    if (game.platinumUpgradesBought[8] == 5) {document.getElementsByClassName("platinumUpgrade")[8].disabled = true}
    else {document.getElementsByClassName("platinumUpgrade")[8].disabled = false}
    document.getElementById("platinumUpgrade7Effect").innerHTML = format(new Decimal(1.5).pow(game.platinumUpgradesBought[6]), 2)
  }
  //Hide confirmation toggle box if importing save before magic
  if (game.unlocks < 4) document.getElementById("confirmationToggleBox").style.display = "none"
  //Magic and magic upgrade stuff
  if (game.unlocks >= 4) {
    //magic confirmation toggle
    document.getElementById("confirmationToggleBox").style.display = "block"
    if (game.confirmations[0] == false) {document.getElementsByClassName("confirmationToggle")[0].style.border = "2px solid red"}
    else {document.getElementsByClassName("confirmationToggle")[0].style.border = "2px solid #0f0"}
    document.getElementById("unlockMagicButton").style.display = "none"
    document.getElementsByClassName("box")[6].style.display = "block"
    document.getElementsByClassName("box")[7].style.display = "block"
    document.getElementsByClassName("resourceRow")[4].style.display = "block"
    for (i=0;i<20;i++) {
      if (game.magicUpgradesBought[i] == true) {document.getElementsByClassName("magicUpgrade")[i].disabled = true}
      else {document.getElementsByClassName("magicUpgrade")[i].disabled = false}
    }
    if (game.magicUpgradesBought[1]) {
      document.getElementById("fireMaxAllButton").style.display = "block"
      for (i=0;i<6;i++) document.getElementsByClassName("fireBuyMaxButton")[i].style.display = "inline-block"
    }
    if (game.magicUpgradesBought[4]) document.getElementById("platinumMaxAllButton").style.display = "block"
    if (game.magicUpgradesBought[7]) document.getElementsByClassName("platinumUpgrade")[6].style.display = "inline-block"
  }
  //Magic challenge stuff
  if (game.unlocks >= 5) {
    document.getElementsByClassName("box")[8].style.display = "block"
    document.getElementsByClassName("resourceRow")[5].style.display = "block"
    document.getElementById("moreMagicUpgradesButton").style.display = "block"
    document.getElementById("magicScore1").innerHTML = format(game.magicScore1, 0)
    document.getElementById("magicScore2").innerHTML = format(game.magicScore2, 0)
    document.getElementById("magicScore3").innerHTML = format(game.magicScore3, 0)
    document.getElementById("magicScore4").innerHTML = format(game.magicScore4, 0)
    document.getElementById("magicMult1").innerHTML = format(game.magicScore1.add(1), 0)
    document.getElementById("magicMult2").innerHTML = format(game.magicScore2.add(1), 0)
    document.getElementById("magicMult3").innerHTML = format(game.magicScore3.add(1), 0)
    document.getElementById("magicMult4").innerHTML = format(game.magicScore4.add(1), 0)
    document.getElementById("magifolds").innerHTML = format(game.magifolds, 0)
    if (game.violetSigilUpgrade5Bought.eq(1)) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(game.magifolds.add(10).log10().log10().add(8)), 2)}
    else if (game.darkMagicUpgradesBought[3]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(8), 2)}
    else if (game.magicUpgradesBought[18]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(6), 2)}
    else {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(4), 2)}
    document.getElementsByClassName("resourceText")[5].innerHTML = format(game.magifolds, 0)
    //Sets the color of the magic challenge text
    for (i=0;i<4;i++) {
      if (game.selectedChallenges[i]) {document.getElementsByClassName("magicChallenge")[i].style.color = "#0f0"}
      else {document.getElementsByClassName("magicChallenge")[i].style.color = "white"}
    }
    if (game.challengesActive) {document.getElementById("activeChallenges").innerHTML = "Challenges active: " + (game.selectedChallenges[0] ? 'A1 ' : '') + (game.selectedChallenges[1] ? 'A2 ' : '') + (game.selectedChallenges[2] ? 'B1 ' : '') + (game.selectedChallenges[3] ? 'B2' : '') + " (" + game.noOfSelectedChallenges + ")"}
    else {document.getElementById("activeChallenges").innerHTML = "You are not in any challenges!"}
  }
  //More magic upgrade stuff
  if (game.unlocks < 6) document.getElementsByClassName("box")[7].style.height = "350px"
  if (game.unlocks >= 6) {
    document.getElementById("moreMagicUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[7].style.height = "560px"
    for (i=12;i<20;i++) {document.getElementsByClassName("magicUpgrade")[i].style.display = "block"}
  }
  //Uranium stuff
  if (game.unlocks >= 7) {
    document.getElementsByClassName("box")[9].style.display = "block"
    document.getElementsByClassName("resourceRow")[6].style.display = "block"
    document.getElementById("morePUupgradesButton").style.display = "block"
    document.getElementById("uraniumConvertCooldown").innerHTML = game.uraniumConvertCooldown
    //Ugh, this is what happens when you keep adding new platinum upgrades
    if (game.uraniumUpgradesBought.length < 6) {
      game.uraniumUpgradesBought[3] = 0
      game.uraniumUpgradesBought[4] = 0
      game.uraniumUpgradesBought[5] = 0
    }
    if (game.uraniumConvertCooldown > 0) {document.getElementById("uraniumConvertButton").disabled = true}
    else {document.getElementById("uraniumConvertButton").disabled = false}
    for (i=0;i<6;i++) document.getElementsByClassName("uraniumUpgradesBought")[i].innerHTML = game.uraniumUpgradesBought[i]
    //Could be shortened
    if (game.uraniumUpgradesBought[0] == 100) {document.getElementsByClassName("uraniumUpgrade")[0].disabled = true}
    else {document.getElementsByClassName("uraniumUpgrade")[0].disabled = false}
    if (game.uraniumUpgradesBought[1] == 20) {document.getElementsByClassName("uraniumUpgrade")[1].disabled = true}
    else {document.getElementsByClassName("uraniumUpgrade")[1].disabled = false}
    if (game.uraniumUpgradesBought[2] == 5) {document.getElementsByClassName("uraniumUpgrade")[2].disabled = true}
    else {document.getElementsByClassName("uraniumUpgrade")[2].disabled = false}
    if (game.uraniumUpgradesBought[3] == 1) {document.getElementsByClassName("uraniumUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("uraniumUpgrade")[3].disabled = false}
    if (game.uraniumUpgradesBought[4] == 10) {document.getElementsByClassName("uraniumUpgrade")[4].disabled = true}
    else {document.getElementsByClassName("uraniumUpgrade")[4].disabled = false}
    if (game.uraniumUpgradesBought[5] == 1) {document.getElementsByClassName("uraniumUpgrade")[5].disabled = true}
    else {document.getElementsByClassName("uraniumUpgrade")[5].disabled = false}
  }
  //More platinum and uranium upgrades
  if (game.unlocks >= 8) {
    document.getElementById("morePUupgradesButton").style.display = "none"
    document.getElementById("unlockDarkMagicUpgradesButton").style.display = "block"
    document.getElementsByClassName("platinumUpgrade")[7].style.display = "inline-block"
    document.getElementsByClassName("platinumUpgrade")[8].style.display = "inline-block"
    document.getElementsByClassName("uraniumUpgrade")[3].style.display = "inline-block"
    document.getElementsByClassName("uraniumUpgrade")[4].style.display = "inline-block"
    document.getElementsByClassName("uraniumUpgrade")[5].style.display = "inline-block"
  }
  //Dark magic upgrade stuff
  if (game.unlocks >= 9) {
    document.getElementById("unlockDarkMagicUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[10].style.display = "block"
    for (i=0;i<12;i++) {
      if (game.darkMagicUpgradesBought[i] == true) {document.getElementsByClassName("darkMagicUpgrade")[i].disabled = true}
      else {document.getElementsByClassName("darkMagicUpgrade")[i].disabled = false}
    }
    if (game.darkMagicUpgradesBought[8] == true) document.getElementById("magicUpgradeBuyMaxButton").style.display = "block"
  }
  //Cyan sigil stuff
  if (game.unlocks < 10) document.getElementById("horrorTabButton").style.display = "none"
  if (game.unlocks >= 10) {
    if (game.confirmations[1] == false) {document.getElementsByClassName("confirmationToggle")[1].style.border = "2px solid red"}
    else {document.getElementsByClassName("confirmationToggle")[1].style.border = "2px solid #0f0"}
    document.getElementById("horrorTabButton").style.display = "block"
    document.getElementsByClassName("box")[11].style.display = "block"
    document.getElementsByClassName("resourceRow")[7].style.display = "block"
    document.getElementsByClassName("confirmationToggle")[1].style.display = "inline-block"
    document.getElementById("cyanSigilUpgrade1Cost").innerHTML = format(game.cyanSigilUpgrade1Cost, 0)
    document.getElementById("cyanSigilUpgrade1Effect").innerHTML = format(game.cyanSigilUpgrade1Bought.add(1), 2)
    document.getElementById("cyanSigilUpgrade2Cost").innerHTML = format(game.cyanSigilUpgrade2Cost, 0)
    document.getElementById("cyanSigilUpgrade2Effect").innerHTML = format(game.cyanSigilUpgrade2Bought.add(1).pow(1.5), 2)
    document.getElementById("cyanSigilUpgrade3Cost").innerHTML = format(game.cyanSigilUpgrade3Cost, 0)
    document.getElementById("cyanSigilUpgrade3Effect").innerHTML = format(new Decimal(1.2).pow(game.cyanSigilUpgrade3Bought.pow(0.4)), 2)
    if (game.cyanSigilUpgrade4Bought == 1) {document.getElementsByClassName("cyanSigilUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("cyanSigilUpgrade")[3].disabled = false}
    if (game.cyanSigilUpgrade5Bought == 1) {
      document.getElementsByClassName("cyanSigilUpgrade")[4].disabled = true
      document.getElementById("uraniumMaxAllButton").style.display = "block"
    }
    else {document.getElementsByClassName("cyanSigilUpgrade")[4].disabled = false
}
    if (game.cyanSigilUpgrade6Bought == 1) {document.getElementsByClassName("cyanSigilUpgrade")[5].disabled = true}
    else {document.getElementsByClassName("cyanSigilUpgrade")[5].disabled = false}
  }
  //Blue sigil stuff
  if (game.unlocks >= 11) {
    document.getElementsByClassName("box")[12].style.display = "block"
    document.getElementsByClassName("resourceRow")[8].style.display = "block"
    document.getElementById("blueSigilUpgrade1Cost").innerHTML = format(game.blueSigilUpgrade1Cost, 0)
    document.getElementById("blueSigilUpgrade1Effect").innerHTML = format(game.blueSigilUpgrade1Bought.add(1), 2)
    document.getElementById("blueSigilUpgrade2Cost").innerHTML = format(game.blueSigilUpgrade2Cost, 0)
    document.getElementById("blueSigilUpgrade2Effect").innerHTML = format(new Decimal(1e15).pow(game.blueSigilUpgrade2Bought.pow(0.6)), 2)
    document.getElementById("blueSigilUpgrade3Cost").innerHTML = format(game.blueSigilUpgrade3Cost, 0)
    document.getElementById("blueSigilUpgrade3Bought").innerHTML = format(game.blueSigilUpgrade3Bought, 0)
    if (game.blueSigilUpgrade3Bought.gte(10)) {document.getElementsByClassName("blueSigilUpgrade")[2].disabled = true}
    else {document.getElementsByClassName("blueSigilUpgrade")[2].disabled = false}
    if (game.blueSigilUpgrade4Bought.eq(1)) {document.getElementsByClassName("blueSigilUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("blueSigilUpgrade")[3].disabled = false}
    if (game.blueSigilUpgrade5Bought.eq(1)) {
      document.getElementsByClassName("blueSigilUpgrade")[4].disabled = true
      document.getElementById("fireAutoMaxAllButton").style.display = "block"
    }
    else {document.getElementsByClassName("blueSigilUpgrade")[4].disabled = false}
    if (game.fireAutoMaxAll) {document.getElementById("fireAutoMaxAllButton").innerHTML = "Auto max all: On"}
    else {document.getElementById("fireAutoMaxAllButton").innerHTML = "Auto max all: Off"}
    if (game.blueSigilUpgrade6Bought.eq(1)) {document.getElementsByClassName("blueSigilUpgrade")[5].disabled = true}
    else {document.getElementsByClassName("blueSigilUpgrade")[5].disabled = false}
  }
  //Indigo sigil stuff
  if (game.unlocks >= 12) {
    document.getElementsByClassName("box")[13].style.display = "block"
    document.getElementsByClassName("resourceRow")[9].style.display = "block"
    document.getElementById("indigoSigilUpgrade1Cost").innerHTML = format(game.indigoSigilUpgrade1Cost, 0)
    document.getElementById("indigoSigilUpgrade1Effect").innerHTML = format(game.indigoSigilUpgrade1Bought.add(1), 2)
    document.getElementById("indigoSigilUpgrade2Cost").innerHTML = format(game.indigoSigilUpgrade2Cost, 0)
    document.getElementById("indigoSigilUpgrade2Effect").innerHTML = format(new Decimal(1.15).pow(game.indigoSigilUpgrade2Bought.pow(0.5)), 2)
    document.getElementById("indigoSigilUpgrade3Cost").innerHTML = format(game.indigoSigilUpgrade3Cost, 0)
    document.getElementById("indigoSigilUpgrade3Effect").innerHTML = format(new Decimal(1.4).pow(game.indigoSigilUpgrade3Bought.pow(0.5)), 2)
    document.getElementById("indigoSigilUpgrade4Cost").innerHTML = format(game.indigoSigilUpgrade4Cost, 0)
    document.getElementById("indigoSigilUpgrade4Effect").innerHTML = format(new Decimal(2).pow(game.indigoSigilUpgrade4Bought.pow(0.6)), 2)
    if (game.indigoSigilUpgrade5Bought.eq(1)) {
      for (i=8;i<12;i++) {document.getElementsByClassName("darkMagicUpgrade")[i].style.display = "inline-block"}
      document.getElementsByClassName("indigoSigilUpgrade")[4].disabled = true
    }
    else {document.getElementsByClassName("indigoSigilUpgrade")[4].disabled = false}
    if (game.indigoSigilUpgrade6Bought.eq(1)) {document.getElementsByClassName("indigoSigilUpgrade")[5].disabled = true}
    else {document.getElementsByClassName("indigoSigilUpgrade")[5].disabled = false}
  }
  //Violet sigil stuff
  if (game.unlocks >= 13) {
    document.getElementsByClassName("box")[14].style.display = "block"
    document.getElementsByClassName("resourceRow")[10].style.display = "block"
    document.getElementById("violetSigilUpgrade1Cost").innerHTML = format(game.violetSigilUpgrade1Cost, 0)
    document.getElementById("violetSigilUpgrade1Effect").innerHTML = format(game.violetSigilUpgrade1Bought.add(1), 2)
    document.getElementById("violetSigilUpgrade2Cost").innerHTML = format(game.violetSigilUpgrade2Cost, 0)
    document.getElementById("violetSigilUpgrade2Effect").innerHTML = format(new Decimal(1.3).pow(game.violetSigilUpgrade2Bought.pow(0.5)), 2)
    if (game.violetSigilUpgrade3Bought.eq(1)) {
      document.getElementsByClassName("violetSigilUpgrade")[2].disabled = true
      document.getElementById("dragonPetStuff").style.display = "block"
    }
    else {document.getElementsByClassName("violetSigilUpgrade")[2].disabled = false}
    if (game.violetSigilUpgrade4Bought.eq(1)) {
      document.getElementsByClassName("violetSigilUpgrade")[3].disabled = true
      document.getElementById("minerAutoBuyMaxButton").style.display = "block"
    }
    else {document.getElementsByClassName("violetSigilUpgrade")[3].disabled = false}
    if (game.minerAutoBuyMax) {document.getElementById("minerAutoBuyMaxButton").innerHTML = "Auto max all: On"}
    else {document.getElementById("minerAutoBuyMaxButton").innerHTML = "Auto max all: Off"}
    if (game.violetSigilUpgrade5Bought.eq(1)) {document.getElementsByClassName("violetSigilUpgrade")[4].disabled = true}
    else {document.getElementsByClassName("violetSigilUpgrade")[4].disabled = false}
    if (game.violetSigilUpgrade6Bought.eq(1)) {document.getElementsByClassName("violetSigilUpgrade")[5].disabled = true}
    else {document.getElementsByClassName("violetSigilUpgrade")[5].disabled = false}
    //This is so bad and I know how to condense it and I WON'T because I'm EVIL (and tired)
    if (game.dragonPets >= 4) {document.getElementById("dragonPetRequirement").innerHTML = "pink"}
    else if (game.dragonPets >= 3) {document.getElementById("dragonPetRequirement").innerHTML = "violet"}
    else if (game.dragonPets >= 2) {document.getElementById("dragonPetRequirement").innerHTML = "indigo"}
    else if (game.dragonPets >= 1) {document.getElementById("dragonPetRequirement").innerHTML = "blue"}
    else {document.getElementById("dragonPetRequirement").innerHTML = "cyan"}
    if (game.dragonPets >= 5) document.getElementById("dragonPetButton").disabled = true
    document.getElementById("dragonPets").innerHTML = game.dragonPets
    document.getElementById("dragonPetEffect").innerHTML = format(new Decimal(5).pow(game.dragonPets ** 0.5), 2)
  }
  //Pink sigil stuff
  if (game.unlocks >= 14) {
    document.getElementsByClassName("box")[16].style.display = "block"
    document.getElementsByClassName("resourceRow")[11].style.display = "block"
    for (i=0;i<5;i++) {
      if (game.pinkSigilUpgradesBought[i]) {document.getElementsByClassName("pinkSigilUpgrade")[i].disabled = true}
      else {document.getElementsByClassName("pinkSigilUpgrade")[i].disabled = false}
    }
    if (game.pinkSigilUpgradesBought[2]) document.getElementById("darkMagicUpgradeBuyMaxButton").style.display = "block"
  }

  //Dragon stage stuff
  if (game.dragonStage >= 2) {
    document.getElementsByClassName("upgradeDragonButton")[0].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[1].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon2.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have an</a><br>Adult dragon"
    document.getElementById("dragonInfo").innerHTML = "Your large dragon friend inspires awe and fear, and spews fire for you."
  }
  if (game.dragonStage >= 3) {
    document.getElementsByClassName("upgradeDragonButton")[1].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[2].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon3.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have an</a><br>Elder dragon"
    document.getElementById("dragonInfo").innerHTML = "Your strong and wise dragon friend rests upon your mountain of gold, and defends it with inferno-like breath."
  }
  if (game.dragonStage >= 4) {
    document.getElementsByClassName("upgradeDragonButton")[2].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[3].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon4.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Dark dragon"
    document.getElementById("dragonInfo").innerHTML = "Your menacing dark dragon calls upon the power of the void itself to defend your empire."
  }
  if (game.dragonStage < 5) {
    document.getElementsByClassName("box")[3].style.height = "400px"
    document.getElementById("dragonAffectionStuff").style.display = "none"
  }
  if (game.dragonStage >= 5) {
    document.getElementsByClassName("upgradeDragonButton")[3].style.display = "none"
    document.getElementById("dragonImg").src = "img/iconDragon5.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Light dragon"
    document.getElementById("dragonInfo").innerHTML = "Your heavenly light dragon focuses the power of the gods themselves to protect your people from harm. It can also fire lightning out of its claws, because it's cool like that."
    if (game.violetSigilUpgrade3Bought.eq(1)) {document.getElementsByClassName("box")[3].style.height = "580px"}
    else {document.getElementsByClassName("box")[3].style.height = "500px"}
    document.getElementById("dragonAffectionStuff").style.display = "block"
    document.getElementById("dragonTimeCooldown").innerHTML = game.dragonTimeCooldown
    document.getElementById("dragonTimeSpent").innerHTML = format(game.dragonTimeSpent, 0)
    game.dragonTimeEffect = new Decimal(1.2).pow(game.dragonTimeSpent.pow(0.3))
    if (game.dragonTimeEffect.gt(2)) game.dragonTimeEffect = game.dragonTimeEffect.add(2).pow(0.5)
    if (game.dragonTimeEffect.gt(2.5)) {
      game.dragonTimeEffect = new Decimal(2.5)
      document.getElementById("dragonTimeEffectCap").innerHTML = " (capped)"
    }
    else {document.getElementById("dragonTimeEffectCap").innerHTML = ""}
    document.getElementById("dragonTimeEffect").innerHTML = format(game.dragonTimeEffect, 3)
    if (game.dragonTimeCooldown > 0) {document.getElementById("dragonSpendTimeButton").disabled = true}
    else {document.getElementById("dragonSpendTimeButton").disabled = false}
    //The dragon feed cost used to be higher, this changes it for old players with the old cost
    if (game.dragonFeedCost.eq(new Decimal(10).pow(new Decimal(2).pow(game.dragonFood).mul(10)))) game.dragonFeedCost = new Decimal(10).pow(new Decimal(2).pow(game.dragonFood).mul(8).round())
    document.getElementById("dragonFeedCost").innerHTML = format(game.dragonFeedCost, 0)
    document.getElementById("dragonFood").innerHTML = format(game.dragonFood, 0)
    document.getElementById("dragonFoodEffect").innerHTML = format(new Decimal(1.3).pow(game.dragonFood), 3)
  }
}

//Small update (occurs 33 times per second)
function updateSmall() {
  //Gold/second formula and multipliers
  game.goldPerSecond = game.miners.mul(game.fire.div(10).add(1).log10().mul(2).add(1))
  if (game.unlocks >= 2) {
    if (game.darkMagicUpgradesBought[5]) {game.goldPerSecond = game.goldPerSecond.mul(new Decimal(5).pow(game.fireUpgrade2Bought.pow(0.8)))}
    else if (game.magicUpgradesBought[8]) {game.goldPerSecond = game.goldPerSecond.mul(new Decimal(1.6).pow(game.fireUpgrade2Bought.pow(0.8)))}
    else {game.goldPerSecond = game.goldPerSecond.mul(new Decimal(1.25).pow(game.fireUpgrade2Bought.pow(0.8)))}
    if (game.platinumUpgradesBought[8] > 0) {game.goldPerSecond = game.goldPerSecond.mul(game.fireUpgrade4Bought.pow(game.miners.pow(0.3)).pow(game.platinumUpgradesBought[8] / 4).add(1))}
    else {game.goldPerSecond = game.goldPerSecond.mul(game.fireUpgrade4Bought.pow(1.5).mul(game.miners).div(50).add(1))}
  }
  if (game.unlocks >= 3) game.goldPerSecond = game.goldPerSecond.mul(1 + game.platinumUpgradesBought[0] * 0.2)
  if (game.platinumUpgradesBought[5] > 0) game.goldPerSecond = game.goldPerSecond.mul(platinumUpgrade6Effect)
  if (game.challengesActive && game.selectedChallenges[3]) game.goldPerSecond = game.goldPerSecond.div(1e25)
  if (game.unlocks >= 4) game.goldPerSecond = game.goldPerSecond.mul(game.magicEffect)
  if (game.magicUpgradesBought[0]) game.goldPerSecond = game.goldPerSecond.mul(game.gold.add(1).log10().add(1))
  if (game.magicUpgradesBought[2]) game.goldPerSecond = game.goldPerSecond.mul(55.5)
  if (game.magicUpgradesBought[5]) {
    if (game.magicUpgradesBought[9]) {game.goldPerSecond = game.goldPerSecond.mul(game.miners.pow(3).add(1))}
    else {game.goldPerSecond = game.goldPerSecond.mul(game.miners.pow(1.5).add(1))}
  }
  if (game.unlocks >= 5) {
    if (game.violetSigilUpgrade5Bought.eq(1)) {game.goldPerSecond = game.goldPerSecond.mul(game.magifolds.pow(game.magifolds.add(10).log10().log10().add(8)))}
    else if (game.darkMagicUpgradesBought[3]) {game.goldPerSecond = game.goldPerSecond.mul(game.magifolds.pow(8))}
    else if (game.magicUpgradesBought[18]) {game.goldPerSecond = game.goldPerSecond.mul(game.magifolds.pow(6))}
    else {game.goldPerSecond = game.goldPerSecond.mul(game.magifolds.pow(4))}
  }
  if (game.dragonStage >= 5) game.goldPerSecond = game.goldPerSecond.pow(game.dragonTimeEffect)
  if (game.unlocks >= 10) game.goldPerSecond = game.goldPerSecond.pow(new Decimal(1.2).pow(game.cyanSigilUpgrade3Bought.pow(0.4)))
  if (game.challengesActive && game.selectedChallenges[1]) game.goldPerSecond = game.goldPerSecond.pow(0.25)
    
  //Gold/click formula and multipliers
  if (game.magicUpgradesBought[8]) {game.goldPerClick = game.fireUpgrade3Bought.pow(12).mul(4).add(1)}
  else {game.goldPerClick = game.fireUpgrade3Bought.pow(2.6).mul(4).add(1)}
  if (game.unlocks >= 4) game.goldPerClick = game.goldPerClick.mul(game.magicEffect)
  if (game.magicUpgradesBought[0]) game.goldPerClick = game.goldPerClick.mul(game.gold.add(1).log10().add(1))
  if (game.magicUpgradesBought[2]) game.goldPerClick = game.goldPerClick.mul(55.5)
  if (game.unlocks >= 5) {
    if (game.violetSigilUpgrade5Bought.eq(1)) {game.goldPerClick = game.goldPerClick.mul(game.magifolds.pow(game.magifolds.add(10).log10().log10().add(8)))}
    else if (game.darkMagicUpgradesBought[3]) {game.goldPerClick = game.goldPerClick.mul(game.magifolds.pow(8))}
    else if (game.magicUpgradesBought[18]) {game.goldPerClick = game.goldPerClick.mul(game.magifolds.pow(6))}
    else {game.goldPerClick = game.goldPerClick.mul(game.magifolds.pow(4))}
  }
  if (game.dragonStage >= 5) game.goldPerClick = game.goldPerClick.pow(game.dragonTimeEffect)
  if (game.challengesActive && game.selectedChallenges[1]) game.goldPerClick = game.goldPerClick.pow(0.25)
  if (game.challengesActive && game.selectedChallenges[3]) game.goldPerClick = new Decimal(20)
  document.getElementById("gold").innerHTML = format(game.gold, 0)
  document.getElementById("goldPerSecond").innerHTML = format(game.goldPerSecond, 0)
  document.getElementById("goldPerClick").innerHTML = format(game.goldPerClick, 0)

  //Enables/disables buy miner button based on whether the user's gold is higher than the cost
  if (game.gold.gte(game.minerCost)) {document.getElementById("buyMinerButton").disabled = false}
  else {document.getElementById("buyMinerButton").disabled = true}

  //Fire/second formula and multipliers
  if (game.magicUpgradesBought[13]) {game.firePerSecond = new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7))}
  else {game.firePerSecond = new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6))}
  if (game.unlocks >= 2) game.firePerSecond = game.firePerSecond.mul(game.fireUpgrade5Bought.pow(1.5).mul(game.gold.add(1).log10()).div(5).add(1))
  if (game.unlocks >= 3) game.firePerSecond = game.firePerSecond.mul(1 + game.platinumUpgradesBought[1] * 0.2)
  if (game.magicUpgradesBought[2]) game.firePerSecond = game.firePerSecond.mul(55.5)
  if (game.dragonStage == 5) game.firePerSecond = game.firePerSecond.mul(1e15)
  else if (game.dragonStage == 4) game.firePerSecond = game.firePerSecond.mul(1e8)
  else if (game.dragonStage == 3) game.firePerSecond = game.firePerSecond.mul(10000)
  else if (game.dragonStage == 2) game.firePerSecond = game.firePerSecond.mul(100)
  if (game.dragonStage >= 5) game.firePerSecond = game.firePerSecond.pow(new Decimal(1.3).pow(game.dragonFood))
  if (game.challengesActive && game.selectedChallenges[2]) {
    if (game.magicUpgradesBought[14]) {game.firePerSecond = game.firePerSecond.pow(0.3)}
    else {game.firePerSecond = game.firePerSecond.pow(0.1)}
  }
  document.getElementById("fire").innerHTML = format(game.fire, 0)
  document.getElementById("firePerSecond").innerHTML = format(game.firePerSecond, 0)
  
  //Fire gold multiplier formula and multipliers
  if (game.darkMagicUpgradesBought[5]) {game.fireGoldMultiplier = game.fire.div(10).add(1).log10().mul(2).add(1).mul(new Decimal(5).pow(game.fireUpgrade2Bought.pow(0.8)))}
  else if (game.magicUpgradesBought[8]) {game.fireGoldMultiplier = game.fire.div(10).add(1).log10().mul(2).add(1).mul(new Decimal(1.6).pow(game.fireUpgrade2Bought.pow(0.8)))}
  else {game.fireGoldMultiplier = game.fire.div(10).add(1).log10().mul(2).add(1).mul(new Decimal(1.25).pow(game.fireUpgrade2Bought.pow(0.8)))}
  document.getElementById("fireGoldMultiplier").innerHTML = format(game.fireGoldMultiplier, 2)
  
  document.getElementsByClassName("resourceText")[0].innerHTML = format(game.gold, 0)
  document.getElementsByClassName("resourceText")[1].innerHTML = format(game.miners, 0)
  if (game.unlocks >= 1) document.getElementsByClassName("resourceText")[2].innerHTML = format(game.fire, 0)
  if (game.unlocks >= 2) {
    //Enables/disables fire upgrade buttons based on whether the user's fire is higher than the cost (code can probably be made better)
    if (game.fire.gte(game.fireUpgrade1Cost)) {document.getElementsByClassName("fireUpgrade")[0].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[0].disabled = true}
    if (game.fire.gte(game.fireUpgrade2Cost)) {document.getElementsByClassName("fireUpgrade")[1].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[1].disabled = true}
    if (game.fire.gte(game.fireUpgrade3Cost)) {document.getElementsByClassName("fireUpgrade")[2].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[2].disabled = true}
    if (game.fire.gte(game.fireUpgrade4Cost)) {document.getElementsByClassName("fireUpgrade")[3].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[3].disabled = true}
    if (game.fire.gte(game.fireUpgrade5Cost)) {document.getElementsByClassName("fireUpgrade")[4].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[4].disabled = true}
    if (game.fire.gte(game.fireUpgrade6Cost)) {document.getElementsByClassName("fireUpgrade")[5].disabled = false}
    else {document.getElementsByClassName("fireUpgrade")[5].disabled = true}
    if (game.darkMagicUpgradesBought[5]) {document.getElementById("fireUpgrade2Effect").innerHTML = format(new Decimal(5).pow(game.fireUpgrade2Bought.pow(0.8)), 2)}
    else if (game.magicUpgradesBought[8]) {document.getElementById("fireUpgrade2Effect").innerHTML = format(new Decimal(1.6).pow(game.fireUpgrade2Bought.pow(0.8)), 2)}
    else {document.getElementById("fireUpgrade2Effect").innerHTML = format(new Decimal(1.25).pow(game.fireUpgrade2Bought.pow(0.8)), 2)}
    if (game.magicUpgradesBought[8]) {document.getElementById("fireUpgrade3Effect").innerHTML = format(game.fireUpgrade3Bought.pow(12).mul(4).add(1), 2)}
    else {document.getElementById("fireUpgrade3Effect").innerHTML = format(game.fireUpgrade3Bought.pow(2.6).mul(4).add(1), 2)}
    if (game.platinumUpgradesBought[8] > 0) {document.getElementById("fireUpgrade4Effect").innerHTML = format(game.fireUpgrade4Bought.pow(game.miners.pow(0.3)).pow(game.platinumUpgradesBought[8] / 4).add(1), 2)}
    else {document.getElementById("fireUpgrade4Effect").innerHTML = format(game.fireUpgrade4Bought.pow(1.5).mul(game.miners).div(50).add(1), 2)}
    document.getElementById("fireUpgrade5Effect").innerHTML = format(game.fireUpgrade5Bought.pow(1.5).mul(game.gold.add(1).log10()).div(5).add(1), 2)
  }
  if (game.unlocks >= 3) {
    document.getElementById("platinum").innerHTML = format(game.platinum, 0)
    document.getElementsByClassName("resourceText")[3].innerHTML = format(game.platinum, 0)
    //Determines the amount of platinum to get when converting gold
    game.platinumToGet = game.gold.add(1).log2().mul(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)))
    if (game.unlocks >= 7) game.platinumToGet = game.platinumToGet.mul(1.2 ** game.uraniumUpgradesBought[0])
    if (game.unlocks >= 8) game.platinumToGet = game.platinumToGet.mul(10 ** game.uraniumUpgradesBought[4])
    if (game.unlocks >= 11) game.platinumToGet = game.platinumToGet.mul(new Decimal(1e15).pow(game.blueSigilUpgrade2Bought.pow(0.6)))
    if (game.challengesActive && game.selectedChallenges[1]) game.platinumToGet = game.platinumToGet.pow(0.25)
    game.platinumToGet = game.platinumToGet.floor()
    document.getElementById("platinumToGet").innerHTML = format(game.platinumToGet, 0)
    if (game.uraniumUpgradesBought[3]) {platinumUpgrade6Effect = game.platinum.add(1).pow(game.platinumUpgradesBought[5] * 1.2)}
    else {platinumUpgrade6Effect = game.platinum.add(1).log10().add(1).pow(game.platinumUpgradesBought[5] * 1.2)}
    if (game.challengesActive && game.selectedChallenges[3]) platinumUpgrade6Effect = platinumUpgrade6Effect.div(1e25)
    document.getElementById("platinumUpgrade6Effect").innerHTML = format(platinumUpgrade6Effect, 2)
  }
  if (game.unlocks >= 4) {
    //Determines the amount of magic to get when doing a magic reset
    game.magicToGet = game.gold.div(1e15).pow(0.1)
    if (game.magicUpgradesBought[3]) {
      if (game.magicUpgradesBought[9]) {game.magicToGet = game.magicToGet.mul(game.magic.add(1).log2().mul(4).add(1))}
      else {game.magicToGet = game.magicToGet.mul(game.magic.add(1).log2().mul(1.5).add(1))}
    }
    if (game.magicUpgradesBought[6]) game.magicToGet = game.magicToGet.mul(3)
    if (game.magicUpgradesBought[17]) game.magicToGet = game.magicToGet.mul(3)
    if (game.unlocks >= 10) game.magicToGet = game.magicToGet.mul(game.cyanSigils.add(1).pow(2))
    if (game.unlocks >= 11) game.magicToGet = game.magicToGet.mul(game.blueSigils.add(1).pow(3))
    if (game.unlocks >= 12) game.magicToGet = game.magicToGet.mul(game.indigoSigils.add(1).pow(4))
    if (game.unlocks >= 13) game.magicToGet = game.magicToGet.mul(game.violetSigils.add(1).pow(5))
    if (game.unlocks >= 14) game.magicToGet = game.magicToGet.mul(game.pinkSigils.add(1).pow(6))
    if (game.darkMagicUpgradesBought[11] == true) game.magicToGet = game.magicToGet.pow(1.1)
    if (game.darkMagicUpgradesBought[1]) game.magicToGet = game.magicToGet.pow(game.uranium.add(1).log10().div(30).add(1))
    game.magicToGet = game.magicToGet.floor()
    document.getElementById("magicToGet").innerHTML = format(game.magicToGet, 0)
    if (game.magicUpgradesBought[3] || game.magicUpgradesBought[6] || game.magicUpgradesBought[17] || game.unlocks >= 10) {document.getElementById("nextMagic").innerHTML = ""}
    else {document.getElementById("nextMagic").innerHTML = "Next magic at " + format(game.magicToGet.add(1).pow(10).mul(1e15), 0) + " gold<br>"}
    document.getElementById("magic").innerHTML = format(game.magic, 0)
    document.getElementsByClassName("resourceText")[4].innerHTML = format(game.magic, 0)
    game.magicEffect = game.magic.mul(3).mul(new Decimal(1.5).pow(game.platinumUpgradesBought[6])).add(1)
    if (game.magicUpgradesBought[15]) game.magicEffect = game.magicEffect.pow(2)
    if (game.challengesActive && game.selectedChallenges[0]) game.magicEffect = game.magic.pow(0.2).div(1e15)
    if (game.magicEffect.gt("e1000")) {
      game.magicEffect = game.magicEffect.mul("e1000").pow(0.5)
      document.getElementById("magicEffectCap").innerHTML = " (softcapped)"
    }
    else {document.getElementById("magicEffectCap").innerHTML = ""}
    if (game.magicEffect.gt("e100000")) {game.magicEffect = game.magicEffect.mul("e900000").pow(0.1)}
    document.getElementById("magicEffect").innerHTML = format(game.magicEffect, 2)
    document.getElementById("magicUpgrade1Effect").innerHTML = format(game.gold.add(1).log10().add(1), 2)
    if (game.magicUpgradesBought[9]) {
      document.getElementById("magicUpgrade4Effect").innerHTML = format(game.magic.add(1).log2().mul(4).add(1), 2)
      document.getElementById("magicUpgrade6Effect").innerHTML = format(game.miners.pow(3).add(1), 2)
    }
    else {
      document.getElementById("magicUpgrade4Effect").innerHTML = format(game.magic.add(1).log2().mul(1.5).add(1), 2)
      document.getElementById("magicUpgrade6Effect").innerHTML = format(game.miners.pow(1.5).add(1), 2)
    }
  }
  if (game.unlocks >= 5) {
    //Sets the magic score to get from exiting magic challenges
    game.magicScoreToGet = game.gold.add(1).multiply(game.fire.add(1)).log10()
    if (game.magicUpgradesBought[12]) game.magicScoreToGet = game.magicScoreToGet.mul(2)
    if (game.magicUpgradesBought[16]) game.magicScoreToGet = game.magicScoreToGet.mul(game.magifolds.log10().add(1).div(3))
    if (game.unlocks >= 7) game.magicScoreToGet = game.magicScoreToGet.mul(2 ** game.uraniumUpgradesBought[2])
    if (game.darkMagicUpgradesBought[6]) game.magicScoreToGet = game.magicScoreToGet.mul(2)
    if (game.unlocks >= 10) game.magicScoreToGet = game.magicScoreToGet.mul(game.cyanSigils.add(1).pow(2))
    if (game.unlocks >= 11) game.magicScoreToGet = game.magicScoreToGet.mul(game.blueSigils.add(1).pow(3))
    if (game.unlocks >= 12) {
      game.magicScoreToGet = game.magicScoreToGet.mul(game.indigoSigils.add(1).pow(4))
      game.magicScoreToGet = game.magicScoreToGet.pow(new Decimal(1.4).pow(game.indigoSigilUpgrade3Bought.pow(0.5)))
    }
    if (game.unlocks >= 13) game.magicScoreToGet = game.magicScoreToGet.mul(game.violetSigils.add(1).pow(5))
    if (game.unlocks >= 14) game.magicScoreToGet = game.magicScoreToGet.mul(game.pinkSigils.add(1).pow(6))
    if (game.darkMagicUpgradesBought[0]) game.magicScoreToGet = game.magicScoreToGet.pow(1.3)
    game.magicScoreToGet = game.magicScoreToGet.floor()
    if (game.darkMagicUpgradesBought[9] == true) {
      game.magicScore1 = game.magicScoreToGet
      game.magicScore2 = game.magicScoreToGet
      game.magicScore3 = game.magicScoreToGet
      game.magicScore4 = game.magicScoreToGet
      document.getElementById("magicScore1").innerHTML = format(game.magicScore1, 0)
      document.getElementById("magicScore2").innerHTML = format(game.magicScore2, 0)
      document.getElementById("magicScore3").innerHTML = format(game.magicScore3, 0)
      document.getElementById("magicScore4").innerHTML = format(game.magicScore4, 0)
      document.getElementById("magicMult1").innerHTML = format(game.magicScore1.add(1), 0)
      document.getElementById("magicMult2").innerHTML = format(game.magicScore2.add(1), 0)
      document.getElementById("magicMult3").innerHTML = format(game.magicScore3.add(1), 0)
      document.getElementById("magicMult4").innerHTML = format(game.magicScore4.add(1), 0)
      game.magifolds = game.magicScore1.add(1).mul(game.magicScore2.add(1)).mul(game.magicScore3.add(1)).mul(game.magicScore4.add(1))
      document.getElementById("magifolds").innerHTML = format(game.magifolds, 0)
      if (game.violetSigilUpgrade5Bought.eq(1)) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(game.magifolds.add(10).log10().log10().add(8)), 2)}
      else if (game.darkMagicUpgradesBought[3]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(8), 2)}
      else if (game.magicUpgradesBought[18]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(6), 2)}
      else {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(4), 2)}
      document.getElementsByClassName("resourceText")[5].innerHTML = format(game.magifolds, 0)
    }
    if (game.challengesActive) {
      document.getElementById("magicChallengeButton").innerHTML = "Exit challenges for " + format(game.magicScoreToGet, 0) + " score"
    }
    else {
      game.magicScoreToGet = new Decimal(0)
      document.getElementById("magicChallengeButton").innerHTML = "Enter challenges"
    }
  }
  if (game.unlocks >= 6) {
    document.getElementById("magicUpgrade17Effect").innerHTML = format(game.magifolds.log10().div(3), 2)
  }
  if (game.unlocks >= 7) {
    document.getElementById("uranium").innerHTML = format(game.uranium, 0)
    document.getElementsByClassName("resourceText")[6].innerHTML = format(game.uranium, 0)
    game.uraniumToGet = game.platinum.add(1).log2().mul(1 + 0.1 * game.uraniumUpgradesBought[1])
    if (game.unlocks >= 8) game.uraniumToGet = game.uraniumToGet.mul(2 ** game.platinumUpgradesBought[7])
    if (game.darkMagicUpgradesBought[4]) game.uraniumToGet = game.uraniumToGet.mul(100)
    if (game.unlocks >= 10) game.uraniumToGet = game.uraniumToGet.mul(game.cyanSigilUpgrade2Bought.add(1).pow(1.5))
    game.uraniumToGet = game.uraniumToGet.floor()
    document.getElementById("uraniumToGet").innerHTML = format(game.uraniumToGet, 0)
  }
  if (game.unlocks >= 9) {
    document.getElementById("darkMagicUpgrade2Effect").innerHTML = format(game.uranium.add(1).log10().div(30).add(1), 2)
  }
  if (game.unlocks >= 10) {
    game.cyanSigilsToGet = game.gold.add(1).log10().div(new Decimal(3000).sub(game.blueSigilUpgrade3Bought.mul(100))).floor()
    document.getElementById("nextCyanSigil").innerHTML = format(new Decimal(10).pow(game.cyanSigilsToGet.add(1).mul(new Decimal(3000).sub(game.blueSigilUpgrade3Bought.mul(100)))), 0)
    if (game.darkMagicUpgradesBought[10] == true) game.cyanSigilsToGet = game.cyanSigilsToGet.mul(3)
    game.cyanSigilsToGet = game.cyanSigilsToGet.mul(new Decimal(5).pow(game.dragonPets ** 0.5)).round()
    document.getElementById("cyanSigils").innerHTML = format(game.cyanSigils, 0)
    document.getElementById("cyanSigilsToGet").innerHTML = format(game.cyanSigilsToGet, 0)
    document.getElementsByClassName("resourceText")[7].innerHTML = format(game.cyanSigils, 0)
    document.getElementById("cyanSigilEffect").innerHTML = format(game.cyanSigils.add(1).pow(2), 0)
    game.cyanSigilPowerPerSecond = game.cyanSigils.pow(2).div(100).mul(game.cyanSigilUpgrade1Bought.add(1))
    if (game.unlocks >= 12) game.cyanSigilPowerPerSecond = game.cyanSigilPowerPerSecond.pow(new Decimal(1.15).pow(game.indigoSigilUpgrade2Bought.pow(0.5)))
    document.getElementById("cyanSigilPower").innerHTML = format(game.cyanSigilPower, 2)
    document.getElementById("cyanSigilPowerPerSecond").innerHTML = format(game.cyanSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 11) {
    game.blueSigilsToGet = game.gold.add(1).log10().div(8000).floor()
    document.getElementById("nextBlueSigil").innerHTML = format(new Decimal(10).pow(game.blueSigilsToGet.add(1).mul(8000)), 0)
    if (game.darkMagicUpgradesBought[10] == true) game.blueSigilsToGet = game.blueSigilsToGet.mul(3)
    game.blueSigilsToGet = game.blueSigilsToGet.mul(new Decimal(5).pow(game.dragonPets ** 0.5)).round()
    document.getElementById("blueSigils").innerHTML = format(game.blueSigils, 0)
    document.getElementById("blueSigilsToGet").innerHTML = format(game.blueSigilsToGet, 0)
    document.getElementsByClassName("resourceText")[8].innerHTML = format(game.blueSigils, 0)
    document.getElementById("blueSigilEffect").innerHTML = format(game.blueSigils.add(1).pow(3), 0)
    game.blueSigilPowerPerSecond = game.blueSigils.pow(2).div(100).mul(game.blueSigilUpgrade1Bought.add(1))
    if (game.unlocks >= 13) game.blueSigilPowerPerSecond = game.blueSigilPowerPerSecond.pow(new Decimal(1.3).pow(game.violetSigilUpgrade2Bought.pow(0.5)))
    document.getElementById("blueSigilPower").innerHTML = format(game.blueSigilPower, 2)
    document.getElementById("blueSigilPowerPerSecond").innerHTML = format(game.blueSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 12) {
    game.indigoSigilsToGet = game.gold.add(1).log10().div(17500).floor()
    document.getElementById("nextIndigoSigil").innerHTML = format(new Decimal(10).pow(game.indigoSigilsToGet.add(1).mul(17500)), 0)
    game.indigoSigilsToGet = game.indigoSigilsToGet.mul(new Decimal(5).pow(game.dragonPets ** 0.5)).round()
    document.getElementById("indigoSigils").innerHTML = format(game.indigoSigils, 0)
    document.getElementsByClassName("resourceText")[9].innerHTML = format(game.indigoSigils, 0)
    document.getElementById("indigoSigilEffect").innerHTML = format(game.indigoSigils.add(1).pow(4), 0)
    document.getElementById("indigoSigilsToGet").innerHTML = format(game.indigoSigilsToGet, 0)
    
    game.indigoSigilPowerPerSecond = game.indigoSigils.pow(2).div(100).mul(game.indigoSigilUpgrade1Bought.add(1))
    document.getElementById("indigoSigilPower").innerHTML = format(game.indigoSigilPower, 2)
    document.getElementById("indigoSigilPowerPerSecond").innerHTML = format(game.indigoSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 13) {
    game.violetSigilsToGet = game.gold.add(1).log10().div(100000).floor()
    document.getElementById("nextVioletSigil").innerHTML = format(new Decimal(10).pow(game.violetSigilsToGet.add(1).mul(100000)), 0)
    game.violetSigilsToGet = game.violetSigilsToGet.mul(new Decimal(5).pow(game.dragonPets ** 0.5)).round()
    document.getElementById("violetSigils").innerHTML = format(game.violetSigils, 0)
    document.getElementsByClassName("resourceText")[10].innerHTML = format(game.violetSigils, 0)
    document.getElementById("violetSigilEffect").innerHTML = format(game.violetSigils.add(1).pow(5), 0)
    document.getElementById("violetSigilsToGet").innerHTML = format(game.violetSigilsToGet, 0)
    game.violetSigilPowerPerSecond = game.violetSigils.pow(2).div(100).mul(game.violetSigilUpgrade1Bought.add(1))
    document.getElementById("violetSigilPower").innerHTML = format(game.violetSigilPower, 2)
    document.getElementById("violetSigilPowerPerSecond").innerHTML = format(game.violetSigilPowerPerSecond, 2)
  }
  if (game.unlocks >= 14) {
    game.pinkSigilsToGet = game.gold.add(1).log10().div(750000).floor()
    document.getElementById("nextPinkSigil").innerHTML = format(new Decimal(10).pow(game.pinkSigilsToGet.add(1).mul(750000)), 0)
    game.pinkSigilsToGet = game.pinkSigilsToGet.mul(new Decimal(5).pow(game.dragonPets ** 0.5)).round()
    document.getElementById("pinkSigils").innerHTML = format(game.pinkSigils, 0)
    document.getElementsByClassName("resourceText")[11].innerHTML = format(game.pinkSigils, 0)
    document.getElementById("pinkSigilEffect").innerHTML = format(game.pinkSigils.add(1).pow(6), 0)
    document.getElementById("pinkSigilsToGet").innerHTML = format(game.pinkSigilsToGet, 0)
    game.pinkSigilPowerPerSecond = game.pinkSigils.pow(2).div(100)
    document.getElementById("pinkSigilPower").innerHTML = format(game.pinkSigilPower, 2)
    document.getElementById("pinkSigilPowerPerSecond").innerHTML = format(game.pinkSigilPowerPerSecond, 2)
  }
}
updateSmall()
//setInterval(updateSmall, 30)

//Large update (occurs once per second)
function updateLarge() {
  //Adds to the user's gold
  game.gold = game.gold.add(game.goldPerSecond)
  //Adds to the user's fire
  if (game.unlocks >= 1) game.fire = game.fire.add(game.firePerSecond)
  //Auto maxes all if the upgrade is bought
  if (game.blueSigilUpgrade5Bought == 1 && game.fireAutoMaxAll) fireMaxAll()
  //Handles the platinum convert button cooldown
  if (game.platinumConvertCooldown > 0) {
    game.platinumConvertCooldown--
    document.getElementById("platinumConvertCooldown").innerHTML = game.platinumConvertCooldown
    if (game.platinumConvertCooldown == 0) document.getElementById("platinumConvertButton").disabled = false
  }
  if (game.platinumUpgradesBought[4] == 1) game.platinum = game.platinum.add(game.platinumToGet)
   //Handles the uranium convert button cooldown
  if (game.uraniumConvertCooldown > 0) {
    game.uraniumConvertCooldown--
    document.getElementById("uraniumConvertCooldown").innerHTML = game.uraniumConvertCooldown
    if (game.uraniumConvertCooldown == 0) document.getElementById("uraniumConvertButton").disabled = false
  }
  if (game.unlocks >= 7) game.uranium = game.uranium.add(1)
  //Handles the dragon time spending cooldown
  if (game.dragonTimeCooldown > 0) {
    game.dragonTimeCooldown--
    document.getElementById("dragonTimeCooldown").innerHTML = game.dragonTimeCooldown
    if (game.dragonTimeCooldown == 0) document.getElementById("dragonSpendTimeButton").disabled = false
  }
  if (game.dragonTimeCooldown == 0 && game.cyanSigilUpgrade4Bought.eq(1) && !game.challengesActive) dragonSpendTime()
  if (game.uraniumUpgradesBought[5]) game.magic = game.magic.add(game.magicToGet)
  if (game.unlocks >= 10) game.cyanSigilPower = game.cyanSigilPower.add(game.cyanSigilPowerPerSecond)
  if (game.unlocks >= 11) game.blueSigilPower = game.blueSigilPower.add(game.blueSigilPowerPerSecond)
  if (game.unlocks >= 12) game.indigoSigilPower = game.indigoSigilPower.add(game.indigoSigilPowerPerSecond)
  if (game.unlocks >= 13) game.violetSigilPower = game.violetSigilPower.add(game.violetSigilPowerPerSecond)
  if (game.unlocks >= 14) game.pinkSigilPower = game.pinkSigilPower.add(game.pinkSigilPowerPerSecond)

  if (game.pinkSigilUpgradesBought[0]) game.uranium = game.uranium.add(game.uraniumToGet)
  
  if (game.violetSigilUpgrade4Bought.eq(1) && game.minerAutoBuyMax) buyMaxMiners()
  updateSmall()
}
setInterval(updateLarge, 1000)

function changeTab(x) {
  switch(x) {
    case 1:
      document.getElementsByClassName("box")[15].style.display = "none"
      document.getElementsByClassName("box")[2].style.display = "block"
      document.getElementsByClassName("box")[1].style.display = "none"
      break
    case 2:
      document.getElementsByClassName("box")[15].style.display = "none"
      document.getElementsByClassName("box")[2].style.display = "none"
      document.getElementsByClassName("box")[1].style.display = "block"
      break
    case 3:
      document.getElementsByClassName("box")[15].style.display = "block"
      document.getElementsByClassName("box")[2].style.display = "none"
      document.getElementsByClassName("box")[1].style.display = "none"
      break
    default:
      document.getElementsByClassName("box")[15].style.display = "none"
      document.getElementsByClassName("box")[2].style.display = "block"
      document.getElementsByClassName("box")[1].style.display = "none"
      break
  }
}

function toggleConfirmations(x) {
  if (x==1) {
    if (game.confirmations[0]) {
      game.confirmations[0] = false
      document.getElementsByClassName("confirmationToggle")[0].style.border = "2px solid red"
    }
    else {
      game.confirmations[0] = true
      document.getElementsByClassName("confirmationToggle")[0].style.border = "2px solid #0f0"
    }
  }
  else if (x==2) {
    if (game.confirmations[1]) {
      game.confirmations[1] = false
      document.getElementsByClassName("confirmationToggle")[1].style.border = "2px solid red"
    }
    else {
      game.confirmations[1] = true
      document.getElementsByClassName("confirmationToggle")[1].style.border = "2px solid #0f0"
    }
  }
}

function changeBackgroundPattern() {
  if (game.backgroundPatternOn) {
    game.backgroundPatternOn = false
    document.getElementById("backgroundPatternButton").innerHTML = "Background Pattern: Off"
    document.body.style.backgroundImage = "none"
  }
  else {
    game.backgroundPatternOn = true
    document.getElementById("backgroundPatternButton").innerHTML = "Background Pattern: On"
    document.body.style.backgroundImage = "url('img/back.png')"
  }
}

lastTimePlayedUp = Date.now()
function timePlayedUp() {
  timePlayedDiff = (Date.now() - lastTimePlayedUp) / 1000
  game.timePlayed += timePlayedDiff
  timePlayedFloor = Math.floor(game.timePlayed)
  timePlayedHours = Math.floor(timePlayedFloor / 3600)
  timePlayedMinutes = Math.floor(timePlayedFloor / 60) % 60
  timePlayedSeconds = timePlayedFloor % 60
  timeString = (timePlayedHours + ":" + ((timePlayedMinutes < 10 ? '0' : '') + timePlayedMinutes) + ":" + ((timePlayedSeconds < 10 ? '0' : '') + timePlayedSeconds))
  document.getElementById("timePlayed").innerHTML = timeString
  lastTimePlayedUp = Date.now()
}

setInterval(timePlayedUp, 100)