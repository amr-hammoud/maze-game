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
        this.load.spritesheet('ninja', 'assets/game_images/character/Run (32x32).png', {frameWidth: 32, frameHeight:32})
        this.load.spritesheet('trap', 'assets/game_images/traps/trap(38x38).png', {frameWidth: 38, frameHeight:38})

    }
      
    create ()
    {
        this.background = this.add.tileSprite(200,0,600, 500, 'bg_lvl1' )
        this.background.setOrigin(0,0)
        this.start_btn = this.add.image(100,400, 'start_btn')
        this.start_btn.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('gameLevelOne'))

        this.ninja = this.add.sprite(275,450,'ninja')
        this.anims.create({
            key:'ninja_anim',
            frames: this.anims.generateFrameNumbers('ninja'),
            frameRate:20,
            repeat: -1
        })
        this.ninja.play('ninja_anim')

        this.trap = this.add.sprite(225,450,'trap')
        this.anims.create({
            key:'trap_anim',
            frames: this.anims.generateFrameNumbers('trap'),
            frameRate:20,
            repeat: -1
        })
        this.trap.play('trap_anim')

        this.tweens.add({
            targets: this.ninja,
            x: 750,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });

        this.tweens.add({
            targets: this.trap,
            x: 700,
            y: 450,
            duration: 2000,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });
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
        this.load.image('wallh_10', 'assets/game_images/walls/h10.png')
        this.load.image('wallv_6', 'assets/game_images/walls/v6.png')
        this.load.image('big_wall', 'assets/game_images/walls/Terrain (16x16).png')
    }
    create(){
        this.background = this.add.tileSprite(200,0,600, 500, 'bg_lvl1' )
        this.background.setOrigin(0,0)
        this.cursorKeys = this.input.keyboard.createCursorKeys()

        this.wall_border_down = this.physics.add.image(525,450,'wallh_10')
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
        

        this.ninja = this.physics.add.sprite(325,450,'ninja')
        this.character_grp = this.physics.add.group()
        this.character_grp.add(this.ninja)
        this.ninja.setCollideWorldBounds(true)
        this.ninja.scale = 1.4

        this.ninja.play('ninja_anim')
        this.physics.world.setBounds(200, 0, 800, 500);

    }
    update(){
        this.moving_ninja()

        
    }
    moving_ninja(){

        const x_before_move = this.ninja.x
        const y_before_move = this.ninja.y

        if(this.cursorKeys.up.isDown){
            this.ninja.y -= 3
        }
        if(this.cursorKeys.down.isDown){
            this.ninja.y += 3
        }
        if(this.cursorKeys.left.isDown){
            this.ninja.x -= 3
            this.ninja.flipX = true
        }
        if(this.cursorKeys.right.isDown){
            this.ninja.x += 3
            this.ninja.flipX = false
        }

        let walls = this.walls_grp.getChildren()
        for (let i = 0; i < walls.length; i++) {
            let wall = walls[i]

            if (Phaser.Geom.Intersects.RectangleToRectangle(this.ninja.getBounds(), wall.getBounds())) {
                this.ninja.setPosition(x_before_move, y_before_move)
            }
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
          debug: true
        }
      }
};

let game = new Phaser.Game(config);