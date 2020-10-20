
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var stone,launcher,ground;

function preload()
{
	 stoneImg = loadImage("sprites/mango.png")
}	 mango = loadImage("sprites/mango.png")  


function setup() {
	createCanvas(1400,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 mango1 = new Mango(1100,100,30);
	 mango2 = new Mango(1200,150,30);
	 mango3 = new Mango(1150,290,30);
	 mango4 = new Mango(1250,320,30);
	 mango5 = new Mango(1000,390,30);
	 mango6 = new Mango(1210,250,30);
	 mango7 = new Mango(1250,420,30);
	 mango8 = new Mango(1300,380,30);

	 stone = new Stone(200,50);

	 launcher = new Launcher(stone.body,{x: 200, y: 50})
	 
	 ground = new Ground(600,height,1200,20);

	 tree = new Tree(1150,310);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  launcher.display();
  stone.display();
  ground.display();
  tree.display();
 
}

function detectCollision(lstone,lmango){
	 mangoBodyPosition = lmango.body.positon
	 stoneBodyPosition = lstone.body.positon

	 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	  if (distance <= lmango.r + lstone.r){
          Matter.Body.setStatic(lmango.body,false);;
	  }
}

function mouseDragged(){
		 Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
 }
 
 
 function mouseReleased(){
	 launcher.fly();
	 gameState = "launched";
 }
 
 function keyPressed(){
	 if(keyCode === 32){
		 Matter.Body.setPosition(stone.body,{x: 200, y: 50});
		 launcher.attach(stone.body);
	 }
 }

