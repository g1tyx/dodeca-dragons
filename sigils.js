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
  else if (x==5 && game.pinkSigilsToGet.eq(0)) {
    if (confirm("Woah, hold on! You won't gain any sigils! Are you sure you want to perform a sigil reset?")) sigilReset(x)
  }
  else if (game.confirmations[1]) {
    if (confirm("Are you sure you want to perform a sigil reset?")) sigilReset(x)
  }
  else {sigilReset(x)}
}

function sigilReset(x, triggerLayer = "sigil") {
  switch(x) {
    case 1: game.cyanSigils = game.cyanSigils.add(game.cyanSigilsToGet); break
    case 2: game.blueSigils = game.blueSigils.add(game.blueSigilsToGet); break
    case 3: game.indigoSigils = game.indigoSigils.add(game.indigoSigilsToGet); break
    case 4: game.violetSigils = game.violetSigils.add(game.violetSigilsToGet); break
    case 5: game.pinkSigils = game.pinkSigils.add(game.pinkSigilsToGet); break
  }
  checkAchievements()
  magicReset(triggerLayer)
  if (game.unlockedAchievements[7] <= 2) {
    for (i=0;i<9;i++) {
      if (i!=2) {
        game.platinumUpgradesBought[i] = 0
        document.getElementsByClassName("platinumUpgradesBought")[i].innerHTML = "0"
        document.getElementsByClassName("platinumUpgrade")[i].disabled = false
      }
    }
    document.getElementsByClassName("platinumUpgradesBought")[2].innerHTML = "1"
  }
  if (game.unlockedAchievements[8] <= 1) {
    for (i=0;i<5;i++) {
      game.uraniumUpgradesBought[i] = 0
      document.getElementsByClassName("uraniumUpgradesBought")[i].innerHTML = "0"
      document.getElementsByClassName("uraniumUpgrade")[i].disabled = false
    }
  }
  
  game.magic = new Decimal(0)
  if (game.unlockedAchievements[8] > 0) {
    //do nothing :D
  } else if (game.unlockedAchievements[7] > 0) {
    game.magicScore1 = game.magicScore1.sqrt();
    game.magicScore2 = game.magicScore2.sqrt();
    game.magicScore3 = game.magicScore3.sqrt();
    game.magicScore4 = game.magicScore4.sqrt();
  } else {
    game.magicScore1 = new Decimal(0)
    game.magicScore2 = new Decimal(0)
    game.magicScore3 = new Decimal(0)
    game.magicScore4 = new Decimal(0)
  }
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
  if (game.darkMagicUpgradesBought[3]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(8), 2)}
  else if (game.magicUpgradesBought[18]) {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(6), 2)}
  else {document.getElementById("magifoldEffect").innerHTML = format(game.magifolds.pow(4), 2)}
  document.getElementsByClassName("resourceText")[5].innerHTML = format(game.magifolds, 0)

  if (game.unlockedAchievements[10] <= 2) {
    for (i=0;i<19;i++) {
      if (i!=1 && i!=4 && i!=7 && i!=11) {
        game.magicUpgradesBought[i] = false
        document.getElementsByClassName("magicUpgrade")[i].disabled = false
      }
    }
    for (i=0;i<7;i++) {
      game.darkMagicUpgradesBought[i] = false  
      document.getElementsByClassName("darkMagicUpgrade")[i].disabled = false
    }
  }
  
  game.uranium = new Decimal(0)
  
  game.dragonTimeSpent = new Decimal(0)
  document.getElementById("dragonTimeSpent").innerHTML = format(game.dragonTimeSpent, 0)
  game.dragonTimeEffect = new Decimal(1.2).pow(game.dragonTimeSpent.pow(0.3))
  document.getElementById("dragonTimeEffectCap").innerHTML = ""
  document.getElementById("dragonTimeEffect").innerHTML = format(game.dragonTimeEffect, 3)

  //if (game.unlockedAchievements[10] === 0) {
    game.dragonFood = new Decimal(0)
    game.dragonFeedCost = new Decimal(10).pow(new Decimal(2).pow(game.dragonFood).mul(8).round())
    document.getElementById("dragonFeedCost").innerHTML = format(game.dragonFeedCost, 0)
    document.getElementById("dragonFood").innerHTML = format(game.dragonFood, 0)
    document.getElementById("dragonFoodEffect").innerHTML = format(new Decimal(1.3).pow(game.dragonFood), 3)
  //}
  updateSmall()
}

