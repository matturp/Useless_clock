
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  frameRate(60);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  noStroke();

  var hourtime = hour();
  var mintime = minute();
  var sectime = second();

  hourcolor = map(hourtime,0,23,0,255);
  mincolor = map(mintime,0,59,0,255);
  seccolor = map(sectime,0,59,0,255);

  var amount = map(mouseY,0,height/2,20,5);
  var wave = sin(radians(frameCount)* (amount*0.5)) * amount;
  var wave2 = cos(radians(frameCount)* (amount*0.7)) * amount;
  var wave3 = sin(radians(frameCount)* amount) * amount;


  fill(hourcolor,100,100);
  ellipse(-350 + wave,0,300,300);
  fill(mincolor,100,100);
  ellipse(0 + wave2,0,300,300);
  fill(seccolor,100,100);
  ellipse(350 + wave3,0,300,300);
  //rect(100,-200,400,+400);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
