// Player
let p;
let playerImg;
let beamImg;
// Player weapon
let shooting_time = 0;
let shooting = true;
// Enemies
let e = [];
let enemyImg;
let enemyImg2;
let enemyImg3;
// Menu
let s;
let score = 0;
let bgImg;
let heartImg;
// levels
let l;
// music
let song;
let slider;
let songStarted = false;
function preload() {
  enemyImg = loadImage('mine-1.png');
  enemyImg2 = loadImage('ships/Alien-Frigate.png');
  enemyImg3 = loadImage('ships/Alien-Scout.png');

  bgImg = loadImage('bkgd_0.jpg');
  playerImg = loadImage('Alien-Cruiser.png');
  beamImg = loadImage('beam.png');
  heartImg = loadImage('heart.png');

  song = loadSound("bensound-slowmotion.mp3");
}

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
  // music
  slider = createSlider(0, 1, 0.1, 0.01);
  // create all objects
  p = new Player(playerImg, beamImg);
  s = new StartMenu();
  l = new Levels();
}

function draw() {
  background(220);
  image( bgImg, 400, 400);
  song.setVolume(slider.value());
  if(s.isStarted()) {
    l.update();
    p.followMouse();
    p.display();
    for(let el of e) {
      el.move();
      el.display();
      if(el.isHit(p.returnX(), p.returnY())) {
        e.splice( e.indexOf(el), 1 );
        score += 10;
      }
      if(el.isExploded()) {
        e.splice( e.indexOf(el), 1 );
        score -= 100;
        s.minusHealth();
      }
    }
    // ui on top of everything
    s.ui();
  }
  else if (s.isGameOver()) {
    s.gameOver();
  }
  else if (l.isLevelCleared() && l.returnOn()) {
    s.levelUp();
    console.log("level up");
  }
  else {
    s.helloMessage();
    s.button();
  }
  if(s.winMessage.length != 0) {
    fill(255);
    text(s.winMessage, 400, 400);
  }
  if(shooting)
  {
    shooting_time++;
  }
  if(shooting_time >= 30)
  {
    shooting_time = 0;
    flip_shooting();
  }
}
function keyPressed()
{
  if(key =='a')
  {
    createEnemy(enemyImg);
  }
}
function mousePressed()
{
  if(!s.isStarted() || l.isLevelCleared() && !l.won)
  {
    s.buttonPressed();
    console.log("mousePressed activated");
  }
  else if (l.won) {
    s.buttonPressedWin();
    console.log("mousePressed activated victory");
  }
  else if(shooting_time == 0 && !shooting)
  {
    shooting = !shooting;
    p.pewpew();
  }
  if(!songStarted) {
    song.play();
  }
}
function flip_shooting()
{
  shooting = !shooting;
}
function createEnemy(selected)
{
  e.push(new Enemy(selected));
}
