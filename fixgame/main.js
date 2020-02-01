// Player
let p;
let playerImg;
let beamImg;
// Player weapon
let shooting_time = 0;
let shooting = false;
// Enemies
let e = [];
let enemyImg;
// Menu
let s;
let score = 0;
let bgImg;

function preload() {
  enemyImg = loadImage('mine-1.png');
  bgImg = loadImage('bkgd_0.jpg');
  playerImg = loadImage('Alien-Cruiser.png');
  beamImg = loadImage('beam.png');
}

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
  // create all objects
  p = new Player(playerImg, beamImg);
  s = new StartMenu();
  e.push(new Enemy(enemyImg));
}

function draw() {
  background(220);
  image( bgImg, 400, 400);
  if(s.isStarted())
  {
    p.followMouse();
    p.display();
    for(let el of e)
    {
      el.move();
      el.display();
      if(el.isHit(p.returnX(), p.returnY()))
      {
        e.splice( e.indexOf(el), 1 );
        score += 10;
      }
      if(el.isExploded())
      {
        e.splice( e.indexOf(el), 1 );
        score -= 100;
        s.minusHealth();
      }
    }
    s.ui();
  }
  else if (s.isGameOver())
  {
    s.gameOver();
  }
  else {
    s.helloMessage();
    s.button();
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
    e.push(new Enemy(img));
  }
}
function mousePressed()
{
  if(!s.isStarted())
  {
    s.buttonPressed();
    // disallows to fire 30 ticks into the game
    flip_shooting();
  }
  else if(shooting_time == 0 && !shooting)
  {
    shooting = !shooting;
    p.pewpew();
  }
}
function flip_shooting()
{
  shooting = !shooting;
}
