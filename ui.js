class MenuBar {
  /**
   * 
   * @param {Player} player 
   */
  constructor(player) {
    this.width = screen.width;
    this.height = 200;
    this.player = player
  }

  run() {
    this.draw();
  }

  draw() {
    push();
    stroke(29, 30, 32, 0);
    fill(29, 30, 32, 100);
    translate(player.location.x, player.location.y)
    rect(-screen.width/2, screen.height/2 - this.height, this.width, this.height);

    translate(-screen.width/2, screen.height/2-this.height);
    this.drawStats();
    pop();
  }

  drawStats() {
    fill(255);
    stroke(255)
    textSize(14);
    textFont(fontMontserrat)
    let column = {x1: 10, y1: 20, x2: 190, y2: 190}
    let rowValue = 0
    let stats = [
      {label: "x: ", value: round(this.player.location.x,0)},
      {label: "y: ", value: round(this.player.location.y,0)},
      {label: "attackSpeed: ", value: round(this.player.attackSpeed,0)},
      {label: "velocity: ", value: round(this.player.velocity.mag(),0)},

      {label: "fps: ", value: round(frameRate(),0)},
    ];
    for (let i = 0; i < stats.length; i++){
      text(stats[i].label+ stats[i].value, column.x1, column.y1 + rowValue)
      rowValue+=15
    }

  }
}
