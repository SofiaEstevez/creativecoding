var sunrise;
var moon;
var stars;
var bird;
angle = 0;

function preload() {
  sunrise = loadImage('SUNRISE.jpg');
  plane = loadImage('PLANE.png');
  sun = loadImage('SUN.png');
  stars = loadImage('STARS.png');
  bird = loadImage('BIRD.png');
  angleMode = DEGREES;
}

function setup() {
  createCanvas(680,480);
}

function draw() {
  image(sunrise, 0, 0, 680, 480);
  image(stars, 0, 0, 480, 280);
  image(bird, mouseX, mouseY, 90, 80);
  image(sun, -120, -120, 350, 350);
  rotate(angle);
  translate(500, 300);
  image(plane, -100, -100, 90, 80);
  angle += -.001;
}
