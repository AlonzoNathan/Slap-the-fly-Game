//game by Alonzo Theja//
//© copyright all rights reserved// 
var screen = 0;
var colorValue = 0;
var circleX = 0;
var circleY = 0;
var toastX = 0;
var toastY = 0;
var roastX = 0;
var roastY = 0;
var stickX = 0;
var stickY = 0;
var score = 0;
var blood;
var goldfly;
var fly;
var stick;
var title;
var winsc;
var gameover;
var extraCanvas;
var extraCanvas2;
let timer = 20;
let timer2 = 6;
let Xspeed = 5;
let Yspeed = 2;
let speedX = 4;
let speedY = 2;
let speedX1 = 6;
let speedY1 = 3;
let speedSX = 5;
let speedSY = 2;
var updateCircle2;
var updateCircle;
var song;

function preload(){
  blood = loadImage('blood.png');
  fly   = loadImage('fly.png');
  stick = loadImage('stick.png');
  goldfly = loadImage('goldfly.png');
  title = loadImage('title.png');
  title2= loadImage('title2.png');
  song = loadSound("lagu2.mp3");
  winsc = loadImage('winsc.png');
  gameover = loadImage('gameover.png');
}

function setup() {
  createCanvas(400, 400);
  updateCircle();
  updateCircle2();
  extraCanvas = createGraphics(400,400);
  extraCanvas.clear;
  extraCanvas2 =createGraphics(400,400);
  extraCanvas2.clear;
  song.loop();
  song.setVolume(0.2);
}

function draw() {
	if(screen == 0){
    startScreen()
  }else if(screen == 1){
  	gameOn()
  }else if(screen==2){
  	endScreen()
  }else if(screen==3){
    winScreen()
  }
}

function startScreen(){
  score = 0;
  background(251, 190, 0);
  image(title,0,0,400,400);
  fill(237,120,90);
  strokeWeight(3);
  stroke(255);
  textSize(20);
  text("By:Alonzo Theja",320,383);
  strokeWeight(4);
  stroke(255);
  textAlign(CENTER);
  textSize(25)
  text("20",96,382);
  image(stick,stickX,stickY,70,130);
  noStroke()
//text('WELCOME TO SLAP THE FLY GAME', width / 2, height / 2)
//text('click to start', width / 2, height / 2 + 30);
if (stickX > width-30 || stickX < 0){
  speedSX = speedSX * -1
}
if (stickY > width-20 || stickY< 0){
  speedSY = speedSY * -1
}
if (frameCount % 60 == 0 && timer2 > 0) { 
  timer2 --;
  }
if (timer2 == 0) {
   screen = 1
   timer2 = 6
}
  fill(0)
  textSize(40);
  text(timer2, 380,40 );
  stickX += speedSX;
  stickY += speedSY;
}

function gameOn(){
  image(title2,0,0,400,400);
  image(extraCanvas,0,0,400,400);
  //ellipse(circleX, circleY, 50, 50);
  textSize(40);
  noStroke();
  text(timer, 360,40 );
  text("Time",290,40);
  updateScore();
  //image(fly,circleX,circleY,70,70);
  strokeWeight(0.9)
  stroke(0)
  fill(255)
  rect(0,30,80,30)
  fill(0)
  text("CLEAN",40,50)
  fill(255)
  rect(0,60,80,30)
  fill(0)
  text("SOUND",40,80)
  image(fly,circleX-40,circleY-40,70,70);
  image(fly,toastX-40,toastY-40,70,70);
  if(score == 5 || score >= 5){
  image(goldfly,roastX-40,roastY-40,70,70);
  }
  //circle(65,45,28);
  //circle(37,45,28);
  //circle(10,75,28);
  image(stick,mouseX-30,mouseY-20,70,130);
  //line(toastX,toastY,mouseX,mouseY);
    if (frameCount % 60 == 0 && timer > 0) { 
  timer --;
  }
  if (score <= 20 && timer == 0) {
    screen = 2
    timer = 20
    extraCanvas.image(title2,0,0,400,400);
}else if(score >= 20 && timer == 0 ){
  screen = 3
  timer = 20
  extraCanvas.image(title2,0,0,400,400);
}
if (circleX > width+20 || circleX < 0){
  Xspeed = Xspeed * -1
}
if (circleY > width+20 || circleY< 0){
  Yspeed = Yspeed * -1
}
if (toastX > width+20 || toastX< 0 ){
  speedX = speedX * -1
}
if (toastY > width+20 || toastY< 0 ){
  speedY = speedY * -1
}
if (roastX > width+20 || roastX<0){
  speedX1 = speedX1 * -1
}
if (roastY > width+20 || roastY<0){
  speedY1 = speedY1 * -1
}
  circleX += Xspeed;
  circleY += Yspeed;
  toastX  += speedX;
  toastY  += speedY;
  roastX  += speedX1;
  roastY  += speedY1;
}

