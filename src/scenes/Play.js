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
        this.space = this.add.tileSprite(0, 0, 640, 480, 'space').setOrigin(0, 0);
        this.ground = this.add.tileSprite(0, game.config.height-60, game.config.width, 60 , 'ground').setOrigin(0, 0);
        this.rabbit = this.add.sprite(32, game.config.height-110, 'rabbit').setOrigin(0.5);
    }
    update() {
        this.space.tilePositionX += 4;
        this.ground.tilePositionX += 4;
      }
}