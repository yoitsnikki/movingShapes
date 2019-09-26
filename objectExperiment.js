let shapes = [];

// my object constructor function for making shapes
function makeSquare(x, y, width, height, color) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  // draw the rectangle using the variables described above
  this.draw = function () {
    ctx.beginPath();
    ctx.rect(this.x, this.y, this.width, this.height),
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

shapes.push(new makeSquare(100, 100, 30, 50, "blue"));
shapes.push(new makeSquare(100, 200, 30, 50, "green"));
shapes.push(new makeSquare(100, 500, 30, 50, "red"));

function loopSquares () {
  for (let i = 0; i < shapes.length ; i++) {
    shapes[i].draw();
  }
  window.requestAnimationFrame(loopSquares);
}

window.requestAnimationFrame(loopSquares);
