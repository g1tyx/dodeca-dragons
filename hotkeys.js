function generateHotkeyText() {
  let hotkeyText = '<p style="font-weight: bold">Shift+S - manual save';
  if (game.unlocks >= 3) {
    hotkeyText += '<br><a style="color: #288">P - platinum</a>'
  }
  if (game.unlocks >= 4) {
    hotkeyText += '<br><a style="color: #90d">M - magic</a>'
  }
  if (game.unlocks >= 5) {
    hotkeyText += '<br><a style="color: #60d">C - enter/exit magic challenges</a>'
  }
  if (game.unlocks >= 7) {
    hotkeyText += '<br><a style="color: #282">U - uranium</a>'
  }
  if (game.unlocks >= 10) {
    hotkeyText += '<br><a style="color: #06b">Shift+1 - cyan sigils</a>, <a style="color: #00b">Shift+2 - blue sigils</a>, et cetera'
  }
  if (game.unlocks >= 18) {
    hotkeyText += '<br><a style="color: #f00">H - enter/exit hell</a>'
  }
  if (game.unlocks >= 20) {
    hotkeyText += '<br><a style="color: #25e">Shift+P - plutonium</a>'
  }
  hotkeyText += '</p>'
  return hotkeyText
}

Mousetrap.bind('shift+t', timeStopStart);
Mousetrap.bind('m', magicCheck);
Mousetrap.bind('p', platinumConvert);
Mousetrap.bind('u', uraniumConvert);
Mousetrap.bind('shift+p', plutoniumConvert);
Mousetrap.bind('c', enterExitMagicChallenges);
Mousetrap.bind('h', enterExitHell);
Mousetrap.bind('shift+1', () => {if (game.unlocks >= 10) sigilCheck(1)}); //cyan
Mousetrap.bind('shift+2', () => {if (game.unlocks >= 11) sigilCheck(2)}); //blue
Mousetrap.bind('shift+3', () => {if (game.unlocks >= 12) sigilCheck(3)}); //indigo
Mousetrap.bind('shift+4', () => {if (game.unlocks >= 13) sigilCheck(4)}); //violet
Mousetrap.bind('shift+5', () => {if (game.unlocks >= 14) sigilCheck(5)}); //pink
Mousetrap.bind('shift+6', () => {if (game.unlocks >= 21) sigilCheck(6)}); //red
Mousetrap.bind('shift+7', () => {if (game.unlocks >= 22) sigilCheck(7)}); //orange
Mousetrap.bind('shift+8', () => {if (game.unlocks >= 23) sigilCheck(8)}); //yellow