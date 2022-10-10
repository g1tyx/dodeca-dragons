renderVars = {
  posX: 0,
  posY: 0,
  mousePosX: 0,
  mousePosY: 0,
  mouseIsDown: false,
  diffX: 0,
  diffY: 0,
  currentMousePos: [0, 0],
  zoomMultiplier: 2,
  lastRender: Date.now()
}

inputVars = {
  isMobile: mobileCheck(),
  keyInputX: 0,
  keyInputY: 0,
  keySpeedX: 0,
  keySpeedY: 0,
  keySpeedCap: 8,
  keySpeedDecel: 30,
  keyboardRenderPerSec: 72,
  keysHeld: {
    "w": false,
    "a": false,
    "s": false,
    "d": false,
    "ArrowUp": false,
    "ArrowLeft": false,
    "ArrowRight": false,
    "ArrowDown": false,
  },
  touchIsDown: false,
  lastTouch: null,
  currentTouchPos: [0, 0],
  touchPosX: 0,
  touchPosY: 0
}

arrowElements = {
  up: document.getElementById('arrowUp'), //caching reference to all the arrow elements
  down: document.getElementById('arrowDown'),
  left: document.getElementById('arrowLeft'),
  right: document.getElementById('arrowRight')
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
  if (game.violetSigilUpgrade3Bought.eq(1)) {document.getElementsByClassName("box")[3].style.top = (window.innerHeight / 2 + y + 455) + "px"}
  else if (game.dragonStage >= 5) {document.getElementsByClassName("box")[3].style.top = (window.innerHeight / 2 + y + 415) + "px"}
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
    if (game.unlocks >= 6) { document.getElementsByClassName("box")[7].style.top = (window.innerHeight / 2 + y - 130) + "px" }
    else { document.getElementsByClassName("box")[7].style.top = (window.innerHeight / 2 + y - 235) + "px" }
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
  if (game.unlocks >= 12) {
    //Violet sigils tab
    document.getElementsByClassName("box")[14].style.left = (window.innerWidth / 2 + x + 365) + "px"
    document.getElementsByClassName("box")[14].style.top = (window.innerHeight / 2 + y + 905) + "px"
  }
  if (game.unlocks >= 13) {
    //Pink sigils tab
    document.getElementsByClassName("box")[16].style.left = (window.innerWidth / 2 + x + 730) + "px"
    document.getElementsByClassName("box")[16].style.top = (window.innerHeight / 2 + y + 905) + "px"
  }
  document.body.style.backgroundPosition = (x / 4) + "px " + (y / 4) + "px"
  //console.log(Date.now() - renderVars.lastRender)
  renderVars.lastRender = Date.now();
}
render(renderVars.posX, renderVars.posY)

//Automatically renders 10 times per second (there's probably a better way to do this)
function renderAuto() {
  //render(renderVars.posX, renderVars.posY)
  render(renderVars.posX + renderVars.diffX, renderVars.posY + renderVars.diffY)
}
setInterval(renderAuto, 100)

//Renders 72 times per second, but only if any movement keys are held
function renderKeyboardPan() {
  updatePanKeySpeed();
  if (renderVars.mouseIsDown || (Math.abs(inputVars.keySpeedX) < 0.1 && Math.abs(inputVars.keySpeedY) < 0.1)) return;
  renderVars.posX = renderVars.posX + inputVars.keySpeedX;
  renderVars.posY = renderVars.posY + inputVars.keySpeedY;
  //console.log("rendering")
  render(renderVars.posX, renderVars.posY)
}
setInterval(renderKeyboardPan, 1000 / inputVars.keyboardRenderPerSec)

//Sets currentMousePos when mouse goes down to compare position when the user drags
function mouseDown(e) {
  if (e.button !== 0) { return } //ensure we only respond to left clicks
  renderVars.currentMousePos[0] = [e.pageX]
  renderVars.currentMousePos[1] = [e.pageY]
  renderVars.mouseIsDown = true
  //resetPressedKeys();
}

