// ONLY AN EXPERIMENT, NOT RUN IN MAIN HTML

// create an array for the x-coords of circles
let circleArray = [30, 100, 300, 500, 700];

// draw the circle
function drawCircle () {
  let radius = Math.floor(Math.random() * 75);

  ctx.beginPath(x); // x is a variable so it can pull from the array
  ctx.arc (x, 80, radius, 0, 2*Math.PI);
  ctx.stroke();

  ctx.fillStyle = "#0F6FA9";
  ctx.fill();
}

//make the array loop
function makeCircleArray () {
  for (let i = 0; i < circleArray.length ; i++) {
    x = circleArray[i]
    drawCircle (x);
  }
  window.requestAnimationFrame(makeCircleArray);
}

window.requestAnimationFrame(makeCircleArray)
