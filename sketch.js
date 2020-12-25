const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particle;
var turn;
var score;
var gameState;
var PLAY,END;

var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  score = 0;
  turn = 0;

  PLAY=0;
  END=1;
  gameState=PLAY;

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

}
 
function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("turn:"+turn,150,30);
  text("You have ten chances,use the care fully!!!",250,30);
  if(turn>=10)
  {
    push()
    textSize(80);
    text("Game Over",200,200);
    pop()
  }
  text("100",25,520);
  text("200",105,520);
  text("300",185,520);
  text("400",265,520);
  text("500",345,520);
  text("500",425,520);
  text("400",505,520);
  text("300",585,520);
  text("200",665,520);
  text("100",745,520);
  Engine.update(engine);

   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   if(particle!=undefined)
   {
     particle.display()

     if(particle.body.position.y>760)
     {
        if(particle.body.position.x<80)
        {
          score+=100;
          particle=undefined;
        }
     }
   }
   if(particle!=undefined)
   {
     particle.display()

     if(particle.body.position.y>760)
     {
      if(particle.body.position.x>85&&particle.body.position.x<160)
      {
        score+=200;
        particle=undefined;
      }
     }
   }
   if(particle!=undefined)
   {
     particle.display()

     if(particle.body.position.y>760)
     {
      if(particle.body.position.x>165&&particle.body.position.x<235)
      {
        score+=300;
        particle=undefined;
      }
     }
   }
   if(particle!=undefined)
   {
     particle.display()

     if(particle.body.position.y>760)
     {
      if(particle.body.position.x>240&&particle.body.position.x<315)
      {
        score+=400;
        particle=undefined;
      }
     }
   }
   if(particle!=undefined)
   {
     particle.display()

     if(particle.body.position.y>760)
     {
      if(particle.body.position.x>320&&particle.body.position.x<400)
      {
        score+=500;
        particle=undefined;
      }
     }
   }
   if(particle!=undefined)
   {
     particle.display()

     if(particle.body.position.y>760)
     {
      if(particle.body.position.x>405&&particle.body.position.x<480)
      {
        score+=500;
        particle=undefined;
      }
     }
   }
   if(particle!=undefined)
   {
     particle.display()

     if(particle.body.position.y>760)
     {
      if(particle.body.position.x>485&&particle.body.position.x<540)
      {
        score+=400;
        particle=undefined;
      }
     }
   }
   if(particle!=undefined)
   {
     particle.display()

     if(particle.body.position.y>760)
     {
      if(particle.body.position.x>545&&particle.body.position.x<620)
      {
        score+=300;
        particle=undefined;
      }
     }
   }
   if(particle!=undefined)
   {
     particle.display()

     if(particle.body.position.y>760)
     {
      if(particle.body.position.x>625&&particle.body.position.x<700)
      {
        score+=200;
        particle=undefined;
      }
     }
   }
   if(particle!=undefined)
   {
     particle.display()

     if(particle.body.position.y>760)
     {
      if(particle.body.position.x>705)
      {
        score+=100;
        particle=undefined;
      }
     }
   }

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed()
  {
     if(gameState!==END&&turn<10)
     {
       turn+=1
       particle=new Particle(mouseX,10,10);
     }
  }