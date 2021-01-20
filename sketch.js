const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine;
var myworld;

var ground;
var ball;

function setup(){
    createCanvas(400,400);

    myengine=Engine.create()
    myworld=myengine.world

    var options={
        isStatic :true

    }
    ground=Bodies.rectangle(200,380,400,20,options);

    World.add(myworld,ground);

    var ball_options={
        restitution:1

    }

    ball=Bodies.circle(200,200,20,ball_options);
    World.add(myworld,ball);
    
}

function draw(){
  background(0);
  
  Engine.update(myengine);
  fill ("red");
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
   

  

}