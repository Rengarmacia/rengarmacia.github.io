var s;
var scl = 20;
var food;
var score1 = 0;
var highscore = 0;

function setup() {
  //var canvas_Width = windowWidth - (windowWidth % 2);
  //var canvas_Height = windowHeight - (windowHeight % 2);
  var cnv = createCanvas(600, 600);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  //cnv.className = "canvas123";
  s = new Snake();
  frameRate(15);
  pickLocation();

}
function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function countScore() {
	score1 = score1 + 10;
  if(highscore < score1) {
    highscore = score1;
  }
  document.getElementById("highscore").innerHTML = highscore;
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
	 countScore();
  }
  s.death();
  s.update();
  s.show();

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
  if(keyCode == 80) {
    pauseGame();
  }
}
var gamePaused = false;

function pauseGame(){
  if(!gamePaused){
    frameRate(0);
    document.getElementById("pause").innerHTML = "The Game is Paused";
    gamePaused = true;
  } else if (gamePaused) {
    frameRate(15);
    document.getElementById("pause").innerHTML = "";
    gamePaused = false;
  }
}
