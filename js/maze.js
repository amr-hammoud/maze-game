let global_score = 0

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
        this.load.image('bg_lvl3', 'assets/game_images/level_backgrouds/dark-green.png')
        this.load.image('start_btn', 'assets/game_images/buttons/button-start.png')
        this.load.image('reset_btn', 'assets/game_images/buttons/reset_button.png')

        this.load.image('arrows', 'assets/game_images/buttons/buttons.png')
        this.load.spritesheet('ninja', 'assets/game_images/character/Run (32x32).png', {frameWidth: 32, frameHeight:32})
        this.load.spritesheet('trap', 'assets/game_images/traps/trap(38x38).png', {frameWidth: 38, frameHeight:38})

        this.load.image('to_lvl_3', 'assets/game_images/level_ending/03.png')
        this.load.image('big_wall_silver', 'assets/game_images/walls/TerrainSilver(16x16).png')
        this.load.spritesheet('banana', 'assets/game_images/food/Bananas.png', {frameWidth: 32, frameHeight:32})
        this.load.image('reset_btn', 'assets/game_images/buttons/reset_button.png')

        this.load.image('wallh_10', 'assets/game_images/walls/h10.png')
        this.load.image('wallh_8', 'assets/game_images/walls/h8.png')
        this.load.image('wallh_5', 'assets/game_images/walls/h5.png')
        this.load.image('wallh_3', 'assets/game_images/walls/h3.png')
        this.load.image('wallh_2', 'assets/game_images/walls/h2.png')
        this.load.image('wallv_6', 'assets/game_images/walls/v6.png')
        this.load.image('wallv_1', 'assets/game_images/walls/v1.png')
        this.load.image('wallv_2', 'assets/game_images/walls/v2.png')
        this.load.image('wallv_3', 'assets/game_images/walls/v3.png')
        this.load.image('wallh_4', 'assets/game_images/walls/h4.png')
        this.load.image('wallh_6', 'assets/game_images/walls/h6.png')
        this.load.image('big_wall', 'assets/game_images/walls/Terrain (16x16).png')
        this.load.image('to_lvl_2', 'assets/game_images/level_ending/02.png')
        this.load.spritesheet('apple', 'assets/game_images/food/Apple.png', {frameWidth: 32, frameHeight:32})
    }
      
    create ()
    {
        this.background = this.add.tileSprite(300,0,600, 500, 'bg_home' )
        this.background.setOrigin(0,0)
        
        this.add.text(475,50, "Use the arrows", { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '42px'})
        this.add.text(430,300, "To escape the maze", { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '42px'})
        this.arrows = this.add.image(480,70,'arrows')
        this.arrows.setOrigin(0,0)

        this.left_panel = this.add.rectangle(0,0,300,500,0x7ab980)
        this.left_panel.setOrigin(0,0)

        this.message = this.add.text(50,50, "Hello\nNinja!", { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '42px'})
        
        this.start_btn = this.add.image(150,400, 'start_btn')
        this.start_btn.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('gameLevelOne'))
        this.start_btn.scale = 1.5
        this.tweens.add({
            targets: this.start_btn,
            scale: 1.3,
            duration: 500,
            ease: "Power2",
            yoyo: true,
            loop: -1
        })

        this.ninja = this.add.sprite(430,420,'ninja')
        this.ninja.scale = 2.3
        this.anims.create({
            key:'ninja_anim',
            frames: this.anims.generateFrameNumbers('ninja'),
            frameRate:20,
            repeat: -1
        })
        this.ninja.play('ninja_anim')

        this.trap = this.add.sprite(345,420,'trap')
        this.trap.scale = 2
        this.anims.create({
            key:'trap_anim',
            frames: this.anims.generateFrameNumbers('trap'),
            frameRate:20,
            repeat: -1
        })
        this.trap.play('trap_anim')

        this.tweens.add({
            targets: this.ninja,
            x: 850,
            y: 420,
            duration: 1600,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });

        this.tweens.add({
            targets: this.trap,
            x: 770,
            y: 420,
            duration: 1600,
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
        
    }
    create(){
        this.background = this.add.tileSprite(300,0,600, 500, 'bg_lvl1' )
        this.background.setOrigin(0,0)

        this.left_panel = this.add.rectangle(0,0,300,500,0x7ab980)
        this.left_panel.setOrigin(0,0)

        this.score = 0
        this.score_label = this.add.text(50,30, `Score: ${this.score}`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '42px'})

        this.min_score = 20
        this.alert = this.add.text(50,100, `Score at least\n${this.min_score}pts`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '36px'})

        this.hint = this.add.text(100,220, `: +10pts`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '36px'})
        this.apple_hint = this.physics.add.sprite(70,240,'apple')
        this.apple_hint.scale = 3
        
        this.hint2 = this.add.text(100,270, `: -5pts`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '36px'})
        this.trap_hint = this.physics.add.sprite(70,290,'trap')
        
        this.reset_btn = this.add.image(150,400, 'reset_btn')
        this.reset_btn.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('gameLevelOne'))
        this.reset_btn.scale = 0.3

        this.cursorKeys = this.input.keyboard.createCursorKeys()

        this.big_wall1 = this.physics.add.image(343,203,'big_wall')
        this.big_wall1.scale = 1.35
        this.big_wall2 = this.physics.add.image(600,480,'big_wall')
        this.big_wall2.scale = 0.85
        this.big_wall3 = this.physics.add.image(830,100,'big_wall')
        this.big_wall3.scale = 1.3
        this.big_wall3.angle = 90
        



        this.walls_grp = this.physics.add.group()
        this.walls_grp.add(this.physics.add.image(625,450,'wallh_10'))
        this.walls_grp.add(this.physics.add.image(625,50,'wallh_10'))
        this.walls_grp.add(this.physics.add.image(855,300,'wallv_6'))
        this.walls_grp.add(this.physics.add.image(394,203,'wallv_6'))
        this.walls_grp.add(this.physics.add.image(630,280,'wallv_2'))
        this.walls_grp.add(this.physics.add.image(760,280,'wallv_2'))
        this.walls_grp.add(this.physics.add.image(394,203,'wallv_6'))
        this.walls_grp.add(this.physics.add.image(520,339,'wallh_5'))
        this.walls_grp.add(this.physics.add.image(800,339,'wallh_2'))
        this.walls_grp.add(this.physics.add.image(566,225,'wallh_3'))
        this.walls_grp.add(this.physics.add.image(670,150,'wallh_8'))
        this.walls_grp.add(this.big_wall1)
        this.walls_grp.add(this.big_wall2)
        this.walls_grp.add(this.big_wall3)
        
        this.fruits_grp = this.physics.add.group()
        this.apple_1 = this.physics.add.sprite(605,250,'apple')
        this.apple_2 = this.physics.add.sprite(830,310,'apple')
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
        this.apple_hint.play('apple_anim')

        this.trap = this.physics.add.sprite(605,310,'trap')
        this.trap.play('trap_anim')
        this.trap_hint.play('trap_anim')

        this.ninja = this.physics.add.sprite(325,450,'ninja')
        this.ninja.setCollideWorldBounds(true)
        this.ninja.scale = 1.4

        this.ninja.play('ninja_anim')
        this.physics.world.setBounds(300, 0, 900, 500);

        this.to_lvl_2 = this.physics.add.sprite(750,100,'to_lvl_2')
        this.to_lvl_2.scale = 2

        

        this.physics.add.collider(this.ninja,this.fruits_grp, (ninja, fruit) => {
            fruit.destroy()
            this.score +=10
            global_score += 10
            this.score_label.text = "Score: " + this.score
        })

        this.physics.add.collider(this.ninja,this.to_lvl_2, () => {
            if(this.score >= 20)
                this.scene.start('gameLevelTwo')
        })


    }
    update(){
        this.moving_ninja()

        
    }
    moving_ninja(){

        let x_before_move = this.ninja.x
        let y_before_move = this.ninja.y

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
        this.score -= 5
        global_score -= 5
        this.score_label.text = "Score: " + this.score
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
       

    }
    create(){
        this.background = this.add.tileSprite(300,0,600, 500, 'bg_lvl2' )
        this.background.setOrigin(0,0)

        this.left_panel = this.add.rectangle(0,0,300,500,0x7ab980)
        this.left_panel.setOrigin(0,0)

        this.score = 0
        this.score_label = this.add.text(50,30, `Score: ${this.score}`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '42px'})

        this.min_score = 70
        this.alert = this.add.text(50,100, `Score at least\n${this.min_score}pts`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '36px'})

        this.hint = this.add.text(100,220, `: +10pts`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '36px'})
        this.banana_hint = this.add.sprite(70,240,'banana')
        this.banana_hint.scale = 3
        
        this.hint2 = this.add.text(100,270, `: -5pts`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '36px'})
        this.trap_hint = this.add.sprite(70,290,'trap')
        this.trap_hint.play('trap_anim')
        this.reset_btn = this.add.image(150,400, 'reset_btn')
        this.reset_btn.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('gameLevelTwo'))
        this.reset_btn.scale = 0.3