function mousePressed() {
  var d = dist(circleX, circleY, mouseX, mouseY);
  if (d < 35 ) {
  updateCircle();
  score += 1;
  extraCanvas.image(blood,mouseX-30,mouseY,70,70);
  }
  var gf = dist(roastX,roastY,mouseX,mouseY);
  if(gf < 35){
    updateCircle3();
    score = score + 5;
    extraCanvas.image(blood,mouseX-30,mouseY,70,70);
  }
  var rd  = dist(10,45,mouseX,mouseY);
  var rd1 = dist(37,45,mouseX,mouseY);
  var rd2 = dist(65,45,mouseX,mouseY);
  if(rd <= 10 || rd1 <= 10 || rd2 <= 10) {
  extraCanvas.image(title2,0,0,400,400);  
  }
  var rd3 = dist(10,75,mouseX,mouseY);
  var rd4 = dist(37,75,mouseX,mouseY);
  var rd5 = dist(65,75,mouseX,mouseY);
  if(rd3 <=10 || rd4 <= 10 || rd5 <= 10){
  song.stop(); 
  }
  var ed = dist(toastX,toastY,mouseX,mouseY);
  if(ed < 35){
    updateCircle2();
    score += 1;
    extraCanvas.image(blood,mouseX-30,mouseY,70,70);
  }
  if(screen==0){
  	screen=1
  }else if(screen==2){
  	screen=0
  }else if(screen==3){
    screen=0
  }
}


function endScreen(){
        timer2 = 6;
		image(gameover,0,0,400,400);
		textAlign(CENTER);
        fill(255)
        textSize(30);
		//text('GAME OVER', width/2, height / 2 - 30)
        text("SCORE = " + score, width / 2, height / 2 - 45)
        textSize(30)
		//text('Click to play again', width / 2, height / 2 + 60);
  fill(244,56,160);
  strokeWeight(3);
  stroke(255);
  textSize(12);
  text("By:Alonzo Theja",352,392);        
}
function winScreen(){
        timer2 = 6;
        image(winsc,0,0,400,400);
		//textAlign(CENTER);
        //textSize(50);
		//text('CONGRATULATION', width/2, height / 2 - 30)
        textSize(30)
        fill(255)
  	    text("SCORE = " + score, width / 2, height / 2 + 125)
		//text('Click to play again', width / 2, height / 2 + 60);
  fill(251,190,0);
  strokeWeight(3);
  stroke(255);
  textSize(20);
  text("By:Alonzo Theja",320,390);
}

  function updateCircle() {
  circleX = random(60, 300);
  circleY = random(60, 300);
  
}
  function updateCircle2() {
  toastX  = random(70,350);
  toastY  = random(70,350); 
  }
  function updateCircle3(){
  roastX = random(40,350);
  roastY = random(40,350);
  }
function updateScore() {
  fill(0,0,0)
  textSize(20);
  text("Score: " + score,40, 20);
}