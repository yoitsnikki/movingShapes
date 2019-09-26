// create my array for storing the corrdinates of clicked things so they regenerate
let mouseCoords = [];

// get the position of the mouse
function getMousePos (c, evt) {
  var rect = c.getBoundingClientRect();
  return {
    xCoord: evt.clientX - rect.left,
    yCoord: evt.clientY - rect.top
  };
}

// get the coordinates for the circle and push them
function circleCoords (evt) {
  let radius = Math.floor(Math.random() * 75);
  let pos = getMousePos(c, evt);
  mouseCoords.push({x: pos.xCoord, y: pos.yCoord, r: radius});
}

function drawCircle (x, y, r) {

  ctx.beginPath();
  ctx.arc (x, y, r, 0, 2*Math.PI);
  ctx.stroke();

  ctx.fillStyle = "#0F6FA9"; // which color my circle is
  ctx.fill();
}

function loopCircles () {
  for (let i = 0; i < mouseCoords.length ; i++) {
    x = mouseCoords[i].x;
    y = mouseCoords[i].y;
    r = mouseCoords[i].r;
    drawCircle(x, y, r);
  }
  window.requestAnimationFrame(loopCircles);
}

c.addEventListener('mousedown', circleCoords);
window.requestAnimationFrame(loopCircles);
