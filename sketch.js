var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var snow = [];
var background, bgIMG;
var boy, 



function preload(){
  bgIMG= loadImage("snow2.jpg");
}



function setup() {
  createCanvas(800,400);
  boy= createSprite(400,200,20,30);
  
  
  







}





function draw() {
  background(bgIMG);  






  if (frameCount%60===0){

    snow.push(new Snow(random(width/2-30,width/2+10),10,10))

  }
  for(var p = 0; p< Snow.length;p++){
    Snow[p].display();
  }



  drawSprites();
}










