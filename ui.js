class MenuBar {
  constructor() {
    this.width = screen.width;
    this.height = 200;
  }

  run() {
    this.draw();
  }

  draw() {
    push();
    stroke(255);
    fill(29, 30, 32);
    rect(0, screen.height - this.height, this.width, this.height);

    translate(0, screen.height - this.height);
    this.drawStats();
    pop();
  }

  drawStats() {
    fill(255);
    textSize(14);
    textFont(fontMontserrat)
    let column = {x1: 10, y1: 20, x2: 190, y2: 190}
    let rowValue = 15
    text("x: "+ round(player.location.x, 0), column.x1, column.y1)
    text("y: "+ round(player.location.y, 0), column.x1, column.y1 + rowValue)
    text("attackSpeed: "+ round(player.attackSpeed, 2), column.x1, column.y1 + rowValue*2)
    text("frameRate: " + round(frameRate(), 0), column.x1, column.y1 + rowValue*3)
  }
}
