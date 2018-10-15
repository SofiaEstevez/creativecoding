var sky;
var alien;
var leftHeart;
var nyan;
var x = 10;
var y = 10;
angle = 0;

function preload() {
  sky = loadImage('SKY.jpg');
  alien = loadImage('ALIEN.png');
  leftHeart = loadImage('LEFT HEART.png');
  rightHeart = loadImage('RIGHT HEART.png');
  nyan = loadImage('NYAN.png');
  fire = loadImage('fire.png');
  astro = loadImage('ASTRO.png');
}

function setup() {
  createCanvas(680,480);
  background(204);
  textSize(42);
  textFont('PHOSPHATE');
  angleMode = DEGREES;
}

function draw() {
  image(sky, 0, 0, 680, 480);
  image(alien, 185, 100, 300, 300);

//TEXT
  push();
  fill(255,255,0);
  text('S P A C E D   O U T', 190, 460);
  pop();

//HEARTS
  push();
  translate(190,103);
  rotate(angle);
  image(leftHeart, -20, -20, 40, 40);
  angle += .1;
  pop();

  push();
  translate(480,103);
  rotate(angle);
  image(rightHeart, -20, -20, 40, 40);
  angle += .1;
  pop();

//MOUTH
  if(mouseIsPressed && mouseX > 317 && mouseX < 365 && mouseY > 315 && mouseY < 360)
   {
  fill(255,20,147);
   }
  else
  {
  fill(0,0,0);
  }

  ellipse(340, 335, 45, 45);

//NYAN
  push();
  image(nyan, mouseX, mouseY, 70, 60);
  pop();

//FIRE
  if (keyIsPressed)
  {
    if(key == 'f'){
      push();
      image(fire, 320, 285, 300, 100);
      pop();
    }
  }

//ASTRO
  if (keyIsPressed){

    if(keyCode == LEFT_ARROW) {
        x = x - 5;
    }
    if(keyCode == RIGHT_ARROW){
        x = x + 5;
    }
    if(keyCode == UP_ARROW){
        y = y - 5;
    }
    if(keyCode == DOWN_ARROW){
        y = y + 5;
    }
  }

    push();
    image(astro, x, y, 150, 140);
    pop();

}