////////////////////////////

        this.big_wall1 = this.physics.add.image(343,250,'big_wall_silver')
        this.big_wall1.scale = 1.35
        this.big_wall1.flipY = true
        this.big_wall2 = this.physics.add.image(600,480,'big_wall_silver')
        this.big_wall2.scale = 0.85
        this.big_wall3 = this.physics.add.image(850,390,'big_wall_silver')
        this.big_wall3.scale = 1.5
        this.big_wall3.angle = 90
        this.cursorKeys = this.input.keyboard.createCursorKeys()



        this.walls_grp = this.physics.add.group()
        this.walls_grp.add(this.physics.add.image(625,450,'wallh_10'))
        this.walls_grp.add(this.physics.add.image(625,50,'wallh_10'))
        this.walls_grp.add(this.physics.add.image(855,198,'wallv_6'))
        this.walls_grp.add(this.physics.add.image(394,302,'wallv_6'))
        
        this.walls_grp.add(this.big_wall1)
        this.walls_grp.add(this.big_wall2)
        this.walls_grp.add(this.big_wall3)
        
        this.fruits_grp = this.physics.add.group()
        this.banana_1 = this.physics.add.sprite(450,100,'banana')
        this.banana_2 = this.physics.add.sprite(600,100,'banana')
        this.banana_3 = this.physics.add.sprite(750,100,'banana')
        this.banana_4 = this.physics.add.sprite(750,250,'banana')
        this.banana_5 = this.physics.add.sprite(600,250,'banana')
        this.banana_6 = this.physics.add.sprite(450,250,'banana')
        this.banana_7 = this.physics.add.sprite(450,400,'banana')

        this.fruits_grp.add(this.banana_1)
        this.fruits_grp.add(this.banana_2)
        this.fruits_grp.add(this.banana_3)
        this.fruits_grp.add(this.banana_4)
        this.fruits_grp.add(this.banana_5)
        this.fruits_grp.add(this.banana_6)
        this.fruits_grp.add(this.banana_7)
        this.anims.create({
            key:'banana_anim',
            frames: this.anims.generateFrameNumbers('banana'),
            frameRate:20,
            repeat: -1
        })
        this.banana_hint.play('banana_anim')
        this.banana_1.play('banana_anim')
        this.banana_2.play('banana_anim')
        this.banana_3.play('banana_anim')
        this.banana_4.play('banana_anim')
        this.banana_5.play('banana_anim')
        this.banana_6.play('banana_anim')
        this.banana_7.play('banana_anim')

        this.traps_grp = this.physics.add.group()
        this.trap1 = this.physics.add.sprite(420,150,'trap')
        this.trap2 = this.physics.add.sprite(470,150,'trap')
        this.trap3 = this.physics.add.sprite(520,150,'trap')
        this.trap4 = this.physics.add.sprite(570,150,'trap')
        this.trap5 = this.physics.add.sprite(620,150,'trap')
        this.trap6 = this.physics.add.sprite(670,150,'trap')
        this.trap7 = this.physics.add.sprite(570,325,'trap')
        this.trap8 = this.physics.add.sprite(620,325,'trap')
        this.trap9 = this.physics.add.sprite(670,325,'trap')
        this.trap10 = this.physics.add.sprite(720,325,'trap')
        this.trap11 = this.physics.add.sprite(770,325,'trap')
        this.trap12 = this.physics.add.sprite(820,325,'trap')
        this.trap13 = this.physics.add.sprite(820,150,'trap')


        this.traps_grp.add(this.trap1)
        this.traps_grp.add(this.trap2)
        this.traps_grp.add(this.trap3)
        this.traps_grp.add(this.trap4)
        this.traps_grp.add(this.trap5)
        this.traps_grp.add(this.trap6)
        this.traps_grp.add(this.trap7)
        this.traps_grp.add(this.trap8)
        this.traps_grp.add(this.trap9)
        this.traps_grp.add(this.trap10)
        this.traps_grp.add(this.trap11)
        this.traps_grp.add(this.trap12)
        this.traps_grp.add(this.trap12)
        this.traps_grp.add(this.trap13)


        this.trap1.play('trap_anim')
        this.trap2.play('trap_anim')
        this.trap3.play('trap_anim')
        this.trap4.play('trap_anim')
        this.trap5.play('trap_anim')
        this.trap6.play('trap_anim')
        this.trap7.play('trap_anim')
        this.trap8.play('trap_anim')
        this.trap9.play('trap_anim')
        this.trap10.play('trap_anim')
        this.trap11.play('trap_anim')
        this.trap12.play('trap_anim')
        this.trap13.play('trap_anim')

        this.tweens.add({
            targets: this.trap13,
            x: 720,
            y: 150,
            duration: 1600,
            ease: "Power2",
            yoyo: true,
            loop: -1
        });

        this.ninja = this.physics.add.sprite(325,100,'ninja')
        this.character_grp = this.physics.add.group()
        this.character_grp.add(this.ninja)
        this.ninja.setCollideWorldBounds(true)
        this.ninja.scale = 1.4

        this.ninja.play('ninja_anim')
        this.physics.world.setBounds(300, 0, 900, 500);

        this.to_lvl_3 = this.physics.add.sprite(750,400,'to_lvl_3')
        this.to_lvl_3.scale = 2

        this.physics.add.collider(this.ninja,this.fruits_grp, (ninja, fruit) => {
            fruit.destroy()
            this.score += 10
            this.score_label.text = "Score: " + this.score
        })
        this.physics.add.collider(this.ninja,this.to_lvl_3, () => {
            if(this.score >= this.min_score)
                this.scene.start('gameLevelFour')
        })
        this.physics.add.collider(this.ninja,this.traps_grp, () => {
            this.ninja.setPosition(this.ninja.x - 10, this.ninja.y - 10)
            this.score -= 5
            global_score -= 5
            this.score_label.text = "Score: " + this.score
                }
            )
        
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

