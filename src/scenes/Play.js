class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }
    preload() {
        // load images/tile sprites
        this.load.image('space', './assets/space.png');
        this.load.image('ground', './assets/Ground.png');
        this.load.image('rabbit','./assets/rabbit.png')
    }
    create(){
        this.add.text(20, 20, "Endless Runner Play");
        this.space = this.add.tileSprite(0, 0, 840, 640, 'space').setOrigin(0, 0);
        this.ground = this.add.tileSprite(0, game.config.height-60, game.config.width, 60 , 'ground').setOrigin(0, 0);
        this.rabbit = this.add.sprite(32, game.config.height-110, 'rabbit').setOrigin(0.5);
        
        // set up audio, play bgm
        this.bgm = this.sound.add('music', { 
            mute: false,
            volume: 1,
            rate: 1,
            loop: true 
        });
        this.bgm.play();
    }
    update() {
        this.space.tilePositionX += 4;
        this.ground.tilePositionX += 4;
      }
}