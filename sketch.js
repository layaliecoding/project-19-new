var bananaImage,obstacleImage,obstaclegroup,backgroundImage,background,score,banana,obstacle;

var monkeyImage,monkey;
 var invisibleground;

function preload(){
backgroundImage=loadImage("jungle.jpg");
bananaImage=loadImage("banana.png"); 
monkeyImage=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  obstacleImage=loadImage("stone.png");
  
 
}

function setup() {
  createCanvas(800, 400);
  ground=createSprite(0,0,800,400);
  ground.addImage(backgroundImage);
  ground.scale=1.5;
  ground.x=ground.width/2;
  invisibleground=createSprite(400,380,800,20);
  invisibleground.visible=false;
  
  ground.velocityX=-4;
  monkey=createSprite(50,380,10,10);
  monkey.addAnimation("running",monkeyImage);
  monkey.scale=0.2;
  
  obstacleGroup = new Group();
  foodGroup = new Group();
  score=0;
  }

function draw() {
  background(220);
  
   if (ground.x < 0){
    ground.x = ground.width/2;
   }
   if(foodGroup.isTouching(monkey)){
     foodGroup.destroyEach();
      score=score+2;
      }
    switch(score){
      case 10: monkey.scale=0.12;
        break;
      case 20: monkey.scale=0.14;
        break;
      case 30: monkey.scale=0.16;
        break;  
      case 40: monkey.scale=0.18;
        break;  
        default:break;  
    }
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.2;
  }
  
  if(keyDown("space")){
  monkey.velocityY=-2;
    
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(invisibleground);
  
  food();
  obstacles();
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score,500,50);
  
  
}

function food(){
if(frameCount % 100===0){
banana=createSprite(800,200,10,10);
banana.addImage(bananaImage);
banana.scale=0.1;
banana.velocityX=-2;  
  foodGroup.add(banana);
}
}
function obstacles(){
  if(frameCount % 120===0){
obstacle=createSprite(800,370,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.2;
    obstacle.velocityX=-2;
    obstacleGroup.add(obstacle);
  }
}