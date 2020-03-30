/*
 * Agent
 *
 */

function Agent (xPos,yPos,xDir,yDir){

  this.pos = createVector(xPos,yPos);
  this.dir = createVector(xDir,yDir);
  this.normalizedBool = function(x){return Math.random() <= x;} 
  this.exampleBoo = this.normalizedBool(0.5); 
  this.d = 15;
  this.colorFill = color(255,255,120,255);
  this.colorStroke = color(255,120,220,255);


  this.update = function(){
    this.randomWalk(2,2,this.d,width-this.d,this.d,height-this.d,0.5,0.5);
  }


  this.show = function(){
    push();
    translate(this.pos.x, this.pos.y);
    strokeWeight(3);
    stroke(this.colorStroke);
    fill(this.colorFill);
    ellipse(0,0,this.d,this.d);
    pop();
  }


  this.randomWalk = function(xStep,yStep,xMin,xMax,yMin,yMax,xSpread,ySpread){
    nextMove = this.pos.copy().add(Math.random() >= xSpread ? -xStep : xStep,Math.random() >= ySpread ? -yStep : yStep);
    if((nextMove.x >= xMin && nextMove.x <= xMax) && (nextMove.y >= yMin && nextMove.y <= yMax))this.pos = nextMove;
  } 
}
