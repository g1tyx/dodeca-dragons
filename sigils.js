//Confirmation popups for magic resets
function sigilCheck(x) {
  if (x==1 && game.cyanSigilsToGet.eq(0)) {
    if (confirm("Woah, hold on! You won't gain any sigils! Are you sure you want to perform a sigil reset?")) sigilReset(x)
  }
  else if (x==2 && game.blueSigilsToGet.eq(0)) {
    if (confirm("Woah, hold on! You won't gain any sigils! Are you sure you want to perform a sigil reset?")) sigilReset(x)
  }
  else if (x==3 && game.indigoSigilsToGet.eq(0)) {
    if (confirm("Woah, hold on! You won't gain any sigils! Are you sure you want to perform a sigil reset?")) sigilReset(x)
  }
  else if (x==4 && game.violetSigilsToGet.eq(0)) {
    if (confirm("Woah, hold on! You won't gain any sigils! Are you sure you want to perform a sigil reset?")) sigilReset(x)
  }
  else if (game.confirmations[1]) {
    if (confirm("Are you sure you want to perform a sigil reset?")) sigilReset(x)
  }
  else {sigilReset(x)}
}

function sigilReset(x) {
  switch(x) {
    case 1: game.cyanSigils = game.cyanSigils.add(game.cyanSigilsToGet); break
    case 2: game.blueSigils = game.blueSigils.add(game.blueSigilsToGet); break
    case 3: game.indigoSigils = game.indigoSigils.add(game.indigoSigilsToGet); break
    case 4: game.violetSigils = game.violetSigils.add(game.violetSigilsToGet); break
  }
  magicReset()
  for (i=0;i<9;i++) {
    if (i!=2) {
      game.platinumUpgradesBought[i] = 0
      document.getElementsByClassName("platinumUpgradesBought")[i].innerHTML = "0"
      document.getElementsByClassName("platinumUpgrade")[i].disabled = false
    }
  }
  document.getElementsByClassName("platinumUpgradesBought")[2].innerHTML = "1"
  for (i=0;i<6;i++) {
    game.uraniumUpgradesBought[i] = 0
    document.getElementsByClassName("uraniumUpgradesBought")[i].innerHTML = "0"
    document.getElementsByClassName("uraniumUpgrade")[i].disabled = false
  }
  
  game.magic = new Decimal(0)
  game.magicScore1 = new Decimal(0)
  game.magicScore2 = new Decimal(0)
  game.magicScore3 = new Decimal(0)
  game.magicScore4 = new Decimal(0)
  document.getElementById("magicScore1").innerHTML = format(game.magicScore1, 0)
  document.getElementById("magicScore2").innerHTML = format(game.magicScore2, 0)
  document.getElementById("magicScore3").innerHTML = format(game.magicScore3, 0)
  document.getElementById("magicScore4").innerHTML = format(game.magicScore4, 0)
  document.getElementById("magicMult1").innerHTML = format(game.magicScore1.add(1), 0)
  document.getElementById("magicMult2").innerHTML = format(game.magicScore2.add(1), 0)
  document.getElementById("magicMult3").innerHTML = format(game.magicScore3.add(1), 0)
  document.getElementById("magicMult4").innerHTML = format(game.magicScore4.add(1), 0)
  game.magifolds = new Decimal(1)
  document.getElementById("magifolds").innerHTML = format(game.magifolds, 0)
  document.getElementById("magifoldEffect").innerHTML = "1.00"
  document.getElementsByClassName("resourceText")[5].innerHTML = format(game.magifolds, 0)
  for (i=0;i<19;i++) {
    if (i!=1 && i!=4 && i!=7 && i!=11) {
      game.magicUpgradesBought[i] = false
      document.getElementsByClassName("magicUpgrade")[i].disabled = false
    }
  }
  game.uranium = new Decimal(0)
  for (i=0;i<7;i++) {
    game.darkMagicUpgradesBought[i] = false
    document.getElementsByClassName("darkMagicUpgrade")[i].disabled = false
  }
  
  game.dragonTimeSpent = new Decimal(0)
  document.getElementById("dragonTimeSpent").innerHTML = format(game.dragonTimeSpent, 0)
  game.dragonTimeEffect = new Decimal(1.2).pow(game.dragonTimeSpent.pow(0.3))
  document.getElementById("dragonTimeEffectCap").innerHTML = ""
  document.getElementById("dragonTimeEffect").innerHTML = format(game.dragonTimeEffect, 3)

  game.dragonFood = new Decimal(0)
  game.dragonFeedCost = new Decimal(10).pow(new Decimal(2).pow(game.dragonFood).mul(8).round())
  document.getElementById("dragonFeedCost").innerHTML = format(game.dragonFeedCost, 0)
  document.getElementById("dragonFood").innerHTML = format(game.dragonFood, 0)
  document.getElementById("dragonFoodEffect").innerHTML = format(new Decimal(1.3).pow(game.dragonFood), 3)

  updateSmall()
}

