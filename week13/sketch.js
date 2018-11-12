function statue(x, y, rectWidth, rectHeight)
{
  this.x = x;
  this.y = y;
  this.rectWidth = rectWidth;
  this.rectHeight = rectHeight;

  this.createStatue = function()
  {
    //Make base rectangle
    noStroke();
    fill(160);
    rect(this.x, this.y, this.rectWidth, this.rectHeight);

    //Make ear
    noStroke();
    fill(100);
    ellipse(this.x + (this.rectWidth * .25), this.y + (this.rectHeight * .3),
    this.rectWidth/4, this.rectHeight/2);

    //Make eye
    noStroke();
    fill(100);
    ellipse(this.x + (this.rectWidth * .75), this.y + (this.rectHeight * .1),
    this.rectWidth/5, this.rectWidth/5);

    //Make nose
    noStroke();
    fill(100);
    triangle(this.x + (this.rectWidth), this.y + (this.rectHeight * .5),
    this.x + (this.rectWidth), this.y + (this.rectHeight * .2),
    this.x + (this.rectWidth * 1.35), this.y + (this.rectHeight * .5));

    //Make mouth
    fill(0);
    ellipse(this.x + (this.rectWidth * .7), this.y + (this.rectHeight * .65),
    this.rectWidth/2, this.rectWidth/20);

  }
}

var grassBackground;
var statue1;
var statue2;
var statue3;
var statue4;
var statue5;

function setup()
{
  createCanvas(575, 500);
  background(204);
  angleMode(DEGREES)
  grassBackground = loadImage('GRASS.png');
  statue1 = new statue(50, 250, 100, 200);
  statue2 = new statue(200, 240, 75, 150);
  statue3 = new statue(320, 230, 50, 100);
  statue4 = new statue(420, 215, 40, 80);
  statue5 = new statue(500, 200, 25, 50);
}

function draw()
{
  image(grassBackground, 0, 0, 575, 500);
  statue1.createStatue();
  statue2.createStatue();
  statue3.createStatue();
  statue4.createStatue();
  statue5.createStatue();
}
