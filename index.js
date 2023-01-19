
var screen = {width: 0, height: 0}
var playBox = {width: 2000, height: 2000}
var menuBar;
var fontMontserrat;
var player;
var enemySystem;
var playerCam;
var bgImage;

function setup(){
    screen.width = windowWidth*0.9;
    screen.height = windowHeight*0.9;
    createCanvas(screen.width, screen.height);
    addScreenPositionFunction();
    loadAssets();
    
    player = new Player();
    enemySystem = new EnemySystem(player);
    menuBar = new MenuBar(player)
}

function loadAssets(){
    fontMontserrat = loadFont("assets/Montserrat/Montserrat-VariableFont_wght.ttf")
}

function draw(){

    background(255)

    translate(screen.width/2- player.location.x, screen.height/2- player.location.y)
    push();
    fill(color(220))
    stroke("black")
    for (let i = -playBox.width/2; i < playBox.width/2; i+=50){
        for (let j = -playBox.height/2; j < playBox.height/2; j += 50){
            rect(i, j, 50, 50)
        }
    }
    // rect(-playBox.width/2, -playBox.height/2, playBox.width, playBox.height)
    fill("red")
    rect(0, 0, 100, 100)
    pop();
    
    player.run()
    enemySystem.run();
    menuBar.run()
    checkCollisions(player, enemySystem)
    



}
