
var screen = {width: 0, height: 0}
var playBox = {width: 2000, height: 2000}
var menuBar;
var fontMontserrat;
var player;
var enemySystem;
var playerCam;


function setup(){
    screen.width = windowWidth*0.9;
    screen.height = windowHeight*0.9;
    createCanvas(screen.width, screen.height);
    addScreenPositionFunction();
    fontMontserrat = loadFont("assets/Montserrat/Montserrat-VariableFont_wght.ttf")
    player = new Player();
    enemySystem = new EnemySystem(player);
    menuBar = new MenuBar()



}

function draw(){
    background(255)

    translate(screen.width/2- player.location.x, screen.height/2- player.location.y)
    push();
    fill(color(220))
    rect(-playBox.width/2, -playBox.height/2, playBox.width, playBox.height)
    fill("red")
    rect(0, 0, 100, 100)
    pop();
    
    player.run()
    enemySystem.run();
    menuBar.run()
    checkCollisions(player, enemySystem)
    



}
