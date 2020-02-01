class Levels {
  constructor() {
      this.level = 1;
      this.levelCleared = false;
      this.spawned = false;
  }
  showLevel() {
    return this.level;
  }
  isLevelCleared() {
    return this.levelCleared;
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
  levelCheck() {
    if(e.length <= 0) {
      this.levelCleared = true;
    }
  }
  update() {
    if(this.levelCleared) {
      s.levelUp();
      this.levelCleared = false;
      this.spawned = !this.spawned;
      this.level++;
    }
    else if(!this.spawned){
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
    }
    this.levelCheck();
  }
}