function buyCyanSigilUpgrade(x) {
  //For each upgrade (if affordable): subtracts cyan sigil power based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.cyanSigilPower.gte(game.cyanSigilUpgrade1Cost)) {
    game.cyanSigilPower = game.cyanSigilPower.sub(game.cyanSigilUpgrade1Cost)
    game.cyanSigilUpgradesBought[0] = game.cyanSigilUpgradesBought[0].add(1)
    game.cyanSigilUpgrade1Cost = new Decimal(1.5).pow(game.cyanSigilUpgradesBought[0]).floor()
    document.getElementById("cyanSigilUpgrade1Cost").innerHTML = format(game.cyanSigilUpgrade1Cost, 0)
    document.getElementById("cyanSigilUpgrade1Effect").innerHTML = format(game.cyanSigilUpgradesBought[0].add(1), 2)
  }
  else if (x==2 && game.cyanSigilPower.gte(game.cyanSigilUpgrade2Cost)) {
    game.cyanSigilPower = game.cyanSigilPower.sub(game.cyanSigilUpgrade2Cost)
    game.cyanSigilUpgradesBought[1] = game.cyanSigilUpgradesBought[1].add(1)
    game.cyanSigilUpgrade2Cost = new Decimal(1.5).pow(game.cyanSigilUpgradesBought[1]).mul(20).floor()
    document.getElementById("cyanSigilUpgrade2Cost").innerHTML = format(game.cyanSigilUpgrade2Cost, 0)
    document.getElementById("cyanSigilUpgrade2Effect").innerHTML = format(game.cyanSigilUpgradesBought[1].add(1).pow(1.5), 2)
  }
  else if (x==3 && game.cyanSigilPower.gte(game.cyanSigilUpgrade3Cost)) {
    game.cyanSigilPower = game.cyanSigilPower.sub(game.cyanSigilUpgrade3Cost)
    game.cyanSigilUpgradesBought[2] = game.cyanSigilUpgradesBought[2].add(1)
    game.cyanSigilUpgrade3Cost = new Decimal(2).pow(game.cyanSigilUpgradesBought[2]).mul(500).round()
    document.getElementById("cyanSigilUpgrade3Cost").innerHTML = format(game.cyanSigilUpgrade3Cost, 0)
    document.getElementById("cyanSigilUpgrade3Effect").innerHTML = format(new Decimal(1.2).pow(game.cyanSigilUpgradesBought[2].pow(0.4)), 2)
  }
  else if (x==4 && game.cyanSigilPower.gte(20000)) {
    game.cyanSigilPower = game.cyanSigilPower.sub(20000)
    game.cyanSigilUpgradesBought[3] = new Decimal(1)
    document.getElementsByClassName("cyanSigilUpgrade")[3].disabled = true
    document.getElementsByClassName("box")[12].style.display = "block"
    document.getElementsByClassName("resourceRow")[8].style.display = "block"
    document.getElementById("blueSigilUpgrade1Cost").innerHTML = format(game.blueSigilUpgrade1Cost, 0)
    document.getElementById("blueSigilUpgrade1Effect").innerHTML = format(game.blueSigilUpgradesBought[0].add(1), 2)
    document.getElementById("blueSigilUpgrade2Cost").innerHTML = format(game.blueSigilUpgrade2Cost, 0)
    document.getElementById("blueSigilUpgrade2Effect").innerHTML = format(new Decimal(1e15).pow(game.blueSigilUpgradesBought[1].pow(0.6)), 2)
    document.getElementById("blueSigilUpgrade3Cost").innerHTML = format(game.blueSigilUpgrade3Cost, 0)
    document.getElementById("blueSigilUpgrade3Bought").innerHTML = format(game.blueSigilUpgradesBought[2], 0)
    if (game.blueSigilUpgradesBought[2].gte(10)) {document.getElementsByClassName("blueSigilUpgrade")[2].disabled = true}
    else {document.getElementsByClassName("blueSigilUpgrade")[2].disabled = false}
    if (game.blueSigilUpgradesBought[3].eq(1)) {document.getElementsByClassName("blueSigilUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("blueSigilUpgrade")[3].disabled = false}
    addUnlock() //sets unlock to 11
  }
}

function buyBlueSigilUpgrade(x) {
  //For each upgrade (if affordable): subtracts blue sigil power based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.blueSigilPower.gte(game.blueSigilUpgrade1Cost)) {
    game.blueSigilPower = game.blueSigilPower.sub(game.blueSigilUpgrade1Cost)
    game.blueSigilUpgradesBought[0] = game.blueSigilUpgradesBought[0].add(1)
    game.blueSigilUpgrade1Cost = new Decimal(1.5).pow(game.blueSigilUpgradesBought[0]).floor()
    document.getElementById("blueSigilUpgrade1Cost").innerHTML = format(game.blueSigilUpgrade1Cost, 0)
    document.getElementById("blueSigilUpgrade1Effect").innerHTML = format(game.blueSigilUpgradesBought[0].add(1), 2)
  }
  else if (x==2 && game.blueSigilPower.gte(game.blueSigilUpgrade2Cost)) {
    game.blueSigilPower = game.blueSigilPower.sub(game.blueSigilUpgrade2Cost)
    game.blueSigilUpgradesBought[1] = game.blueSigilUpgradesBought[1].add(1)
    game.blueSigilUpgrade2Cost = new Decimal(1.5).pow(game.blueSigilUpgradesBought[1]).mul(20).floor()
    document.getElementById("blueSigilUpgrade2Cost").innerHTML = format(game.blueSigilUpgrade2Cost, 0)
    document.getElementById("blueSigilUpgrade2Effect").innerHTML = format(new Decimal(1e15).pow(game.blueSigilUpgradesBought[1].pow(0.6)), 2)
  }
  else if (x==3 && game.blueSigilPower.gte(game.blueSigilUpgrade3Cost) && game.blueSigilUpgradesBought[2].lt(10)) {
    game.blueSigilPower = game.blueSigilPower.sub(game.blueSigilUpgrade3Cost)
    game.blueSigilUpgradesBought[2] = game.blueSigilUpgradesBought[2].add(1)
    game.blueSigilUpgrade3Cost = new Decimal(2).pow(game.blueSigilUpgradesBought[2]).mul(100).round()
    document.getElementById("blueSigilUpgrade3Cost").innerHTML = format(game.blueSigilUpgrade3Cost, 0)
    document.getElementById("blueSigilUpgrade3Bought").innerHTML = format(game.blueSigilUpgradesBought[2], 0)
    if (game.blueSigilUpgradesBought[2].gte(10)) document.getElementsByClassName("blueSigilUpgrade")[2].disabled = true
  }
  else if (x==4 && game.blueSigilPower.gte(10000)) {
    game.blueSigilPower = game.blueSigilPower.sub(10000)
    game.blueSigilUpgradesBought[3] = new Decimal(1)
    document.getElementsByClassName("blueSigilUpgrade")[3].disabled = true
    document.getElementsByClassName("box")[13].style.display = "block"
    document.getElementsByClassName("resourceRow")[9].style.display = "block"
    document.getElementById("indigoSigilUpgrade1Cost").innerHTML = format(game.indigoSigilUpgrade1Cost, 0)
    document.getElementById("indigoSigilUpgrade1Effect").innerHTML = format(game.indigoSigilUpgradesBought[0].add(1), 2)
    document.getElementById("indigoSigilUpgrade2Cost").innerHTML = format(game.indigoSigilUpgrade2Cost, 0)
    document.getElementById("indigoSigilUpgrade2Effect").innerHTML = format(new Decimal(1.15).pow(game.indigoSigilUpgradesBought[1].pow(0.5)), 2)
    document.getElementById("indigoSigilUpgrade3Cost").innerHTML = format(game.indigoSigilUpgrade3Cost, 0)
    document.getElementById("indigoSigilUpgrade3Effect").innerHTML = format(new Decimal(2).pow(game.indigoSigilUpgradesBought[2].pow(0.6)), 2)
    if (game.indigoSigilUpgradesBought[3].eq(1)) {document.getElementsByClassName("indigoSigilUpgrade")[3].disabled = true}
    else {document.getElementsByClassName("indigoSigilUpgrade")[3].disabled = false}
    addUnlock() //sets unlock to 12
  }
}