class Scene4Level3 extends Phaser.Scene
{
    constructor ()
    {
        super('gameLevelThree');
    }
    preload ()
    {
        this.load.image('reset_btn', 'assets/game_images/buttons/reset_button.png')
        this.load.image('big_wall_silver', 'assets/game_images/walls/TerrainSilver(16x16).png')
    }
    create(){
        this.background = this.add.tileSprite(300,0,600, 500, 'bg_lvl3' )
        this.background.setOrigin(0,0)

        this.left_panel = this.add.rectangle(0,0,300,500,0x7ab980)
        this.left_panel.setOrigin(0,0)
        this.score = 0
        this.score_label = this.add.text(50,30, `Score: ${this.score}`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '42px'})

        this.alert = this.add.text(50,100, `CAREFUL!\n Hidden traps \n are around ;D\n\n`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '36px'})
        this.hint = this.add.text(100,220, `: +10pts`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '36px'})
        this.apple_hint = this.physics.add.sprite(70,240,'apple')
        this.apple_hint.scale = 3
        this.hint2 = this.add.text(100,270, `: -5pts`, { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '36px'})
        this.trap_hint = this.physics.add.sprite(70,290,'trap')
        this.reset_btn = this.add.image(150,400, 'reset_btn')
        this.reset_btn.setInteractive({ useHandCursor: true }).on('pointerdown', () => this.scene.start('gameLevelThree'))
        this.reset_btn.scale = 0.3


      
        
    }
    update(){
    }
    

}

