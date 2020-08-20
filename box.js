class Dus {
    constructor(x,y,width,height){
      var op1={
         isStatic:false
      }
    this.body=Bodies.rectangle(x,y,width,height,op1)
  
    this.width=width;
    this.height=height;
    
    World.add(world,this.body)

    this.Visibility=255;
    }
  display(){
    if(this.body.speed<10){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{

      World.remove(world,this.body);
      push()
      this.Visibility = this.Visibility-5
      rect(0, 0, this.width, this.height);
      pop();
    }
    }

    score(){
      if(this.Visiblity<0){
        scores = scores+1;
      }
    } 



  }