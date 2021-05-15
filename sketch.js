var bg,bg_img;
var astronaut,astronaut_img;
var gameState="PLAY";
const accessCode1="Hi"
function preload(){

  bg_img=loadImage("images/stars.gif")
  astronaut_img=loadAnimation("images/a1.png","images/a2.png","images/a3.png","images/a4.png","images/a5.png","images/a6.png")
  ufo_Image=loadImage("images/alienUfo.png")
  sattelite_img=loadImage("images/sattelite_img.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight);
  bg.addImage(bg_img)
  bg.scale=3.5;
  bg.velocityX=-4

  astronaut=createSprite(200, 400, 50, 50);
  astronaut.addAnimation("walking",astronaut_img)

  
}

function draw() {
  background("white");  
  drawSprites();
if(gameState==="PLAY"){
  if(bg.x<600){
    bg.x=670
  }

  if(frameCount===100){
    gameState="TASK 1"
    
  }

  if(frameCount===300){
    gameState="TASK 2"
  }
}



if(gameState==="TASK 1"){
  task1();
  
}


if(gameState==="TASK 2"){
  task2();
}

}

function task1(){
  gameState="PLAY"
  ufo=createSprite(windowWidth/2+140,windowHeight/2)
  ufo.addImage(ufo_Image)
  ufo.scale=1.5
  message1=createElement('h1');
  message1.position(180,10)
  message1.html("DECODE THE ALIEN'S MESSAGE: ")
  message1.style('background','white');
  message2=createElement('h1')
  message2.position(10,45)
  message2.html(".... .. / .-- . / .- .-. . / .- .-.. .. . -. ... / ..-. .-. --- -- / .- -. --- - .... . .-. / .--. .-.. .- -. . - / .- .-. . / - .... . .-. . / .- -. -.-- / .- .-.. .. . -. ... / .. -. / - .... .. ... / .--. .-.. .- -. . - .-.-.-")
  message2.style('color','red');
  input1 = createInput("Code1")
  input1.position(180,180);
  input1.style('background', 'white');  
  button1 = createButton('Check');
  button1.position(180,220);
  button1.style('background', 'lightgrey');
  button1.mousePressed(()=>{
    if(authenticate(accessCode1,input1.value()))

    message4=createElement('h1');
    message4.position(180,100)
    message4.html("DECODED!")
    message4.style('background','white');

    // gameState="TASK 2"
    gameState!="TASK 1"
    console.log(gameState)
  })
  
  message3=createElement('h1');
  message3.position(180,windowHeight-100)
  message3.html("HINT: https://morsecode.world/international/translator.html USE THIS LINK TO DECODE")
  message3.style('background','white');
  
  
}

function authenticate(accessCode,actualCode){
  if(accessCode===actualCode)
  return true
  else 
  return false
}

function task2(){

  // gameState!="TASK 1"
  gameState="PLAY"
  ufo.visible= false
  input1.hide();
  button1.hide();
  message1.hide();
  message2.hide();
  message3.hide();
  message4.hide();
  sattelite=createSprite(windowWidth/2+400,windowHeight/2)
  sattelite.addImage(sattelite_img)
  sattelite.scale=1

  w1=createElement('h1');
  w1.position(300,100)
  w1.html("FIRE")
  w1.style('background','white');

  wA=createElement('h1');
  wA.position(400,100)
  wA.html("MATCH STICKS")
  wA.style('background','white');

  w2=createElement('h1');
  w2.position(300,150)
  w2.html("ELECTRICITY")
  w2.style('background','white');

  wB=createElement('h1');
  wB.position(540,150)
  wB.html("POWER")
  wB.style('background','white');

  w3=createElement('h1');
  w3.position(300,200)
  w3.html("SPACE")
  w3.style('background','white');

  wC=createElement('h1');
  wC.position(450,200)
  wC.html("GALAXIES")
  wC.style('background','white');

  w4=createElement('h1');
  w4.position(300,250)
  w4.html("CORONA")
  w4.style('background','white');

  wD=createElement('h1');
  wD.position(450,250)
  wD.html("PANDEMIC")
  wD.style('background','white');

  w5=createElement('h1');
  w5.position(300,300)
  w5.html("WATER")
  w5.style('background','white');

  wE=createElement('h1');
  wE.position(450,300)
  wE.html("FISH")
  wE.style('background','white');

  w6=createElement('h1');
  w6.position(300,350)
  w6.html("ICE")
  w6.style('background','white');

  wF=createElement('h1');
  wF.position(420,350)
  wF.html("IGLOO")
  wF.style('background','white');

  i1 = createInput("no.")
  i1.position(700,110);
  i1.style('background', 'white'); 

  i2 = createInput("no.")
  i2.position(700,160);
  i2.style('background', 'white'); 

  i3 = createInput("no.")
  i3.position(700,210);
  i3.style('background', 'white'); 

  i4 = createInput("no.")
  i4.position(700,260);
  i4.style('background', 'white'); 

  i5 = createInput("no.")
  i5.position(700,310);
  i5.style('background', 'white'); 

  i6 = createInput("no.")
  i6.position(700,360);
  i6.style('background', 'white'); 
}