class Scene5Level4 extends Phaser.Scene {
	constructor() {
		super("gameLevelFour");
	}
	preload() {
		this.load.spritesheet(
			"strawberry",
			"assets/game_images/food/Strawberry.png",
			{ frameWidth: 32, frameHeight: 32 }
		);
		this.load.spritesheet(
			"endGameFlag",
			"assets/game_images/level_ending/endgame(64x64).png",
			{ frameWidth: 64, frameHeight: 64 }
		);
		this.load.image(
			"bg_lvl4",
			"assets/game_images/level_backgrouds/Brown.png"
		);
		this.load.image(
			"big_wall_silver",
			"assets/game_images/walls/TerrainSilver(16x16).png"
		);
		this.load.image("to_lvl_5", "assets/game_images/level_ending/05.png");
	}
	create() {
		this.background = this.add.tileSprite(300, 0, 600, 500, "bg_lvl4");
		this.background.setOrigin(0, 0);

		this.left_panel = this.add.rectangle(0, 0, 300, 500, 0x7ab980);
		this.left_panel.setOrigin(0, 0);
		this.score = 0;
		this.score_label = this.add.text(50, 30, `Score: ${this.score}`, {
			fontFamily: '"Berlin Sans FB Demi", sans-serif',
			fontSize: "42px",
		});

		this.alert = this.add.text(50, 100, `Time\nManagement`, {
			fontFamily: '"Berlin Sans FB Demi", sans-serif',
			fontSize: "36px",
		});
		this.hint = this.add.text(100, 220, `: +10pts`, {
			fontFamily: '"Berlin Sans FB Demi", sans-serif',
			fontSize: "36px",
		});
		this.strawberry_hint = this.physics.add.sprite(70, 240, "strawberry");
		this.strawberry_hint.scale = 3;
		this.hint2 = this.add.text(100, 270, `: -5pts`, {
			fontFamily: '"Berlin Sans FB Demi", sans-serif',
			fontSize: "36px",
		});
		this.trap_hint = this.physics.add.sprite(70, 290, "trap");
		this.reset_btn = this.add.image(150, 400, "reset_btn");
		this.reset_btn
			.setInteractive({ useHandCursor: true })
			.on("pointerdown", () => this.scene.start("gameLevelFour"));
		this.reset_btn.scale = 0.3;

		this.cursorKeys = this.input.keyboard.createCursorKeys();

		this.big_wall1 = this.physics.add.image(343, 250, "big_wall_silver");
		this.big_wall1.scale = 1.35;
		this.big_wall1.flipY = true;
		this.big_wall2 = this.physics.add.image(850, 105, "big_wall_silver");
		this.big_wall2.scale = 1.5;
		this.big_wall2.angle = 90;

		this.walls_grp = this.physics.add.group();
		this.walls_grp.add(this.physics.add.image(625, 450, "wallh_10"));
		this.walls_grp.add(this.physics.add.image(625, 50, "wallh_10"));
		this.walls_grp.add(this.physics.add.image(855, 298, "wallv_6"));
		this.walls_grp.add(this.physics.add.image(394, 302, "wallv_6"));
		this.walls_grp.add(this.physics.add.image(550, 205, "wallv_6"));
		this.walls_grp.add(this.physics.add.image(640, 340, "wallh_4"));
		this.walls_grp.add(this.physics.add.image(750, 205, "wallh_4"));
		this.walls_grp.add(this.big_wall1);
		this.walls_grp.add(this.big_wall2);

		this.traps_grp = this.physics.add.group();
		this.trap1 = this.physics.add.sprite(400, 150, "trap");
		this.trap2 = this.physics.add.sprite(530, 230, "trap");
		this.trap3 = this.physics.add.sprite(400, 350, "trap");
		this.trap4 = this.physics.add.sprite(400, 350, "trap");
		this.trap5 = this.physics.add.sprite(650, 350, "trap");
		this.trap6 = this.physics.add.sprite(725, 350, "trap");
		this.trap7 = this.physics.add.sprite(560, 210, "trap");
		this.trap8 = this.physics.add.sprite(725, 210, "trap");

		this.traps_grp.add(this.trap1);
		this.traps_grp.add(this.trap2);
		this.traps_grp.add(this.trap3);
		this.traps_grp.add(this.trap4);
		this.traps_grp.add(this.trap5);
		this.traps_grp.add(this.trap6);
		this.traps_grp.add(this.trap7);
		this.traps_grp.add(this.trap8);

		this.trap1.play("trap_anim");
		this.trap2.play("trap_anim");
		this.trap3.play("trap_anim");
		this.trap4.play("trap_anim");
		this.trap5.play("trap_anim");
		this.trap6.play("trap_anim");
		this.trap7.play("trap_anim");
		this.trap8.play("trap_anim");

		this.tweens.add({
			targets: this.trap1,
			x: 550,
			y: 50,
			duration: 600,
			ease: "Power2",
			yoyo: true,
			loop: -1,
		});

		this.tweens.add({
			targets: this.trap2,
			x: 400,
			y: 230,
			duration: 500,
			ease: "Power2",
			yoyo: true,
			loop: -1,
		});

		this.tweens.add({
			targets: this.trap3,
			x: 530,
			y: 230,
			duration: 800,
			ease: "Power0",
			yoyo: true,
			loop: -1,
		});

		this.tweens.add({
			targets: this.trap4,
			x: 530,
			y: 450,
			duration: 800,
			ease: "Power0",
			yoyo: true,
			loop: -1,
		});

		this.tweens.add({
			targets: this.trap5,
			x: 600,
			y: 450,
			duration: 1200,
			ease: "Power2",
			yoyo: true,
			loop: -1,
		});

		this.tweens.add({
			targets: this.trap6,
			x: 800,
			y: 450,
			duration: 1200,
			ease: "Power0",
			yoyo: true,
			loop: -1,
		});

        this.tweens.add({
			targets: this.trap7,
			x: 700,
			y: 210,
			duration: 1200,
			ease: "Power2",
			yoyo: true,
			loop: -1,
		});

		this.tweens.add({
			targets: this.trap8,
			x: 725,
			y: 50,
			duration: 1200,
			ease: "Power2",
			yoyo: true,
			loop: -1,
		});

		

		this.fruits_grp = this.physics.add.group();
		this.strawberry_1 = this.physics.add.sprite(510, 150, "strawberry");
		this.strawberry_2 = this.physics.add.sprite(510, 350, "strawberry");
		this.strawberry_3 = this.physics.add.sprite(700, 400, "strawberry");
		this.strawberry_4 = this.physics.add.sprite(800, 270, "strawberry");
		this.strawberry_5 = this.physics.add.sprite(600, 270, "strawberry");
		this.strawberry_6 = this.physics.add.sprite(600, 100, "strawberry");

		this.fruits_grp.add(this.strawberry_1);
		this.fruits_grp.add(this.strawberry_2);
		this.fruits_grp.add(this.strawberry_3);
		this.fruits_grp.add(this.strawberry_4);
		this.fruits_grp.add(this.strawberry_5);
		this.fruits_grp.add(this.strawberry_6);

		this.anims.create({
			key: "strawberry_anim",
			frames: this.anims.generateFrameNumbers("strawberry"),
			frameRate: 20,
			repeat: -1,
		});
		this.strawberry_1.play("strawberry_anim");
		this.strawberry_2.play("strawberry_anim");
		this.strawberry_3.play("strawberry_anim");
		this.strawberry_4.play("strawberry_anim");
		this.strawberry_5.play("strawberry_anim");
		this.strawberry_6.play("strawberry_anim");
		this.strawberry_hint.play("strawberry_anim");

		this.trap_hint.play("trap_anim");

		this.to_end = this.physics.add.sprite(790, 120, "endGameFlag");
		this.to_end.scale = 1;
        this.anims.create({
			key: "flag_anim",
			frames: this.anims.generateFrameNumbers("endGameFlag"),
			frameRate: 20,
			repeat: -1,
		});
		this.to_end.play("flag_anim")

		this.ninja = this.physics.add.sprite(350, 100, "ninja");
		this.ninja.setCollideWorldBounds(true);
		this.ninja.scale = 1.4;

		this.ninja.play("ninja_anim");
		this.physics.world.setBounds(300, 0, 900, 500);

		this.physics.add.collider(
			this.ninja,
			this.fruits_grp,
			(ninja, fruit) => {
				fruit.destroy();
				this.score += 10;
                global_score += 10
				this.score_label.text = "Score: " + this.score;
			}
		);

		this.physics.add.collider(this.ninja, this.traps_grp, () => {
			this.score -= 0.5;
            global_score -= 0.5
			this.score_label.text = "Score: " + this.score;
		});
        this.physics.add.collider(this.ninja, this.to_end, () => {
			if (this.score >= 30) {
                this.scene.start('gameEnding')}
		});
	}
	update() {
		this.moving_ninja();
	}

