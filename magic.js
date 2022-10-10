//Unlocks magic
function unlockMagic() {
  if (game.gold.gte(1e15)) {
    game.gold = game.gold.sub(1e15)
    document.getElementById("unlockMagicButton").style.display = "none"
    document.getElementById("confirmationToggleBox").style.display = "block"
    document.getElementsByClassName("box")[6].style.display = "block"
    document.getElementsByClassName("box")[7].style.display = "block"
    document.getElementsByClassName("resourceRow")[4].style.display = "block"
    game.unlocks++
  }
}

//Confirmation popups for magic resets
function magicCheck() {
  if (game.magicToGet.eq(0)) {
    if (confirm("Woah, hold on! You won't gain any magic! Are you sure you want to perform a magic reset?")) magicReset()
  }
  else if (game.confirmations[0]) {
    if (confirm("Are you sure you want to perform a magic reset?")) magicReset()
  }
  else {magicReset()}
}

function magicReset() {
  //Sets most pre-magic veriables back to their original states
  game.gold = new Decimal(0)
  if (game.violetSigilUpgrade4Bought.eq(1)) {game.miners = new Decimal(1)}
  else {game.miners = new Decimal(0)}
  game.minerCost = new Decimal(20)
  document.getElementById("minerCost").innerHTML = "20"
  
  game.fire = new Decimal(0)
  game.fireUpgrade1Bought = new Decimal(0)
  game.fireUpgrade1Cost = new Decimal(50)
  game.fireUpgrade2Bought = new Decimal(0)
  game.fireUpgrade2Cost = new Decimal(100)
  game.fireUpgrade3Bought = new Decimal(0)
  game.fireUpgrade3Cost = new Decimal(100)
  game.fireUpgrade4Bought = new Decimal(0)
  game.fireUpgrade4Cost = new Decimal(500)
  game.fireUpgrade5Bought = new Decimal(0)
  game.fireUpgrade5Cost = new Decimal(500)
  game.fireUpgrade6Bought = new Decimal(0)
  game.fireUpgrade6Cost = new Decimal(2e7)
  document.getElementById("fireUpgrade1Cost").innerHTML = format(game.fireUpgrade1Cost, 0)
  document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6)), 2)
  document.getElementById("fireUpgrade2Cost").innerHTML = format(game.fireUpgrade2Cost, 0)
  document.getElementById("fireUpgrade3Cost").innerHTML = format(game.fireUpgrade3Cost, 0)
  document.getElementById("fireUpgrade4Cost").innerHTML = format(game.fireUpgrade4Cost, 0)
  document.getElementById("fireUpgrade5Cost").innerHTML = format(game.fireUpgrade5Cost, 0)
  document.getElementById("fireUpgrade6Cost").innerHTML = format(game.fireUpgrade6Cost, 0)
  document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)

  game.platinum = new Decimal(0)
  if (game.magicUpgradesBought[10] != true && !game.pinkSigilUpgradesBought[3]) {
    for (i=0;i<9;i++) {
      if (i!=2 && i!=6) {
        game.platinumUpgradesBought[i] = 0
        document.getElementsByClassName("platinumUpgradesBought")[i].innerHTML = "0"
        document.getElementsByClassName("platinumUpgrade")[i].disabled = false
      }
    }
    document.getElementsByClassName("platinumUpgradesBought")[2].innerHTML = "1"
  }

  game.magic = game.magic.add(game.magicToGet)
}

//Magic upgrades
function buyMagicUpgrade(x) {
  //Checks that the magic upgrade is not bought and that the player's magic is greater/equal to the corresponding upgrade cost
  if (game.magicUpgradesBought[x-1] != true && game.magic.gte(magicUpgradeCosts[x-1])) {
    game.magic = game.magic.sub(magicUpgradeCosts[x-1])
    game.magicUpgradesBought[x-1] = true
    document.getElementsByClassName("magicUpgrade")[x-1].disabled = true
    if (x==2) {
      document.getElementById("fireMaxAllButton").style.display = "block"
      for (i=0;i<6;i++) document.getElementsByClassName("fireBuyMaxButton")[i].style.display = "inline-block"
    }
    if (x==5) document.getElementById("platinumMaxAllButton").style.display = "block"
    if (x==8) document.getElementsByClassName("platinumUpgrade")[6].style.display = "block"
    if (x==12) {
      document.getElementsByClassName("box")[8].style.display = "block"
      document.getElementsByClassName("resourceRow")[5].style.display = "block"
      document.getElementById("moreMagicUpgradesButton").style.display = "block"
      game.unlocks++
    }
    if (x==14) document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7)), 2)
    if (x==19) document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(6), 2)
    if (x==20) {
      document.getElementsByClassName("magicUpgrade")[19].disabled = true
      document.getElementsByClassName("box")[9].style.display = "block"
      document.getElementsByClassName("resourceRow")[6].style.display = "inline-block"
      document.getElementById("morePUupgradesButton").style.display = "block"
      game.unlocks++
    }
  }
}

function magicUpgradeBuyMax() {for (i=1;i<21;i++) buyMagicUpgrade(i)}

//Unlocks more magic upgrades lol
function unlockMoreMagicUpgrades() {
  if (game.magifolds.gte(150000) && game.magic.gte(2e8)) {
    game.magic = game.magic.sub(2e8)
    document.getElementById("moreMagicUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[7].style.height = "560px"
    document.getElementsByClassName("box")[7].style.top = (window.innerHeight / 2 + renderVars.posY + renderVars.diffY - 133) + "px"
    for (i=12;i<20;i++) {document.getElementsByClassName("magicUpgrade")[i].style.display = "block"}
    game.unlocks++
  }
}

function unlockDarkMagicUpgrades() {
  if (game.gold.gte("e1000")) {
    game.gold = game.gold.sub("e1000")
    document.getElementById("unlockDarkMagicUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[10].style.display = "block"
    game.unlocks++
  }
}

//Dark magic upgrades
function buyDarkMagicUpgrade(x) {
  //Checks that the magic upgrade is not bought and that the player's magic is greater/equal to the corresponding upgrade cost
  if (game.darkMagicUpgradesBought[x-1] != true && game.magic.gte(darkMagicUpgradeCosts[x-1])) {
    game.magic = game.magic.sub(darkMagicUpgradeCosts[x-1])
    game.darkMagicUpgradesBought[x-1] = true
    document.getElementsByClassName("darkMagicUpgrade")[x-1].disabled = true
    if (x==4) document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(8), 2)
    if (x==8) {
      document.getElementById("horrorTabButton").style.display = "block"
      document.getElementsByClassName("box")[11].style.display = "block"
      document.getElementsByClassName("resourceRow")[7].style.display = "block"
      document.getElementsByClassName("confirmationToggle")[1].style.display = "inline-block"
      game.unlocks++
    }
    if (x==9) document.getElementById("magicUpgradeBuyMaxButton").style.display = "block"
  }
}

function darkMagicUpgradeBuyMax() {for (i=1;i<13;i++) buyDarkMagicUpgrade(i)}