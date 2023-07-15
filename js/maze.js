class Scene1 extends Phaser.Scene
{
    constructor ()
    {
        super('homePage');
    }

    preload ()
    {
        this.load.image('bg_lvl1', 'assets/game_images/level_backgrouds/Blue.png')
        this.load.image('bg_home', 'assets/game_images/level_backgrouds/Purple.png')
        this.load.image('bg_lvl2', 'assets/game_images/level_backgrouds/Green.png')
        this.load.image('start_btn', 'assets/game_images/buttons/button-start.png')
        this.load.spritesheet('ninja', 'assets/game_images/character/Run (32x32).png', {frameWidth: 32, frameHeight:32})
        this.load.spritesheet('trap', 'assets/game_images/traps/trap(38x38).png', {frameWidth: 38, frameHeight:38})

        this.load.image('wallh_10', 'assets/game_images/walls/h10.png')
        this.load.image('wallh_8', 'assets/game_images/walls/h8.png')
        this.load.image('wallh_5', 'assets/game_images/walls/h5.png')
        this.load.image('wallh_3', 'assets/game_images/walls/h3.png')
        this.load.image('wallh_2', 'assets/game_images/walls/h2.png')
        this.load.image('wallv_6', 'assets/game_images/walls/v6.png')
        this.load.image('wallv_1', 'assets/game_images/walls/v1.png')
        this.load.image('wallv_2', 'assets/game_images/walls/v2.png')
        this.load.image('wallv_3', 'assets/game_images/walls/v3.png')
        this.load.image('big_wall', 'assets/game_images/walls/Terrain (16x16).png')
        this.load.image('to_lvl_2', 'assets/game_images/level_ending/02.png')
        this.load.spritesheet('apple', 'assets/game_images/food/Apple.png', {frameWidth: 32, frameHeight:32})
    }
      
    create ()
    {
        this.background = this.add.tileSprite(200,0,600, 500, 'bg_home' )
        this.background.setOrigin(0,0)
        this.start_btn = this.add.image(100,400, 'start_btn')
        this.start_btn.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('gameLevelTwo'))

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


class Scene2Level1 extends Phaser.Scene
{
    constructor ()
    {
        super('gameLevelOne');
    }
    preload ()
    {
        this.load.image('wallh_10', 'assets/game_images/walls/h10.png')
        this.load.image('wallh_8', 'assets/game_images/walls/h8.png')
        this.load.image('wallh_5', 'assets/game_images/walls/h5.png')
        this.load.image('wallh_3', 'assets/game_images/walls/h3.png')
        this.load.image('wallh_2', 'assets/game_images/walls/h2.png')
        this.load.image('wallv_6', 'assets/game_images/walls/v6.png')
        this.load.image('wallv_1', 'assets/game_images/walls/v1.png')
        this.load.image('wallv_2', 'assets/game_images/walls/v2.png')
        this.load.image('wallv_3', 'assets/game_images/walls/v3.png')
        this.load.image('big_wall', 'assets/game_images/walls/Terrain (16x16).png')
        this.load.image('to_lvl_2', 'assets/game_images/level_ending/02.png')
        this.load.spritesheet('apple', 'assets/game_images/food/Apple.png', {frameWidth: 32, frameHeight:32})

    }
    create(){
        this.background = this.add.tileSprite(200,0,600, 500, 'bg_lvl1' )
        this.background.setOrigin(0,0)
        this.cursorKeys = this.input.keyboard.createCursorKeys()

        this.big_wall1 = this.physics.add.image(243,203,'big_wall')
        this.big_wall1.scale = 1.35
        this.big_wall2 = this.physics.add.image(500,480,'big_wall')
        this.big_wall2.scale = 0.85



        this.walls_grp = this.physics.add.group()
        this.walls_grp.add(this.physics.add.image(525,450,'wallh_10'))
        this.walls_grp.add(this.physics.add.image(525,50,'wallh_10'))
        this.walls_grp.add(this.physics.add.image(755,300,'wallv_6'))
        this.walls_grp.add(this.physics.add.image(294,203,'wallv_6'))
        this.walls_grp.add(this.physics.add.image(530,280,'wallv_2'))
        this.walls_grp.add(this.physics.add.image(660,280,'wallv_2'))
        this.walls_grp.add(this.physics.add.image(420,339,'wallh_5'))
        this.walls_grp.add(this.physics.add.image(700,339,'wallh_2'))
        this.walls_grp.add(this.physics.add.image(466,225,'wallh_3'))
        this.walls_grp.add(this.physics.add.image(570,150,'wallh_8'))
        this.walls_grp.add(this.big_wall1)
        this.walls_grp.add(this.big_wall2)
        
        this.fruits_grp = this.physics.add.group()
        this.apple_1 = this.physics.add.sprite(505,250,'apple')
        this.apple_2 = this.physics.add.sprite(730,310,'apple')
        this.fruits_grp.add(this.apple_1)
        this.fruits_grp.add(this.apple_2)
        this.anims.create({
            key:'apple_anim',
            frames: this.anims.generateFrameNumbers('apple'),
            frameRate:20,
            repeat: -1
        })
        this.apple_1.play('apple_anim')
        this.apple_2.play('apple_anim')

        this.trap = this.physics.add.sprite(505,310,'trap')
        this.trap.play('trap_anim')

        this.ninja = this.physics.add.sprite(225,450,'ninja')
        this.character_grp = this.physics.add.group()
        this.character_grp.add(this.ninja)
        this.ninja.setCollideWorldBounds(true)
        this.ninja.scale = 1.4

        this.ninja.play('ninja_anim')
        this.physics.world.setBounds(200, 0, 800, 500);

        this.to_lvl_2 = this.physics.add.sprite(780,100,'to_lvl_2')
        this.to_lvl_2.scale = 2

        this.physics.add.collider(this.ninja,this.fruits_grp, (ninja, fruit) => {
            fruit.destroy()
        })
        this.physics.add.collider(this.ninja,this.to_lvl_2, () => this.scene.start('gameLevelTwo'))

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
    if (Phaser.Geom.Intersects.RectangleToRectangle(this.ninja.getBounds(), this.trap.getBounds())) {
        this.ninja.setPosition(x_before_move -20 , y_before_move)
    }
    }

}

class Scene3Level2 extends Phaser.Scene
{
    constructor ()
    {
        super('gameLevelTwo');
    }
    preload ()
    {
        this.load.image('to_lvl_3', 'assets/game_images/level_ending/03.png')
        this.load.image('big_wall_silver', 'assets/game_images/walls/TerrainSilver(16x16).png')

    }
    create(){
        this.background = this.add.tileSprite(200,0,600, 500, 'bg_lvl2' )
        this.background.setOrigin(0,0)
        this.big_wall1 = this.physics.add.image(243,250,'big_wall_silver')
        this.big_wall1.scale = 1.35
        this.big_wall1.flipY = true
        this.big_wall2 = this.physics.add.image(500,480,'big_wall_silver')
        this.big_wall2.scale = 0.85
        this.big_wall1.flipY = true
        this.cursorKeys = this.input.keyboard.createCursorKeys()



        this.walls_grp = this.physics.add.group()
        this.walls_grp.add(this.physics.add.image(525,450,'wallh_10'))
        this.walls_grp.add(this.physics.add.image(525,50,'wallh_10'))
        this.walls_grp.add(this.physics.add.image(755,198,'wallv_6'))
        this.walls_grp.add(this.physics.add.image(294,302,'wallv_6'))
        
        this.walls_grp.add(this.big_wall1)
        this.walls_grp.add(this.big_wall2)
        
        this.fruits_grp = this.physics.add.group()
        this.apple_1 = this.physics.add.sprite(505,250,'apple')
        this.apple_2 = this.physics.add.sprite(730,310,'apple')
        this.fruits_grp.add(this.apple_1)
        this.fruits_grp.add(this.apple_2)
        this.anims.create({
            key:'apple_anim',
            frames: this.anims.generateFrameNumbers('apple'),
            frameRate:20,
            repeat: -1
        })
        this.apple_1.play('apple_anim')
        this.apple_2.play('apple_anim')

        this.traps_grp = this.physics.add.group()
        this.trap1 = this.physics.add.sprite(320,150,'trap')
        this.trap2 = this.physics.add.sprite(370,150,'trap')
        this.trap3 = this.physics.add.sprite(420,150,'trap')
        this.trap4 = this.physics.add.sprite(470,150,'trap')
        this.trap5 = this.physics.add.sprite(520,150,'trap')
        this.trap6 = this.physics.add.sprite(570,150,'trap')

        this.traps_grp.add(this.trap1)
        this.traps_grp.add(this.trap2)
        this.traps_grp.add(this.trap3)
        this.traps_grp.add(this.trap4)
        this.traps_grp.add(this.trap5)
        this.traps_grp.add(this.trap6)

        this.trap1.play('trap_anim')
        this.trap2.play('trap_anim')
        this.trap3.play('trap_anim')
        this.trap4.play('trap_anim')
        this.trap5.play('trap_anim')
        this.trap6.play('trap_anim')

        this.ninja = this.physics.add.sprite(225,100,'ninja')
        this.character_grp = this.physics.add.group()
        this.character_grp.add(this.ninja)
        this.ninja.setCollideWorldBounds(true)
        this.ninja.scale = 1.4

        this.ninja.play('ninja_anim')
        this.physics.world.setBounds(200, 0, 800, 500);

        this.to_lvl_3 = this.physics.add.sprite(780,400,'to_lvl_3')
        this.to_lvl_3.scale = 2

        this.physics.add.collider(this.ninja,this.fruits_grp, (ninja, fruit) => {
            fruit.destroy()
        })
        this.physics.add.collider(this.ninja,this.to_lvl_3, () => this.scene.start('gameLevelThree'))
        this.physics.add.collider(this.ninja,this.traps_grp, () => this.ninja.setPosition(this.ninja.x - 10, this.ninja.y-10))
        
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

        // let walls = this.walls_grp.getChildren()
        // for (let i = 0; i < walls.length; i++) {
        //     let wall = walls[i]

        //     if (Phaser.Geom.Intersects.RectangleToRectangle(this.ninja.getBounds(), wall.getBounds())) {
        //         this.ninja.setPosition(x_before_move, y_before_move)
        //     }
        // }
        // let traps = this.traps_grp.getChildren()
        // for (let i = 0; i < traps.length; i++) {
        //     let trap = traps[i]

        //     if (Phaser.Geom.Intersects.RectangleToRectangle(this.ninja.getBounds(), trap.getBounds())) {
        //         this.ninja.setPosition(x_before_move -20, y_before_move + 5)
        //     }
        // }
    }
    

}

class Scene3Level3 extends Phaser.Scene
{
    constructor ()
    {
        super('gameLevelThree');
    }
    preload ()
    {


    }
    create(){
        this.background = this.add.tileSprite(200,0,600, 500, 'bg_lvl2' )
        this.background.setOrigin(0,0)
    }
    update(){
    }
    

}

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    scene: [Scene1, Scene2Level1, Scene3Level2, Scene3Level3],
    physics: {
        default: "arcade",
        arcade: {
          debug: true
        }
      }
};

let game = new Phaser.Game(config);