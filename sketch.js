var fixedRect, movingRect;
var go1, go2, go3, go4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

go1 = createSprite(100, 100, 50, 50);
go1.shapeColor = "blue";
go2 = createSprite(200 , 100 , 50 ,50)
go2.shapeColor = "blue";
go3 = createSprite(300,100, 50, 50);
go3.shapeColor = "blue";
go4 = createSprite(400 , 100 , 50 ,50)
go4.shapeColor = "blue";



movingRect.velocityY = -5;
fixedRect.velocityY = +5;

}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

if( isTouching(movingRect, go4))
{
  movingRect.shapeColor = "green";
  go4.shapeColor = "green";
  text("they are touching", 200, 200);
}
else
{
  movingRect.shapeColor = "red";
  go4.shapeColor = "red";
  text("they are not touching", 200, 250);
}

 bounceoff(movingRect , fixedRect)
  drawSprites();
}

function bounceoff(object1 , object2)
{  

  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) 
    {
      object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}

if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2)
  {
    object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
  
}
 