function buyCyanSigilUpgrade(x) {
  //For each upgrade (if affordable): subtracts cyan sigil power based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.cyanSigilPower.gte(game.cyanSigilUpgrade1Cost)) {
    game.cyanSigilPower = game.cyanSigilPower.sub(game.cyanSigilUpgrade1Cost)
    game.cyanSigilUpgrade1Bought = game.cyanSigilUpgrade1Bought.add(1)
    game.cyanSigilUpgrade1Cost = new Decimal(1.5).pow(game.cyanSigilUpgrade1Bought).floor()
    document.getElementById("cyanSigilUpgrade1Cost").innerHTML = format(game.cyanSigilUpgrade1Cost, 0)
    document.getElementById("cyanSigilUpgrade1Effect").innerHTML = format(game.cyanSigilUpgrade1Bought.add(1), 2)
  }
  else if (x==2 && game.cyanSigilPower.gte(game.cyanSigilUpgrade2Cost)) {
    game.cyanSigilPower = game.cyanSigilPower.sub(game.cyanSigilUpgrade2Cost)
    game.cyanSigilUpgrade2Bought = game.cyanSigilUpgrade2Bought.add(1)
    game.cyanSigilUpgrade2Cost = new Decimal(1.5).pow(game.cyanSigilUpgrade2Bought).mul(20).floor()
    document.getElementById("cyanSigilUpgrade2Cost").innerHTML = format(game.cyanSigilUpgrade2Cost, 0)
    document.getElementById("cyanSigilUpgrade2Effect").innerHTML = format(game.cyanSigilUpgrade2Bought.add(1).pow(1.5), 2)
  }
  else if (x==3 && game.cyanSigilPower.gte(game.cyanSigilUpgrade3Cost)) {
    game.cyanSigilPower = game.cyanSigilPower.sub(game.cyanSigilUpgrade3Cost)
    game.cyanSigilUpgrade3Bought = game.cyanSigilUpgrade3Bought.add(1)
    game.cyanSigilUpgrade3Cost = new Decimal(2).pow(game.cyanSigilUpgrade3Bought).mul(500).round()
    document.getElementById("cyanSigilUpgrade3Cost").innerHTML = format(game.cyanSigilUpgrade3Cost, 0)
    document.getElementById("cyanSigilUpgrade3Effect").innerHTML = format(new Decimal(1.2).pow(game.cyanSigilUpgrade3Bought.pow(0.4)), 2)
  }
  else if (x==4 && game.cyanSigilPower.gte(2500)) {
    game.cyanSigilPower = game.cyanSigilPower.sub(2500)
    game.cyanSigilUpgrade4Bought = new Decimal(1)
    document.getElementsByClassName("cyanSigilUpgrade")[3].disabled = true
  }
  else if (x==5 && game.cyanSigilPower.gte(10000)) {
    game.cyanSigilPower = game.cyanSigilPower.sub(10000)
    game.cyanSigilUpgrade5Bought = new Decimal(1)
    document.getElementsByClassName("cyanSigilUpgrade")[4].disabled = true
    document.getElementById("uraniumMaxAllButton").style.display = "block"
  }
  else if (x==6 && game.cyanSigilPower.gte(33333)) {
    game.cyanSigilPower = game.cyanSigilPower.sub(33333)
    game.cyanSigilUpgrade6Bought = new Decimal(1)
    document.getElementsByClassName("cyanSigilUpgrade")[5].disabled = true
    document.getElementsByClassName("box")[12].style.display = "block"
    document.getElementsByClassName("resourceRow")[8].style.display = "block"
    game.unlocks++
  }
}

