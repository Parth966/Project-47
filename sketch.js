var bottle1,bottle2

function setup() {
  createCanvas(800,400);
  bottle1 = loadImage("bottle1.png")
  bottle2 = loadImage("bottle2.png") 
}
function draw() {
  background(bottle1);
  textSize(80)
  text("BAD!",10,300)

  if(keyDown("SPACE")){
    background(bottle2)
    textSize(80)  
    text("GOOD!",10,100);
  }

  drawSprites();
}