	moving_ninja() {
		let x_before_move = this.ninja.x;
		let y_before_move = this.ninja.y;

		if (this.cursorKeys.up.isDown) {
			this.ninja.y -= 3;
		}
		if (this.cursorKeys.down.isDown) {
			this.ninja.y += 3;
		}
		if (this.cursorKeys.left.isDown) {
			this.ninja.x -= 3;
			this.ninja.flipX = true;
		}
		if (this.cursorKeys.right.isDown) {
			this.ninja.x += 3;
			this.ninja.flipX = false;
		}

		let walls = this.walls_grp.getChildren();
		for (let i = 0; i < walls.length; i++) {
			let wall = walls[i];

			if (
				Phaser.Geom.Intersects.RectangleToRectangle(
					this.ninja.getBounds(),
					wall.getBounds()
				)
			) {
				this.ninja.setPosition(x_before_move, y_before_move);
			}
		}
	}
}

class EndingScene extends Phaser.Scene {
    constructor() {
      super("gameEnding");
    }
  
    preload() {
      this.load.image("Ground", "assets/Ending-scene-elements/ground.png");
      this.load.image("Sky", "assets/Ending-scene-elements/sky.svg");
      this.load.image("Mountain", "assets/Ending-scene-elements/mountain.png");
    }
  
