let dot;

function setup() {
 // put setup code here
   createCanvas(600, 400);
   colorMode(HSB);

   dot = new Dot(width/2, height/2);
}

function draw() {
  // put drawing code here
  background(220);
  dot.draw();
}

class Dot{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.hue = Math.random() * 360;
    this.radius = 60;
  }

  draw(){
    this.x = x += random();
    this.y = y += random();
    fill(this.hue, 60, 100);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}