var d = 10;
var y = 20;

function setup() {
  createCanvas (400,400)
  background (204)
  noFill()
}

function draw() {
  for(var j = 1; j < 21; j += 2)
  {
    for(var i = 1; i < 41; i += 2)
    {
      ellipse(d*i, y*j, d, d);
      line(d*i, y*j, 200, 200);
    }
  }
}