    create() {
      const width = this.scale.width;
      const height = this.scale.height;
      this.input.on('pointerdown', () => this.scene.start('homePage'));
      this.midground = this.add.image(0, 60, "Mountain");
      this.midground.setOrigin(0, 0);
      this.midground.scale = 0.2;
  
      this.foreground = this.add.image(400, 500, "Ground");
      this.foreground.scale = 0.4;
      this.add.text(1000, 100, "\t\tCONGRATULATIONS\nYou Escaped The Maze...", {
        fontFamily: '"Berlin Sans FB Demi", sans-serif',
        fontSize: "42px",
      });
  
      this.add.text(1000, 400, "\t\t\t\t\tYou Scored: " + global_score, {
        fontFamily: '"Berlin Sans FB Demi", sans-serif',
        fontSize: "42px",
      });
      this.startAgain = this.add.text(0, 200,"\t\t\t\t\t\t\t\tTap Any Where To Start Again", {
        fontFamily: '"Berlin Sans FB Demi", sans-serif',
        fontSize: "30px",
      });
  
      this.startAgain.visible = false;
      this.time.addEvent({
        delay: 15000,
        callback: this.showText,
        callbackScope: this,
      });
    }
    showText() {
      this.startAgain.visible = true;
      
    }
  
    update() {
      
      this.cameras.main.scrollX += 2;
      this.midground.x = this.cameras.main.scrollX * 0.3;
      this.foreground.x = this.cameras.main.scrollX;
      this.startAgain.x = this.cameras.main.scrollX - 2;
      
    }
}

const config = {
    type: Phaser.AUTO,
    width: 900,
    height: 500,
    parent: 'game',
    scene: [Scene1, Scene2Level1, Scene3Level2,Scene4Level3, Scene5Level4, EndingScene],
    backgroundColor: "#23444d",
    physics: {
        default: "arcade",
        arcade: {
          debug: true
        }
      }
};

let game = new Phaser.Game(config);