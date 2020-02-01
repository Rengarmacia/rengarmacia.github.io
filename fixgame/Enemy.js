let screen = 800;
class Enemy {
	constructor(img)
	{
		this.img = img;
		this.x = random(100, 700);
		this.y = random(50, 350);
		this.dirx = random(0, 5);
		this.diry = random(0, 5);
		this.speed = 50;
		this.size = 100;
		this.bombTimer = 255;
		this.bombTimer = constrain(this.bombTimer, 0, 255);
		this.exploded = false;
	}
	move()
	{
		this.x += this.dirx;
		this.y += this.diry;
		if(this.x - this.size/2 < 0)
		{
			this.dirx = random(1, 5);
		}
		else if(this.x + this.size/2 > screen)
		{
			this.dirx = -random(1,5);
		}

		if(this.y - this.size/2 < 0)
		{
			this.diry = random(1,5);
		}
		else if(this.y + this.size/2 > 400)
		{
			this.diry = -random(1,5);
		}
	}
	display()
	{
		//tint(255, this.bombTimer,  this.bombTimer);
		this.bombTimer -= 1;
		this.bombTimer = constrain(this.bombTimer, 0, 255);
		if(this.bombTimer <= 0)
			this.explode();
		image(this.img, this.x, this.y, this.size, this.size);
		// ellipse(this.x, this.y, this.size, this.size);
	}
	isHit(laserX, laserY)
	{
		//console.log(this.x, laserX);
		if( this.x - (this.size / 2) < laserX && laserX < this.x + (this.size / 2)
			&& this.y - (this.size/2) < laserY && laserY < this.y + (this.size / 2))
		{
			console.log("it worked");
			console.log('{0} {1} - {2} {3}', this.x, this.y, laserX, laserY);
			return true;
		}
		else return false;
	}
	explode()
	{
		this.size += 5;
		if(this.size >= 200)
		{
			this.exploded = true;
		}
	}
	isExploded(){
		return this.exploded;
	}
}
