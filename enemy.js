class Enemy {
    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {Player} player 
     */
  constructor(x, y, player) {
    this.player = player
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
    rectMode(CENTER)
    fill("red");
    if(p5.Vector.sub(this.location, this.player.location).mag() < this.player.lineOfSight){

        rect(this.location.x, this.location.y, this.size, this.size);
    }
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
