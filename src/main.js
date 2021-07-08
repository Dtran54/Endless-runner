let config = {
    type: Phaser.CANVAS,
    width: 840,
    height: 640,
    scene: [ Menu, Play ]
  }
  
let game = new Phaser.Game(config);

let settings = {
  pineappleSpeed: 300,
  carrotSpeed: 300,
  bananaSpeed: 300,
  playerStartPosition: 200
}

let keyLEFT, keyRIGHT;