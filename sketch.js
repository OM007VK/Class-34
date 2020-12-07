const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine, world;
var ground1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var ball1;
var rope1;

function setup() {
  createCanvas(1200,800);
  engine = Engine.create() 
  world = engine.world;

ground1 = new ground(600,795,1200,20)

box1 = new box(700,500,70,100)
box2 = new box(700,500,70,100)
box3 = new box(700,500,70,100)
// box4 = new box(700,500,70,100)
// box5 = new box(700,500,70,100)
// box6 = new box(600,500,70,100)
// box7 = new box(600,500,70,100)
// box8 = new box(600,500,70,100)
// box9 = new box(600,500,70,100)
// box10 = new box(600,500,70,100)

ball1 = new ball(300,500,80)

rope1 = new rope(ball1.body,{x:300,y:50})

}

function draw() {
  background(0);  
  Engine.run(engine)

  ground1.display();
 
  box1.display();
  box2.display();
  box3.display();
  // box4.display();
  // box5.display();
  // box6.display();
  // box7.display();
  // box8.display();
  // box9.display();
  // box10.display();

  ball1.display();

  rope1.display();
}

function mouseDragged()
{
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})


}