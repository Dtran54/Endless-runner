class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    preload(){
      //load audio
      this.load.audio('music', './assets/bgm.wav');
      this.load.image('background','./assets/background.png')
    }
    create() {
      this.background = this.add.tileSprite(0, 0, 840, 640, 'background').setOrigin(0,0);
      
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
    }
  
    update(){
    
        this.scene.start('playScene');
    }
}
