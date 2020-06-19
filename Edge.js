class Edge {
    constructor(x, y, img) {
        this.x = x;
        this.y = y;
        this.img = img;
    }

    drawPoint() {
        push();
        // fill(255, 130);
        // stroke(255);
        // strokeWeight(2);
        // ellipse(this.x, this.y, 16, 16);

        // let p = createP('&#127942;');
        // p.position(this.x-10, this.y-10);

        imageMode(CENTER);
        image(this.img, this.x, this.y, 30, 30);

        pop();
    }

    getDistanceFrom(other) {
        return dist(this.x, this.y, other.x, other.y);
    }

    drawEdge(other) {
        push();
        fill(255);
        stroke(255, 100);
        strokeWeight(2);
        line(this.x, this.y, other.x, other.y);
        pop();
    }
}