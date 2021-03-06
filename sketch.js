let canvas;
let next;

let click;

let police;
let run;
let facebook;
let snapchat;
let instagram;
let tiktok;
let whatsapp;
let telegram;
let antenna;
let database;
let mobile;
let cctv2;
// let selfie;
let icons;

let vertices = [];

function preload() {
	police = loadImage('img/police.png');
	run = loadImage('img/run.png');
	facebook = loadImage('img/facebook.png');
	snapchat = loadImage('img/snapchat.png');
	instagram = loadImage('img/instagram.png');
	tiktok = loadImage('img/tiktok.png');
	antenna = loadImage('img/antenna.png');
	database = loadImage('img/database.png');
	mobile = loadImage('img/mobile.png');
	cctv2 = loadImage('img/cctv2.png');
	whatsapp = loadImage('img/whatsapp.png');
	telegram = loadImage('img/telegram.png');
	// selfie = loadImage('img/selfie.png');
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	setup();
}

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0, 0);
	canvas.style('z-index', '-1');

	next = select('#next');
	next.style('font-size', '1.5em');
	setInterval(changeColor, 500);

	click = select('#click');
	click.style('font-size', '1.5em');
	click.style('color', 'white');

	icons = [police, run, facebook, run, snapchat, police, run, instagram, run, tiktok, whatsapp, telegram, police, antenna, run, database, mobile, run, cctv2];
}

// For mobile
function touchStarted() {
	// Prevent the default click behaviour to avoid the 'double-click' bug
	preventDefault();
	let icon = random(icons);
	let pt = new Edge(mouseX, mouseY, icon);
	vertices.push(pt);
}

function mousePressed() {
	let icon = random(icons);
	let pt = new Edge(mouseX, mouseY, icon);
	vertices.push(pt);
}

function changeColor() {
	let colors = ['Red', 'Orange', 'Yellow', 'MediumSpringGreen', 'RoyalBlue', 'Purple', 'Pink', 'LightCyan'];
	let col = random(colors);
	next.style('background-color', col);
}

function draw() {
	background(30);

	let unreached = [];
	let reached = [];

	for (let vertice of vertices) {
		vertice.drawPoint();
	}

	// At first, all vertices are unreached
	for (let vertice of vertices) {
		unreached.push(vertice);
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