//Resets variables for comparing position when mouse goes up
function mouseUp(e) {
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
  resetPressedKeys(); //pressing home will reset all held keyboard keys in case of stuck keys
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
    if (Date.now() - renderVars.lastRender >= 20 && Math.abs(renderVars.diffX) + Math.abs(renderVars.diffY) > 8) {
      render(renderVars.posX + renderVars.diffX, renderVars.posY + renderVars.diffY)
    }
    //if (renderVars.diffX > 8 || renderVars.diffY > 8 || renderVars.diffX < -8 || renderVars.diffY < -8) {
      //render(renderVars.posX + renderVars.diffX, renderVars.posY + renderVars.diffY)
    //}
  }
}

function processKeyDown(event) {
  if (event.repeat) return; //holding a key down causes repeated keydown events. make sure we don't respond to duplicates.
  inputVars.keysHeld[event.key] = true;
  updatePanKeys();
}

function processKeyUp(event) {
  inputVars.keysHeld[event.key] = false;
  updatePanKeys();
}

function arrowClick(dir) {
  inputVars.keysHeld[dir] = true;
  updatePanKeys();
  clearTouch();
}

function arrowRelease(dir) {
  inputVars.keysHeld[dir] = false;
  updatePanKeys();
}

//Update the input values. Only needs to fire when keys are pressed or released.
function updatePanKeys() {
  if (inputVars.isMobile) {
    inputVars.keyInputX = inputVars.keysHeld["a"] + inputVars.keysHeld["ArrowLeft"] - inputVars.keysHeld["d"] - inputVars.keysHeld["ArrowRight"]
    inputVars.keyInputY = inputVars.keysHeld["w"] + inputVars.keysHeld["ArrowUp"] - inputVars.keysHeld["s"] - inputVars.keysHeld["ArrowDown"]
  } else {
    inputVars.keyInputX = inputVars.keysHeld["a"] + inputVars.keysHeld["ArrowLeft"] - inputVars.keysHeld["d"] - inputVars.keysHeld["ArrowRight"]
    inputVars.keyInputY = inputVars.keysHeld["w"] + inputVars.keysHeld["ArrowUp"] - inputVars.keysHeld["s"] - inputVars.keysHeld["ArrowDown"]
  }
}

//process the speed for smooth panning when using keyboard
function updatePanKeySpeed() {
  let effectiveDecel = inputVars.keySpeedDecel / inputVars.keyboardRenderPerSec;
  if (Math.sign(inputVars.keySpeedX) * Math.sign(inputVars.keyInputX) === -1) inputVars.keySpeedX = 0; // skip decel if opposite direction is pressed
  if (Math.sign(inputVars.keySpeedY) * Math.sign(inputVars.keyInputY) === -1) inputVars.keySpeedY = 0;
  if (inputVars.keyInputX === 0) {
    inputVars.keySpeedX -= Math.sign(inputVars.keySpeedX) * effectiveDecel;
    if (Math.abs(inputVars.keySpeedX) <= effectiveDecel) inputVars.keySpeedX = 0;
  } else {
    inputVars.keySpeedX = Math.sign(inputVars.keyInputX) * inputVars.keySpeedCap; // no accel, goes straight to max speed
  }
  if (inputVars.keyInputY === 0) {
    inputVars.keySpeedY -= Math.sign(inputVars.keySpeedY) * effectiveDecel;
    if (Math.abs(inputVars.keySpeedY) <= effectiveDecel) inputVars.keySpeedY = 0;
  } else {
    inputVars.keySpeedY = Math.sign(inputVars.keyInputY) * inputVars.keySpeedCap;
  }
  inputVars.keySpeedX = Math.round(inputVars.keySpeedX * inputVars.keyboardRenderPerSec) / inputVars.keyboardRenderPerSec; // avoiding precision errors (hopefully)
  inputVars.keySpeedX = Math.min(inputVars.keySpeedCap, Math.max(-inputVars.keySpeedCap, inputVars.keySpeedX)); // clamp between the speed caps
  inputVars.keySpeedY = Math.round(inputVars.keySpeedY * inputVars.keyboardRenderPerSec) / inputVars.keyboardRenderPerSec;
  inputVars.keySpeedY = Math.min(inputVars.keySpeedCap, Math.max(-inputVars.keySpeedCap, inputVars.keySpeedY));
}

//reset all held keys. 
function resetPressedKeys() {
  for (let key in inputVars.keysHeld) {
    inputVars.keysHeld[key] = false;
  }
  updatePanKeys();
}

