var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var drop1,drop2,drop3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	engine = Engine.create();
	world = engine.world;

	sprite1=createSprite(400,650,200,20);
	sprite1.shapeColor="red";
	drop1=new Box(400,630,200,20);

	sprite2=createSprite(300,610,20,100);
	sprite2.shapeColor="red";	
	drop2=new Box(300,610,20,100);
	
	sprite3=createSprite(500,610,20,100);
	sprite3.shapeColor="red";
	drop3=new Box(500,610,20,100);
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;
  
 
  drawSprites();
   
}

function keyPressed() {

 if (keyCode === DOWN_ARROW) {
    
	Matter.Body.setStatic(packageBody,false);
	
  }
}



