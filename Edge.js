class Edge {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    drawPoint() {
        push();
        fill(255, 130);
        stroke(255);
        strokeWeight(2);
        ellipse(this.x, this.y, 16, 16);
        pop();
    }

    getDistanceFrom(other) {
        return dist(this.x, this.y, other.x, other.y);
    }

    drawEdge(other) {
        push();
        fill(255);
        stroke(255);
        strokeWeight(2);
        line(this.x, this.y, other.x, other.y);
        pop();
    }
}