function buyIndigoSigilUpgrade(x) {
  //For each upgrade (if affordable): subtracts indigo sigil power based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.indigoSigilPower.gte(game.indigoSigilUpgrade1Cost)) {
    game.indigoSigilPower = game.indigoSigilPower.sub(game.indigoSigilUpgrade1Cost)
    game.indigoSigilUpgradesBought[0] = game.indigoSigilUpgradesBought[0].add(1)
    game.indigoSigilUpgrade1Cost = new Decimal(1.5).pow(game.indigoSigilUpgradesBought[0]).floor()
    document.getElementById("indigoSigilUpgrade1Cost").innerHTML = format(game.indigoSigilUpgrade1Cost, 0)
    document.getElementById("indigoSigilUpgrade1Effect").innerHTML = format(game.indigoSigilUpgradesBought[0].add(1), 2)
  }
  else if (x==2 && game.indigoSigilPower.gte(game.indigoSigilUpgrade2Cost)) {
    game.indigoSigilPower = game.indigoSigilPower.sub(game.indigoSigilUpgrade2Cost)
    game.indigoSigilUpgradesBought[1] = game.indigoSigilUpgradesBought[1].add(1)
    game.indigoSigilUpgrade2Cost = new Decimal(1.5).pow(game.indigoSigilUpgradesBought[1]).mul(20).floor()
    document.getElementById("indigoSigilUpgrade2Cost").innerHTML = format(game.indigoSigilUpgrade2Cost, 0)
    document.getElementById("indigoSigilUpgrade2Effect").innerHTML = format(new Decimal(1.15).pow(game.indigoSigilUpgradesBought[1].pow(0.5)), 2)
  }
  else if (x==3 && game.indigoSigilPower.gte(game.indigoSigilUpgrade3Cost)) {
    game.indigoSigilPower = game.indigoSigilPower.sub(game.indigoSigilUpgrade3Cost)
    game.indigoSigilUpgradesBought[2] = game.indigoSigilUpgradesBought[2].add(1)
    game.indigoSigilUpgrade3Cost = new Decimal(2.5).pow(game.indigoSigilUpgradesBought[2]).mul(400).floor()
    document.getElementById("indigoSigilUpgrade3Cost").innerHTML = format(game.indigoSigilUpgrade3Cost, 0)
    document.getElementById("indigoSigilUpgrade3Effect").innerHTML = format(new Decimal(2).pow(game.indigoSigilUpgradesBought[2].pow(0.6)), 2)
  }
  else if (x==4 && game.indigoSigilPower.gte(20000)) {
    game.indigoSigilPower = game.indigoSigilPower.sub(20000)
    game.indigoSigilUpgradesBought[3] = new Decimal(1)
    document.getElementsByClassName("indigoSigilUpgrade")[3].disabled = true
    document.getElementsByClassName("box")[14].style.display = "block"
    document.getElementsByClassName("resourceRow")[10].style.display = "block"
    document.getElementById("violetSigilUpgrade1Cost").innerHTML = format(game.violetSigilUpgrade1Cost, 0)
    document.getElementById("violetSigilUpgrade1Effect").innerHTML = format(game.violetSigilUpgradesBought[0].add(1), 2)
    document.getElementById("violetSigilUpgrade2Cost").innerHTML = format(game.violetSigilUpgrade2Cost, 0)
    document.getElementById("violetSigilUpgrade2Effect").innerHTML = format(new Decimal(1.3).pow(game.violetSigilUpgradesBought[1].pow(0.5)), 2)
    if (game.violetSigilUpgradesBought[2].eq(1)) {
      document.getElementsByClassName("violetSigilUpgrade")[2].disabled = true
    }
    else {document.getElementsByClassName("violetSigilUpgrade")[2].disabled = false}
    if (game.violetSigilUpgradesBought[3].eq(1)) {
      document.getElementsByClassName("violetSigilUpgrade")[3].disabled = true
    }
    else {document.getElementsByClassName("violetSigilUpgrade")[3].disabled = false}
    addUnlock() //sets unlock to 13
  }
}

