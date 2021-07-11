class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }
    preload() {
        // load images/tile sprites

        this.load.image('space', './assets/space.png');
        this.load.image('ground', './assets/Ground.png');
        this.load.image('rabbit','./assets/rabbit.png');
        this.load.image('pineapple','./assets/pineapple.png');
        this.load.image('carrot','./assets/carrot.png');
        this.load.image('banana','./assets/banana.png');
        this.load.image('blueberry','./assets/blueberry.png');
        this.load.image('gameover', './assets/gameover.png');

    }

    create() {
        //add score
        
        //setting up bgm
        this.bgm = this.sound.add('music', { 
            mute: false,
            volume: 1,
            rate: 1,
            loop: true 
        });
        this.bgm.play();

        //add basic element
        this.space = this.add.tileSprite(0, 0, 840, 640, 'space').setOrigin(0, 0);
        this.ground = this.physics.add.sprite(game.config.width/2,game.config.height*0.95, 'ground');
        this.ground.displayWidth = game.config.width*1.1;
        this.ground.setImmovable();
        this.rabbit = this.physics.add.sprite(100, game.config.height-110, 'rabbit').setOrigin(0.5);
        this.rabbit.setGravityY(900);
        this.gameOver = false;

        // setting collisions between the rabbit and ground
        this.physics.add.collider(this.rabbit, this.ground);

        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        //add fruits
        this.pineapple = new Pineapple(this, game.config.width + 60, 150,'pineapple', 0, 30).setOrigin(0,0);
        this.carrot = new Carrot(this, game.config.width + 60, 400,'carrot', 0, 100).setOrigin(0,0);
        this.banana = new Banana(this, game.config.width + 60, 510,'banana', 0, 100).setOrigin(0,0);
        this.blueberry = new Blueberry(this, game.config.width + 60, 50,'blueberry', 0, 30).setOrigin(0,0);
    }
    
    update() {
        this.space.tilePositionX += 2;

        if(!this.gameOver){
        this.pineapple.update();
        this.carrot.update();
        this.banana.update();
        this.blueberry.update();
        }
        
        this.rabbitJumps = 0;
        // jump
        if(Phaser.Input.Keyboard.JustDown(keyUP)) {
                this.rabbit.body.setVelocityY(-500);
                this.sound.play('jump1');
            
        }
        //can't jump too high
        if(this.rabbit.y < -100 ){
            this.gameOver = true;
        }
        if(this.gameOver){
            this.scene.start("gameOverScene");
        }
        //check collision
        if(this.checkCollision(this.rabbit, this.pineapple)){
            this.eatPineapple(this.pineapple);
        }
        if(this.checkCollision(this.rabbit, this.carrot)){
            this.eatCarrot(this.carrot);
        }
        if(this.checkCollision(this.rabbit, this.blueberry)){
            this.eatBlueberry(this.blueberry);
        }
        if(this.checkCollision(this.rabbit, this.banana)){
            this.eatBanana(this.banana);
        }
    }
    //rabbit eats pineapples
    checkCollision(rabbit, pineapple){
        if(rabbit.x < pineapple.x + pineapple.width &&
            rabbit.x + rabbit.width > pineapple.x &&
            rabbit.y < pineapple.y + pineapple.height &&
            rabbit.height + rabbit.y > pineapple.y ){
                return true;
            } else{
                return false;
            }
    }
    eatPineapple(pineapple){
        pineapple.alpha = 0; 
        this.sound.play('eat');
        pineapple.reset();
        pineapple.alpha = 1;
        //add eat animation
        //add score and repaint score display
        
    }
    //rabbit eats carrots
    checkCollision(rabbit, carrot){
        if(rabbit.x < carrot.x + carrot.width &&
            rabbit.x + rabbit.width > carrot.x &&
            rabbit.y < carrot.y + carrot.height &&
            rabbit.height + rabbit.y > carrot.y ){
                return true;
            } else{
                return false;
            }
    }
    eatCarrot(carrot){
        carrot.alpha = 0; 
        this.sound.play('eat');
        carrot.reset();
        carrot.alpha = 1;
        //add eat animation
        //add score and repaint score display
        
    }
    //rabbit eats blueberry
    checkCollision(rabbit, blueberry){
        if(rabbit.x < blueberry.x + blueberry.width &&
            rabbit.x + rabbit.width > blueberry.x &&
            rabbit.y < blueberry.y + blueberry.height &&
            rabbit.height + rabbit.y > blueberry.y ){
                return true;
            } else{
                return false;
            }
    }
    eatBlueberry(blueberry){
        blueberry.alpha = 0; 
        this.sound.play('eat');
        blueberry.reset();
        blueberry.alpha = 1;
        this.gameOver = true;
        
    }
    //rabbit eats green banana
    checkCollision(rabbit, banana){
        if(rabbit.x < banana.x + banana.width &&
            rabbit.x + rabbit.width > banana.x &&
            rabbit.y < banana.y + banana.height &&
            rabbit.height + rabbit.y > banana.y ){
                return true;
            } else{
                return false;
            }
    }
    eatBanana(banana){
        banana.alpha = 0; 
        this.sound.play('eat');
        banana.reset();
        banana.alpha = 1;
        this.gameOver = true;
        
    }
    //game over scene will print the total score
    //game over scene: press "enter" to return to menu scene
      
}