function setup() {
  createCanvas(400,400);
}

function draw() {
  background(201,170,255);
  fill(255);
  textFont('Arial');
  textSize(16);
  text('"Thug Life"',30,360);
  textSize(12);
  text('Jessica Hilgendorf',30,375)
  
  
  // hair
    strokeWeight(3);
    fill(102,51,0);
    ellipse(200,135,210,250);
  
  // head
    strokeWeight(3);
    fill(255,204,0);
    circle(200,120,175);
  
  // bangs
    fill(102,51,0);
    rect(153,27,95,38,10);
    line(175,65,175,45);
    line(200,65,200,40); 
    line(225,65,225,45); 
  
  // nose
    fill(247,118,5);
    strokeWeight(3);
    triangle(185, 120, 200, 100, 205, 120);
  
  // eyes
    fill(255,255,255);
    circle(170,90,30);
    circle(230,90,30);
  
   // pupil
    stroke(121,129,0)
    strokeWeight(20)
    point(170,90,25)
    point(230,90,25)
    stroke(0,0,0)
    strokeWeight(12)
    point(170,90,25)
    point(230,90,25)
  
  // eyes shine
    strokeWeight(0);
    fill(255,255,255);
    circle(175,85,10);
    circle(235,85,10);
  
  // mouth
    strokeWeight(3);
    fill(255,204,255);
    arc(200,150,45,45,25,60,CHORD);
  
  // body
    strokeWeight(3);
    fill(255,204,0);
    square(130,210,150,20);
    line(130,235,100,275);
    line(280,235,310,275);
  
  
  
}

