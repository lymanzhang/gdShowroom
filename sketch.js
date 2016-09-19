var stars = [];
var totalNum = 800;
var speed;

function setup() {
  createCanvas(600, 600);
  for (var i = 0; i < totalNum; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  speed = map(mouseX, 0, width, 0, 50);
  //background(0);
  noStroke();
  fill(0,50);
  rect(0,0,width, height);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
