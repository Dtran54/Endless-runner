class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene');
    }
   
    create(){
        this.gameover = this.add.tileSprite(0, 0, 840, 640, 'gameover').setOrigin(0,0);
        
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }
    update(){
        this.gameover.tilePositionX += 0;
        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.scene.start('menuScene');
        }
    }
}