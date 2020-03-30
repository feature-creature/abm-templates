/*
 * Agent Instance
 *
 */

function Agent (p5i,xPos,yPos,xDir,yDir){

  this.pos = p5i.createVector(xPos,yPos);
  this.dir = p5i.createVector(xDir,yDir);
  this.normalizedBool = function(x){return Math.random() <= x;} 
  this.exampleBoo = this.normalizedBool(0.5); 
  this.d = 15;
  this.colorFill = p5i.color(255,255,120,255);
  this.colorStroke = p5i.color(255,120,220,255);


  this.update = function(){
    this.randomWalk(2,2,this.d,p5i.width-this.d,this.d,p5i.height-this.d,0.5,0.5);
  }


  this.show = function(){
    p5i.push();
    p5i.translate(this.pos.x, this.pos.y);
    p5i.strokeWeight(3);
    p5i.stroke(this.colorStroke);
    p5i.fill(this.colorFill);
    p5i.ellipse(0,0,this.d,this.d);
    p5i.pop();
  }


  this.randomWalk = function(xStep,yStep,xMin,xMax,yMin,yMax,xSpread,ySpread){
    nextMove = this.pos.copy().add(Math.random() >= xSpread ? -xStep : xStep,Math.random() >= ySpread ? -yStep : yStep);
    if((nextMove.x >= xMin && nextMove.x <= xMax) && (nextMove.y >= yMin && nextMove.y <= yMax))this.pos = nextMove;
  }
}
