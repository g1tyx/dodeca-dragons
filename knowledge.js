function randomizeKnowledgeTrade(trade) {
  sigilColourOptions = [1,2,3,4,5]
  sigilColourOptions.splice(Math.floor(Math.random() * 5), 1)
  sigilColourOptions.splice(Math.floor(Math.random() * 4), 1)
  if (game["knowledgeTrade" + trade + "SigilTypes"]) game["knowledgeTrade" + trade + "SigilTypes"] = sigilColourOptions;
  if (game["knowledgeTrade" + trade + "Multipliers"]) game["knowledgeTrade" + trade + "Multipliers"] = [Math.random() + 0.5, Math.random() + 0.5, Math.random() + 0.5, Math.random() / 2 + 1]
  if (game["knowledgeTrade" + trade + "Amounts"]) {
    game["knowledgeTrade" + trade + "Amounts"][0] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[sigilColourOptions[0]-1]).mul(game["knowledgeTrade" + trade + "Multipliers"][0]).mul(7.5).floor().mul(100)
    game["knowledgeTrade" + trade + "Amounts"][1] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[sigilColourOptions[1]-1]).mul(game["knowledgeTrade" + trade + "Multipliers"][1]).mul(7.5).floor().mul(100)
    game["knowledgeTrade" + trade + "Amounts"][2] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[sigilColourOptions[2]-1]).mul(game["knowledgeTrade" + trade + "Multipliers"][2]).mul(7.5).floor().mul(100)
  }
  if (game["knowledgeTrade" + trade + "Reward"]) {
    game["knowledgeTrade" + trade + "Reward"] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(game["knowledgeTrade" + trade + "Multipliers"][3])
    game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)))
    if (game.tomeUpgradesBought[2]) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(2)
    if (game.tomeUpgradesBought[6] == true) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(game.totalTomes.pow(1.2).add(1))
    game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].floor()
  }

  loadKnowledgeTrade(trade)
}

function setKnowledgeTrade(trade) {
  if (game["knowledgeTrade" + trade + "Amounts"]) {
    game["knowledgeTrade" + trade + "Amounts"][0] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[game["knowledgeTrade" + trade + "SigilTypes"][0] - 1]).mul(game["knowledgeTrade" + trade + "Multipliers"][0]).mul(7.5).floor().mul(100)
    game["knowledgeTrade" + trade + "Amounts"][1] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[game["knowledgeTrade" + trade + "SigilTypes"][1] - 1]).mul(game["knowledgeTrade" + trade + "Multipliers"][1]).mul(7.5).floor().mul(100)
    game["knowledgeTrade" + trade + "Amounts"][2] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[game["knowledgeTrade" + trade + "SigilTypes"][2] - 1]).mul(game["knowledgeTrade" + trade + "Multipliers"][2]).mul(7.5).floor().mul(100)
  }
  if (game["knowledgeTrade" + trade + "Reward"]) {
    game["knowledgeTrade" + trade + "Reward"] = new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(game["knowledgeTrade" + trade + "Multipliers"][3])
    game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)))
    if (game.tomeUpgradesBought[2]) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(2)
    if (game.tomeUpgradesBought[6] == true) game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].mul(game.totalTomes.pow(1.2).add(1))
    game["knowledgeTrade" + trade + "Reward"] = game["knowledgeTrade" + trade + "Reward"].floor()
  }
  
  loadKnowledgeTrade(trade)
}

function resetKnowledgeTrades() {
  game.knowledgeTradeLevel = new Decimal(1)
  document.getElementById("knowledgeTradeLevel").innerHTML = game.knowledgeTradeLevel
  if (game.knowledgeTradeLevel.lt(1e308)) document.getElementById("knowledgeLevelRange").value = game.knowledgeTradeLevel.toNumber()
  setKnowledgeTrade(1)
  setKnowledgeTrade(2)
  setKnowledgeTrade(3)
}

function loadKnowledgeTrade(trade) {
  document.getElementsByClassName("knowledgeTradeInfo")[trade-1].innerHTML = "Lv" + format(game.knowledgeTradeLevel, 0) + " - " + format(game["knowledgeTrade" + trade + "Reward"], 0) + " knowledge<br>Costs:<br><img src='img/iconSigil" + (game["knowledgeTrade" + trade + "SigilTypes"][0]) + ".png'> " + format(game["knowledgeTrade" + trade + "Amounts"][0], 0) + " " + sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][0]-1] + " sigils<br><img src='img/iconSigil" + (game["knowledgeTrade" + trade + "SigilTypes"][1]) + ".png'> " + format(game["knowledgeTrade" + trade + "Amounts"][1], 0) + " " + sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][1]-1] + " sigils<br><img src='img/iconSigil" + (game["knowledgeTrade" + trade + "SigilTypes"][2]) + ".png'> " + format(game["knowledgeTrade" + trade + "Amounts"][2], 0) + " " + sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][2]-1] + " sigils"
}

