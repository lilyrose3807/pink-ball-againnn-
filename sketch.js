const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  B1 = createImg ("up.png")
  B1.position(30,30)
  B1.size (50,50)
  B1.mouseClicked(Vforce)

  B2 = createImg ("right.png")
  B2.position(300,30)
  B2.size (50,50)
  B2.mouseClicked(Hforce)
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var options = {restitution: 0.8}
  ball = Bodies.circle(200,200,20,options)
  World.add (world,ball)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

    fill ("pink")
  ellipse(ball.position.x, ball.position.y,20,20)


}

function Hforce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0.02,y:0}) 
}
function Vforce(){
  Matter.Body.applyForce(ball,{x:0, y:0},{x:0,y:-0.02}) 
}