function buyBlueSigilUpgrade(x) {
  //For each upgrade (if affordable): subtracts blue sigil power based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.blueSigilPower.gte(game.blueSigilUpgrade1Cost)) {
    game.blueSigilPower = game.blueSigilPower.sub(game.blueSigilUpgrade1Cost)
    game.blueSigilUpgrade1Bought = game.blueSigilUpgrade1Bought.add(1)
    game.blueSigilUpgrade1Cost = new Decimal(1.5).pow(game.blueSigilUpgrade1Bought).floor()
    document.getElementById("blueSigilUpgrade1Cost").innerHTML = format(game.blueSigilUpgrade1Cost, 0)
    document.getElementById("blueSigilUpgrade1Effect").innerHTML = format(game.blueSigilUpgrade1Bought.add(1), 2)
  }
  else if (x==2 && game.blueSigilPower.gte(game.blueSigilUpgrade2Cost)) {
    game.blueSigilPower = game.blueSigilPower.sub(game.blueSigilUpgrade2Cost)
    game.blueSigilUpgrade2Bought = game.blueSigilUpgrade2Bought.add(1)
    game.blueSigilUpgrade2Cost = new Decimal(1.5).pow(game.blueSigilUpgrade2Bought).mul(20).floor()
    document.getElementById("blueSigilUpgrade2Cost").innerHTML = format(game.blueSigilUpgrade2Cost, 0)
    document.getElementById("blueSigilUpgrade2Effect").innerHTML = format(new Decimal(1e15).pow(game.blueSigilUpgrade2Bought.pow(0.6)), 2)
  }
  else if (x==3 && game.blueSigilPower.gte(game.blueSigilUpgrade3Cost) && game.blueSigilUpgrade3Bought.lt(10)) {
    game.blueSigilPower = game.blueSigilPower.sub(game.blueSigilUpgrade3Cost)
    game.blueSigilUpgrade3Bought = game.blueSigilUpgrade3Bought.add(1)
    game.blueSigilUpgrade3Cost = new Decimal(2).pow(game.blueSigilUpgrade3Bought).mul(100).round()
    document.getElementById("blueSigilUpgrade3Cost").innerHTML = format(game.blueSigilUpgrade3Cost, 0)
    document.getElementById("blueSigilUpgrade3Bought").innerHTML = format(game.blueSigilUpgrade3Bought, 0)
    if (game.blueSigilUpgrade3Bought.gte(10)) document.getElementsByClassName("blueSigilUpgrade")[2].disabled = true
  }
  else if (x==4 && game.blueSigilPower.gte(750)) {
    game.blueSigilPower = game.blueSigilPower.sub(750)
    game.blueSigilUpgrade4Bought = new Decimal(1)
    document.getElementsByClassName("blueSigilUpgrade")[3].disabled = true
  }
  else if (x==5 && game.blueSigilPower.gte(2000)) {
    game.blueSigilPower = game.blueSigilPower.sub(2000)
    game.blueSigilUpgrade5Bought = new Decimal(1)
    document.getElementsByClassName("blueSigilUpgrade")[4].disabled = true
    document.getElementById("fireAutoMaxAllButton").style.display = "block"
  }
  else if (x==6 && game.blueSigilPower.gte(10000)) {
    game.blueSigilPower = game.blueSigilPower.sub(10000)
    game.blueSigilUpgrade6Bought = new Decimal(1)
    document.getElementsByClassName("blueSigilUpgrade")[5].disabled = true
    document.getElementsByClassName("box")[13].style.display = "block"
    document.getElementsByClassName("resourceRow")[9].style.display = "block"
    game.unlocks++
  }
}

function buyIndigoSigilUpgrade(x) {
  //For each upgrade (if affordable): subtracts indigo sigil power based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.indigoSigilPower.gte(game.indigoSigilUpgrade1Cost)) {
    game.indigoSigilPower = game.indigoSigilPower.sub(game.indigoSigilUpgrade1Cost)
    game.indigoSigilUpgrade1Bought = game.indigoSigilUpgrade1Bought.add(1)
    game.indigoSigilUpgrade1Cost = new Decimal(1.5).pow(game.indigoSigilUpgrade1Bought).floor()
    document.getElementById("indigoSigilUpgrade1Cost").innerHTML = format(game.indigoSigilUpgrade1Cost, 0)
    document.getElementById("indigoSigilUpgrade1Effect").innerHTML = format(game.indigoSigilUpgrade1Bought.add(1), 2)
  }
  else if (x==2 && game.indigoSigilPower.gte(game.indigoSigilUpgrade2Cost)) {
    game.indigoSigilPower = game.indigoSigilPower.sub(game.indigoSigilUpgrade2Cost)
    game.indigoSigilUpgrade2Bought = game.indigoSigilUpgrade2Bought.add(1)
    game.indigoSigilUpgrade2Cost = new Decimal(1.5).pow(game.indigoSigilUpgrade2Bought).mul(20).floor()
    document.getElementById("indigoSigilUpgrade2Cost").innerHTML = format(game.indigoSigilUpgrade2Cost, 0)
    document.getElementById("indigoSigilUpgrade2Effect").innerHTML = format(new Decimal(1.15).pow(game.indigoSigilUpgrade2Bought.pow(0.5)), 2)
  }
  else if (x==3 && game.indigoSigilPower.gte(game.indigoSigilUpgrade3Cost)) {
    game.indigoSigilPower = game.indigoSigilPower.sub(game.indigoSigilUpgrade3Cost)
    game.indigoSigilUpgrade3Bought = game.indigoSigilUpgrade3Bought.add(1)
    game.indigoSigilUpgrade3Cost = new Decimal(2).pow(game.indigoSigilUpgrade3Bought).mul(100).round()
    document.getElementById("indigoSigilUpgrade3Cost").innerHTML = format(game.indigoSigilUpgrade3Cost, 0)
    document.getElementById("indigoSigilUpgrade3Effect").innerHTML = format(new Decimal(1.4).pow(game.indigoSigilUpgrade3Bought.pow(0.5)), 2)
  }
  else if (x==4 && game.indigoSigilPower.gte(game.indigoSigilUpgrade4Cost)) {
    game.indigoSigilPower = game.indigoSigilPower.sub(game.indigoSigilUpgrade4Cost)
    game.indigoSigilUpgrade4Bought = game.indigoSigilUpgrade4Bought.add(1)
    game.indigoSigilUpgrade4Cost = new Decimal(2.5).pow(game.indigoSigilUpgrade4Bought).mul(400).floor()
    document.getElementById("indigoSigilUpgrade4Cost").innerHTML = format(game.indigoSigilUpgrade4Cost, 0)
    document.getElementById("indigoSigilUpgrade4Effect").innerHTML = format(new Decimal(2).pow(game.indigoSigilUpgrade4Bought.pow(0.6)), 2)
  }
  else if (x==5 && game.indigoSigilPower.gte(1250)) {
    game.indigoSigilPower = game.indigoSigilPower.sub(1250)
    game.indigoSigilUpgrade5Bought = new Decimal(1)
    document.getElementsByClassName("indigoSigilUpgrade")[4].disabled = true
    for (i=8;i<12;i++) {document.getElementsByClassName("darkMagicUpgrade")[i].style.display = "inline-block"}
  }
  else if (x==6 && game.indigoSigilPower.gte(25000)) {
    game.indigoSigilPower = game.indigoSigilPower.sub(25000)
    game.indigoSigilUpgrade6Bought = new Decimal(1)
    document.getElementsByClassName("indigoSigilUpgrade")[5].disabled = true
    document.getElementsByClassName("box")[14].style.display = "block"
    document.getElementsByClassName("resourceRow")[10].style.display = "block"
    game.unlocks++
  }
}

