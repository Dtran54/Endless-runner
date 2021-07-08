class Banana extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = settings.bananaSpeed;

    }
    update(){
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width;
    }
}