function buyVioletSigilUpgrade(x) {
  //For each upgrade (if affordable): subtracts violet sigil power based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.violetSigilPower.gte(game.violetSigilUpgrade1Cost)) {
    game.violetSigilPower = game.violetSigilPower.sub(game.violetSigilUpgrade1Cost)
    game.violetSigilUpgradesBought[0] = game.violetSigilUpgradesBought[0].add(1)
    game.violetSigilUpgrade1Cost = new Decimal(1.5).pow(game.violetSigilUpgradesBought[0]).floor()
    document.getElementById("violetSigilUpgrade1Cost").innerHTML = format(game.violetSigilUpgrade1Cost, 0)
    document.getElementById("violetSigilUpgrade1Effect").innerHTML = format(game.violetSigilUpgradesBought[0].add(1), 2)
  }
  else if (x==2 && game.violetSigilPower.gte(game.violetSigilUpgrade2Cost)) {
    game.violetSigilPower = game.violetSigilPower.sub(game.violetSigilUpgrade2Cost)
    game.violetSigilUpgradesBought[1] = game.violetSigilUpgradesBought[1].add(1)
    game.violetSigilUpgrade2Cost = new Decimal(1.5).pow(game.violetSigilUpgradesBought[1]).mul(5).floor()
    document.getElementById("violetSigilUpgrade2Cost").innerHTML = format(game.violetSigilUpgrade2Cost, 0)
    document.getElementById("violetSigilUpgrade2Effect").innerHTML = format(new Decimal(1.3).pow(game.violetSigilUpgradesBought[1].pow(0.5)), 2)
  }
  else if (x==3 && game.violetSigilPower.gte(5000)) {
    game.violetSigilPower = game.violetSigilPower.sub(5000)
    game.violetSigilUpgradesBought[2] = new Decimal(1)
    document.getElementsByClassName("violetSigilUpgrade")[2].disabled = true
  }
  else if (x==4 && game.violetSigilPower.gte(1e7)) {
    game.violetSigilPower = game.violetSigilPower.sub(1e7)
    game.violetSigilUpgradesBought[3] = new Decimal(1)
    document.getElementsByClassName("violetSigilUpgrade")[3].disabled = true
    document.getElementsByClassName("box")[16].style.display = "block"
    document.getElementsByClassName("resourceRow")[11].style.display = "block"
    document.getElementById("pinkSigilUpgrade1Cost").innerHTML = format(game.pinkSigilUpgrade1Cost, 0)
    document.getElementById("pinkSigilUpgrade1Effect").innerHTML = format(game.pinkSigilUpgradesBought[0].add(1), 2)
    document.getElementById("pinkSigilUpgrade3Cost").innerHTML = format(game.pinkSigilUpgrade3Cost, 0)
    document.getElementById("pinkSigilUpgrade3Effect").innerHTML = format(new Decimal(1.5).pow(game.pinkSigilUpgradesBought[2].pow(0.5)), 2)
    if (game.pinkSigilUpgradesBought[1].gt(0)) {
      for (i=8;i<10;i++) document.getElementsByClassName("darkMagicUpgrade")[i].style.display = "inline-block"
      document.getElementsByClassName("pinkSigilUpgrade")[1].disabled = true
    }
    else {
      for (i=8;i<10;i++) document.getElementsByClassName("darkMagicUpgrade")[i].style.display = "none"
      document.getElementsByClassName("pinkSigilUpgrade")[1].disabled = false
    }
    addUnlock() //sets unlock to 14
  }
}

