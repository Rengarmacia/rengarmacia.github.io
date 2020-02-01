class Levels {
  constructor() {
      this.level = 1;
      this.levelCleared = true;
      this.spawned = false;
      this.progress = true;
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
        default:
          break;
      }
      this.spawned = true;
    }
  }
  update() {
    if(e.length <= 0 && !this.levelCleared) {
      this.levelCleared = true;
      this.spawned = false;
      this.level++;
      s.stop();
      // wait for mygtukas
    }
    // if(this.levelCleared && this.progress) {
    //   s.stop();
    //   this.level++;
    //   this.progress = false;
    // }
    // else if(!this.spawned) {
    //
    // }
    // else if(this.spawned) {
    //   this.levelCleared = false;
    // }
  }
}
