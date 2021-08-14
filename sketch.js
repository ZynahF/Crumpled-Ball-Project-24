
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	db1 = new Dustbin (1190,350,200,20)
	db2 = new Dustbin (1100,310,20,100)
	db3 = new Dustbin (1280,310,20,100)

	ground = new Ground (800,370,1600,20)

	paper = new Paper (200,350,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  db1.display()
  db2.display()
  db3.display()
  ground.display()
  paper.display()

  keyPressed()

  drawSprites();
 
}

function keyPressed() {

	if(keyCode === UP_ARROW) {

		Matter.Body.applyForce(paper.body, paper.body.position,{x: 1.8, y: -3.4})

	}

}



