class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }

    preload(){
      //load audio
      this.load.audio('music', './assets/bgm.wav');
      this.load.image('menu', './assets/menu.png');
      this.load.audio('eat', './assets/eat.wav');
      this.load.audio('jump1', './assets/jump.wav');
    }


    create() {

      this.menu = this.add.tileSprite(0, 0, 840, 640, 'menu').setOrigin(0,0);
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }
  
    update(){
      if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
        game.settings = {
            pineappleSpeed: 5,
            carrotSpeed: 7,
            bananaSpeed: 8,
            blueberrySpeed:6,
            jumps: 3,
            bananapoints: 10,
            pineapplepoints: 5,
            blueberrypoints: 8,
            carrotpoints: 15
        }
        
        this.scene.start('playScene');
    }
    if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
        game.settings = {
            pineappleSpeed: 6,
            carrotSpeed: 9,
            bananaSpeed: 10,
            blueberrySpeed:7,
            jumps: 3,
            bananapoints: 10,
            pineapplepoints: 5,
            blueberrypoints: 8,
            carrotpoints: 15
        }
        
        this.scene.start('playScene');
      }
    }
}
