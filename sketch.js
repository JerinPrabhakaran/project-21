var bullet ,wall;

var speed ,weight ,thickness;
function setup() {
  speed = random(223,321);

  weight = random(30 ,52);

  thickness = random(22,83);

  bullet = createSprite(50 ,200 ,70 ,10);
  bullet.velocityX = speed;
  wall = createSprite(1200 ,200 ,thickness ,height/2);
  createCanvas(1600,400);

}
function draw() {
  background("white");
  if (hasCollided(bullet,wall))
   {
    bullet.velocityX = 0;
    var damage = 0.5*weight * speed * speed / (thickness*thickness*thickness);
  if (damage<10)  
{
  wall.shapeColor = ("green");
}
  if (damage>10)
  {
    wall.shapeColor = ("red");
  }
} 
  drawSprites();
}

function hasCollided(lBullet ,lwall){
  bulletRightEdge = lBullet.x + lBullet.width;
  wallRightEdge = lwall.x;
  if (bulletRightEdge>wallRightEdge)
  {
   return true;
  }
   return false;
}