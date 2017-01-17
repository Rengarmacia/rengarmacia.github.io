var s;
var scl = 20;
var food;
var score1 = 0;
var highscore = 0;
function setup() {
  var canvas_Width = windowWidth - (windowWidth % 2);
  var canvas_Height = windowHeight - (windowHeight % 2);
  var cnv = createCanvas(canvas_Width, canvas_Height);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  s = new Snake();
  frameRate(10);
  pickLocation();

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}
function countScore() {
	score1 = score1 + 10;
	document.getElementById("score").innerHTML = score1;
  if(highscore < score1) {
    highscore = score1;
  }
  document.getElementById("highscore").innerHTML = highscore;
  
}
function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
	  countScore();
  }
  s.death();
  s.update();
  s.show();


  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
  $(document).on("vmouseup", function(){
    s.dir(0, -1);
  });
  $(document).on("vmousedown", function(){
    s.dir(0, 1);
  });
  $(document).on("vmouseright", function(){
    s.dir(1, 0);
  });
  $(document).on("vmouseleft", function(){
    s.dir(-1, 0);
  });
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.dir = function(x, y) {
    if(x !== this.xspeed && y !== this.yspeed) {
		this.xspeed = x;
		this.yspeed = y;
	}
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
        score1 = 0;
        document.getElementById("score").innerHTML = score1;
      }
    }


  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    if(this.x > width) {
		this.x = 0;
	} else if(this.x < 0) {
		this.x = width;
	} 
	if(this.y > height) {
		this.y = 0;
	} else if (this.y < 0) {
		this.y = height;
	}
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);

  }
}
