/* global var createCanvas, background, frameRate, rect, stroke, strokeWeight, fill, noStroke, textSize, text, mouseIsPressed, mouseX, mouseY, loadImage, image, random*/

var GameOn, scene, timer, play, win;
var money, credit;
var slot1, slot2, slot3, slotRoll1, slotRoll2, slotRoll3;
var cherry1, cherry2, cherry3, grape1, grape2, grape3, lemon1, lemon2, lemon3, orange1, orange2, orange3, watermelon1, watermelon2, watermelon3, roll1, roll2, roll3;
var front, pressed, dollar1, dollar2, dollar3;

function preload(){
  front = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FMESO5270.PNG?v=1605053148303");
  pressed = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FGKDW5324.PNG?v=1605053180326");
  dollar1 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FRACY8328.PNG?v=1605053154426");
  dollar2 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FPQGF5009.PNG?v=1605053164617");
  dollar3 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FYALL7562.PNG?v=1605053173759");
  cherry1 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FCherry1.PNG?v=1605058395377");
  cherry2 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FCherry2.PNG?v=1605058397347");
  cherry3 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FCherry3.PNG?v=1605058401160");
  grape1 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FGrape1.PNG?v=1605058404962");
  grape2 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FGrape2.PNG?v=1605058435306");
  grape3 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FGrape3.PNG?v=1605058439259");
  lemon1 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FLemon1.PNG?v=1605058444009");
  lemon2 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FLemon2.PNG?v=1605058447811");
  lemon3 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FLemon3.PNG?v=1605058451485");
  orange1 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FOrange1.PNG?v=1605058455268");
  orange2 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FOrange2.PNG?v=1605058459123");
  orange3 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FOrange3.PNG?v=1605058463132");
  watermelon1 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FWatermelon1.PNG?v=1605058466915");
  watermelon2 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FWatermelon2.PNG?v=1605058471233");
  watermelon3 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FWatermelon3.PNG?v=1605058475751");
  roll1 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FRoll1.PNG?v=1605063615493");
  roll2 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FRoll2.PNG?v=1605063617944");
  roll3 = loadImage("https://cdn.glitch.com/6c44d0f2-6ce0-4752-a474-d790dfd0eb7a%2FRoll3.PNG?v=1605063622080");
}

function setup(){
	createCanvas(1260, 558);
	background(255, 255, 255);
	frameRate(100);
	GameOn = 1;
  scene = 1;
  money = 10;
  credit = 0;
  timer = 0;
  slot1 = slot2 = slot3 = slotRoll1 = slotRoll2 = slotRoll3 = 0;
  play = false;
  win = false;
}

