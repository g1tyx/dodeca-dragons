
//Unlocks fire upgrades
function buyFireUpgrades() {
  if (game.gold.gte(5000)) {
    game.gold = game.gold.sub(5000)
    document.getElementById("buyFireUpgradesButton").style.display = "none"
    document.getElementsByClassName("box")[4].style.display = "block"
    document.getElementsByClassName("upgradeDragonButton")[0].style.display = "block"
    game.unlocks++
  }
}

/*
function buyFireUpgrade(x) {
  //For each upgrade (if affordable): subtracts fire based on cost, adds 1 to the upgrade amount bought, updates the cost
  if (x==1 && game.fire.gte(game.fireUpgrade1Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade1Cost)
    game.fireUpgrade1Bought = game.fireUpgrade1Bought.add(1)
    game.fireUpgrade1Cost = new Decimal(1.8).pow(game.fireUpgrade1Bought).mul(50).floor()
    document.getElementById("fireUpgrade1Cost").innerHTML = format(game.fireUpgrade1Cost, 0)
    if (game.magicUpgradesBought[13]) {document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7)), 2)}
    else {document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6)), 2)}
  }
  else if (x==2 && game.fire.gte(game.fireUpgrade2Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade2Cost)
    game.fireUpgrade2Bought = game.fireUpgrade2Bought.add(1)
    game.fireUpgrade2Cost = new Decimal(2).pow(game.fireUpgrade2Bought).mul(100).floor()
    document.getElementById("fireUpgrade2Cost").innerHTML = format(game.fireUpgrade2Cost, 0)
  }
  else if (x==3 && game.fire.gte(game.fireUpgrade3Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade3Cost)
    game.fireUpgrade3Bought = game.fireUpgrade3Bought.add(1)
    game.fireUpgrade3Cost = new Decimal(1.4).pow(game.fireUpgrade3Bought).mul(100).floor()
    document.getElementById("fireUpgrade3Cost").innerHTML = format(game.fireUpgrade3Cost, 0)
  }
  else if (x==4 && game.fire.gte(game.fireUpgrade4Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade4Cost)
    game.fireUpgrade4Bought = game.fireUpgrade4Bought.add(1)
    game.fireUpgrade4Cost = new Decimal(1.5).pow(game.fireUpgrade4Bought).mul(500).floor()
    document.getElementById("fireUpgrade4Cost").innerHTML = format(game.fireUpgrade4Cost, 0)
  }
  else if (x==5 && game.fire.gte(game.fireUpgrade5Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade5Cost)
    game.fireUpgrade5Bought = game.fireUpgrade5Bought.add(1)
    game.fireUpgrade5Cost = new Decimal(2.5).pow(game.fireUpgrade5Bought).mul(500).floor()
    document.getElementById("fireUpgrade5Cost").innerHTML = format(game.fireUpgrade5Cost, 0)
  }
  else if (x==6 && game.fire.gte(game.fireUpgrade6Cost)) {
    game.fire = game.fire.sub(game.fireUpgrade6Cost)
    game.fireUpgrade6Bought = game.fireUpgrade6Bought.add(1)
    game.fireUpgrade6Cost = new Decimal(5).pow(game.fireUpgrade6Bought).mul(2e7).floor()
    document.getElementById("fireUpgrade6Cost").innerHTML = format(game.fireUpgrade6Cost, 0)
    document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)
  }
}
*/

function buyFireUpgrade(x) {
  let costString = 'fireUpgrade' + x + 'Cost'; //string identifying the property for this upgrade's cost
  let boughtString = 'fireUpgrade' + x + 'Bought'; //string identifying the property for how many times this upgrade has been bought
  if (game[costString] === undefined || !game.fire.gte(game[costString])) return; //make sure the upgrade provided by x actually exists, and that we can afford it
  game.fire = game.fire.sub(game[costString]);
  game[boughtString] = game[boughtString].add(1);
  game[costString] = new Decimal(fireUpgradeBase[x]).pow(game[boughtString]).mul(fireUpgradeInitialCosts[x]).floor(); //update cost to reflect new count
  document.getElementById(costString).innerHTML = format(game[costString], 0);
  switch (x) {
    case 1:
      //the effect of upgrade 1 depends on whether magic upgrade 13 has been purchased
      let upg1eff = game.magicUpgradesBought[13] ? new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7)) : new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6));
      document.getElementById("fireUpgrade1Effect").innerHTML = format(upg1eff, 2)
      break;
    case 6:
      document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)
      break;
  }
}

