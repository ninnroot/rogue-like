class Player {
  constructor() {
    this.velocity = new createVector(0, 0);
    this.location = new createVector(playBox.width / 2, playBox.height / 2);
    this.acceleration = new createVector(0, 0);
    this.speed = 0.15;
    this.maxSpeed = 10;
    this.size = 70;

    this.attackSpeed = 5 // bullet per second

    this.bulletSystem = new BulletSystem();
    this.secSinceLastFire = 0;


  }

  run() {
    this.draw();
    this.move();
    this.edges();
    this.interaction();
    this.appylyFriction();
    this.bulletSystem.run()
    this.secSinceLastFire += deltaTime / 100;
  }

  move() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
    this.velocity.limit(this.maxSpeed);
  }

  draw() {
    stroke(0);
    this.followMouse();
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }

  followMouse(){
    push();
    let posX = this.location.x
    let posY = this.location.y

    let angle = Math.atan2(mouseY-posY, mouseX-posX);
    translate(posX, posY)

    rotate(angle)

    fill("black")

    rectMode(CENTER)
    rect(this.size/2,0, this.size*0.9, 20)
    pop()


  }

  interaction() {
    if (keyIsDown(87)) {
      this.applyForce(createVector(0, -this.speed));
    }
    if (keyIsDown(65)) {
      this.applyForce(createVector(-this.speed, 0));
    }
    if (keyIsDown(83)) {
      this.applyForce(createVector(0, this.speed));
    }
    if (keyIsDown(68)) {
      this.applyForce(createVector(this.speed, 0));
    }
    if (mouseIsPressed){
        this.fire()
    }
  }

  edges() {
    if (this.location.x - this.size/2 < 0){
        this.location.x = 0 + this.size/2
        this.velocity.x = 0
    } 
    else if (this.location.x + this.size/2  > playBox.width){
        this.location.x = playBox.width - this.size/2
        this.velocity.x = 0;
    } 
    else if (this.location.y - this.size/2 < 0){
        this.location.y = 0 + this.size/2
        this.velocity.y = 0;
    }
    else if (this.location.y + this.size/2 > playBox.height){
        this.location.y = playBox.height - this.size/2
        this.velocity.y = 0;
    };
  }
  applyForce(f) {
    this.acceleration.add(f);
  }
  appylyFriction() {
    let friction = this.velocity.copy();
    friction.mult(-1);
    friction.normalize();
    friction.mult(0.1);
    this.applyForce(friction);
  }

  fire(){
    if (this.secSinceLastFire * (this.attackSpeed/10) > 1){
        this.secSinceLastFire = 0;
        let mouseDir = createVector(mouseX, mouseY).sub(this.location);
        mouseDir.setMag(this.size)
        this.bulletSystem.fire(this.location.x, this.location.y, mouseDir, p5.Vector.add(this.location, mouseDir));
    }
   
  }
}
