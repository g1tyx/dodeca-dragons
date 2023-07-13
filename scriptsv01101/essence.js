function unlockEssences() {
	if (game.gold.gte("ee500000")) {
		document.getElementsByClassName("box")[41].style.display = "block"
		document.getElementsByClassName("box")[42].style.display = "block"
		document.getElementsByClassName("resourceRow")[27].style.display = "block"
		document.getElementsByClassName("resourceRow")[28].style.display = "block"
		document.getElementById("unlockEssencesButton").style.display = "none"
		addUnlock() //sets unlock to 33
	}
}

function buyLightEssenceUpgrade(x) {
	if (game.lightEssence.gte(game.lightEssenceUpgradeCosts[x-1])) {
		game.lightEssence = game.lightEssence.sub(game.lightEssenceUpgradeCosts[x-1])
		game.lightEssenceUpgradesBought[x-1] = game.lightEssenceUpgradesBought[x-1].add(1)
		game.lightEssenceUpgradeCosts[x-1] = new Decimal(lightEssenceUpgradeBase[x]).pow(game.lightEssenceUpgradesBought[x-1]).mul(lightEssenceUpgradeInitialCosts[x]).floor()
	}
}

function buyDarkEssenceUpgrade(x) {
	if (game.darkEssence.gte(game.darkEssenceUpgradeCosts[x-1])) {
		game.darkEssence = game.darkEssence.sub(game.darkEssenceUpgradeCosts[x-1])
		game.darkEssenceUpgradesBought[x-1] = game.darkEssenceUpgradesBought[x-1].add(1)
		game.darkEssenceUpgradeCosts[x-1] = new Decimal(darkEssenceUpgradeBase[x]).pow(game.darkEssenceUpgradesBought[x-1]).mul(darkEssenceUpgradeInitialCosts[x]).floor()
	}
}