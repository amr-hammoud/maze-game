class Scene1 extends Phaser.Scene
{
    constructor ()
    {
        super('homePage');
    }

    preload ()
    {
        this.load.image('bg_lvl1', 'assets/game_images/level_backgrouds/Blue.png')
        this.load.image('start_btn', 'assets/game_images/buttons/button-start.png')
    }
      
    create ()
    {
        this.background = this.add.tileSprite(200,0,600, 500, 'bg_lvl1' )
        this.background.setOrigin(0,0)
        this.start_btn = this.add.image(100,400, 'start_btn')
        this.start_btn.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('gameLevelOne'))
    }
    update(){

    }
}


class Scene2 extends Phaser.Scene
{
    constructor ()
    {
        super('gameLevelOne');
    }
    preload ()
    {
        this.load.spritesheet('ninja', 'assets/game_images/character/Run (32x32).png', {frameWidth: 32, frameHeight:32})
    }
    create(){
        this.background = this.add.tileSprite(200,0,600, 500, 'bg_lvl1' )
        this.background.setOrigin(0,0)
        this.cursorKeys = this.input.keyboard.createCursorKeys()
        this.ninja = this.add.sprite(250,250,'ninja')
        this.ninja.scale = 1.4
        this.anims.create({
            key:'ninja_anim',
            frames: this.anims.generateFrameNumbers('ninja'),
            frameRate:20,
            repeat: -1
        })
        this.ninja.play('ninja_anim')
    }
    update(){
        this.moving_ninja()
        
        
    }
    moving_ninja(){
        if(this.cursorKeys.up.isDown){
            this.ninja.y -=3
        }
        if(this.cursorKeys.down.isDown){
            this.ninja.y +=3
        }
        if(this.cursorKeys.left.isDown){
            this.ninja.x -= 3
            this.ninja.flipX = true
        }
        if(this.cursorKeys.right.isDown){
            this.ninja.x += 3
            this.ninja.flipX = false
        }
    }

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: [Scene1, Scene2],
    physics: {
        default: "arcade",
        arcade: {
          debug: false
        }
      }
};

let game = new Phaser.Game(config);