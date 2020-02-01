class Levels {
  constructor() {
      this.level = 1;
      this.levelCleared = false;
  }
  showLevel() {
    return this.level;
  }
  level1_init() {
    createEnemy(enemyImg);
    createEnemy(enemyImg);
    createEnemy(enemyImg);
  }
  levelCheck() {
    if(e.length <= 0) {
      this.levelCleared = true;
    }
  }

}
