
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var leftground;
var rightground;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(width/2,570,width,20);
    leftground = new Ground(900,521,20,120)
    rightground = new Ground(1100,521,20,120) 

	Engine.run(engine);

	var ball_options={
		isStatic : false,
		restitution : 0.3,
		friction : 0,
		density : 1.2

	}

		ball = Bodies.circle(200,100,20,ball_options);
		World.add(world,ball);

		rectMode(CENTER);
		ellipseMode(RADIUS);
		  
}


function draw() {
  rectMode(CENTER);
  background("White");
  
  ellipse(ball.position.x,ball.position.y,20,20)
  
  ground.display();
  leftground.display();
  rightground.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball,ball.position,{x:67,y:-85});
  
	}
}



