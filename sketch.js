var bgImg,cat,mouse,catImg,mouseImg,catAnimation,mouseAnimation,mouseMovingAnimation;
var catLastAnimation, mouseLastAnimation
function preload() {
   catImg=loadAnimation("images/tomOne.png");
   mouseAnimation=loadAnimation("images/jerryOne.png");
   catAnimation=loadAnimation("images/tomTwo.png","images/tomThree.png")
   mouseMovingAnimation=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
   catLastAnimation=loadAnimation("images/tomFour.png")
    mouseLastAnimation=loadAnimation("images/jerryFour.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bgImg=loadImage("images/garden.png")
    cat=createSprite(900,700)
    mouse=createSprite(300,700)

    cat.addAnimation("catstill",catImg)
    cat.addAnimation("cat running",catAnimation)
    cat.addAnimation("catLastImage",catLastAnimation)
    cat.scale=0.2;
    mouse.addAnimation("mouse still",mouseAnimation)
    mouse.addAnimation("mouse jumping",mouseMovingAnimation);
    mouse.addAnimation("mouseLastImage",mouseLastAnimation)
    mouse.scale=0.1;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x <=(cat.width-mouse.width)/2){
      cat.changeAnimation("catLastImage",catLastAnimation)
      mouse.changeAnimation("mouseLastImage",mouseLastAnimation)
      cat.velocityX=0;
    }

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    //  console.log("cat running")
      cat.velocityX=-5;
cat.changeAnimation("cat running",catAnimation);
mouse.changeAnimation("mouse jumping",mouseMovingAnimation);
  }


}
