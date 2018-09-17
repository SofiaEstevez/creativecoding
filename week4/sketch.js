var x = 100;
var y = 90;
var d = 10;
var s = 250;
// circles

function setup() {
  createCanvas(480, 400);
  background(204);
}

function draw() {
  var w = 240
  var q = 0

  noFill();
  ellipse (x,y,d,d);
  ellipse (x,y,2*d,2*d);
  ellipse (x,y,3*d,3*d);
  ellipse (x,y,4*d,4*d);
  ellipse (x,y,4*d,4*d);
  ellipse (x,y,5*d,5*d);
  ellipse (x,y,6*d,6*d);
  ellipse (s,y,d,d);
  ellipse (s,y,2*d,2*d);
  ellipse (s,y,3*d,3*d);
  ellipse (s,y,4*d,4*d);
  ellipse (s,y,4*d,4*d);
  ellipse (s,y,5*d,5*d);
  ellipse (s,y,6*d,6*d);

  for (var i = 1; i<21; i++)
  {
    fill(255);
    rect (q, w, 50, 10);
    q = q+50;
    w = w+10;
  }

}
