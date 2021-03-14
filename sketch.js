const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var maxDrops = 120;
var drop=[];
var boy, thunderI, thunder;

function preload()
{
    thunderI = loadImage("thunder.png");
}

function setup()
{
    createCanvas(600,600);
    engine = Engine.create();
	world = engine.world;
   
    for(var i=0; i<=maxDrops; i++){
        drop.push(new Drops(random(0,600), random(0,500),2));
    }

    boy = new Umbrella(260,475,130);
    thunder = createSprite(300,100,250,250);
    thunder.addImage(thunderI);

}

function draw()
{  
    background("black");
   Engine.update(engine);

   for(var j=0; j<120; j++){
    drop[j].display();
    drop[j].update();
  }

  boy.display();

  
  if(frameCount%50===0){
    drawSprites();
 }

}   

