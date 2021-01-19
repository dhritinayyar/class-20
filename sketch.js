var fixRect , movingRect ;

function setup() {

  createCanvas(800,400);
  fixRect = createSprite(400, 200, 50, 20);
  fixRect.shapeColor="red";
movingRect = createSprite(250,150,20,50);
movingRect.shapeColor="yellow";

}

function draw() {
  background("pink");
  
 movingRect.x=mouseX; 
movingRect.y=mouseY;

if(movingRect.x-fixRect.x < movingRect.width /2 + fixRect.width/2
  && fixRect.x-movingRect.x <  movingRect.width /2 + fixRect.width/2
  && movingRect.y-fixRect.y < movingRect.height /2 + fixRect.height/2
  &&fixRect.y-movingRect.y<  movingRect.height /2 + fixRect.height/2){

    fixRect.shapeColor="blue";
    movingRect.shapeColor="cyan";


}
else{

  fixRect.shapeColor="red";
  movingRect.shapeColor="yellow";


}




  drawSprites();
}