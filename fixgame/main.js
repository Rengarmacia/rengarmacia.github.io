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
// Menu
let s;
let score = 0;
let bgImg;
let heartImg;
// levels
let l;
function preload() {
  enemyImg = loadImage('mine-1.png');
  bgImg = loadImage('bkgd_0.jpg');
  playerImg = loadImage('Alien-Cruiser.png');
  beamImg = loadImage('beam.png');
  heartImg = loadImage('heart.png')
}

function setup() {
  createCanvas(800, 800);
  ellipseMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
  // create all objects
  p = new Player(playerImg, beamImg);
  s = new StartMenu();
  l = new Levels();
  l.level1_init();
}

function draw() {
  background(220);
  image( bgImg, 400, 400);

  if(s.isStarted())
  {
    l.update();
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
    createEnemy(enemyImg);
  }
}
function mousePressed()
{
  if(!s.isStarted() || l.isLevelCleared())
  {
    s.buttonPressed();
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
function createEnemy(selected)
{
  e.push(new Enemy(selected));
}
