class Bullet{
    constructor(x, y){
        this.location = createVector(x, y);
        this.diam = 10;
        this.size = this.diam // alias
        this.speed = 6;
        this.damage = 1;
        // this.direction = direction;
        // this.direction.setMag(this.speed)
    }
    move(){
        this.location.add(this.dir)
    }
}