function fireBuyMax(x) {
  //Determines the maximum upgrades buyable, subtracts fire based on cost, adds to the upgrade amount bought, updates the cost
  switch(x) {
    case 1:
      FU1amountCanBuy = Decimal.affordGeometricSeries(game.fire, 50, 1.8, game.fireUpgrade1Bought)
      FU1Cost = Decimal.sumGeometricSeries(FU1amountCanBuy, 50, 1.8, game.fireUpgrade1Bought)
      game.fire = game.fire.sub(FU1Cost)
      game.fireUpgrade1Bought = game.fireUpgrade1Bought.add(FU1amountCanBuy)
      game.fireUpgrade1Cost = new Decimal(1.8).pow(game.fireUpgrade1Bought).mul(50).floor()
      document.getElementById("fireUpgrade1Cost").innerHTML = format(game.fireUpgrade1Cost, 0)
      if (game.magicUpgradesBought[13]) {document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7)), 2)}
      else {document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6)), 2)}
      break
    case 2:
      FU2amountCanBuy = Decimal.affordGeometricSeries(game.fire, 100, 2, game.fireUpgrade2Bought)
      FU2Cost = Decimal.sumGeometricSeries(FU2amountCanBuy, 100, 2, game.fireUpgrade2Bought)
      game.fire = game.fire.sub(FU2Cost)
      game.fireUpgrade2Bought = game.fireUpgrade2Bought.add(FU2amountCanBuy)
      game.fireUpgrade2Cost = new Decimal(2).pow(game.fireUpgrade2Bought).mul(100).floor()
      document.getElementById("fireUpgrade2Cost").innerHTML = format(game.fireUpgrade2Cost, 0)
      break
    case 3:
      FU3amountCanBuy = Decimal.affordGeometricSeries(game.fire, 100, 1.4, game.fireUpgrade3Bought)
      FU3Cost = Decimal.sumGeometricSeries(FU3amountCanBuy, 100, 1.4, game.fireUpgrade3Bought)
      game.fire = game.fire.sub(FU3Cost)
      game.fireUpgrade3Bought = game.fireUpgrade3Bought.add(FU3amountCanBuy)
      game.fireUpgrade3Cost = new Decimal(1.4).pow(game.fireUpgrade3Bought).mul(100).floor()
      document.getElementById("fireUpgrade3Cost").innerHTML = format(game.fireUpgrade3Cost, 0)
      break
    case 4:
      FU4amountCanBuy = Decimal.affordGeometricSeries(game.fire, 500, 1.5, game.fireUpgrade4Bought)
      FU4Cost = Decimal.sumGeometricSeries(FU4amountCanBuy, 500, 1.5, game.fireUpgrade4Bought)
      game.fire = game.fire.sub(FU4Cost)
      game.fireUpgrade4Bought = game.fireUpgrade4Bought.add(FU4amountCanBuy)
      game.fireUpgrade4Cost = new Decimal(1.5).pow(game.fireUpgrade4Bought).mul(500).floor()
      document.getElementById("fireUpgrade4Cost").innerHTML = format(game.fireUpgrade4Cost, 0)
      break
    case 5:
      FU5amountCanBuy = Decimal.affordGeometricSeries(game.fire, 500, 2.5, game.fireUpgrade5Bought)
      FU5Cost = Decimal.sumGeometricSeries(FU5amountCanBuy, 500, 2.5, game.fireUpgrade5Bought)
      game.fire = game.fire.sub(FU5Cost)
      game.fireUpgrade5Bought = game.fireUpgrade5Bought.add(FU5amountCanBuy)
      game.fireUpgrade5Cost = new Decimal(2.5).pow(game.fireUpgrade5Bought).mul(500).floor()
      document.getElementById("fireUpgrade5Cost").innerHTML = format(game.fireUpgrade5Cost, 0)
      break
    case 6:
      FU6amountCanBuy = Decimal.affordGeometricSeries(game.fire, 2e7, 5, game.fireUpgrade6Bought)
      FU6Cost = Decimal.sumGeometricSeries(FU6amountCanBuy, 2e7, 5, game.fireUpgrade6Bought)
      game.fire = game.fire.sub(FU6Cost)
      game.fireUpgrade6Bought = game.fireUpgrade6Bought.add(FU6amountCanBuy)
      game.fireUpgrade6Cost = new Decimal(5).pow(game.fireUpgrade6Bought).mul(2e7).floor()
      document.getElementById("fireUpgrade6Cost").innerHTML = format(game.fireUpgrade6Cost, 0)
      document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)
      break
  }
}

