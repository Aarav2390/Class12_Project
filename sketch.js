var boy,boy_running
var drink,bomb,coin
var path,power,invisPath
var drinkImage,bombImage,coinImage,pathImage,powerImage

function preload(){
  boy_running = loadAnimation("Runner-1.png","Runner-2.png");
  drinkImage = loadImage("energyDrink.png")
  bombImage = loadImage("bomb.png");
  coinImage = loadImage("coin.png");
  pathImage = loadImage("path.png");
  powerImage = loadImage("power.png");
}

function setup(){
  createCanvas(400,400);
  
  
  var path = createSprite(200,200,200,400); 
  var drink = createSprite(255,250);
  var bomb = createSprite(150,200);
  var coin = createSprite(200,100);
  
  
  var boy = createSprite(200,300,20,20);
  boy.addAnimation("running",boy_running);

 

  drink.scale = 0.15;
  bomb.scale = 0.08;
  coin.scale = 0.25;
  boy.scale = 0.05;
  path.scale = 0.55;
  
  path.addImage("path",pathImage);
  path.velocityY = 4;

  drink.addImage("drink",drinkImage);
  bomb.addImage("bomb",bombImage);
  coin.addImage("coin",coinImage);
}

function draw() {
  background(0);
 
if(path.y > 400){
  path.y = height/2;
}

  drawSprites();


}
