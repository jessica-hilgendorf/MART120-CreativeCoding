var x = 50;
var y = 50;
var characterX = 50;
var characterY = 50;
var mouseShapeX;
var mouseShapeY;
var obstacle1X = 100;
var obstacle1Y = 150;
var obstacle1Movement = 1;
var obstacle2X = 200;
var obstacle2Y = 100;
var obstacle2XSpeed;
var obstacle2YSpeed;


function setup()
  {
  createCanvas(500,500);
  }
function draw()
  {   
    background(0);
// player - purple circle // 
    fill(162, 105, 255);
    circle(characterX,characterY, 25);
    
// obstacle1 - green square //
    fill(19, 163, 11);   
    square(obstacle1X, obstacle1Y, 55);
    obstacle1X += obstacle1Movement;
    if(obstacle1X <=10 || obstacle1X > 440)
    {
      obstacle1Movement *=-1
    }
    
// obstacle2 - yellow square //
    obstacle2XSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 3)) + 1);
    obstacle2YSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 1)) + 1);
    obstacle2X += obstacle2XSpeed;
    obstacle2Y += obstacle2YSpeed;
    fill(240, 221, 48);
    square(obstacle2X, obstacle2Y, 45);
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

// exit // 
    fill(256,256,256);
    rect(450, 450, 55, 55);
    fill(0,0,0);
    text('EXIT', 455, 480);
    textSize(19);
    
// exit message //
   if(characterX > 455 && characterY > 455)
    {
        fill(256,256,256);
        text("You Did It!", 200, 200);
    } 
// mouse click shape //
    fill(245, 27, 245);
    circle(mouseShapeX, mouseShapeY, 30);
  }
function keyPressed() 
    {
    if (keyCode === LEFT_ARROW) 
    {
        characterX -= 20;
    } 
    else if (keyCode === RIGHT_ARROW) 
    {
        characterX += 20;
    }
    else if (keyCode === UP_ARROW) 
    {
        characterY -= 20;
    }
    else if (keyCode === DOWN_ARROW) 
    {
        characterY += 20;
    }
  }
function mouseClicked()
   {
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
   }
    


