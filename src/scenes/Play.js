class Play extends Phaser.Scene {
    constructor(){
        super("playScene");
    }
    preload() {
        // load images/tile sprites
        this.load.image('space', './assets/space.png');
      }
    create(){
        this.add.text(20, 20, "Endless Runner Play");
        this.space = this.add.tileSprite(0, 0, 640, 480, 'space').setOrigin(0, 0);
    }
    update() {
        this.space.tilePositionX -= 4;
      }
}