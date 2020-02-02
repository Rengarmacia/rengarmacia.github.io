class Levels {
  constructor() {
      this.level = 1;
      this.levelCleared = true;
      this.spawned = false;
      this.progress = true;
      this.on = false;
      this.won = false;
      this.buttonPressedWin = false;
  }
  falseOn() {
    this.on = false;
  }
  trueOn() {
    this.on = true;
  }
  returnOn() {
    return this.on;
  }
  showLevel() {
    return this.level;
  }
  isLevelCleared() {
    return this.levelCleared;
  }
  falseLevelCleared() {
    this.levelCleared = false;
  }
  progressTrue(){
    this.progress = true;
  }
  level1_init() {
    createEnemy(enemyImg);
    createEnemy(enemyImg);
    createEnemy(enemyImg);
    this.spawned = true;
  }
  level2_init() {
    s.addReward(1);
    createEnemy(enemyImg);
    createEnemy(enemyImg);
    createEnemy(enemyImg);
    createEnemy(enemyImg);
    this.spawned = true;
  }
  level3_init() {
    s.addReward(2);
    createEnemy(enemyImg2);
    createEnemy(enemyImg2);
    createEnemy(enemyImg2);
    createEnemy(enemyImg2);
    createEnemy(enemyImg3);
  }
  level4_init() {
    s.addReward(3);
    createEnemy(enemyImg2);
    createEnemy(enemyImg2);
    createEnemy(enemyImg2);
    createEnemy(enemyImg2);
    createEnemy(enemyImg3);
    createEnemy(enemyImg3);
    createEnemy(enemyImg3);
  }
  level5_init() {
    s.addReward(4);
    createEnemy(enemyImg2);
    createEnemy(enemyImg2);
    createEnemy(enemyImg3);
    createEnemy(enemyImg3);
  }
  level6_init() {
    this.levelCleared = true;
    this.won = true;
  }
  spawn() {
    if(!this.spawned) {
      this.levelCleared = false;
      switch(this.level) {
        case 1:
          this.level1_init();
          break;
        case 2:
          this.level2_init();
          break;
        case 3:
          this.level3_init();
          break;
        case 4:
          this.level4_init();
          break;
        case 5:
          this.level5_init();
          break;
        case 6:
          this.level6_init();
          break;
        default:
          break;
      }
      this.spawned = true;
    }
  }
  update() {
    if(e.length <= 0 && !this.levelCleared && this.on) {
      this.levelCleared = true;
      this.spawned = false;
      this.level++;
      s.stop();
      // wait for mygtukas
    }
    if(this.won && !this.buttonPressedWin) {
      image(enemyImg2, 400, 200);
      s.buttonWin();
    }
  }
  gameOver() {
    this.level = 1;
    this.levelCleared = true;
    this.spawned = false;
    this.on = false;
  }
}
