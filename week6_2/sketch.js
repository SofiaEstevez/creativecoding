angle = 0;
function setup() {
  createCanvas(400, 400);
	background(220);
	angleMode(DEGREES);
}

function draw() {
	background(220);
	strokeWeight(1);
	line(150, 200, 250, 200);
	translate(width / 2, height / 2);
	rotate(angle);
	strokeWeight(10);
	line(-100, -100, 0, 0);
	angle += 10;
}