function updateKnowledgeTradeLevel() {
  game.knowledgeTradeLevel = new Decimal(document.getElementById("knowledgeLevelRange").value)
  document.getElementById("knowledgeTradeLevel").innerHTML = game.knowledgeTradeLevel
  document.getElementsByClassName("knowledgeTradeCostRange")[0].innerHTML = format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[0]).mul(3.75).floor().mul(100), 0) + " - " + format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[0]).mul(11.25).floor().mul(100), 0)
  document.getElementsByClassName("knowledgeTradeCostRange")[1].innerHTML = format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[1]).mul(3.75).floor().mul(100), 0) + " - " + format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[1]).mul(11.25).floor().mul(100), 0)
  document.getElementsByClassName("knowledgeTradeCostRange")[2].innerHTML = format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[2]).mul(3.75).floor().mul(100), 0) + " - " + format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[2]).mul(11.25).floor().mul(100), 0)
  document.getElementsByClassName("knowledgeTradeCostRange")[3].innerHTML = format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[3]).mul(3.75).floor().mul(100), 0) + " - " + format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[3]).mul(11.25).floor().mul(100), 0)
  document.getElementsByClassName("knowledgeTradeCostRange")[4].innerHTML = format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[4]).mul(3.75).floor().mul(100), 0) + " - " + format(new Decimal(1.5).pow(game.knowledgeTradeLevel.sub(1)).mul(knowledgeMultipliers[4]).mul(11.25).floor().mul(100), 0)
}

function purchaseKnowledgeTrade(trade) {
  sigilColour1 = sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][0]-1]
  sigilColour2 = sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][1]-1]
  sigilColour3 = sigilColours[game["knowledgeTrade" + trade + "SigilTypes"][2]-1]
  if (game[sigilColour1 + "Sigils"].gte(game["knowledgeTrade" + trade + "Amounts"][0]) && game[sigilColour2 + "Sigils"].gte(game["knowledgeTrade" + trade + "Amounts"][1]) && game[sigilColour3 + "Sigils"].gte(game["knowledgeTrade" + trade + "Amounts"][2])) {
    game.knowledge = game.knowledge.add(game["knowledgeTrade" + trade + "Reward"])
    if (game.knowledge.gte(game.highestKnowledge)) game.highestKnowledge = game.knowledge
    game[sigilColour1 + "Sigils"] = game[sigilColour1 + "Sigils"].sub(game["knowledgeTrade" + trade + "Amounts"][0])
    game[sigilColour2 + "Sigils"] = game[sigilColour2 + "Sigils"].sub(game["knowledgeTrade" + trade + "Amounts"][1])
    game[sigilColour3 + "Sigils"] = game[sigilColour3 + "Sigils"].sub(game["knowledgeTrade" + trade + "Amounts"][2])
    randomizeKnowledgeTrade(trade)
  }
}

function buyKnowledgeUpgrade(x) {
  //For each upgrade (if affordable): subtracts knowledge based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.knowledge.gte(game.knowledgeUpgradeCosts[0])) {
    game.knowledge = game.knowledge.sub(game.knowledgeUpgradeCosts[0])
    game.knowledgeUpgradesBought[0] = game.knowledgeUpgradesBought[0].add(1)
    game.knowledgeUpgradeCosts[0] = new Decimal(2).pow(game.knowledgeUpgradesBought[0]).mul(20).floor()
    document.getElementById("knowledgeUpgrade1Cost").innerHTML = format(game.knowledgeUpgradeCosts[0], 0)
    document.getElementById("knowledgeUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.knowledgeUpgradesBought[0].pow(0.5)), 2)
  }
  else if (x==2 && game.knowledge.gte(game.knowledgeUpgradeCosts[1])) {
    game.knowledge = game.knowledge.sub(game.knowledgeUpgradeCosts[1])
    game.knowledgeUpgradesBought[1] = game.knowledgeUpgradesBought[1].add(1)
    game.knowledgeUpgradeCosts[1] = new Decimal(5).pow(game.knowledgeUpgradesBought[1]).mul(50).floor()
    document.getElementById("knowledgeUpgrade2Cost").innerHTML = format(game.knowledgeUpgradeCosts[1], 0)
    document.getElementById("knowledgeUpgrade2Effect").innerHTML = format(new Decimal(5).pow(game.knowledgeUpgradesBought[1].pow(0.5)), 2)
  }
  else if (x==3 && game.knowledge.gte(100000)) {
    game.knowledge = game.knowledge.sub(100000)
    game.knowledgeUpgradesBought[2] = new Decimal(1)
    document.getElementsByClassName("knowledgeUpgrade")[2].disabled = true
    document.getElementsByClassName("box")[21].style.display = "block"
    document.getElementsByClassName("resourceRow")[13].style.display = "block"
    addUnlock() //sets unlock to 16
  }
}

