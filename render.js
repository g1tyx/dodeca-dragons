renderVars = {
  posX: 0,
  posY: 0,
  mousePosX: 0,
  mousePosY: 0,
  mouseIsDown: false,
  diffX: 0,
  diffY: 0,
  currentMousePos: [0,0],
  zoomMultiplier: 2,
}

//Zoom stuff!
//renderVars.posX = 0 - window.innerWidth / (renderVars.zoomMultiplier * 2)
//renderVars.posY = 0 - window.innerHeight / (renderVars.zoomMultiplier * 2)
//document.body.style.zoom = (renderVars.zoomMultiplier * 100) + "%"

//Sets the position of all the boxes based on the X and Y position variables
//This is laggy!
function render(x, y) {
  //Main tab
  document.getElementsByClassName("box")[0].style.left = (window.innerWidth / 2 + x) + "px"
  document.getElementsByClassName("box")[0].style.top = (window.innerHeight / 2 + y) + "px"
  //Settings and info (stays in top left corner of screen)
  //document.getElementsByClassName("box")[1].style.left = (window.innerWidth / 2 + x - 265) + "px"
  //document.getElementsByClassName("box")[1].style.top = (window.innerHeight / 2 + y) + "px"
  //Resources tab (stays in top left corner of screen)
  //document.getElementsByClassName("box")[2].style.left = (window.innerWidth / 2 + x + 265) + "px"
  //document.getElementsByClassName("box")[2].style.top = (window.innerHeight / 2 + y - 153) + "px"
  //Dragon tab
  document.getElementsByClassName("box")[3].style.left = (window.innerWidth / 2 + x) + "px"
  if (game.dragonStage >= 5) {document.getElementsByClassName("box")[3].style.top = (window.innerHeight / 2 + y + 415) + "px"}
  else {document.getElementsByClassName("box")[3].style.top = (window.innerHeight / 2 + y + 365) + "px"}
  if (game.unlocks >= 1) {
    //Fire upgrades tab
    document.getElementsByClassName("box")[4].style.left = (window.innerWidth / 2 + x - 350) + "px"
    document.getElementsByClassName("box")[4].style.top = (window.innerHeight / 2 + y + 365) + "px"
  }
  if (game.unlocks >= 2) {
    //Alchemy tab
    document.getElementsByClassName("box")[5].style.left = (window.innerWidth / 2 + x + 315) + "px"
    document.getElementsByClassName("box")[5].style.top = (window.innerHeight / 2 + y + 100) + "px"
  }
  if (game.unlocks >= 3) {
    //Magic tab
    document.getElementsByClassName("box")[6].style.left = (window.innerWidth / 2 + x) + "px"
    document.getElementsByClassName("box")[6].style.top = (window.innerHeight / 2 + y - 287) + "px"
    //Magic upgrades tab
    document.getElementsByClassName("box")[7].style.left = (window.innerWidth / 2 + x - 365) + "px"
    if (game.unlocks >= 6) {document.getElementsByClassName("box")[7].style.top = (window.innerHeight / 2 + y - 130) + "px"}
    else {document.getElementsByClassName("box")[7].style.top = (window.innerHeight / 2 + y - 257) + "px"}
  }
  if (game.unlocks >= 4) {
    //Magic challenges tab
    document.getElementsByClassName("box")[8].style.left = (window.innerWidth / 2 + x + 390) + "px"
    document.getElementsByClassName("box")[8].style.top = (window.innerHeight / 2 + y - 365) + "px"
  }
  if (game.unlocks >= 6) {
    //Alchemy tab II
    document.getElementsByClassName("box")[9].style.left = (window.innerWidth / 2 + x + 580) + "px"
    document.getElementsByClassName("box")[9].style.top = (window.innerHeight / 2 + y + 100) + "px"
  }
  if (game.unlocks >= 8) {
    //Dark magic upgrades tab
    document.getElementsByClassName("box")[10].style.left = (window.innerWidth / 2 + x - 730) + "px"
    document.getElementsByClassName("box")[10].style.top = (window.innerHeight / 2 + y - 130) + "px"
  }
  if (game.unlocks >= 9) {
    //Cyan sigils tab
    document.getElementsByClassName("box")[11].style.left = (window.innerWidth / 2 + x + 365) + "px"
    document.getElementsByClassName("box")[11].style.top = (window.innerHeight / 2 + y + 540) + "px"
  }
  if (game.unlocks >= 10) {
    //Blue sigils tab
    document.getElementsByClassName("box")[12].style.left = (window.innerWidth / 2 + x + 730) + "px"
    document.getElementsByClassName("box")[12].style.top = (window.innerHeight / 2 + y + 540) + "px"
  }
  if (game.unlocks >= 11) {
    //Indigo sigils tab
    document.getElementsByClassName("box")[13].style.left = (window.innerWidth / 2 + x + 1095) + "px"
    document.getElementsByClassName("box")[13].style.top = (window.innerHeight / 2 + y + 540) + "px"
  }
  document.body.style.backgroundPosition = (x / 4) + "px " + (y / 4) + "px" 
}
render(renderVars.posX, renderVars.posY)

//Automatically renders 5 times per second (there's probably a better way to do this)
function renderAuto() {
  render(renderVars.posX + renderVars.diffX, renderVars.posY + renderVars.diffY)
}
setInterval(renderAuto, 100)

//Sets currentMousePos when mouse goes down to compare position when the user drags
function mouseDown() {
  renderVars.currentMousePos[0] = [renderVars.mousePosX]
  renderVars.currentMousePos[1] = [renderVars.mousePosY]
  renderVars.mouseIsDown = true
}

//Resets variables for comparing position when mouse goes up
function mouseUp() {
  renderVars.mouseIsDown = false
  renderVars.posX = renderVars.posX + renderVars.diffX
  renderVars.posY = renderVars.posY + renderVars.diffY
  renderVars.diffX = 0
  renderVars.diffY = 0
}

//Sets the position to 0,0
function posHome() {
  //Zoom stuff!
  //renderVars.posX = 0 - window.innerWidth / (renderVars.zoomMultiplier * 2)
  //renderVars.posY = 0 - window.innerHeight / (renderVars.zoomMultiplier * 2)
  renderVars.posX = 0
  renderVars.posY = 0
  render(renderVars.posX, renderVars.posY)
}

//Does position checks every time the mouse moves (if it's held down)
document.onmousemove = handleMouseMove;
function handleMouseMove(event) {
  event = event || window.event;
  renderVars.mousePosX = event.pageX
  renderVars.mousePosY = event.pageY
  if (renderVars.mouseIsDown) {
    //Zoom stuff!
    //renderVars.diffX = (event.pageX - renderVars.currentMousePos[0]) / renderVars.zoomMultiplier
    //renderVars.diffY = (event.pageY - renderVars.currentMousePos[1]) / renderVars.zoomMultiplier
    renderVars.diffX = event.pageX - renderVars.currentMousePos[0]
    renderVars.diffY = event.pageY - renderVars.currentMousePos[1]
    if (renderVars.diffX > 8 || renderVars.diffY > 8 || renderVars.diffX < -8 || renderVars.diffY < -8) render(renderVars.posX + renderVars.diffX, renderVars.posY + renderVars.diffY)
  }
}