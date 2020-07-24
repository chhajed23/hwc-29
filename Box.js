class Box  {
    constructor(x, y, width, height){
      var options = {
        isStatic:true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width,height, options);
    this.width = width;
    this.height = height;
    //this.image = loadImage("sprites/base.png");
    World.add(world, this.body);
      //this.image = loadImage("sprites/wood1.png");
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("yellow")
      rect( 0, 0, this.width, this.height);
      pop();

      
     
      
    }
  };
  