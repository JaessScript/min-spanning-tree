let vertices = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
	let v = createVector(mouseX, mouseY);
	vertices.push(v);
}

function draw() {
	background(30);

	let unreached = [];
	let reached = [];

	for (let i = 0; i < vertices.length; i++) {
		fill(255);
		stroke(255);
		ellipse(vertices[i].x, vertices[i].y, 16, 16);
	}

	// At first, all vertices are unreached
	for (let i = 0; i < vertices.length; i++) {
		unreached.push(vertices[i]);
	}

	// Let's randomly start considering the vertices[0]
	reached.push(vertices[0]);
	unreached.splice(0, 1);

	// As long as they are unreached vertices, we keep on searching for the smallest distance
	while (unreached.length > 0) {
		let record = Infinity;
		let rIndex;
		let uIndex;

		for (let i = 0; i < reached.length; i++) {
			for (let j = 0; j < unreached.length; j++) {
				let d = dist(reached[i].x, reached[i].y, unreached[j].x, unreached[j].y);
				if (d < record) {
					record = d;
					rIndex = i;
					uIndex = j;
				}
			}
		}

		line(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);
		reached.push(unreached[uIndex]);
		unreached.splice(uIndex, 1);
	}

}