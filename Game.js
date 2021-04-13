class Game {
    constructor(){
  this.display = createElement("h2");
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        console.log("GameState:"+gameState);
        form = new Form()
        form.display();
      }
      bg = createSprite(displayWidth/2,displayHeight/2);
      bird1 = createSprite(80,350,50,50);
      bird2 = createSprite(80,240,50,50);
      bird2.addImage(bird2image);
      bird1.addImage(bird1image);
      bird1.scale = 0.25;
      bird2.scale = 0.25;
      bg.visible = false
      bird1.visible = false
      bird2.visible = false
    }
 
   
    
    play(){

     // console.log("PLAY")
      form.hide();
      background("white");
      bg.visible = true
      bird1.visible = true
      bird2.visible = true
      bg.addImage(bgImage);
      bg.velocityX = -4;
      bg.scale = 1.37
      if(bg.x<0){
        bg.x = displayWidth/2
        
      }

      this.spawnObstacles();
     
      if(keyDown("space")){
        bird1.velocityY = -2;
      }
      bird1.velocityY = bird1.velocityY + 0.5;
      
     
    //  console.log(bg.x)
    /*  
      if(index === player.index){
        birds[index-1].velocityY = -2
      }*/
    }
    

    spawnObstacles(){

      if(frameCount % 100 === 0){
        var obstacle1 = createSprite(displayWidth+20,displayHeight - 300);
        obstacle1.velocityX = -4;
        obstacle1.addImage(obsImg);
        obsGroup.add(obstacle1);

       
        var rand = Math.round(random(1,3))
        obstacle1.scale = 1.5
        if(rand === 1){
          obstacle1.scale = 1.2 
        }
        else if(rand === 2){
          obstacle1.scale = 1.5
        }
        else {
          obstacle1.scale = 1.7
        }
       
        obstacle1.lifetime  = 1000;
      }

      if(frameCount % 200 === 0){
        var obstacle2 = createSprite(displayWidth+40,Math.round(random(50,displayHeight/2 - 200)))
        obstacle2.velocityX = -4
        obstacle2.addImage(obs2Img);
        obs2Group.add(obstacle2);
        obstacle2.scale = 0.75
        obstacle2.lifetime = 1000;
    }
 
}
}