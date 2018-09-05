function setup() {
  createCanvas(800, 400);
  background(204);
}

function draw() {
  strokeJoin(ROUND);
  strokeWeight(2);
  fill(255,182,193);
  triangle(95,120,120,40,80,80);
  triangle(95,120,120,40,80,80);
  fill(255,214,63);
  beginShape();
  vertex(0,400);
  vertex(0,300);
  vertex(50,300);
  vertex(100,90);
  vertex(110,40);
  vertex(80,10);
  vertex(210,60);
  vertex(160,80);
  vertex(200,90);
  vertex(140,100);
  vertex(130,300);
  vertex(200,400);
  endShape();
  fill(255,182,193);
  ellipse(155, 60, 8, 8);
}
