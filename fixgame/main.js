let p;
let s;
let e = [];
let score = 0;
let img;
let shooting_time = 0;
let shooting = false;
function preload() {
  img = loadImage('mine-1.png');
}
function setup() {
  createCanvas(800, 800);
  p = new Player();
  s = new StartMenu();
  e.push(new Enemy(img));
  ellipseMode(CENTER);
  imageMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(220);
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
        console.log("exploded");
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
    console.log(shooting_time, shooting);
  }
  if(shooting_time >= 30)
  {
    shooting_time = 0;
    shooting = !shooting;
    console.log(shooting_time, shooting);
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
  if(shooting_time == 0 && !shooting)
  {
    shooting = !shooting;
    p.pewpew();
    console.log(shooting_time, shooting);
  }

  if(!s.isStarted())
    s.buttonPressed();
}
