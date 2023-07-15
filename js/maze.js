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
        this.load.image('wallh_10', 'assets/game_images/walls/h10.png')
        this.load.image('wallv_6', 'assets/game_images/walls/v6.png')
        this.load.image('big_wall', 'assets/game_images/walls/Terrain (16x16).png')
    }
    create(){
        this.background = this.add.tileSprite(200,0,600, 500, 'bg_lvl1' )
        this.background.setOrigin(0,0)
        this.cursorKeys = this.input.keyboard.createCursorKeys()

        this.wall_border_down = this.physics.add.image(525,450,'wallh_10')
        this.wall_border_down.enableBody = true
        this.wall_border_up = this.physics.add.image(525,50,'wallh_10')
        this.wall_border_righ = this.physics.add.image(755,300,'wallv_6')
        this.wall_border_left = this.physics.add.image(294,203,'wallv_6')
        this.big_wall1 = this.physics.add.image(243,203,'big_wall')
        this.big_wall1.scale = 1.35
        this.big_wall2 = this.physics.add.image(500,480,'big_wall')
        this.big_wall2.scale = 0.85

        this.walls_grp = this.physics.add.group()
        this.walls_grp.add(this.wall_border_down)
        this.walls_grp.add(this.wall_border_left)
        this.walls_grp.add(this.wall_border_up)
        this.walls_grp.add(this.wall_border_righ)
        this.walls_grp.add(this.big_wall1)
        this.walls_grp.add(this.big_wall2)
        

        this.ninja = this.physics.add.sprite(225,450,'ninja')
        this.ninja.enableBody = true
        this.character_grp = this.physics.add.group()
        this.character_grp.add(this.ninja)
        this.ninja.setCollideWorldBounds(true)
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