var titleSize = 16;
var titleMovement = 1;
var count = 0;

var bodyX = 130;
var bodyY = 210;
var bodyMovement = 1;

var rightIrisX = 230;
var rightIrisY = 90;
var leftIrisX = 170;
var leftIrisY = 90;
var rightIrisMovement = 1;
var leftIrisMovement = 1;
var rightPupilX = 230;
var rightPupilY = 90;
var leftPupilX = 170;
var leftPupilY = 90;
var rightPupilMovement = 1;
var leftPupilMovement = 1;

var leftArmX = 100;
var leftArmY = 275;
var leftArmMovement = 1;
var rightArmX = 310;
var rightArmY = 275;
var rightArmMovement = 1;
  
function setup() {
  createCanvas(400,400);
}
function draw() {
  background(201,170,255);
  fill(255);
  textFont('Arial');
  textSize(titleSize);
  titleSize += titleMovement;
  count++;
    if(count > 5)
    {
        titleMovement *=-1;
        count = 0;
    }  
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
    stroke(121,129,0)
    strokeWeight(20)
  // left iris
    point(leftIrisX,leftIrisY)
    leftIrisX += leftIrisMovement;
    if(leftIrisX <= 165 || leftIrisX >=175)
    {
      leftIrisMovement *=-1
    }
  
  // right iris
    point(rightIrisX,rightIrisY)
    rightIrisX += rightIrisMovement;
    rightIrisY += rightIrisMovement;
    if(rightIrisX <=225 || rightIrisY >=95)
    {
      rightIrisMovement *=-1
    }
    stroke(0,0,0)
    strokeWeight(12)
  
  // left pupil
    point(leftPupilX,leftPupilY)
    leftPupilX += leftPupilMovement;
    if(leftPupilX <=165 || leftPupilX >= 175)
    {
      leftPupilMovement *=-1
    }
  
  // right pupil
    point(rightPupilX,rightPupilY)
  rightPupilX += rightPupilMovement;
  rightPupilY += rightPupilMovement;
  if(rightPupilX <=225 || rightPupilY >=95)
    {
      rightPupilMovement *=-1
    }
  
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
    square(bodyX,bodyY,150,20);
    bodyY += bodyMovement;
  if (bodyY <= 205|| bodyY >= 220)
    {
      bodyMovement *=-1
    }
  
  // left arm
    line(130,235,leftArmX,leftArmY);
    leftArmX += leftArmMovement;
    if(leftArmX <=80 || leftArmX >= 200)
      {
        leftArmMovement *=-1
      }
  
  // right arm
    line(280,235,rightArmX,rightArmY);
    rightArmY += rightArmMovement;
    if(rightArmY <=250 || rightArmY >=300)
    {
      rightArmMovement *=-1
    }

  
}
