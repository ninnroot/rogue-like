class EnemySystem {
  constructor(player) {
    this.enemies = [];
    this.player = player;
  }

  run() {
    this.move();
    this.draw();
    // this.edges();
    if (keyIsDown(32)) {
      this.spawnEnemies();
    }
  }
  draw() {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].draw();
      if (this.enemies[i].isDead()) {
        this.enemies.splice(i, 1);
        i--;
      }
    }
  }

  move() {
    for (let i = 0; i < this.enemies.length; i++) {
      let dir = p5.Vector.sub(this.player.location, this.enemies[i].location);
      dir.setMag(this.enemies[i].speed);
      this.enemies[i].move(dir);
    }
  }

  spawnEnemies() {
    let enemy = new Enemy(screen.width / 2, screen.height / 2);
    enemy.dir = p5.Vector.sub(this.player.location, enemy.location);
    enemy.dir.setMag(enemy.speed);
    this.enemies.push(enemy);
  }
}
