class MenuBar {
  /**
   *
   * @param {Player} player
   */
  constructor(player) {
    this.width = 200;
    this.height = screen.height;
    this.player = player;
    this.startX = screen.width / 2 + 50;
    this.startY = -screen.height / 2;
    this.color = color(29, 30, 32)
  }

  run() {
    this.draw();
  }

  draw() {
    push();
    stroke("black")
    // stroke(29, 30, 32, 0);
    fill(this.color)
    translate(player.location.x, player.location.y);
    rect(this.startX, this.startY, this.width, this.height);
    this.drawStats();
    pop();
  }

  drawStats() {
    fill(255);
    stroke(255);
    textSize(14);
    textFont(fontMontserrat);
    let column = { x1: this.startX + 10, y1: this.startY + 20 };
    let rowValue = 0;
    let stats = [
      { label: "x: ", value: round(this.player.location.x, 0) },
      { label: "y: ", value: round(this.player.location.y, 0) },
      { label: "attackSpeed: ", value: round(this.player.attackSpeed, 0) },
      { label: "velocity: ", value: round(this.player.velocity.mag(), 0) },

      { label: "fps: ", value: round(frameRate(), 0) },
    ];
    for (let i = 0; i < stats.length; i++) {
      text(stats[i].label + stats[i].value, column.x1, column.y1 + rowValue);
      rowValue += 15;
    }
  }
}
