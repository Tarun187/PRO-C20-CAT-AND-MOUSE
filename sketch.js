var jerry , tom,bg;
var jerryImg1,jerryImg2 , jerryImg3, tomImg1, tomImg2, tomImg3;

function preload() {
   bg=loadImage("images/garden.png");
 jerryImg1=loadImage("images/mouse1.png");
 jerryImg2=loadAnimation("images/mouse2.png","images/mouse3.png");
 jerryImg3=loadImage("images/mouse4.png")
 tomImg1=loadImage("images/cat1.png");
 tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
 tomImg3=loadImage("images/cat4.png");   
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.addImage("tomRst", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addImage("jerryStd", jerryImg1);
    jerry.scale = 0.15;
    jerry.debug=true;
    tom.debug=true;
    tom.setCollider("circle",0,0,5);
    jerry.setCollider("circle",0,0,5);
}

function draw() {
   background(bg);
    if(tom.x - jerry.x <= (tom.width + jerry.width)/6 ){
      tom.addAnimation("last",tomImg3);
      tom.changeAnimation("last");
      tom.scale = 0.2;
      tom.velocityX=0
      jerry.addAnimation("last1",jerryImg3);
      jerry.changeAnimation("last1");
      jerry.scale=0.15;
     
      
   }
  
  


  
    drawSprites();
}


function keyPressed(){
  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRun", tomImg2);
    tom.changeAnimation("tomRun");
    
    jerry.addAnimation("jerryTeas", jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeas");
}
 

}
