var trex, trexImg;

var edges;

function preload()
{

   trexImg = loadAnimation("trex1.png", "trex3.png", "trex4.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
   trex = createSprite(120, 130, 20, 40); 
   trex.addAnimation("t",trexImg);
   trex.scale = 0.5;
 

   edges = createEdgeSprites();
}

function draw(){
  background("black")
  
  textSize(15);
  fill("white");
  text(mouseX + "," + mouseY, mouseX, mouseY);


  if(keyDown("space"))
  {
    trex.velocityY = -9;
  }


  //gravity logic
  trex.velocityY = trex.velocityY + 1

  //stop the trex to fall off 
  trex.collide(edges[3]);


  drawSprites();

}
