class BulletSystem {
  constructor() {
    this.bullets = [];
  }

  run() {
    this.move();
    this.draw();
    this.edges();
  }

  fire(x, y, mouseDir, dirOffset) {
    let bullet = new Bullet(x, y);
    bullet.dir = mouseDir;
    bullet.dir.setMag(bullet.speed);
    bullet.initialPos = dirOffset;
    bullet.location = bullet.initialPos.copy();
    this.bullets.push(bullet);
  }

  draw() {
    fill(255);
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].draw();
      // ellipse(this.bullets[i].location.x, this.bullets[i].location.y, this.bullets[i].diam, this.bullets[i].diam);
    }
  }

  move() {
    for (var i = 0; i < this.bullets.length; i++) {
      this.bullets[i].move();
    }
  }

  edges() {
    for (let i = 0; i < this.bullets.length; i++) {
      if (
        this.bullets[i].location.x > playBox.width / 2 ||
        this.bullets[i].location.x < -playBox.width / 2 ||
        this.bullets[i].location.y > playBox.height / 2 ||
        this.bullets[i].location.y < -playBox.height / 2
      ) {
        this.bullets.splice(i, 1);
        i--;
      }
    }
  }
}
