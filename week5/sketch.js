function setup() {
  createCanvas(800, 400);
  background(204);
}

function setup() {
  createCanvas(500, 150);
background(204);
}

function draw()
{
if(mouseIsPressed && mouseX < 250)
 {
fill(255, 0 ,0);
 }
else
{
fill(255);
}

rect(90, 30, 60, 60);

if(mouseIsPressed && mouseX > 250)
{
fill(0, 255, 0);
}
else
{
fill(255);
}

rect(330, 30, 60, 60);
  
}
