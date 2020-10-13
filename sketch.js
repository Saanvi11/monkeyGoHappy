var monkey, ground, bananaGroup, obstacleGroup, monkeyImage, bananaImg, banana, obstacle, obstacleImg;

function preload(){
  
monkeyImage=loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  
bananaImg=loadImage("banana.png"); 
obstacleImg=loadImage("obstacle.png");
}


function setup(){
  createCanvas(600, 600);
  
  
  ground=createSprite(300, 500, 600, 10);
  ground.velocityX=-3;
  
monkey=createSprite(150, 450, 40, 40);
monkey.addAnimation("running", monkeyImage);
monkey.scale=0.2;

bananaGroup= new Group();
  
obstacleGroup=new Group();
  
}

function draw(){
  
background("white");
  
if(keyDown("space")){
  monkey.velocityY=-5;
  
}
  
  monkey.velocityY = monkey.velocityY + 0.3;
  
  
  food();
  
  obstacles();
  monkey.collide(ground);
  
if (ground.x < 0){
      ground.x = ground.width/2;
}
  
  
  drawSprites();
}





function food(){
  if(frameCount%80===0){
     banana=createSprite(600, Math.round(random(120, 400)), 10, 10);
    banana.addImage(bananaImg);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=200;
    
    bananaGroup.add(banana);
  
  } 
}


function obstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(Math.round(random(120, 200)), 450,  10, 10);
    obstacle.addImage(obstacleImg);
    obstacle.scale=0.2;
    obstacle.velocityX=-3;
    obstacle.lifetime=600;
    
    obstacleGroup.add(obstacle);
  }
  
  
}