function draw(){
  if (GameOn == 1){
    background(255, 255, 255);
    fill(177, 228, 242);
    stroke(95, 125, 140);
    strokeWeight(5);
    rect(530, 200, 200, 90, 20)
    noStroke();
    fill(0);
    textSize(50);
    text("Start", 577, 260);
    if(mouseIsPressed && mouseX >= 530 && mouseX <= 730 && mouseY >= 200 && mouseY <= 290){
      GameOn = 2
    }
  }
  
  //still
  if (GameOn == 2){
    if (scene == 1){
      background(255, 255, 255);
      win = false;
      
      noStroke();
      fill(0);
      textSize(20);
      text("Money: $" + money, 4, 22);
     
      image(front, 350, 10, 550, 550);
      
      if (mouseIsPressed && mouseX >= 765 && mouseX <= 850 && mouseY >= 480 && mouseY <= 550 && money > 0){
        scene = 2;
        money = money - 1;
        play = true;
      }
      
      if (mouseIsPressed && mouseX >= 765 && mouseX <= 850 && mouseY >= 480 && mouseY <= 550 && money == 0 && credit ==0){
        scene = 2;
      }
      
      if (mouseIsPressed && mouseX >= 440 && mouseX <= 545 && mouseY >= 513 && mouseY <= 545 && play == true && credit > 0){
        scene = 6;
        credit = credit - 1;
      }
      if (mouseIsPressed && mouseX >= 440 && mouseX <= 545 && mouseY >= 513 && mouseY <= 545 && play == false){
        scene = 5;
      }
      
      fill(206, 213, 217);
      stroke(0);
      strokeWeight(2);
      rect(590, 400, 70, 20, 3)  
      noStroke();
      fill(0);
      textSize(10);
      text("Credit(s): " + credit, 600, 414);
      
    }
    
    //money enter 1
    if (scene == 2){
      background(255, 255, 255);
      noStroke();
      fill(0);
      textSize(20);
      text("Money: $" + money, 4, 22);
      image(dollar1, 350, 10, 550, 550);
      if (timer < 1){
        timer = timer + 0.1
      }
      else{
        scene = 3;
        timer = 0;
      }
        
      fill(206, 213, 217);
      stroke(0);
      strokeWeight(2);
      rect(590, 400, 70, 20, 3)  
      noStroke();
      fill(0);
      textSize(10);
      text("Credit(s): " + credit, 600, 414);
    }    
    
    //money enter 2
    if (scene == 3){
      background(255, 255, 255);
      noStroke();
      fill(0);
      textSize(20);
      text("Money: $" + money, 4, 22);
      image(dollar2, 350, 10, 550, 550);
      if (timer < 1){
        timer = timer + 0.1
      }
      else{
        scene = 4;
        timer = 0;
      }
        
      fill(206, 213, 217);
      stroke(0);
      strokeWeight(2);
      rect(590, 400, 70, 20, 3)  
      noStroke();
      fill(0);
      textSize(10);
      text("Credit(s): " + credit, 600, 414);
    }
    
    //money enter 3
    if (scene == 4){
      background(255, 255, 255);
      noStroke();
      fill(0);
      textSize(20);
      text("Money: $" + money, 4, 22);
      image(dollar3, 350, 10, 550, 550);
      if (timer < 1){
        timer = timer + 0.1
      }
      else{
        scene = 1;
        timer = 0;
        credit = credit + 1;
      }
        
      fill(206, 213, 217);
      stroke(0);
      strokeWeight(2);
      rect(590, 400, 70, 20, 3)  
      noStroke();
      fill(0);
      textSize(10);
      text("Credit(s): " + credit, 600, 414);
    }
    
    //empty press
    if (scene == 5){
      background(255, 255, 255);
      noStroke();
      fill(0);
      textSize(20);
      text("Money: $" + money, 4, 22);
      image(pressed, 350, 10, 550, 550);
      if (timer < 1){
        timer = timer + 0.1
      }
      else{
        scene = 1;
        timer = 0;
      }
        
      fill(206, 213, 217);
      stroke(0);
      strokeWeight(2);
      rect(590, 400, 70, 20, 3)  
      noStroke();
      fill(0);
      textSize(10);
      text("Credit(s): " + credit, 600, 414);
    }
     
    //credit press
    if (scene == 6){
      background(255, 255, 255);
      noStroke();
      fill(0);
      textSize(20);
      text("Money: $" + money, 4, 22);
      image(pressed, 350, 10, 550, 550);
      if (timer < 1){
        timer = timer + 0.1
      }
      else{
        scene = 7;
        timer = 0;
      }
        
      fill(206, 213, 217);
      stroke(0);
      strokeWeight(2);
      rect(590, 400, 70, 20, 3)  
      noStroke();
      fill(0);
      textSize(10);
      text("Credit(s): " + credit, 600, 414);
    }
    
    //roll
    if (scene == 7){
      background(255, 255, 255);
      noStroke();
      fill(0);
      textSize(20);
      text("Money: $" + money, 4, 22);
      image(roll1, 350, 10, 550, 550);
      image(roll2, 350, 10, 550, 550);
      image(roll3, 350, 10, 550, 550);
      image(front, 350, 10, 550, 550);
        
      if (timer < 10){
        timer = timer + 0.1
      }
      else{
        scene = 8;
        timer = 0;
        slot1 = random(1, 5);
      }
      
      fill(206, 213, 217);
      stroke(0);
      strokeWeight(2);
      rect(590, 400, 70, 20, 3)  
      noStroke();
      fill(0);
      textSize(10);
      text("Credit(s): " + credit, 600, 414);
    }
    
    //slot1
    if (scene == 8){
      background(255, 255, 255);
      noStroke();
      fill(0);
      textSize(20);
      text("Money: $" + money, 4, 22);
      
      
      if (slot1 >= 0 && slot1 < 1){
        image(cherry1, 350, 10, 550, 500);
      }
      if (slot1 >= 1 && slot1 < 2){
        image(grape1, 350, 10, 550, 500);
      }
      if (slot1 >= 2 && slot1 < 3){
        image(lemon1, 350, 10, 550, 500);
      }
      if (slot1 >= 3 && slot1 < 4){
        image(orange1, 350, 10, 550, 500);
      }
      if (slot1 >= 4 && slot1 <= 5){
        image(watermelon1, 350, 10, 550, 500);
      }
      
      image(roll2, 350, 10, 550, 550);
      image(roll3, 350, 10, 550, 550);
      image(front, 350, 10, 550, 550);
      
      if (timer < 10){
        timer = timer + 0.1
      }
      else{
        scene = 9;
        timer = 0;
        slot2 = random(1, 5);
      }
      
      fill(206, 213, 217);
      stroke(0);
      strokeWeight(2);
      rect(590, 400, 70, 20, 3)  
      noStroke();
      fill(0);
      textSize(10);
      text("Credit(s): " + credit, 600, 414);
    }
    
    //slot2
    if (scene == 9){
      background(255, 255, 255);
      noStroke();
      fill(0);
      textSize(20);
      text("Money: $" + money, 4, 22);
      
      if (slot1 >= 0 && slot1 < 1){
        image(cherry1, 350, 10, 550, 500);
      }
      if (slot1 >= 1 && slot1 < 2){
        image(grape1, 350, 10, 550, 500);
      }
      if (slot1 >= 2 && slot1 < 3){
        image(lemon1, 350, 10, 550, 500);
      }
      if (slot1 >= 3 && slot1 < 4){
        image(orange1, 350, 10, 550, 500);
      }
      if (slot1 >= 4 && slot1 <= 5){
        image(watermelon1, 350, 10, 550, 500);
      }
      
      if (slot2 >= 0 && slot2 < 1){
        image(cherry2, 350, 10, 550, 500);
      }
      if (slot2 >= 1 && slot2 < 2){
        image(grape2, 350, 10, 550, 500);
      }
      if (slot2 >= 2 && slot2 < 3){
        image(lemon2, 350, 10, 550, 500);
      }
      if (slot2 >= 3 && slot2 < 4){
        image(orange2, 350, 10, 550, 500);
      }
      if (slot2 >= 4 && slot2 <= 5){
        image(watermelon2, 350, 10, 550, 500);
      }
      
      image(roll3, 350, 10, 550, 550);
      image(front, 350, 10, 550, 550);
      
      if (timer < 10){
        timer = timer + 0.1
      }
      else{
        scene = 10;
        timer = 0;
        slot3 = random(1, 5);
      }
      
      fill(206, 213, 217);
      stroke(0);
      strokeWeight(2);
      rect(590, 400, 70, 20, 3)  
      noStroke();
      fill(0);
      textSize(10);
      text("Credit(s): " + credit, 600, 414);
    }
    
    //slot3
    if (scene == 10){
      background(255, 255, 255);
      noStroke();
      fill(0);
      textSize(20);
      text("Money: $" + money, 4, 22);
      
      if (slot1 >= 0 && slot1 < 1){
        image(cherry1, 350, 10, 550, 500);
        slotRoll1 = 1;
      }
      if (slot1 >= 1 && slot1 < 2){
        image(grape1, 350, 10, 550, 500);
        slotRoll1 = 2;
      }
      if (slot1 >= 2 && slot1 < 3){
        image(lemon1, 350, 10, 550, 500);
        slotRoll1 = 3;
      }
      if (slot1 >= 3 && slot1 < 4){
        image(orange1, 350, 10, 550, 500);
        slotRoll1 = 4;
      }
      if (slot1 >= 4 && slot1 <= 5){
        image(watermelon1, 350, 10, 550, 500);
        slotRoll1 = 5;
      }
      
      if (slot2 >= 0 && slot2 < 1){
        image(cherry2, 350, 10, 550, 500);
        slotRoll2 = 1;
      }
      if (slot2 >= 1 && slot2 < 2){
        image(grape2, 350, 10, 550, 500);
        slotRoll2 = 2;
      }
      if (slot2 >= 2 && slot2 < 3){
        image(lemon2, 350, 10, 550, 500);
        slotRoll2 = 3;
      }
      if (slot2 >= 3 && slot2 < 4){
        image(orange2, 350, 10, 550, 500);
        slotRoll2 = 4;
      }
      if (slot2 >= 4 && slot2 <= 5){
        image(watermelon2, 350, 10, 550, 500);
        slotRoll2 = 5;
      }
      
      if (slot3 >= 0 && slot3 < 1){
        image(cherry3, 350, 10, 550, 500);
        slotRoll3 = 1;
      }
      if (slot3 >= 1 && slot3 < 2){
        image(grape3, 350, 10, 550, 500);
        slotRoll3 = 2;
      }
      if (slot3 >= 2 && slot3 < 3){
        image(lemon3, 350, 10, 550, 500);
        slotRoll3 = 3;
      }
      if (slot3 >= 3 && slot3 < 4){
        image(orange3, 350, 10, 550, 500);
        slotRoll3 = 4;
      }
      if (slot3 >= 4 && slot3 <= 5){
        image(watermelon3, 350, 10, 550, 500);
        slotRoll3 = 5;
      }
      
      image(front, 350, 10, 550, 550);
      
      if (timer < 15){
        timer = timer + 0.1
      }
      else{
        if (slotRoll1 == slotRoll2 && slotRoll2 == slotRoll3){
          win = true;
        }
        if (win == true){
          money = money + 5;
          win = false;
        }
        scene = 1;
        timer = 0;
        slot1 = slot2 = slot3 = slotRoll1 = slotRoll2 = slotRoll3 = 0;
      }
      
      fill(206, 213, 217);
      stroke(0);
      strokeWeight(2);
      rect(590, 400, 70, 20, 3)  
      noStroke();
      fill(0);
      textSize(10);
      text("Credit(s): " + credit, 600, 414);
    }
  }
}
