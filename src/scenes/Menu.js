class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }

    preload(){
      //load audio
      this.load.audio('music', './assets/bgm.wav');
      this.load.image('space', './assets/space.png');
      this.load.audio('eat', './assets/eat.wav');
      this.load.audio('jump1', './assets/jump.wav');
    }


    create() {

      this.space = this.add.tileSprite(0, 0, 840, 640, 'space').setOrigin(0,0);
      
      let menuConfig = {
        fontFamily: 'fantasy',
        fontSize: '30px',
        backgroundColor: '#DAF7A6',
        color:'#FFC300',
        align: 'right',
        padding:{
            top: 5, bottom: 5,
        },
        fixedWidth: 0
      }
        menuConfig.color = "#AD1399";
        this.add.text(game.config.width/2, game.config.height/2 - 70, 'Endless Runner', menuConfig).setOrigin(0.5);
        
        menuConfig.color = "#B51C06FF";
        this.add.text(game.config.width/2, game.config.height/2, 'Use UP arrow to jump', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = "#DAF7A6";
        this.add.text(game.config.width/2, game.config.height/2 + 70,'Press <= of Novice or => Expert', menuConfig).setOrigin(0.5);
        
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
