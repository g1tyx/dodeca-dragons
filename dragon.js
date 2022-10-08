//Unlocks dragon
function unlockDragon() {
  if (game.gold.gte(200)) {
    game.gold = game.gold.sub(200)
    document.getElementById("unlockDragonButton").style.display = "none"
    document.getElementById("unlockAlchemyButton").style.display = "block"
    document.getElementsByClassName("box")[3].style.display = "block"
    document.getElementsByClassName("resourceRow")[2].style.display = "block"
    game.unlocks++
  }
}

//Handles buying new dragon stages
function upgradeDragon(x) {
  if (x == 1 && game.gold.gte(2500000)) {
    game.gold = game.gold.sub(2500000)
    document.getElementsByClassName("upgradeDragonButton")[0].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[1].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon2.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have an</a><br>Adult dragon"
    document.getElementById("dragonInfo").innerHTML = "Your large dragon friend inspires awe and fear, and spews fire for you."
    game.dragonStage = 2
  }
  else if (x == 2 && game.gold.gte(1e12)) {
    game.gold = game.gold.sub(1e12)
    document.getElementsByClassName("upgradeDragonButton")[1].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[2].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon3.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have an</a><br>Elder dragon"
    document.getElementById("dragonInfo").innerHTML = "Your strong and wise dragon friend rests upon your mountain of gold, and defends it with inferno-like breath."
    game.dragonStage = 3
  }
  else if (x == 3 && game.gold.gte(1e25)) {
    game.gold = game.gold.sub(1e25)
    document.getElementsByClassName("upgradeDragonButton")[2].style.display = "none"
    document.getElementsByClassName("upgradeDragonButton")[3].style.display = "block"
    document.getElementById("dragonImg").src = "img/iconDragon4.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Dark dragon"
    document.getElementById("dragonInfo").innerHTML = "Your menacing dark dragon calls upon the power of the void itself to defend your empire."
    game.dragonStage = 4
  }
  else if (x == 4 && game.gold.gte(1e150)) {
    game.gold = game.gold.sub(1e150)
    document.getElementsByClassName("upgradeDragonButton")[3].style.display = "none"
    document.getElementById("dragonImg").src = "img/iconDragon5.png"
    document.getElementById("dragonTitle").innerHTML = "<a style='font-size: 14px'>You have a</a><br>Light dragon"
    document.getElementById("dragonInfo").innerHTML = "Your heavenly light dragon focuses the power of the gods themselves to protect your people from harm. It can also fire lightning out of its claws, because it's cool like that."
    game.dragonStage = 5
    document.getElementsByClassName("box")[3].style.height = "500px"
    document.getElementById("dragonAffectionStuff").style.display = "block"
  }
}

//Spending time with your dragon
function dragonSpendTime() {
  if (game.dragonTimeCooldown == 0 && !game.challengesActive) {
    if (game.darkMagicUpgradesBought[2]) {dragonTimeToGet = new Decimal(10)}
    else {dragonTimeToGet = new Decimal(1)}
    if (game.unlocks >= 12) dragonTimeToGet = dragonTimeToGet.mul(new Decimal(2).pow(game.indigoSigilUpgrade4Bought.pow(0.6)))
    game.dragonTimeSpent = game.dragonTimeSpent.add(dragonTimeToGet.floor())
    game.dragonTimeCooldown = 30
    document.getElementById("dragonSpendTimeButton").disabled = true
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
  }
}

//Feeding your dragon
function dragonFeed() {
  if (game.magifolds.gte(game.dragonFeedCost) && !game.challengesActive) {
    game.dragonFood = game.dragonFood.add(1)
    game.dragonFeedCost = new Decimal(10).pow(new Decimal(2).pow(game.dragonFood).mul(8).round())
    document.getElementById("dragonFeedCost").innerHTML = format(game.dragonFeedCost, 0)
    document.getElementById("dragonFood").innerHTML = format(game.dragonFood, 0)
    document.getElementById("dragonFoodEffect").innerHTML = format(new Decimal(1.3).pow(game.dragonFood), 3)
    //Resetting all the score and magifold stuff
    if (game.blueSigilUpgrade4Bought != 1) {
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
    }
  }
}

//Petting your dragon
//This code could probably be shortened a lot!
function dragonPet() {
  if (game.dragonPets == 0 && game.cyanSigils.gte(1000)) {
    game.cyanSigils = game.cyanSigils.sub(1000)
    game.dragonPets++
    document.getElementById("dragonPetRequirement").innerHTML = "blue"
    document.getElementById("dragonPets").innerHTML = game.dragonPets
    document.getElementById("dragonPetEffect").innerHTML = format(new Decimal(5).pow(game.dragonPets ** 0.5), 2)
  }
  else if (game.dragonPets == 1 && game.blueSigils.gte(1000)) {
    game.blueSigils = game.blueSigils.sub(1000)
    game.dragonPets++
    document.getElementById("dragonPetRequirement").innerHTML = "indigo"
    document.getElementById("dragonPets").innerHTML = game.dragonPets
    document.getElementById("dragonPetEffect").innerHTML = format(new Decimal(5).pow(game.dragonPets ** 0.5), 2)
  }
  else if (game.dragonPets == 2 && game.indigoSigils.gte(1000)) {
    game.indigoSigils = game.indigoSigils.sub(1000)
    game.dragonPets++
    document.getElementById("dragonPetRequirement").innerHTML = "violet"
    document.getElementById("dragonPets").innerHTML = game.dragonPets
    document.getElementById("dragonPetEffect").innerHTML = format(new Decimal(5).pow(game.dragonPets ** 0.5), 2)
  }
  else if (game.dragonPets == 3 && game.violetSigils.gte(1000)) {
    game.violetSigils = game.violetSigils.sub(1000)
    game.dragonPets++
    document.getElementById("dragonPetRequirement").innerHTML = "pink"
    document.getElementById("dragonPets").innerHTML = game.dragonPets
    document.getElementById("dragonPetEffect").innerHTML = format(new Decimal(5).pow(game.dragonPets ** 0.5), 2)
  }
}