//Unlocks alchemy
function unlockAlchemy() {
  if (game.gold.gte(2e7)) {
    game.gold = game.gold.sub(2e7)
    document.getElementById("unlockAlchemyButton").style.display = "none"
    document.getElementById("unlockMagicButton").style.display = "block"
    document.getElementsByClassName("box")[5].style.display = "block"
    document.getElementsByClassName("resourceRow")[3].style.display = "block"
    addUnlock() //sets unlock to 3
  }
}

//Converts gold to platinum
function platinumConvert() {
  if (game.platinumConvertCooldown == 0 && game.platinumToGet > 0) {
    game.platinum = game.platinum.add(game.platinumToGet)
    game.gold = new Decimal(0)
    game.platinumConvertCooldown = 3
    document.getElementById("platinumConvertButton").disabled = true
    document.getElementById("platinumConvertCooldown").innerHTML = game.platinumConvertCooldown
  }
}

function buyPlatinumUpgrade(x) {
  //For each upgrade (if affordable): subtracts platinum based on cost, adds 1 to the upgrade amount bought, disables button if maximum amount is reached
  if (x==1 && game.platinumUpgradesBought[0] < 20 && game.platinum.gte(200)) {
    game.platinum = game.platinum.sub(200)
    game.platinumUpgradesBought[0]++
    document.getElementsByClassName("platinumUpgradesBought")[0].innerHTML = game.platinumUpgradesBought[0]
    if (game.platinumUpgradesBought[0] == 20) document.getElementsByClassName("platinumUpgrade")[0].disabled = true
  }
  else if (x==2 && game.platinumUpgradesBought[1] < 20 && game.platinum.gte(500)) {
    game.platinum = game.platinum.sub(500)
    game.platinumUpgradesBought[1]++
    document.getElementsByClassName("platinumUpgradesBought")[1].innerHTML = game.platinumUpgradesBought[1]
    if (game.platinumUpgradesBought[1] == 20) document.getElementsByClassName("platinumUpgrade")[1].disabled = true
  }
  else if (x==3 && game.platinumUpgradesBought[2] < 1 && game.platinum.gte(750)) {
    game.platinum = game.platinum.sub(750)
    game.platinumUpgradesBought[2]++
    document.getElementsByClassName("platinumUpgradesBought")[2].innerHTML = game.platinumUpgradesBought[2]
    document.getElementsByClassName("platinumUpgrade")[2].disabled = true
    document.getElementsByClassName("fireUpgrade")[5].style.display = "inline-block"
  }
  else if (x==4 && game.platinumUpgradesBought[3] < 5 && game.platinum.gte(1500)) {
    game.platinum = game.platinum.sub(1500)
    game.platinumUpgradesBought[3]++
    document.getElementsByClassName("platinumUpgradesBought")[3].innerHTML = game.platinumUpgradesBought[3]
    if (game.platinumUpgradesBought[3] == 5) document.getElementsByClassName("platinumUpgrade")[3].disabled = true
    game.minerCost = new Decimal(1.1).sub(game.platinumUpgradesBought[3] * 0.005).pow(game.miners).mul(20).floor()
    document.getElementById("minerCost").innerHTML = format(game.minerCost, 0)
  }
  else if (x==5 && game.platinumUpgradesBought[4] < 1 && game.platinum.gte(2000)) {
    game.platinum = game.platinum.sub(2000)
    game.platinumUpgradesBought[4]++
    document.getElementsByClassName("platinumUpgradesBought")[4].innerHTML = game.platinumUpgradesBought[4]
    document.getElementsByClassName("platinumUpgrade")[4].disabled = true
  }
  else if (x==6 && game.platinumUpgradesBought[5] < 4 && game.platinum.gte(15000)) {
    game.platinum = game.platinum.sub(15000)
    game.platinumUpgradesBought[5]++
    document.getElementsByClassName("platinumUpgradesBought")[5].innerHTML = game.platinumUpgradesBought[5]
    if (game.platinumUpgradesBought[5] == 4) document.getElementsByClassName("platinumUpgrade")[5].disabled = true
  }
  else if (x==7 && game.platinumUpgradesBought[6] < 20 && game.platinum.gte(1e6)) {
    game.platinum = game.platinum.sub(1e6)
    game.platinumUpgradesBought[6]++
    document.getElementsByClassName("platinumUpgradesBought")[6].innerHTML = game.platinumUpgradesBought[6]
    if ((!game.magicUpgradesBought[10] && game.platinumUpgradesBought[6] == 10) || game.platinumUpgradesBought[6] == 20) document.getElementsByClassName("platinumUpgrade")[6].disabled = true
    document.getElementById("platinumUpgrade7Effect").innerHTML = format(new Decimal(1.5).pow(game.platinumUpgradesBought[6]), 2)
  }
  else if (x==8 && game.platinumUpgradesBought[7] < 5 && game.platinum.gte(1e22)) {
    game.platinum = game.platinum.sub(1e22)
    game.platinumUpgradesBought[7]++
    document.getElementsByClassName("platinumUpgradesBought")[7].innerHTML = game.platinumUpgradesBought[7]
    if (game.platinumUpgradesBought[7] == 5) document.getElementsByClassName("platinumUpgrade")[7].disabled = true
  }
  else if (x==9 && game.platinumUpgradesBought[8] < 5 && game.platinum.gte(1e30)) {
    game.platinum = game.platinum.sub(1e30)
    game.platinumUpgradesBought[8]++
    document.getElementsByClassName("platinumUpgradesBought")[8].innerHTML = game.platinumUpgradesBought[8]
    if (game.platinumUpgradesBought[8] == 5) document.getElementsByClassName("platinumUpgrade")[8].disabled = true
  }
}

