var fixedRect, movingRect;
var a,b,c,d; 
function setup() { 
  createCanvas(1200,800); 
  fixedRect = createSprite(600, 400, 50, 80);
fixedRect.shapeColor = "green"; 
   fixedRect.debug = true; 
   movingRect = createSprite(400,200,80,30); 
   movingRect.shapeColor = "green";
    movingRect.debug = true;
    a=createSprite(100,100,50,50);
    b=createSprite(200,100,50,50);
    c=createSprite(300,100,50,50);
    d=createSprite(400,100,50,50);
    a.shapeColor="green";
    b.shapeColor="green";
    c.shapeColor="green";
    d.shapeColor="green";
   } 
    function draw() {
background(0,0,0);
a.velocityY=-5;
b.velocityY=+5;
bounceOff(a,b);
drawSprites();
 }


function bounceOff(o1,o2){
  if (o1.x - o2.x < o1.width/2 + o2.width/2
    && o1.x - o2.x < o1.width/2 + o1.width/2) {
  o1.velocityX = o2.velocityX * (-1);
  o1.velocityX = o2.velocityX * (-1);
}
if (o1.y - o2.y < o1.height/2 + o2.height/2
  && o1.y - o2.y < o1.height/2 + o2.height/2){
  o1.velocityY = o2.velocityY * (-1);
  o1.velocityY = o2.velocityY * (-1);
}
}
