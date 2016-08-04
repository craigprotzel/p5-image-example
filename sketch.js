var bgColor;

var frogger;
var posX;
var posY;

var lilypad;
var showLilyPad = false;

var beep;

var storyBox;

function preload(){

  beep = loadSound('beep_01.mp3');
  frogger = loadImage('frogger.gif');
  lilypad = loadImage('lilypad.png');
}

function setup() {
	createCanvas(800, 400);

  bgColor = color(50);

	background(bgColor);
  
  posX = 30;
  posY = height/2;

  imageMode(CENTER);
  image(frogger, posX, posY);

  storyBox = select('#story-text');
}

function draw() {
  background(bgColor);

  //Move position
  if (keyIsDown(LEFT_ARROW)){
    posX -= 5;
  }
  if (keyIsDown(RIGHT_ARROW)){
    posX = posX + 5;
  }
  if (keyIsDown(UP_ARROW)){
    posY-=5;
  }
  if (keyIsDown(DOWN_ARROW)){
    posY+=5;
  }

  //Update background
  if(posX > (width * 0.65)){
    bgColor = color(200,100,150);
    storyBox.html("You did it!!!!");
  }
  else if (posX > (width * 0.4)){
    bgColor = color(100,150,200);
    storyBox.html("Almost there...");
  }
  else if (posX > (width * 0.2)){
    showLilyPad = true;
    bgColor = color(100, 200, 150);
    storyBox.html("There it is!");
  }
  else{
    bgColor = color(50);
   // showLilyPad = false;
  }

  if (showLilyPad){
    image(lilypad, width - 100, height/2, width/10,height/10);
  }

  //Draw image
  image(frogger, posX, posY);

  // if (currentImageVal === 0){
  //   image(imageOne, 0,0);
  // }
  // else if (currentImageVal === 1){
  //   image(imageTwo,0,0);
  // }

}


var currentImageVal;
var clicks = 0;
function mousePressed(){
  //Reset image position

  // clicks = clicks + 1;
  // console.log("Clicks");
  // console.log(clicks);
  posX += 30;

  // currentImageVal = (clicks%6);
  //console.log("Image Num");
  //console.log(currentImageVal);

  // showLilyPad = !showLilyPad;

 // posY = height/2;
}

function keyPressed(e){
  //console.log(e);
  if(e.keyCode === 39){
    beep.play();
  }
}



