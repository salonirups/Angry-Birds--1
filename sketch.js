const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    box3 = new Box(700,245,70,70);
    box4 = new Box(900,245,70,70);
    box5 = new Box(800,155,70,70);

    ground = new Ground(600,height,1200,20)

    pig1=new Pig(800,320);
    pig2=new Pig(800,275);

    log1=new Logs(800,280,300,PI/2)
    log2=new Logs(800,200,300,PI/2)
    log3=new Logs(760,130,150,PI/7)
    log4=new Logs(860,130,150,-PI/7)


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log4.display();
    log3.display();
}