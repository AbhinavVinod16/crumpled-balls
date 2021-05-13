
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var Ball;


function setup() {
	createCanvas(1700, 800);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	Ball=new ball(500,500,50,50)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  Engine.update(engine);
  
 

  groundObject.display();
  dustbinObj.display();
  Ball.display();
  drawSprites();
  
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(Ball.body,Ball.body.position,{x:120,y:-145});
	}
}


