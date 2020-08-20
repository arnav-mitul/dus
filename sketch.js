const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var scores;

var b1,b2,b3,b4,b5,b6,b7,b8,b9;

var b21,b23,b24,b25,b22,b26,b27,b28,b29;

var ground;

var stone,st1;
var slings,s1;

var base,base2;

var backgroundImg;

function preload(){
  GetbgImage();
}

function setup() {
  createCanvas(1200,800);
  
 engine = Engine.create();
 world=engine.world;

  stone= new Paper (310,200,40)
 

  slings = new  SLINGSHOT(stone.body,{x:300,y:210})
 
  scores=0;

  b1 = new Dus (530,235,30,40);
  b2 = new Dus (560,235,30,40);
  b3 = new Dus (590,235,30,40);
  b4 = new Dus (620,235,30,40);
  b5 = new Dus (650,235,30,40);

  b6 = new Dus (560,195,30,40);
  b7 = new Dus (590,195,30,40);
  b8 = new Dus (620,195,30,40);
  
  b9 = new Dus (590,155,30,40);


  b21 = new Dus (830,235,30,40);
  b22 = new Dus (860,235,30,40);
  b23 = new Dus (890,235,30,40);
  b24 = new Dus (920,235,30,40);
  b25 = new Dus (950,235,30,40);

  b26 = new Dus (860,195,30,40);
  b27 = new Dus (890,195,30,40);
  b28 = new Dus (920,195,30,40);

  b29 = new Dus(890,155,30,40)

  base= new Dus1(600,300,200,5);
  base2 = new Dus1 (900,300,200,5)

  ground = new Dus1(600,750,1200,10)
}

function draw() {
  if(backgroundImg){
   background(backgroundImg);
  }
  Engine.update(engine);
  rectMode(CENTER)
  strokeWeight(4);
 

  stone.display();

  slings.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();

  if(b1.Visibility<0 && b1.Visibility>-1005){
    scores++;
  }

  if(b2.Visibility<0 && b2.Visibility>-1005){
    scores++;
  }

  if(b3.Visibility<0 && b3.Visibility>-1005){
    scores++;
  }

  if(b4.Visibility<0 && b4.Visibility>-1005){
    scores++;
  }

  if(b5.Visibility<0 && b5.Visibility>-1005){
    scores++;
  }

  if(b6.Visibility<0 && b6.Visibility>-1005){
    scores++;
  }

  if(b7.Visibility<0 && b7.Visibility>-1005){
    scores++;
  }

  if(b8.Visibility<0 && b8.Visibility>-1005){
    scores++;
  }

  if(b9.Visibility<0 && b9.Visibility>-1005){
    scores++;
  }

 /* b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();*/
  
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();

  if(b21.Visibility<0 && b21.Visibility>-1005){
    scores++;
  }

  if(b22.Visibility<0 && b22.Visibility>-1005){
    scores++;
  }

  if(b23.Visibility<0 && b23.Visibility>-1005){
    scores++;
  }

  if(b24.Visibility<0 && b24.Visibility>-1005){
    scores++;
  }

  if(b25.Visibility<0 && b25.Visibility>-1005){
    scores++;
  }

  if(b26.Visibility<0 && b26.Visibility>-1005){
    scores++;
  }

  if(b27.Visibility<0 && b27.Visibility>-1005){
    scores++;
  }

  if(b28.Visibility<0 && b28.Visibility>-1005){
    scores++;
  }

  if(b29.Visibility<0 && b29.Visibility>-1005){
    scores++;
  }


  base.display();
  base2.display();

  ground.display();

   
  textSize(20)
  fill("red")
  text("1 STONE 2 TOWERS . CAN YOU MAKE IT",600,600);
  text("SCORES : " + scores,200,700)
  text("ATLEAST TRY TO SCORE 2500 IN 1 SHOT" ,200,400)
  text("PRESS SPACE FOR 2ND CHANCE",200,600)

  drawSprites();
}



function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
slings.fly();
}

function keyPressed(){
if(keyCode === 32){
  slings.attached(stone.body)
}
}

async function GetbgImage(){
  var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
 // console.log(response);
  var responseJSON= await response.json();
  var date=responseJSON.datetime;
  var hour= date.slice(11,13)

  if(hour>6 && hour<19){
      bg = "bg2.jpg"
  }
  else{
      bg = "bg.png"
  }

  backgroundImg=loadImage(bg)
}