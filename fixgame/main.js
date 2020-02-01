let p;
let s;
let e = [];
let score = 0;
let img;
function preload() {
  img = loadImage('mine.jpg');
}
function setup() {
  createCanvas(800, 800);
  p = new Player();
  s = new StartMenu();
  e.push(new Enemy());
  ellipseMode(CENTER);
}

function draw() {
  background(220);
  image(img, 0, 0);
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

}
function keyPressed()
{
  if(key =='a')
  {
    e.push(new Enemy());
  }
}
function mousePressed()
{
  p.pewpew();
  s.buttonPressed();
}