function platinumMaxAll() {
  //For each upgrade in order (if affordable): determines the maximum upgrades buyable, subtracts platinum based on cost, adds to the upgrade amount bought (up to the maximum), disables button if maximum amount is reached
  PU1AmountCanBuy = game.platinum.div(200).floor()
  PU1AmountToBuy = Decimal.min(PU1AmountCanBuy, 20 - game.platinumUpgradesBought[0]).toNumber()
  game.platinum = game.platinum.sub(PU1AmountToBuy * 200)
  game.platinumUpgradesBought[0] += PU1AmountToBuy
  document.getElementsByClassName("platinumUpgradesBought")[0].innerHTML = game.platinumUpgradesBought[0]
  if (game.platinumUpgradesBought[0] == 20) document.getElementsByClassName("platinumUpgrade")[0].disabled = true

  PU2AmountCanBuy = game.platinum.div(500).floor()
  PU2AmountToBuy = Decimal.min(PU2AmountCanBuy, 20 - game.platinumUpgradesBought[1]).toNumber()
  game.platinum = game.platinum.sub(PU2AmountToBuy * 500)
  game.platinumUpgradesBought[1] += PU2AmountToBuy
  document.getElementsByClassName("platinumUpgradesBought")[1].innerHTML = game.platinumUpgradesBought[1]
  if (game.platinumUpgradesBought[1] == 20) document.getElementsByClassName("platinumUpgrade")[1].disabled = true

  if (game.platinumUpgradesBought[2] < 1 && game.platinum.gte(750)) {
    game.platinum = game.platinum.sub(750)
    game.platinumUpgradesBought[2]++
    document.getElementsByClassName("platinumUpgradesBought")[2].innerHTML = game.platinumUpgradesBought[2]
    document.getElementsByClassName("platinumUpgrade")[2].disabled = true
    document.getElementsByClassName("fireUpgrade")[5].style.display = "inline-block"
  }

  PU4AmountCanBuy = game.platinum.div(1500).floor()
  PU4AmountToBuy = Decimal.min(PU4AmountCanBuy, 5 - game.platinumUpgradesBought[3]).toNumber()
  game.platinum = game.platinum.sub(PU4AmountToBuy * 1500)
  game.platinumUpgradesBought[3] += PU4AmountToBuy
  document.getElementsByClassName("platinumUpgradesBought")[3].innerHTML = game.platinumUpgradesBought[3]
  if (game.platinumUpgradesBought[3] == 5) document.getElementsByClassName("platinumUpgrade")[3].disabled = true
  game.minerCost = new Decimal(1.1).sub(game.platinumUpgradesBought[3] * 0.005).pow(game.miners).mul(20).floor()
  document.getElementById("minerCost").innerHTML = format(game.minerCost, 0)

  if (game.platinumUpgradesBought[4] < 1 && game.platinum.gte(2000)) {
    game.platinum = game.platinum.sub(2000)
    game.platinumUpgradesBought[4]++
    document.getElementsByClassName("platinumUpgradesBought")[4].innerHTML = game.platinumUpgradesBought[4]
    document.getElementsByClassName("platinumUpgrade")[4].disabled = true
  }

  PU6AmountCanBuy = game.platinum.div(15000).floor()
  PU6AmountToBuy = Decimal.min(PU6AmountCanBuy, 4 - game.platinumUpgradesBought[5]).toNumber()
  game.platinum = game.platinum.sub(PU6AmountToBuy * 15000)
  game.platinumUpgradesBought[5] += PU6AmountToBuy
  document.getElementsByClassName("platinumUpgradesBought")[5].innerHTML = game.platinumUpgradesBought[5]
  if (game.platinumUpgradesBought[5] == 4) document.getElementsByClassName("platinumUpgrade")[5].disabled = true

  if (game.magicUpgradesBought[7] || game.unlocks >= 10) {
    PU7AmountCanBuy = game.platinum.div(1e6).floor()
    if (game.magicUpgradesBought[10]) {PU7AmountToBuy = Decimal.min(PU7AmountCanBuy, 20 - game.platinumUpgradesBought[6]).toNumber()}
    else {PU7AmountToBuy = Decimal.min(PU7AmountCanBuy, 10 - game.platinumUpgradesBought[6]).toNumber()}
    game.platinum = game.platinum.sub(PU7AmountToBuy * 1e6)
    game.platinumUpgradesBought[6] += PU7AmountToBuy
    document.getElementsByClassName("platinumUpgradesBought")[6].innerHTML = game.platinumUpgradesBought[6]
    if ((!game.magicUpgradesBought[10] && game.platinumUpgradesBought[6] == 10) || game.platinumUpgradesBought[6] == 20) document.getElementsByClassName("platinumUpgrade")[6].disabled = true
    document.getElementById("platinumUpgrade7Effect").innerHTML = format(new Decimal(1.5).pow(game.platinumUpgradesBought[6]), 2)
  }

  if (game.unlocks >= 8 || game.unlocks >= 10) {
    PU8AmountCanBuy = game.platinum.div(1e22).floor()
    PU8AmountToBuy = Decimal.min(PU8AmountCanBuy, 5 - game.platinumUpgradesBought[7]).toNumber()
    game.platinum = game.platinum.sub(PU8AmountToBuy * 1e22)
    game.platinumUpgradesBought[7] += PU8AmountToBuy
    document.getElementsByClassName("platinumUpgradesBought")[7].innerHTML = game.platinumUpgradesBought[7]
    if (game.platinumUpgradesBought[7] == 5) document.getElementsByClassName("platinumUpgrade")[7].disabled = true

    PU9AmountCanBuy = game.platinum.div(1e30).floor()
    PU9AmountToBuy = Decimal.min(PU9AmountCanBuy, 5 - game.platinumUpgradesBought[8]).toNumber()
    game.platinum = game.platinum.sub(PU9AmountToBuy * 1e30)
    game.platinumUpgradesBought[8] += PU9AmountToBuy
    document.getElementsByClassName("platinumUpgradesBought")[8].innerHTML = game.platinumUpgradesBought[8]
    if (game.platinumUpgradesBought[8] == 5) document.getElementsByClassName("platinumUpgrade")[8].disabled = true
  }
}


