// Sketch Template
p5.disableFriendlyErrors = true;

// parameters
var pause = false;
var fr = 30;
var wEnv = 600; //1920
var hEnv = 600; //1080
var numOfAgents = 1;

// agents
var agents = [];


function setup() {
  var canvas = createCanvas(wEnv, hEnv,P2D);
  canvas.mousePressed(pauseSketch);
  frameRate(fr);
  textSize(22);

  drawEnvironment();
  for(var i = 0; i < numOfAgents; i++){agents.push(new Agent(width/2,height/2,0,0))};
}


function draw() {
  drawEnvironment();
  for(var i = 0; i < agents.length; i++){agents[i].show();}
  for(var i = 0; i < agents.length; i++){agents[i].update();}
  drawLabels();
}


function drawEnvironment(){
  background(175);
  push();
  line(width/2,0,width/2,height);
  pop();
}


function drawLabels(){
  push();
  stroke(0);
  text("Model",15,35);
  pop();
}


function pauseSketch(){
  pause = pause ? false : true;
  pause?noLoop():loop();
}
