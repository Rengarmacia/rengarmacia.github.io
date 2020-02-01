let SIZE = 800;
let LINEHEIGHT = 20;
class StartMenu {

  constructor()
  {
    this.x1 = SIZE/2;
    this.y1 = SIZE/2 - LINEHEIGHT;
    this.start = false;
    this.rectSize = 80;
    this.health = 3;
    this.gameOverBool = false;
    this.parts = 0;
  }
  helloMessage()
  {
    fill(255);
    textAlign(CENTER);
    text("We believe that not only items can be fixed, but also people", this.x1, this.y1);
    text("Therefore we proudly present HappinessBeam3000", this.x1, this.y1 + LINEHEIGHT);
    text("OMAEEE!", this.x1, this.y1 + 2 * LINEHEIGHT );
  }
  button(){
    fill(255);
    rect(this.x1 - this.rectSize/2, this.y1 + 3 * LINEHEIGHT, this.rectSize, this.rectSize/2);
    fill(0);
    text("Start", this.x1, this.y1 + 4*LINEHEIGHT + 5);
  }
  buttonPressed()
  {
    if(mouseX > this.x1 - this.rectSize/2 && mouseX < this.x1 + this.rectSize/2
      && mouseY > this.y1 + 3 * LINEHEIGHT && mouseY < this.y1 + 5 * LINEHEIGHT) {
        this.start = true;
        this.gameOverBool = false;
        this.health = 3;
        l.falseLevelCleared();
        l.spawn();
        l.trueOn();
      }
  }
  isStarted()
  {
    return this.start;
  }
  ui()
  {
    // health
    textSize(20);
    fill(255);
    for(var i = 0; i < this.health; i++) {
      image(heartImg, LINEHEIGHT + i * 20, SIZE - LINEHEIGHT, LINEHEIGHT * 2, LINEHEIGHT * 2);
      console.log("it works");
    }
    textSize(16);
    //text(this.health, LINEHEIGHT, SIZE - LINEHEIGHT);

  }
  minusHealth()
  {
    this.health--;
    if(this.health <= 0)
    {
      this.gameOver();
    }
  }
  gameOver()
  {
    this.gameOverBool = true;
    this.start = false;
    l.falseOn();
    this.button();
    fill(255);
    text("GAME OVER", this.x1, this.y1);
  }
  isGameOver()
  {
    return this.gameOverBool;
  }
  stop(){
      this.start = false;
  }

  levelUp() {
    this.button();
    fill(255);
    text("Congratulations, continue to next level", this.x1, this.y1);
  }
  addReward(level) {
    this.parts += level * int(random(3,7));
  }
}
