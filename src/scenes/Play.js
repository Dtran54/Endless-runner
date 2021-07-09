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
    }

    create() {
        this.score = 0;

        let scoreConfig = {
            fontFamily: 'Apple Chancery',
            fontSize: '30px',
            backgroundColor: '#00FFC4 ',
            color: '#FFFFFF',
            align: 'middle',
            padding: {
              top: 5,
              bottom: 5,
            },
            fixedWidth: 100
        }
        this.points = this.add.text(game.config.width , game.config.height, this.score, scoreConfig);
        this.space = this.add.tileSprite(0, 0, 840, 640, 'space').setOrigin(0, 0);
        this.ground = this.physics.add.sprite(game.config.width/2,game.config.height, 'ground');
        this.ground.displayWidth = game.config.width*1.1;
        this.ground.setImmovable();
        this.rabbit = this.physics.add.sprite(200, game.config.height-110, 'rabbit').setOrigin(0.5);
        this.rabbit.setGravityY(900);
       
        // setting collisions between the rabbit and ground
        this.physics.add.collider(this.rabbit, this.ground);

        // set up audio, play bgm
        this.bgm = this.sound.add('music', { 
            mute: false,
            volume: 1,
            rate: 1,
            loop: true 
        });

        
        this.bgm.play();

        //define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);

        //add pineapple,carrot
        this.pineapple = new Pineapple(this, game.config.width + 60, 150,'pineapple', 0, 30).setOrigin(0,0);
        this.carrot = new Carrot(this, game.config.width + 60, 400,'carrot', 0, 100).setOrigin(0,0);
        this.banana = new Banana(this, game.config.width + 60, 510,'banana', 0, 100).setOrigin(0,0);
        this.blueberry = new Blueberry(this, game.config.width + 60, 50,'blueberry', 0, 30).setOrigin(0,0);

        // collisions with items
        this.physics.add.overlap(this.rabbit, this.banana, function(rabbit, banana) {
            this.banana.reset();
            this.score += game.settings.bananapoints;
            this.points.text = this.score;
        });
        
        this.physics.add.overlap(this.rabbit, this.pineapple, function(rabbit, pineapple) {
            this.pineapple.reset();
            this.score += game.settings.pineapplepoints;
            this.points.text = this.score;
        });

        this.physics.add.overlap(this.rabbit, this.carrot, function(rabbit, carrot) {
            this.carrot.reset();
            this.score += game.settings.carrotpoints;
            this.points.text = this.score;
        });

        this.physics.add.overlap(this.rabbit, this.carrot, function(rabbit, blueberry) {
            this.blueberry.reset();
            this.score += game.settings.blueberrypoints;
            this.points.text = this.score;
        });

        //bumps the rabbit into the air
        this.rabbit.body.setVelocityY(-700);
    }

    update() {
        this.space.tilePositionX += 2;
        
        
        this.pineapple.update();
        this.carrot.update();
        this.banana.update();
        this.blueberry.update();

        this.rabbitJumps = 0;
        // jump
        if(Phaser.Input.Keyboard.JustDown(keyUP)) {
                this.rabbit.body.setVelocityY(-500);
            }
        }

      
      
}