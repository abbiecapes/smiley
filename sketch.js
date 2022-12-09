let canvasWidth = 400;
let canvasHeight = 400;
let x = 0;
let rectSize = 30;
let goingForward = true;
let color = 300

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
}

function draw() {
  
  background(0, 126, 255, 102);
  
  if (goingForward) {
    x++;
  } else {
    x--; 
  }
  if (x == canvasWidth) {
    goingForward = false;
  }
  if (x == 0) {
    goingForward = true;
  }

  rect(x, canvasHeight/2, rectSize, rectSize, color);

 
  if (goingForward) {
    x++;
  } else {
    x--; 
  }
  if (x == canvasWidth) {
    goingForward = false;
  }
  if (x == 0) {
    goingForward = true;
  }

  rect(x, canvasHeight/2.35, rectSize, rectSize, color);

  if (goingForward) {
    x++;
  } else {
    x--; 
  }
  if (x == canvasWidth) {
    goingForward = false;
  }
  if (x == 0) {
    goingForward = true;
  }
  rect(x, canvasHeight/2.85, rectSize, rectSize, color);

  if (goingForward) {
    x++;
  } else {
    x--; 
  }
  if (x == canvasWidth) {
    goingForward = false;
  }
  if (x == 0) {
    goingForward = true;
  }
  rect(x, canvasHeight/3.65, rectSize, rectSize, color);
  if (goingForward) {
    x++;
  } else {
    x--; 
  }
  if (x == canvasWidth) {
    goingForward = false;
  }
  if (x == 0) {
    goingForward = true;
  }
  rect(x, canvasHeight/5, rectSize, rectSize, color);
  if (goingForward) {
    x++;
  } else {
    x--; 
  }
  if (x == canvasWidth) {
    goingForward = false;
  }
  if (x == 0) {
    goingForward = true;
  }
  rect(x, canvasHeight/7.65, rectSize, rectSize, color);
  if (goingForward) {
    x++;
  } else {
    x--; 
  }
  if (x == canvasWidth) {
    goingForward = false;
  }
  if (x == 0) {
    goingForward = true;
  }
  rect(x, canvasHeight/16, rectSize, rectSize, color);

  if (goingForward) {
    x++;
  } else {
    x--; 
  }
  if (x == canvasWidth) {
    goingForward = false;
  }
  if (x == 0) {
    goingForward = true;
  }
  rect(x, canvasHeight/1.75, rectSize, rectSize, color);


if (goingForward) {
  x++;
} else {
  x--; 
}
if (x == canvasWidth) {
  goingForward = false;
}
if (x == 0) {
  goingForward = true;
}

text('windshield wiper', 150, 150)
text('no rain', 100, 200)
text('rain', 300, 300)
text('no rain', 50, 50)
text('no rain', 350, 50)
text('rain', 50, 300)
text('rain', 75, 350)
}