function buyPinkSigilUpgrade(x) {
  //For each upgrade (if affordable): subtracts pink sigil power based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.pinkSigilPower.gte(game.pinkSigilUpgrade1Cost)) {
    game.pinkSigilPower = game.pinkSigilPower.sub(game.pinkSigilUpgrade1Cost)
    game.pinkSigilUpgradesBought[0] = game.pinkSigilUpgradesBought[0].add(1)
    game.pinkSigilUpgrade1Cost = new Decimal(1.5).pow(game.pinkSigilUpgradesBought[0]).floor()
    document.getElementById("pinkSigilUpgrade1Cost").innerHTML = format(game.pinkSigilUpgrade1Cost, 0)
    document.getElementById("pinkSigilUpgrade1Effect").innerHTML = format(game.pinkSigilUpgradesBought[0].add(1), 2)
  }
  else if (x==2 && game.pinkSigilPower.gte(100000)) {
    game.pinkSigilPower = game.pinkSigilPower.sub(100000)
    game.pinkSigilUpgradesBought[1] = new Decimal(1)
    document.getElementsByClassName("pinkSigilUpgrade")[1].disabled = true
    for (i=8;i<10;i++) {document.getElementsByClassName("darkMagicUpgrade")[i].style.display = "inline-block"}
  }
  else if (x==3 && game.pinkSigilPower.gte(game.pinkSigilUpgrade3Cost)) {
    game.pinkSigilPower = game.pinkSigilPower.sub(game.pinkSigilUpgrade3Cost)
    game.pinkSigilUpgradesBought[2] = game.pinkSigilUpgradesBought[2].add(1)
    game.pinkSigilUpgrade3Cost = new Decimal(2).pow(game.pinkSigilUpgradesBought[2]).mul(500000).round()
    document.getElementById("pinkSigilUpgrade3Cost").innerHTML = format(game.pinkSigilUpgrade3Cost, 0)
    document.getElementById("pinkSigilUpgrade3Effect").innerHTML = format(new Decimal(1.5).pow(game.pinkSigilUpgradesBought[2].pow(0.5)), 2)
  }
  else if (x==4 && game.pinkSigilPower.gte(1e8)) {
    game.pinkSigilPower = game.pinkSigilPower.sub(1e8)
    game.pinkSigilUpgradesBought[3] = new Decimal(1)
    document.getElementsByClassName("pinkSigilUpgrade")[3].disabled = true
    document.getElementsByClassName("box")[19].style.display = "block"
    document.getElementsByClassName("resourceRow")[12].style.display = "block"
    randomizeKnowledgeTrade(1)
    randomizeKnowledgeTrade(2)
    randomizeKnowledgeTrade(3)
    document.getElementById("knowledgeUpgrade1Cost").innerHTML = format(game.knowledgeUpgradeCosts[0], 0)
    document.getElementById("knowledgeUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)), 2)
    document.getElementById("knowledgeUpgrade2Cost").innerHTML = format(game.knowledgeUpgradeCosts[1], 0)
    document.getElementById("knowledgeUpgrade2Effect").innerHTML = format(new Decimal(5).pow(game.knowledgeUpgradesBought[1].pow(0.5)), 2)
    addUnlock() //sets unlock to 15
  }
}