function buyTome() {
  if (game.knowledge.gte(game.tomeCost)) {
    game.knowledge = game.knowledge.sub(game.tomeCost)
    game.tomes = game.tomes.add(1)
    game.totalTomes = game.totalTomes.add(1)
    if (game.tomeUpgradesBought[7]) {game.tomeCost = new Decimal(1.1).pow(game.totalTomes).mul(100000)}
    else if (game.tomeUpgradesBought[4]) {game.tomeCost = new Decimal(1.3).pow(game.totalTomes).mul(100000)}
    else {game.tomeCost = new Decimal(1.5).pow(game.totalTomes).mul(100000)}
    document.getElementById("tomeCost").innerHTML = format(game.tomeCost, 0)
  }
}

function buyMaxTomes() {
  if (game.tomeUpgradesBought[7]) {
    amtToBuy = Decimal.affordGeometricSeries(game.knowledge, 100000, 1.1, game.totalTomes)
    costToBuy = Decimal.sumGeometricSeries(amtToBuy, 100000, 1.1, game.totalTomes)
  }
  else if (game.tomeUpgradesBought[4]) {
    amtToBuy = Decimal.affordGeometricSeries(game.knowledge, 100000, 1.3, game.totalTomes)
    costToBuy = Decimal.sumGeometricSeries(amtToBuy, 100000, 1.3, game.totalTomes)
  }
  else {
    amtToBuy = Decimal.affordGeometricSeries(game.knowledge, 100000, 1.5, game.totalTomes)
    costToBuy = Decimal.sumGeometricSeries(amtToBuy, 100000, 1.5, game.totalTomes)
  }
  game.tomes = game.tomes.add(amtToBuy)
  game.totalTomes = game.totalTomes.add(amtToBuy)
  game.knowledge = game.knowledge.sub(costToBuy)
  if (game.tomeUpgradesBought[7]) {game.tomeCost = new Decimal(1.1).pow(game.totalTomes).mul(100000)}
  else if (game.tomeUpgradesBought[4]) {game.tomeCost = new Decimal(1.3).pow(game.totalTomes).mul(100000)}
  else {game.tomeCost = new Decimal(1.5).pow(game.totalTomes).mul(100000)}
  document.getElementById("tomeCost").innerHTML = format(game.tomeCost, 0)
}

//Tome upgrades
function buyTomeUpgrade(x) {
  //Checks that the tome upgrade is not bought and that the player's tome amount is greater/equal to the corresponding upgrade cost
  if (game.tomeUpgradesBought[x-1] != true && game.tomes.gte(tomeUpgradeCosts[x-1])) {
    game.tomes = game.tomes.sub(tomeUpgradeCosts[x-1])
    game.tomeUpgradesBought[x-1] = true
    document.getElementsByClassName("tomeUpgrade")[x-1].disabled = true
    if (x==5) {
      game.tomeCost = new Decimal(1.3).pow(game.totalTomes).mul(100000)
      document.getElementById("tomeCost").innerHTML = format(game.tomeCost, 0)
    }
    if (x==6) {
      document.getElementsByClassName("box")[22].style.display = "block"
      document.getElementsByClassName("resourceRow")[14].style.display = "block"
      addUnlock() //sets unlock to 17
    }
    if (x==8) {
      game.tomeCost = new Decimal(1.1).pow(game.totalTomes).mul(100000)
      document.getElementById("tomeCost").innerHTML = format(game.tomeCost, 0)
    }
  }
}