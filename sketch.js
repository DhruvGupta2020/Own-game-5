var bird1, bird2 ;
var database;
var gameState=0;
var playerCount;
var bird1image,bird2image,bgImg;
var airoplaneImage;
var player;
var form;
var bg;
var obsImg,obsGroup;


function preload(){
    bird1image = loadImage("images/YellowBird.png");
    bird2image = loadImage("images/BlueBird.png");
    bgImage = loadImage("images/sky.png");
    obsImg = loadImage("images/tree.png")
    obs2Img = loadImage("images/Airoplane.png");
  }
  
function setup(){
    createCanvas(displayWidth,displayHeight-160);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();

    obsGroup = new Group();
    obs2Group = new Group();
   
}

function draw(){
    background("white");
 if(playerCount===2){
     game.update(1);
 }
 if(gameState===1){
     game.play()
 }
    drawSprites();
}

