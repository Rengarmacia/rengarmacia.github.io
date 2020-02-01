 let easing = 0.05;
class Player {

  constructor(player)
  {
    this.size = 150;
    this.x = 20;
    this.y = 700;

    this.gunx = 30;
    this.guny = this.y - 10;
    this.gunWidth = 20;
    this.gunHeight = 10;

    this.isPew = false;
    this.timer = 0;
    this.laserY = 0;

    this.img = player;
  }
  right()
  {
    this.x += 10;
    this.gunx += 10;
  }
  left()
  {
    this.x -= 10;
    this.gunx -= 10;
  }
  followMouse()
  {
    let targetX = mouseX;
    let dx = targetX - this.x;

    this.x += dx * easing;
    this.gunx = this.x + 10;
  }
  display()
  {
    if(this.timer < 30)
    {
      strokeWeight((30 - this.timer)/5);
      line(this.x,  constrain(this.y - this.timer*25 + 100, 0, 700), this.x, this.y - this.timer*25);
      this.laserY = this.y - this.timer*25;
      strokeWeight(1);
      this.timer++;
    }

    image(this.img, this.x, this.y, this.size, this.size)


    // fill(255);
    // rect(this.x, this.y, this.size, this.size);
    // rect(this.gunx, this.guny, this.gunWidth, this.gunHeight);
  }
  pewpew()
  {
    this.timer = 0;
  }
  returnX()
  {
    return this.x;
  }
  returnY()
  {
    return this.laserY;
  }
}
