class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }
    preload() {
        // load images/tile sprites
        this.load.image('space', './assets/space.png');this.load.image('ground', './assets/Ground.png');
        this.load.image('rabbit','./assets/rabbit.png');
        this.load.image('pineapple','./assets/pineapple.png');
        this.load.image('carrot','./assets/carrot.png');
        this.load.image('banana','./assets/banana.png');
    }
    create() {
        this.space = this.add.tileSprite(0, 0, 840, 640, 'space').setOrigin(0, 0);
        this.ground = this.physics.add.tileSprite(0, game.config.height-60, game.config.width, 60 , 'ground').setOrigin(0, 0);
        this.rabbit = this.add.sprite(32, game.config.height-110, 'rabbit').setOrigin(0.5);
    
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


        //add pineapple,carrot
        this.pineapple = new Pineapple(this, game.config.width + 60, 200,'pineapple', 0, 30).setOrigin(0,0);
        this.carrot = new Carrot(this, game.config.width + 60, 200,'carrot', 0, 100).setOrigin(0,0);
        this.banana = new Banana(this, game.config.width + 60, 520,'banana', 0, 100).setOrigin(0,0);

        }
    update() {
        this.space.tilePositionX += 2;
        this.ground.tilePositionX += 4;

        this.pineapple.update();
        this.carrot.update();
        this.banana.update()
      }
}