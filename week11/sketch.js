var x = 60;
var y = 0;
var speed = 10;

function setup() {
  createCanvas(425, 325);
}

function draw() {
  background(0);
  currentTime = millis ();
  if (currentTime < 5000) {
  y += speed;
  if (y > height) {
    y = 0;
    x = random(0,width);
     }
  stroke(255);
  line(x, y, x, y+40);
  line(2*x, y-40, 2*x, y+30);
  line(3*x, y-10, 3*x, y+90);
  line(4*x, y, 4*x, y+30);
  line(5*x, y-30, 5*x, y+70);
  line(6*x, y-30, 6*x, y+30);
  } else {
  noStroke()
  fill(255, 255, 0);
  ellipse(425, 0, 300, 300);
  }

}