//Converts platinum to uranium
function uraniumConvert() {
  if (game.uraniumConvertCooldown == 0 && game.uraniumToGet > 0) {
    game.uranium = game.uranium.add(game.uraniumToGet)
    game.platinum = new Decimal(0)
    game.uraniumConvertCooldown = 3
    document.getElementById("uraniumConvertButton").disabled = true
    document.getElementById("uraniumConvertCooldown").innerHTML = game.uraniumConvertCooldown
  }
}

function buyUraniumUpgrade(x) {
  //For each upgrade (if affordable): subtracts uranium based on cost, adds 1 to the upgrade amount bought, disables button if maximum amount is reached
  if (x==1 && game.uraniumUpgradesBought[0] < 100 && game.uranium.gte(100)) {
    game.uranium = game.uranium.sub(100)
    game.uraniumUpgradesBought[0]++
    document.getElementsByClassName("uraniumUpgradesBought")[0].innerHTML = game.uraniumUpgradesBought[0]
    if (game.uraniumUpgradesBought[0] == 100) document.getElementsByClassName("uraniumUpgrade")[0].disabled = true
  }
  else if (x==2 && game.uraniumUpgradesBought[1] < 20 && game.uranium.gte(300)) {
    game.uranium = game.uranium.sub(300)
    game.uraniumUpgradesBought[1]++
    document.getElementsByClassName("uraniumUpgradesBought")[1].innerHTML = game.uraniumUpgradesBought[1]
    if (game.uraniumUpgradesBought[1] == 20) document.getElementsByClassName("uraniumUpgrade")[1].disabled = true
  }
  else if (x==3 && game.uraniumUpgradesBought[2] < 5 && game.uranium.gte(1000)) {
    game.uranium = game.uranium.sub(1000)
    game.uraniumUpgradesBought[2]++
    document.getElementsByClassName("uraniumUpgradesBought")[2].innerHTML = game.uraniumUpgradesBought[2]
    if (game.uraniumUpgradesBought[2] == 5) document.getElementsByClassName("uraniumUpgrade")[2].disabled = true
  }
  else if (x==4 && game.uraniumUpgradesBought[3] < 1 && game.uranium.gte(10000)) {
    game.uranium = game.uranium.sub(10000)
    game.uraniumUpgradesBought[3]++
    document.getElementsByClassName("uraniumUpgradesBought")[3].innerHTML = game.uraniumUpgradesBought[3]
    document.getElementsByClassName("uraniumUpgrade")[3].disabled = true
  }
  else if (x==5 && game.uraniumUpgradesBought[4] < 10 && game.uranium.gte(50000)) {
    game.uranium = game.uranium.sub(50000)
    game.uraniumUpgradesBought[4]++
    document.getElementsByClassName("uraniumUpgradesBought")[4].innerHTML = game.uraniumUpgradesBought[4]
    if (game.uraniumUpgradesBought[4] == 10) document.getElementsByClassName("uraniumUpgrade")[4].disabled = true
  }
}

