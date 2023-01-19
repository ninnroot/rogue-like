class Enemy {
  constructor(x, y) {
    this.location = createVector(x, y);
    this.size = 20;

    this.hp = 10;
    this.speed = 1;
  }

  run() {
    this.move();
    this.draw();
  }

  move(dir) {
    this.location.add(dir);
  }

  draw() {
    push();
    fill("red");
    rect(this.location.x, this.location.y, this.size, this.size);
    pop();
  }
  /**
   *
   * @param {Bullet} bullet
   */
  performBulletHit(bullet) {
    this.hp -= bullet.damage;
  }
  /**
   *
   * @returns {boolean}
   */
  isDead() {
    return this.hp <= 0;
  }
}