function maxAllSigilUpgrades() {
  cyanSigilPowerTemp = game.cyanSigilPower.div(3)
  SU1amountCanBuy = Decimal.affordGeometricSeries(cyanSigilPowerTemp, 1, 1.5, game.cyanSigilUpgradesBought[0])
  SU1Cost = Decimal.sumGeometricSeries(SU1amountCanBuy, 1, 1.5, game.cyanSigilUpgradesBought[0])
  game.cyanSigilPower = game.cyanSigilPower.sub(SU1Cost)
  game.cyanSigilUpgradesBought[0] = game.cyanSigilUpgradesBought[0].add(SU1amountCanBuy)
  game.cyanSigilUpgrade1Cost = new Decimal(1.5).pow(game.cyanSigilUpgradesBought[0]).floor()
  document.getElementById("cyanSigilUpgrade1Cost").innerHTML = format(game.cyanSigilUpgrade1Cost, 0)
  document.getElementById("cyanSigilUpgrade1Effect").innerHTML = format(game.cyanSigilUpgradesBought[0].add(1), 2)

  SU2amountCanBuy = Decimal.affordGeometricSeries(cyanSigilPowerTemp, 20, 1.5, game.cyanSigilUpgradesBought[1])
  SU2Cost = Decimal.sumGeometricSeries(SU2amountCanBuy, 20, 1.5, game.cyanSigilUpgradesBought[1])
  game.cyanSigilPower = game.cyanSigilPower.sub(SU2Cost)
  game.cyanSigilUpgradesBought[1] = game.cyanSigilUpgradesBought[1].add(SU2amountCanBuy)
  game.cyanSigilUpgrade2Cost = new Decimal(1.5).pow(game.cyanSigilUpgradesBought[1]).mul(20).floor()
  document.getElementById("cyanSigilUpgrade2Cost").innerHTML = format(game.cyanSigilUpgrade2Cost, 0)
  document.getElementById("cyanSigilUpgrade2Effect").innerHTML = format(game.cyanSigilUpgradesBought[1].add(1).pow(1.5), 2)

  SU3amountCanBuy = Decimal.affordGeometricSeries(cyanSigilPowerTemp, 100, 2, game.cyanSigilUpgradesBought[2])
  SU3Cost = Decimal.sumGeometricSeries(SU3amountCanBuy, 100, 2, game.cyanSigilUpgradesBought[2])
  game.cyanSigilPower = game.cyanSigilPower.sub(SU3Cost)
  game.cyanSigilUpgradesBought[2] = game.cyanSigilUpgradesBought[2].add(SU3amountCanBuy)
  game.cyanSigilUpgrade3Cost = new Decimal(2).pow(game.cyanSigilUpgradesBought[2]).mul(500).round()
  document.getElementById("cyanSigilUpgrade3Cost").innerHTML = format(game.cyanSigilUpgrade3Cost, 0)
  document.getElementById("cyanSigilUpgrade3Effect").innerHTML = format(new Decimal(1.2).pow(game.cyanSigilUpgradesBought[2].pow(0.4)), 2)

  blueSigilPowerTemp = game.blueSigilPower.div(2)
  SU4amountCanBuy = Decimal.affordGeometricSeries(blueSigilPowerTemp, 1, 1.5, game.blueSigilUpgradesBought[0])
  SU4Cost = Decimal.sumGeometricSeries(SU4amountCanBuy, 1, 1.5, game.blueSigilUpgradesBought[0])
  game.blueSigilPower = game.blueSigilPower.sub(SU4Cost)
  game.blueSigilUpgradesBought[0] = game.blueSigilUpgradesBought[0].add(SU4amountCanBuy)
  game.blueSigilUpgrade1Cost = new Decimal(1.5).pow(game.blueSigilUpgradesBought[0]).floor()
  document.getElementById("blueSigilUpgrade1Cost").innerHTML = format(game.blueSigilUpgrade1Cost, 0)
  document.getElementById("blueSigilUpgrade1Effect").innerHTML = format(game.blueSigilUpgradesBought[0].add(1), 2)

  SU5amountCanBuy = Decimal.affordGeometricSeries(blueSigilPowerTemp, 20, 1.5, game.blueSigilUpgradesBought[1])
  SU5Cost = Decimal.sumGeometricSeries(SU5amountCanBuy, 20, 1.5, game.blueSigilUpgradesBought[1])
  game.blueSigilPower = game.blueSigilPower.sub(SU5Cost)
  game.blueSigilUpgradesBought[1] = game.blueSigilUpgradesBought[1].add(SU5amountCanBuy)
  game.blueSigilUpgrade2Cost = new Decimal(1.5).pow(game.blueSigilUpgradesBought[1]).mul(20).floor()
  document.getElementById("blueSigilUpgrade2Cost").innerHTML = format(game.blueSigilUpgrade2Cost, 0)
  document.getElementById("blueSigilUpgrade2Effect").innerHTML = format(new Decimal(1e15).pow(game.blueSigilUpgradesBought[1].pow(0.6)), 2)

  indigoSigilPowerTemp = game.indigoSigilPower.div(3)
  SU6amountCanBuy = Decimal.affordGeometricSeries(indigoSigilPowerTemp, 1, 1.5, game.indigoSigilUpgradesBought[0])
  SU6Cost = Decimal.sumGeometricSeries(SU6amountCanBuy, 1, 1.5, game.indigoSigilUpgradesBought[0])
  game.indigoSigilPower = game.indigoSigilPower.sub(SU6Cost)
  game.indigoSigilUpgradesBought[0] = game.indigoSigilUpgradesBought[0].add(SU6amountCanBuy)
  game.indigoSigilUpgrade1Cost = new Decimal(1.5).pow(game.indigoSigilUpgradesBought[0]).floor()
  document.getElementById("indigoSigilUpgrade1Cost").innerHTML = format(game.indigoSigilUpgrade1Cost, 0)
  document.getElementById("indigoSigilUpgrade1Effect").innerHTML = format(game.indigoSigilUpgradesBought[0].add(1), 2)

  SU7amountCanBuy = Decimal.affordGeometricSeries(indigoSigilPowerTemp, 20, 1.5, game.indigoSigilUpgradesBought[1])
  SU7Cost = Decimal.sumGeometricSeries(SU7amountCanBuy, 20, 1.5, game.indigoSigilUpgradesBought[1])
  game.indigoSigilPower = game.indigoSigilPower.sub(SU7Cost)
  game.indigoSigilUpgradesBought[1] = game.indigoSigilUpgradesBought[1].add(SU7amountCanBuy)
  game.indigoSigilUpgrade2Cost = new Decimal(1.5).pow(game.indigoSigilUpgradesBought[1]).mul(20).floor()
  document.getElementById("indigoSigilUpgrade2Cost").innerHTML = format(game.indigoSigilUpgrade2Cost, 0)
  document.getElementById("indigoSigilUpgrade2Effect").innerHTML = format(new Decimal(1.15).pow(game.indigoSigilUpgradesBought[1].pow(0.5)), 2)

  SU8amountCanBuy = Decimal.affordGeometricSeries(indigoSigilPowerTemp, 400, 2.5, game.indigoSigilUpgradesBought[2])
  SU8Cost = Decimal.sumGeometricSeries(SU8amountCanBuy, 400, 2.5, game.indigoSigilUpgradesBought[2])
  game.indigoSigilPower = game.indigoSigilPower.sub(SU8Cost)
  game.indigoSigilUpgradesBought[2] = game.indigoSigilUpgradesBought[2].add(SU8amountCanBuy)
  game.indigoSigilUpgrade3Cost = new Decimal(2.5).pow(game.indigoSigilUpgradesBought[2]).mul(400).floor()
  document.getElementById("indigoSigilUpgrade3Cost").innerHTML = format(game.indigoSigilUpgrade3Cost, 0)
  document.getElementById("indigoSigilUpgrade3Effect").innerHTML = format(new Decimal(2).pow(game.indigoSigilUpgradesBought[2].pow(0.6)), 2)

  violetSigilPowerTemp = game.violetSigilPower.div(2)
  SU9amountCanBuy = Decimal.affordGeometricSeries(violetSigilPowerTemp, 1, 1.5, game.violetSigilUpgradesBought[0])
  SU9Cost = Decimal.sumGeometricSeries(SU9amountCanBuy, 1, 1.5, game.violetSigilUpgradesBought[0])
  game.violetSigilPower = game.violetSigilPower.sub(SU9Cost)
  game.violetSigilUpgradesBought[0] = game.violetSigilUpgradesBought[0].add(SU9amountCanBuy)
  game.violetSigilUpgrade1Cost = new Decimal(1.5).pow(game.indigoSigilUpgradesBought[0]).floor()
  document.getElementById("violetSigilUpgrade1Cost").innerHTML = format(game.violetSigilUpgrade1Cost, 0)
  document.getElementById("violetSigilUpgrade1Effect").innerHTML = format(game.violetSigilUpgradesBought[0].add(1), 2)

  SU10amountCanBuy = Decimal.affordGeometricSeries(violetSigilPowerTemp, 5, 1.5, game.violetSigilUpgradesBought[1])
  SU10Cost = Decimal.sumGeometricSeries(SU10amountCanBuy, 5, 1.5, game.violetSigilUpgradesBought[1])
  game.violetSigilPower = game.violetSigilPower.sub(SU10Cost)
  game.violetSigilUpgradesBought[1] = game.violetSigilUpgradesBought[1].add(SU10amountCanBuy)
  game.violetSigilUpgrade2Cost = new Decimal(1.5).pow(game.violetSigilUpgradesBought[1]).mul(5).floor()
  document.getElementById("violetSigilUpgrade2Cost").innerHTML = format(game.violetSigilUpgrade2Cost, 0)
  document.getElementById("violetSigilUpgrade2Effect").innerHTML = format(new Decimal(1.3).pow(game.violetSigilUpgradesBought[1].pow(0.5)), 2)

  pinkSigilPowerTemp = game.pinkSigilPower.div(2)
  SU11amountCanBuy = Decimal.affordGeometricSeries(pinkSigilPowerTemp, 1, 1.5, game.pinkSigilUpgradesBought[0])
  SU11Cost = Decimal.sumGeometricSeries(SU11amountCanBuy, 1, 1.5, game.pinkSigilUpgradesBought[0])
  game.pinkSigilPower = game.pinkSigilPower.sub(SU11Cost)
  game.pinkSigilUpgradesBought[0] = game.pinkSigilUpgradesBought[0].add(SU11amountCanBuy)
  game.pinkSigilUpgrade1Cost = new Decimal(1.5).pow(game.pinkSigilUpgradesBought[0]).floor()
  document.getElementById("pinkSigilUpgrade1Cost").innerHTML = format(game.pinkSigilUpgrade1Cost, 0)
  document.getElementById("pinkSigilUpgrade1Effect").innerHTML = format(game.pinkSigilUpgradesBought[0].add(1), 2)

  SU12amountCanBuy = Decimal.affordGeometricSeries(pinkSigilPowerTemp, 500000, 2, game.pinkSigilUpgradesBought[2])
  SU12Cost = Decimal.sumGeometricSeries(SU12amountCanBuy, 500000, 2, game.pinkSigilUpgradesBought[2])
  game.pinkSigilPower = game.pinkSigilPower.sub(SU12Cost)
  game.pinkSigilUpgradesBought[2] = game.pinkSigilUpgradesBought[2].add(SU12amountCanBuy)
  game.pinkSigilUpgrade3Cost = new Decimal(2).pow(game.pinkSigilUpgradesBought[2]).mul(500000).round()
  document.getElementById("pinkSigilUpgrade3Cost").innerHTML = format(game.pinkSigilUpgrade3Cost, 0)
  document.getElementById("pinkSigilUpgrade3Effect").innerHTML = format(new Decimal(1.5).pow(game.pinkSigilUpgradesBought[2].pow(0.5)), 2)
}

function updateSigilResetter() {
  let amount = new Decimal(document.getElementById("sigilResetterAmount").value);
  if (!amount.isNan() && amount.gte(1)) game.sigilResetterAmount = amount.round();
  document.getElementById("sigilResetterAmount").value = game.sigilResetterAmount.toString();
  game.sigilResetterActive = document.getElementById("sigilResetterActive").checked;
  game.sigilResetterType = sigilColours.indexOf(document.getElementById("sigilResetterType").value.toLowerCase());
}

function sigilAutoResetter() {
  let type = sigilColours[game.sigilResetterType];
  if (game[type + "SigilsToGet"].gte(game.sigilResetterAmount)) {
    sigilReset(game.sigilResetterType + 1);
  }
}