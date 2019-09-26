// https://stackoverflow.com/questions/7143806/make-an-image-follow-mouse-pointer

// create the constructor for making the shape
let createShapes = [];

// my object constructor function for making shapes
function makeRectangle(x, y, width, height, color) {
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

  this.moveUp = function ()  {
    y-=5
  }

  this.moveDown = function () {
    y+=5
  }

  this.moveLeft = function () {
    x-=5
  }

  this.moveRight = function () {
    x+=5
  }
}

let mainRect = new makeRectangle(100, 100, 30, 50, "blue");

// move up
window.addEventListener("keypress", function(evt){

  // move up
  if (evt.which == 119) {
    console.log(evt.which);
    mainRect.moveUp();
  }

  // move down
  else if (evt.which == 115) {
    console.log(evt.which);
    mainRect.moveDown();
  }

  // move left
  else if (evt.which == 97) {
    console.log(evt.which);
    mainRect.moveLeft();
  }

  // move right
  else if (evt.which == 100) {
    console.log(evt.which);
    mainRect.moveRight();
  }
}

);

function loopRectangles () {
  mainRect.draw();
}

window.requestAnimationFrame(loopRectangles);
