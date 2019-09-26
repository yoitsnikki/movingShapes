//DEFUNCT CODE, REPLACED BY ARRAYCIRCLE.JS

// get the position of the mouse
function getMousePos (c, evt) {
  let rect = c.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
}

// draw a circle
function drawCircle (evt) {
  let pos = getMousePos(c, evt);
  let radius = Math.floor(Math.random() * 75);

  ctx.beginPath();
  ctx.arc (pos.x, pos.y, radius, 0, 2*Math.PI);
  ctx.stroke();

  ctx.fillStyle = "#0F6FA9";
  ctx.fill();
}

// looks out for event mousedown and then runs drawCircle
c.addEventListener('mousedown', drawCircle);
