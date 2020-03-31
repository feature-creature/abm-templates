/*
 * Sketch Instance
 *
 */

let abmMain = p5i => {
  p5i.disableFriendlyErrors = true;

  var pause = false;
  var fr = 60;
  var wEnv = 600; //1920
  var hEnv = 600; //1080
  p5i.ticks = 3000;

  // agents
  var numOfAgents = 1;
  p5i.agents = [];

  p5i.setup = function() {
    var canvas = p5i.createCanvas(wEnv, hEnv,p5i.P2D);
    canvas.mousePressed(p5i.pauseSketch);
    p5i.frameRate(fr);
    p5i.textSize(22);

    p5i.drawEnvironment();
    for(var i = 0; i < numOfAgents; i++){p5i.agents.push(new Agent(p5i,p5i.width/2,p5i.height/2,0,0))};
  }


  p5i.draw = function() {
    p5i.drawEnvironment();
    for(var i = 0; i < p5i.agents.length; i++){p5i.agents[i].show();}
    for(var i = 0; i < p5i.agents.length; i++){p5i.agents[i].update();}
    p5i.drawLabels();
    p5i.isComplete();
  }


  p5i.drawEnvironment = function(){
    p5i.background(175);
    p5i.push();
    p5i.line(p5i.width/2,0,p5i.width/2,p5i.height);
    p5i.pop();
  }


  p5i.drawLabels = function(){
    p5i.push();
    p5i.stroke(0);
    p5i.text("Model",15,35);
    p5i.text(p5i.frameCount + "/" + p5i.ticks,15,55);
    p5i.pop();
  }


  p5i.pauseSketch = function(){
    pause = pause ? false : true;
    pause?p5i.noLoop():p5i.loop();
  }


  p5i.isComplete = function(){if(p5i.frameCount>=p5i.ticks)noLoop();}
}


/*
 * Invoke p5 instance
 *
 */ 

let abm = new p5(abmMain,'abm-main');
