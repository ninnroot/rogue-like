var screen = { width: 0, height: 0 };
var playBox = { width: 2000 * 2, height: 1334 * 2 };
var menuBar;
var fontMontserrat;
var player;
var enemySystem;
var playerCam;
var bgImage;

function preload() {
  bgImage = loadImage("assets/grid.jpeg");
}

function setup() {
  screen.width = windowWidth - 250;
  screen.height = windowHeight;
  createCanvas(screen.width + 250, screen.height);
  frameRate(60);
  addScreenPositionFunction();
  loadAssets();

  player = new Player();
  enemySystem = new EnemySystem(player);
  menuBar = new MenuBar(player);
  enemySystem.spawnEnemy()
}

function loadAssets() {
  fontMontserrat = loadFont(
    "assets/Montserrat/Montserrat-VariableFont_wght.ttf"
  );
}

function draw() {
  background(255);
  push();
  pop();
  translate(
    screen.width / 2 - player.location.x,
    screen.height / 2 - player.location.y
  );
  drawBackgroundGrid();
  player.drawLineOfSight();
  player.run();
  enemySystem.run();
  menuBar.run();
  checkCollisions(player, enemySystem);
}

function drawBackgroundGrid() {
  push();
  image(
    bgImage,
    -playBox.width / 2,
    -playBox.height / 2,
    playBox.width,
    playBox.height
  );
  stroke(0)
  strokeWeight(10)
  fill(10, 220);
  rectMode(CENTER);
  rect(0, 0, playBox.width, playBox.height);

  fill("red");
  rect(0, 0, 100, 100);
  pop();
}
