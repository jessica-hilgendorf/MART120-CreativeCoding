var x = 50;
var y = 50;
var playerX = 50;
var playerY = 50;
var mouseShapeX;
var mouseShapeY;
var obstacle1X = 100;
var obstacle1Y = 150;
var obstacle1Movement = 1;
var obstacle2X = 200;
var obstacle2Y = 100;
var obstacle2XSpeed;
var obstacle2YSpeed;

var randomXs = []; 
var randomYs = []; 
var randomDiameters = []; 
var randomXSpeeds = [];
var randomYSpeeds = [];


function setup()
  {
  createCanvas(500,500);
  var myX = 100
  var myY = 250
  var myDiameter = 30
  for(var i = 0; i < 3; i++)
        {
            randomXs[i] =myX;
            randomYs[i] = myY;
            randomDiameters[i] = myDiameter;
            myX += 100;
            myY += 100;
            myDiameter += 10;
        }
  }

function draw()
  {   
    background(0);
// purple circle //
    createPlayer();
// pink circle when clicked //   
    createShape();
// green and yellow squares //     
    createObstacles();
    greenSquareMovement();
    yellowSquareMovement();
// random obstacles // 
    fill(52, 131, 235)
    for(var i = 0; i < randomXs.length; i++)
        {
        circle(randomXs[i],randomYs[i],randomDiameters[i]);
        randomXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
        randomYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
        randomXs[i] += randomXSpeeds[i];
        randomYs[i] += randomYSpeeds[i];
          
        if (randomXs[i] > 500) {
            randomXs[i] = 0;
        }
        if (randomXs[i] < 0) {
            randomXs[i] = 500;
        }
        if (randomYs[i] > 500) {
            randomYs[i] = 0;
        }
        if (randomYs[i] < 0) {
            randomYs[i] = 500;
        }
        }
    
    createBorders();
    
    createExit();
    exitMessage();
    
    }

function createPlayer()
    { 
 // player - purple circle // 
    fill(162, 105, 255);
    circle(playerX,playerY, 25);
    }
    
function createObstacles()
    {
// obstacle1 - green square //
    fill(19, 163, 11);   
    square(obstacle1X, obstacle1Y, 55);
// obstacle 2 - yellow square // 
    fill(240, 221, 48);
    square(obstacle2X, obstacle2Y, 45);
    }
      
function greenSquareMovement()
    {
// obstacle1 - green square movement // 
    obstacle1X += obstacle1Movement;
    if(obstacle1X <=10 || obstacle1X > 440)
    {
      obstacle1Movement *=-1
    }
    }

function yellowSquareMovement()
    {
// obstacle2 - yellow square movement // 
    obstacle2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    obstacle2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);
    obstacle2X += obstacle2XSpeed;
    obstacle2Y += obstacle2YSpeed;
    
    if(obstacle2X > 500)
    {
        obstacle2X = 0;
    }
    if(obstacle2X < 0)
    {
        obstacle2X = 500;
    }
    if(obstacle2Y > 500)
    {
        obstacle2Y = 0;
    }
    if(obstacle2Y < 0)
    {
        obstacle2Y = 500;
    }
    }

// mouse click shape //  
function createShape()
    {
    fill(245, 27, 245);
    circle(mouseShapeX, mouseShapeY, 30);
    }

function mouseClicked()
   {
   mouseShapeX = mouseX;
   mouseShapeY = mouseY;
   }

// player movement// 
function keyPressed() 
    {
    if (keyCode === LEFT_ARROW) 
    {
        playerX -= 20;
    } 
    else if (keyCode === RIGHT_ARROW) 
    {
        playerX += 20;
    }
    else if (keyCode === UP_ARROW) 
    {
        playerY -= 20;
    }
    else if (keyCode === DOWN_ARROW) 
    {
        playerY += 20;
    }
  }
    
function createExit()
  {
    fill(256,256,256);
    rect(450, 450, 55, 55);
    fill(0,0,0);
    text('EXIT', 455, 480);
    textSize(19);
  }

function exitMessage()
  {
   if(playerX > 455 && playerY > 455)
    {
        fill(256,256,256);
        text("You Did It!", 200, 200);
    }
  }

function createBorders()
{
    stroke(89, 89, 89);
    fill(89, 89, 89);
    // top //
    rect(0,0,500,10);
    // left //
    rect(0,0,10,500);
    // bottom //
    rect(0, 500-10,500, 10);
    // right //
    rect(500-10,0,10,500-50);
}

