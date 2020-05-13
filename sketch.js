let vertices = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function mousePressed() {
	let pt = new Edge(mouseX, mouseY);
	vertices.push(pt);
}

function draw() {
	background(30);

	let unreached = [];
	let reached = [];

	for (let i = 0; i < vertices.length; i++) {
		vertices[i].drawPoint();
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

		// We look through all unreached points to find the minimum edge length between 2 points
		for (let i = 0; i < reached.length; i++) {
			for (let j = 0; j < unreached.length; j++) {
				let d = reached[i].getDistanceFrom(unreached[j]);
				
				if (d < record) {
					record = d;
					rIndex = i;
					uIndex = j;
				}
			}
		}

		// We draw the found minimum edge
		reached[rIndex].drawEdge(unreached[uIndex]);
		
		// We transfer the unreached point giving the minimum edge length from the unreached to the reached points
		reached.push(unreached[uIndex]);
		unreached.splice(uIndex, 1);
	}

}