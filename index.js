var screen = { width: 0, height: 0 };
var playBox = { width: 2000, height: 2000 };
var menuBar;
var fontMontserrat;
var player;
var enemySystem;
var playerCam;
var bgImage;

function setup() {
  screen.width = windowWidth  - 250;
  screen.height = windowHeight;
  createCanvas(screen.width + 250, screen.height);
  frameRate(60);
  addScreenPositionFunction();
  loadAssets();

  player = new Player();
  enemySystem = new EnemySystem(player);
  menuBar = new MenuBar(player);
}

function loadAssets() {
  fontMontserrat = loadFont(
    "assets/Montserrat/Montserrat-VariableFont_wght.ttf"
  );
}

function draw() {
  background(255);

  translate(
    screen.width / 2 - player.location.x,
    screen.height / 2 - player.location.y
  );
  background("black")
  drawBackgroundGrid();
  player.run();
  enemySystem.run();
  menuBar.run();
  checkCollisions(player, enemySystem);
}

function drawBackgroundGrid() {
  push();

  stroke("black");
  strokeWeight(1);

  let colorSwitch = true;
  for (let i = -playBox.width / 2; i < playBox.width / 2; i += 50) {
    for (let j = -playBox.height / 2; j < playBox.height / 2; j += 50) {
      if (
        !(
          i < player.location.x - screen.width / 2.5 ||
          i > player.location.x + screen.width / 2.5 ||
          j < player.location.y - screen.height / 2.5 ||
          j > player.location.y + screen.height / 2.5
        )
      ) {
        fill(colorSwitch ? color(225) : color(200));
        if (
          i < player.location.x - player.lineOfSight ||
          i > player.location.x + player.lineOfSight ||
          j < player.location.y - player.lineOfSight ||
          j > player.location.y + player.lineOfSight
        ) {
          fill(colorSwitch ? color(10, 200) : color(0, 200));
        }

        rect(i, j, 50, 50);
      }

      colorSwitch = !colorSwitch;
    }
    colorSwitch = !colorSwitch;
  }
  fill("red");
  rect(0, 0, 100, 100);
  pop();
}