function touchDown(event) {
  if (!event.changedTouches || !event.changedTouches[0]) return //make sure the event data is proper
  if (inputVars.touchIsDown) clearTouch(); //if there's already an active touch, clear it
  let thisTouch = event.changedTouches[0]; //if multiple new touches registered on same event, arbitrarily choose first one in the list
  let shouldBreak = false;
  Object.keys(inputVars.keysHeld).forEach((k) => {
    if (inputVars.keysHeld[k] == true) shouldBreak = true;
  })
  if (shouldBreak) return;
  inputVars.lastTouch = thisTouch.identifier;
  inputVars.touchIsDown = true;
  inputVars.currentTouchPos[0] = [thisTouch.pageX];
  inputVars.currentTouchPos[1] = [thisTouch.pageY];
}

function touchMove(event) {
  //need to iterate through and make sure one of the moved touches is the active touch
  for (let i = 0; i < event.changedTouches.length; i++) {
    if (event.changedTouches[i].identifier === inputVars.lastTouch) {
      let thisTouch = event.changedTouches[i];
      renderVars.touchPosX = thisTouch.pageX
      renderVars.touchPosY = thisTouch.pageY
      if (inputVars.touchIsDown) {
        renderVars.diffX = thisTouch.pageX - inputVars.currentTouchPos[0]
        renderVars.diffY = thisTouch.pageY - inputVars.currentTouchPos[1]
        if (Math.abs(renderVars.diffX) + Math.abs(renderVars.diffY) > 8) {
        //if (Date.now() - renderVars.lastRender >= 20 && Math.abs(renderVars.diffX) + Math.abs(renderVars.diffY) > 8) {
          render(renderVars.posX + renderVars.diffX, renderVars.posY + renderVars.diffY)
        }
      }
    }
  }
}

function touchUp(event) {
  for (let i = 0; i < event.changedTouches.length; i++) {
    if (event.changedTouches[i].identifier === inputVars.lastTouch) {
      clearTouch();
    }
  }
  resetPressedKeys();
}

function clearTouch() {
  inputVars.touchIsDown = false;
  inputVars.lastTouch = null;
  renderVars.posX = renderVars.posX + renderVars.diffX
  renderVars.posY = renderVars.posY + renderVars.diffY
  renderVars.diffX = 0
  renderVars.diffY = 0
}

function mobileDebug(inputString) {
  document.getElementById("devinfo").innerHTML=inputString;
}

//this is to cover special case where user clicks to drag and releases click outside of frame
document.body.addEventListener('mouseover', (e) => {
  if (e.buttons % 2 === 0) mouseUp(); //the conditional checks whether the left mouse button is held
})



//general event listeners, mostly for panning controls
document.body.addEventListener('mousedown', (e) => { mouseDown(e) });
document.body.addEventListener('mouseup', (e) => { mouseUp(e) });

document.addEventListener('keydown', (event) => { processKeyDown(event) });
document.addEventListener('keyup', (event) => { processKeyUp(event) });

arrowElements.up.addEventListener('pointerdown', (e) => { arrowClick('ArrowUp') });
arrowElements.up.addEventListener('pointerup', (e) => { arrowRelease('ArrowUp') });

arrowElements.down.addEventListener('pointerdown', (e) => { arrowClick('ArrowDown') });
arrowElements.down.addEventListener('pointerup', (e) => { arrowRelease('ArrowDown') });

arrowElements.left.addEventListener('pointerdown', (e) => { arrowClick('ArrowLeft') });
arrowElements.left.addEventListener('pointerup', (e) => { arrowRelease('ArrowLeft') });

arrowElements.right.addEventListener('pointerdown', (e) => { arrowClick('ArrowRight') });
arrowElements.right.addEventListener('pointerup', (e) => { arrowRelease('ArrowRight') });

if (inputVars.isMobile) { //event for mobile only
  document.addEventListener('pointerup', (e) => { resetPressedKeys(); }); //on mobile always reset all when any arrow is released, just to proof against weird edge cases
  document.addEventListener('touchstart',(e) => { touchDown(e); });
  document.addEventListener('touchmove',(e) => { touchMove(e); });
  document.addEventListener('touchend',(e) => { touchUp(e); });
}

//addEventListener('wheel', (event) => {console.log(event.deltaY)});