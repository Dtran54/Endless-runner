let config = {
    type: Phaser.CANVAS,
    width: 840,
    height: 640,
    physics: {
      default: "arcade"
  },
    scene: [ Menu, Play, GameOver]
  }
  
let game = new Phaser.Game(config);
let keyLEFT, keyRIGHT,keyUP;
let style = { font: "bold 32px Arial", fill: "#fff" };
let x;

/* Technical wise, implementing the adjustable bgm and 
the ground and sky collisions treaded new grounds for us personally.
While a simple solution, figuring out how to stop the background
music on demand required some diving into the music systems of Phaser
itself. For the bottom and sky failure points, we stepped outside of the 
examples and made the top and bottom edges game ending, not just contraining.
We had to do more research into collisions and object spacing to do this.

Art wise, the game looks quite good. For such a short time, the team 
came up with a memorable and visually appealing logo with the outline of a
rabbit on the moon. The overall art form is quite friendly and cute.
Unlike most endless runners, we chose an animal in a highly unusual 
setting, eating atypical foods for that setting. */