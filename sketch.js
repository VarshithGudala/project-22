const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var world;
//var ropeMaster;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	
	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	roof=Bodies.rectangle(400,100,230,20,roof_options);
	World.add(world,roof);

	var ball_options= {
	isStatic:false,	
    restitution:1.1,
	friction:0
	}

	roof=Bodies.rectangle(400,100,230,20,roof_options);
	World.add(world,roof);


	bob1 = Bodies.circle(320,400,20,ball_options);
	World.add(world,bob1)
	bob2 = Bodies.circle(360,400,20,ball_options);
	World.add(world,bob2);
	bob3 = Bodies.circle(400,400,20,ball_options);
	World.add(world,bob3);
	bob4 = Bodies.circle(440,400,20,ball_options);
	World.add(world,bob4);
	bob5 = Bodies.circle(480,400,20,ball_options);
	World.add(world,bob5);

	

	Rope1 = new rope(bob1,roof,-80,0);
	Rope2 = new rope(bob2,roof,-40,0);
	Rope3 = new rope(bob3,roof,0,0);
	Rope4 = new rope(bob4,roof,40,0);
	Rope5 = new rope(bob5,roof,80,0);

	
	Engine.run(engine);
	
  
}






function draw() {
	var world = Matter.world;


  rectMode(CENTER);
  background("#99004d");
  



//create ellipse shape for multiple bobs here
  rect(roof.position.x,roof.position.y,230,20);
  ellipse(bob1.position.x,bob1.position.y,40);
  ellipse(bob2.position.x,bob2.position.y,40);
  ellipse(bob3.position.x,bob3.position.y,40);
  ellipse(bob4.position.x,bob4.position.y,40);
  ellipse(bob5.position.x,bob5.position.y,40);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}


//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	console.log("Hi22");
if(keyCode == UP_ARROW){
	console.log("Hi33");
	console.log("Hi33"+bob1.position.x);
Matter.Body.applyForce(bob1,{x:0,y:0},{x:0.05,y:0});
 }		
}
