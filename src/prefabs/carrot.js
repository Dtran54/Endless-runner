class Carrot extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, carrotpoints){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = carrotpoints;
        this.moveSpeed = game.settings.carrotSpeed;

    }
    update(){
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width;
        this.y = Phaser.Math.Between(game.config.height * 0.7, 0);
    }
}