function uraniumMaxAll() {
  //For each upgrade in order (if affordable): determines the maximum upgrades buyable, subtracts uranium based on cost, adds to the upgrade amount bought (up to the maximum), disables button if maximum amount is reached
  UU1AmountCanBuy = game.uranium.div(100).floor()
  UU1AmountToBuy = Decimal.min(UU1AmountCanBuy, 100 - game.uraniumUpgradesBought[0]).toNumber()
  game.uranium = game.uranium.sub(UU1AmountToBuy * 100)
  game.uraniumUpgradesBought[0] += UU1AmountToBuy
  document.getElementsByClassName("uraniumUpgradesBought")[0].innerHTML = game.uraniumUpgradesBought[0]
  if (game.uraniumUpgradesBought[0] == 100) document.getElementsByClassName("uraniumUpgrade")[0].disabled = true

  UU2AmountCanBuy = game.uranium.div(300).floor()
  UU2AmountToBuy = Decimal.min(UU2AmountCanBuy, 20 - game.uraniumUpgradesBought[1]).toNumber()
  game.uranium = game.uranium.sub(UU2AmountToBuy * 300)
  game.uraniumUpgradesBought[1] += UU2AmountToBuy
  document.getElementsByClassName("uraniumUpgradesBought")[1].innerHTML = game.uraniumUpgradesBought[1]
  if (game.uraniumUpgradesBought[1] == 20) document.getElementsByClassName("uraniumUpgrade")[1].disabled = true

  UU3AmountCanBuy = game.uranium.div(1000).floor()
  UU3AmountToBuy = Decimal.min(UU3AmountCanBuy, 5 - game.uraniumUpgradesBought[2]).toNumber()
  game.uranium = game.uranium.sub(UU3AmountToBuy * 1000)
  game.uraniumUpgradesBought[2] += UU3AmountToBuy
  document.getElementsByClassName("uraniumUpgradesBought")[2].innerHTML = game.uraniumUpgradesBought[2]
  if (game.uraniumUpgradesBought[2] == 5) document.getElementsByClassName("uraniumUpgrade")[2].disabled = true

  if (game.uraniumUpgradesBought[3] < 1 && game.uranium.gte(10000)) {
    game.uranium = game.uranium.sub(10000)
    game.uraniumUpgradesBought[3]++
    document.getElementsByClassName("uraniumUpgradesBought")[3].innerHTML = game.uraniumUpgradesBought[3]
    document.getElementsByClassName("uraniumUpgrade")[3].disabled = true
  }

  UU5AmountCanBuy = game.uranium.div(50000).floor()
  UU5AmountToBuy = Decimal.min(UU5AmountCanBuy, 10 - game.uraniumUpgradesBought[4]).toNumber()
  game.uranium = game.uranium.sub(UU5AmountToBuy * 50000)
  game.uraniumUpgradesBought[4] += UU5AmountToBuy
  document.getElementsByClassName("uraniumUpgradesBought")[4].innerHTML = game.uraniumUpgradesBought[4]
  if (game.uraniumUpgradesBought[4] == 10) document.getElementsByClassName("uraniumUpgrade")[4].disabled = true
}

//Unlocks more platinum and uranium upgrades
function morePUupgrades() {
  if (game.gold.gte("e420")) {
    game.gold = game.gold.sub("e420")
    document.getElementById("morePUupgradesButton").style.display = "none"
    document.getElementById("unlockDarkMagicUpgradesButton").style.display = "block"
    document.getElementsByClassName("platinumUpgrade")[7].style.display = "inline-block"
    document.getElementsByClassName("platinumUpgrade")[8].style.display = "inline-block"
    document.getElementsByClassName("uraniumUpgrade")[3].style.display = "inline-block"
    document.getElementsByClassName("uraniumUpgrade")[4].style.display = "inline-block"
    addUnlock() //sets unlock to 8
  }
}