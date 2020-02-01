 let easing = 0.05;
class Player {

  constructor()
  {
    this.size = 40;
    this.x = 20;
    this.y = 700;
    this.gunx = 30;
    this.guny = this.y - 10;
    this.gunWidth = 20;
    this.gunHeight = 10;
    this.isPew = false;
    this.timer = 0;
    this.laserY = 0;
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
    let targetX = mouseX - (this.size / 2);
    let dx = targetX - this.x;

    this.x += dx * easing;
    this.gunx = this.x + 10;
  }
  display()
  {
    if(this.timer < 30)
    {
      strokeWeight(this.timer/8);
      line(this.x + this.size/2, (25 - this.timer)*15 + 100, this.x + this.size/2, this.y - this.timer*25);
      this.laserY = this.y - this.timer*25;
      strokeWeight(1);
      this.timer++;
    }
    fill(255);
    rect(this.x, this.y, this.size, this.size);
    rect(this.gunx, this.guny, this.gunWidth, this.gunHeight);
  }
  pewpew()
  {
    this.timer = 0;
  }
  returnX()
  {
    return this.x + this.size/2;
  }
  returnY()
  {
    return this.laserY;
  }
}
