class Scene1 extends Phaser.Scene
{
    constructor ()
    {
        super('homePage');
    }

    preload ()
    {
        this.load.image('bg_lvl1', 'assets/game_images/level_backgrouds/Blue.png')
    }
      
    create ()
    {
        this.background = this.add.tileSprite(200,0,600, 500, 'bg_lvl1' )
        this.background.setOrigin(0,0)
    }
    update(){

    }
}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: [Scene1,],
    physics: {
        default: "arcade",
        arcade: {
          debug: false
        }
      }
};

let game = new Phaser.Game(config);