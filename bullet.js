class Bullet{
    constructor(x, y){
        this.location = createVector(x, y);
        this.diam = 10;
        this.size = this.diam // alias
        this.speed = 5;
        this.damage = 1;
        // this.direction = direction;
        // this.direction.setMag(this.speed)
    }

    draw(){
        if (!(this.location.x <  player.location.x-screen.width/2 || this.location.x > player.location.x + screen.width/2 || this.location.y < player.location.y-screen.height/2 || this.location.y > player.location.y+ screen.height/2)){
            ellipse(this.location.x, this.location.y, this.diam, this.diam)
        }
    }

    move(){
        this.location.add(this.dir)
    }
}