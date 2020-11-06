//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground,ball;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var obj = {
  isStatic:true
  }
  var obj_ball = {
    restitution:1.0
    }
  ground= Bodies.rectangle(200,390,400,10,obj);
  ball= Bodies.circle(200,200,40,obj_ball);
World.add(world,ground);
World.add(world,ball);
console.log(ground);



}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  rect(ground.position.x,ground.position.y,400,10);
  ellipse(ball.position.x,ball.position.y,40,40)

  drawSprites();
}