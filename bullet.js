class Bullet {
  constructor(x, y) {
    this.location = createVector(x, y);

    this.diam = 10;
    this.size = this.diam; // alias
    this.color = "yellow";

    this.speed = 5;
    this.damage = 1;
  }

  draw() {
    push();
    fill(this.color);
    ellipse(this.location.x, this.location.y, this.diam, this.diam);

    pop();
  }

  move() {
    this.location.add(this.dir);
  }

  applyForce(f) {
    this.acceleration.add(f);
  }
}
