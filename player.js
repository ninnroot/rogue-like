class Player {
  constructor() {
    this.velocity = new createVector(0, 0);
    this.location = new createVector(0, 0);
    this.acceleration = new createVector(0, 0);
    this.angle = 0;
    
    this.size = 70;
    this.speed = 0.15;
    this.maxSpeed = 10;
    this.turnRate = 2;
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
    this.drawGun()
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }

  drawGun(){
    push();
    translate(this.location.x, this.location.y)
    rotate(radians(this.angle))
    rectMode(CENTER)
    rect(this.size/2,0, this.size*0.9, 20)

    pop();

  }

  interaction() {
    if (keyIsDown(87)) { // w
      this.applyForce(createVector(0, -this.speed));
    }
    if (keyIsDown(65)) { // a
      this.applyForce(createVector(-this.speed, 0));
    }
    if (keyIsDown(83)) { // s
      this.applyForce(createVector(0, this.speed));
    }
    if (keyIsDown(68)) { // d
      this.applyForce(createVector(this.speed, 0));
    }
    if (keyIsDown(32)){ // space
        this.fire()
    }
    this.turnGun()

  }

  turnGun(){
    if(keyIsDown(74)){ // j
      this.angle-=this.turnRate
    }
    if(keyIsDown(76)){ // l
      this.angle+=this.turnRate
    }

  }

  edges() {
    if (this.location.x - this.size/2 < -playBox.width/2){
        this.location.x = -playBox.width/2 + this.size/2
        this.velocity.x = 0
    } 
    else if (this.location.x + this.size/2  > playBox.width/2){
        this.location.x = playBox.width/2 - this.size/2
        this.velocity.x = 0;
    } 
    else if (this.location.y - this.size/2 < -playBox.height/2){
        this.location.y = -playBox.height/2 + this.size/2
        this.velocity.y = 0;
    }
    else if (this.location.y + this.size/2 > playBox.height/2){
        this.location.y = playBox.height/2 - this.size/2
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
        let mouseDir = p5.Vector.fromAngle(radians(this.angle), 30)
        mouseDir.normalize();
        // let mouseDir = createVector(mouseX-screen.width/2, mouseY-screen.height/2).sub(this.location);
        mouseDir.setMag(this.size)
        this.bulletSystem.fire(this.location.x, this.location.y, mouseDir, p5.Vector.add(this.location, mouseDir));
    }
   
  }
}
