let vertices = [];
let unreached = [];
let reached = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
	let v = createVector(mouseX, mouseY);
	vertices.push(v);
}

function draw() {
	background(30);

	for (let i = 0; i < vertices.length; i++) {
		fill(255);
		stroke(255);
		ellipse(vertices[i].x, vertices[i].y, 16, 16);
	}
}