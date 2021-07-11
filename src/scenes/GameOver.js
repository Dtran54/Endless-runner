class GameOver extends Phaser.Scene {
    constructor() {
        super('gameOverScene');
    }
   
    create(){
        this.gameover = this.add.tileSprite(0, 0, 840, 640, 'gameover').setOrigin(0,0);
        //press up arrow return to menu
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }
    update(){
        this.gameover.tilePositionX += 0;
        //game over scene will print the total score
        this.scoreBoard = this.add.text(16, 16, 'Score:  ' + x, style);
        if(Phaser.Input.Keyboard.JustDown(keyUP)){
            this.scene.start('menuScene');
        }
    }
}