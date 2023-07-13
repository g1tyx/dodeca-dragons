function gainSpore() {
	if (game.gold.gte(game.sporeCost)) {
		game.spores = game.spores.add(1)
		game.sporeCost = new Decimal(10).pow(new Decimal(10).pow(game.spores.mul(2500).add(7500)))
	}
}

function gainMaxSpores() {
	if (game.gold.gte(game.sporeCost)) {
		let maxSpores = game.gold.log10().log10().div(2500).sub(game.spores).sub(2).floor()
		game.spores = game.spores.add(maxSpores)
		game.sporeCost = new Decimal(10).pow(new Decimal(10).pow(game.spores.mul(2500).add(7500)))
	}
}

function buyPlagueUpgrade(x) {
	if (game.cosmicPlague.gte(game.plagueUpgradeCosts[x-1])) {
		game.cosmicPlague = game.cosmicPlague.sub(game.plagueUpgradeCosts[x-1])
		game.plagueUpgradesBought[x-1] = game.plagueUpgradesBought[x-1].add(1)
		game.plagueUpgradeCosts[x-1] = new Decimal(plagueUpgradeBase[x]).pow(game.plagueUpgradesBought[x-1]).mul(plagueUpgradeInitialCosts[x]).floor()
	}
}

function plagueBuyMax(x) {
  let amtToBuy = Decimal.affordGeometricSeries(game.cosmicPlague, plagueUpgradeInitialCosts[x], plagueUpgradeBase[x], game.plagueUpgradesBought[x-1]); //calculate how many we can afford
  let costToBuy = Decimal.sumGeometricSeries(amtToBuy, plagueUpgradeInitialCosts[x], plagueUpgradeBase[x], game.plagueUpgradesBought[x-1]); //determine total cost
  if (costToBuy.lt("e1e9")) game.cosmicPlague = game.cosmicPlague.sub(costToBuy);
  game.plagueUpgradesBought[x-1] = game.plagueUpgradesBought[x-1].add(amtToBuy);
  game.plagueUpgradeCosts[x-1] = new Decimal(plagueUpgradeBase[x]).pow(game.plagueUpgradesBought[x-1]).mul(plagueUpgradeInitialCosts[x]).floor()
}