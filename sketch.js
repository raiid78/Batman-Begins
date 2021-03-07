const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint = Matter.Constraint;

var maxDrops = 100;
function preload(){
    
}

function setup(){
   createCanvas(200,600);
    
   maxDrops = new Drops(random(200,10));
}

function draw(){
    background("white");
    maxDrops.display();

    drawSprites();
}   

