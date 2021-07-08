let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
  }
  
let game = new Phaser.Game(config);
let settings = {
  pineappleSpeed: 300,
  carrotSpeed: 300,
  bananaSpeed: 300
}
let keyLEFT, keyRIGHT;