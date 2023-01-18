
var screen = {width: 0, height: 0}
var playBox = {width: 800, height: 800}
var menuBar;
var fontMontserrat;
var player;
var enemySystem;

function setup(){
    screen.width = windowWidth;
    screen.height = windowHeight;
    createCanvas(screen.width, screen.height);
    fontMontserrat = loadFont("assets/Montserrat/Montserrat-VariableFont_wght.ttf")
    player = new Player();
    enemySystem = new EnemySystem(player);
    menuBar = new MenuBar()


}

function draw(){
    background(255)
    push();
    fill(color(220))
    rect(0, 0, playBox.width, playBox.height)
    pop();

    player.run()
    menuBar.run()
    enemySystem.run();
    checkCollisions(player, enemySystem)
    



}
