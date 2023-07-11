function gainSpore() {
	if (game.gold.gte(game.sporeCost)) {
		game.spores = game.spores.add(1)
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