//define the variables for my grid of circles
let a = 20;
let b = 100;
let na = 5;
let nb = 5;

// make a grid of circles
function drawGrid() {
  for (let x = a; x < 200 + a; x += 10) {
    for (let y = b; y < 200 + b; y += 10) {
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2*Math.PI);
      ctx.stroke();
    }
  }
  window.requestAnimationFrame(drawGrid);
}

//make my grid of circles move
function grid(timestamp) {

  drawGrid();
  a = a+2;
  b = b+2;

  if (a + na > canvasWidth - 190 || a + na < 0) {
    na = -na - 20
  }

  if (b + nb > canvasHeight - 190 || b + nb < 0) {
    nb = -nb - 20
  }

  a += na;
  b += nb;

  window.requestAnimationFrame(grid);
}

window.requestAnimationFrame(grid);
