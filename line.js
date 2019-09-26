// define variables for my line
let w = 0;
let z = 0;
let nw = 10;
let nz = 10;

//draw the line
function drawLine() {

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  ctx.beginPath();
  ctx.moveTo(w, z);
  ctx.lineTo(w + nw, z + nz);
  ctx.stroke();

}

//make the line bounce
function line(timestamp) {

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawLine();
  w = w+2;
  z = z+2;

  // making sure that the line stays in the canvas boundaries
  if (w + nw > canvasWidth || w + nw < nw) {
    nw = -nw
  }

  if (z + nz > canvasHeight || z + nz < nz) {
    nz = -nz
  }

  w += nw;
  z += nz;

  window.requestAnimationFrame(line);
}

// keep the screen looping and updating
window.requestAnimationFrame(line);