function buyVioletSigilUpgrade(x) {
  //For each upgrade (if affordable): subtracts violet sigil power based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.violetSigilPower.gte(game.violetSigilUpgrade1Cost)) {
    game.violetSigilPower = game.violetSigilPower.sub(game.violetSigilUpgrade1Cost)
    game.violetSigilUpgrade1Bought = game.violetSigilUpgrade1Bought.add(1)
    game.violetSigilUpgrade1Cost = new Decimal(1.5).pow(game.violetSigilUpgrade1Bought).floor()
    document.getElementById("violetSigilUpgrade1Cost").innerHTML = format(game.violetSigilUpgrade1Cost, 0)
    document.getElementById("violetSigilUpgrade1Effect").innerHTML = format(game.violetSigilUpgrade1Bought.add(1), 2)
  }
  else if (x==2 && game.violetSigilPower.gte(game.violetSigilUpgrade2Cost)) {
    game.violetSigilPower = game.violetSigilPower.sub(game.violetSigilUpgrade2Cost)
    game.violetSigilUpgrade2Bought = game.violetSigilUpgrade2Bought.add(1)
    game.violetSigilUpgrade2Cost = new Decimal(1.5).pow(game.violetSigilUpgrade2Bought).mul(5).floor()
    document.getElementById("violetSigilUpgrade2Cost").innerHTML = format(game.violetSigilUpgrade2Cost, 0)
    document.getElementById("violetSigilUpgrade2Effect").innerHTML = format(new Decimal(1.3).pow(game.violetSigilUpgrade2Bought.pow(0.5)), 2)
  }
  else if (x==3 && game.violetSigilPower.gte(50)) {
    game.violetSigilPower = game.violetSigilPower.sub(50)
    game.violetSigilUpgrade3Bought = new Decimal(1)
    document.getElementsByClassName("violetSigilUpgrade")[2].disabled = true
    document.getElementsByClassName("box")[3].style.height = "580px"
    document.getElementById("dragonPetStuff").style.display = "block"
  }
  else if (x==4 && game.violetSigilPower.gte(1000)) {
    game.violetSigilPower = game.violetSigilPower.sub(1000)
    game.violetSigilUpgrade4Bought = new Decimal(1)
    document.getElementsByClassName("violetSigilUpgrade")[3].disabled = true
    document.getElementById("minerAutoBuyMaxButton").style.display = "inline-block"
  }
  else if (x==5 && game.violetSigilPower.gte(5000)) {
    game.violetSigilPower = game.violetSigilPower.sub(5000)
    game.violetSigilUpgrade5Bought = new Decimal(1)
    document.getElementsByClassName("violetSigilUpgrade")[4].disabled = true
  }
}