function fireMaxAll() {
  //For each upgrade in order (if affordable): determines the maximum upgrades buyable, subtracts fire based on cost, adds to the upgrade amount bought, updates the cost
  FU1amountCanBuy = Decimal.affordGeometricSeries(game.fire, 50, 1.8, game.fireUpgrade1Bought)
  FU1Cost = Decimal.sumGeometricSeries(FU1amountCanBuy, 50, 1.8, game.fireUpgrade1Bought)
  game.fire = game.fire.sub(FU1Cost)
  game.fireUpgrade1Bought = game.fireUpgrade1Bought.add(FU1amountCanBuy)
  game.fireUpgrade1Cost = new Decimal(1.8).pow(game.fireUpgrade1Bought).mul(50).floor()
  document.getElementById("fireUpgrade1Cost").innerHTML = format(game.fireUpgrade1Cost, 0)
  if (game.magicUpgradesBought[13]) {document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(3.5).pow(game.fireUpgrade1Bought.pow(0.7)), 2)}
  else {document.getElementById("fireUpgrade1Effect").innerHTML = format(new Decimal(2).pow(game.fireUpgrade1Bought.pow(0.6)), 2)}
  
  FU2amountCanBuy = Decimal.affordGeometricSeries(game.fire, 100, 2, game.fireUpgrade2Bought)
  FU2Cost = Decimal.sumGeometricSeries(FU2amountCanBuy, 100, 2, game.fireUpgrade2Bought)
  game.fire = game.fire.sub(FU2Cost)
  game.fireUpgrade2Bought = game.fireUpgrade2Bought.add(FU2amountCanBuy)
  game.fireUpgrade2Cost = new Decimal(2).pow(game.fireUpgrade2Bought).mul(100).floor()
  document.getElementById("fireUpgrade2Cost").innerHTML = format(game.fireUpgrade2Cost, 0)

  FU3amountCanBuy = Decimal.affordGeometricSeries(game.fire, 100, 1.4, game.fireUpgrade3Bought)
  FU3Cost = Decimal.sumGeometricSeries(FU3amountCanBuy, 100, 1.4, game.fireUpgrade3Bought)
  game.fire = game.fire.sub(FU3Cost)
  game.fireUpgrade3Bought = game.fireUpgrade3Bought.add(FU3amountCanBuy)
  game.fireUpgrade3Cost = new Decimal(1.4).pow(game.fireUpgrade3Bought).mul(100).floor()
  document.getElementById("fireUpgrade3Cost").innerHTML = format(game.fireUpgrade3Cost, 0)

  FU4amountCanBuy = Decimal.affordGeometricSeries(game.fire, 500, 1.5, game.fireUpgrade4Bought)
  FU4Cost = Decimal.sumGeometricSeries(FU4amountCanBuy, 500, 1.5, game.fireUpgrade4Bought)
  game.fire = game.fire.sub(FU4Cost)
  game.fireUpgrade4Bought = game.fireUpgrade4Bought.add(FU4amountCanBuy)
  game.fireUpgrade4Cost = new Decimal(1.5).pow(game.fireUpgrade4Bought).mul(500).floor()
  document.getElementById("fireUpgrade4Cost").innerHTML = format(game.fireUpgrade4Cost, 0)

  FU5amountCanBuy = Decimal.affordGeometricSeries(game.fire, 500, 2.5, game.fireUpgrade5Bought)
  FU5Cost = Decimal.sumGeometricSeries(FU5amountCanBuy, 500, 2.5, game.fireUpgrade5Bought)
  game.fire = game.fire.sub(FU5Cost)
  game.fireUpgrade5Bought = game.fireUpgrade5Bought.add(FU5amountCanBuy)
  game.fireUpgrade5Cost = new Decimal(2.5).pow(game.fireUpgrade5Bought).mul(500).floor()
  document.getElementById("fireUpgrade5Cost").innerHTML = format(game.fireUpgrade5Cost, 0)

  FU6amountCanBuy = Decimal.affordGeometricSeries(game.fire, 2e7, 5, game.fireUpgrade6Bought)
  FU6Cost = Decimal.sumGeometricSeries(FU6amountCanBuy, 2e7, 5, game.fireUpgrade6Bought)
  game.fire = game.fire.sub(FU6Cost)
  game.fireUpgrade6Bought = game.fireUpgrade6Bought.add(FU6amountCanBuy)
  game.fireUpgrade6Cost = new Decimal(5).pow(game.fireUpgrade6Bought).mul(2e7).floor()
  document.getElementById("fireUpgrade6Cost").innerHTML = format(game.fireUpgrade6Cost, 0)
  document.getElementById("fireUpgrade6Effect").innerHTML = format(new Decimal(3).pow(game.fireUpgrade6Bought.pow(0.6)), 2)
}

function fireAutoMaxAll() {
  if (!game.fireAutoMaxAll) {
    game.fireAutoMaxAll = true
    document.getElementById("fireAutoMaxAllButton").innerHTML = "Auto max all: On"
  }
  else {
    game.fireAutoMaxAll = false
    document.getElementById("fireAutoMaxAllButton").innerHTML = "Auto max all: Off"
  }
}