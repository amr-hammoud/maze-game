class Scene1 extends Phaser.Scene {
  constructor() {
    super("homePage");
  }

  preload() {
    this.load.image("bg_lvl1", "assets/game_images/level_backgrouds/Blue.png");
    this.load.image(
      "bg_home",
      "assets/game_images/level_backgrouds/Purple.png"
    );
    this.load.image("bg_lvl2", "assets/game_images/level_backgrouds/Green.png");
    this.load.image("start_btn", "assets/game_images/buttons/button-start.png");
    this.load.image("arrows", "assets/game_images/buttons/buttons.png");
    this.load.spritesheet(
      "ninja",
      "assets/game_images/character/Run (32x32).png",
      { frameWidth: 32, frameHeight: 32 }
    );
    this.load.spritesheet("trap", "assets/game_images/traps/trap(38x38).png", {
      frameWidth: 38,
      frameHeight: 38,
    });
  }

  create() {
    this.background = this.add.tileSprite(300, 0, 600, 500, "bg_home");
    this.background.setOrigin(0, 0);

    this.add.text(475, 50, "Use the arrows", {
      fontFamily: '"Berlin Sans FB Demi", sans-serif',
      fontSize: "42px",
    });
    this.add.text(430, 300, "To escape the maze", {
      fontFamily: '"Berlin Sans FB Demi", sans-serif',
      fontSize: "42px",
    });
    this.arrows = this.add.image(480, 70, "arrows");
    this.arrows.setOrigin(0, 0);

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
    this.left_panel = this.add.rectangle(0, 0, 300, 500, 0x7ab980);
    this.left_panel.setOrigin(0, 0);

    this.message = this.add.text(50, 50, "Hello\nNinja!", {
      fontFamily: '"Berlin Sans FB Demi", sans-serif',
      fontSize: "42px",
    });
    // this.message = this.add.text(50,170, "Please Enter\nYour Name", { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: '26px'})

    this.start_btn = this.add.image(150, 400, "start_btn");
    this.start_btn
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => this.scene.start("gameLevelOne"));
    this.start_btn.scale = 1.5;
    this.tweens.add({
      targets: this.start_btn,
      scale: 1.3,
      duration: 500,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });

    this.ninja = this.add.sprite(430, 420, "ninja");
    this.ninja.scale = 2.3;
    this.anims.create({
      key: "ninja_anim",
      frames: this.anims.generateFrameNumbers("ninja"),
      frameRate: 20,
      repeat: -1,
    });
    this.ninja.play("ninja_anim");

    this.trap = this.add.sprite(345, 420, "trap");
    this.trap.scale = 2;
    this.anims.create({
      key: "trap_anim",
      frames: this.anims.generateFrameNumbers("trap"),
      frameRate: 20,
      repeat: -1,
    });
    this.trap.play("trap_anim");

    this.tweens.add({
      targets: this.ninja,
      x: 850,
      y: 420,
      duration: 1600,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });

    this.tweens.add({
      targets: this.trap,
      x: 770,
      y: 420,
      duration: 1600,
      ease: "Power2",
      yoyo: true,
      loop: -1,
    });
  }
  update() {}
}

class Scene2Level1 extends Phaser.Scene {
  constructor() {
    super("gameLevelOne");
  }
  preload() {
    this.load.image("wallh_10", "assets/game_images/walls/h10.png");
    this.load.image("wallh_8", "assets/game_images/walls/h8.png");
    this.load.image("wallh_5", "assets/game_images/walls/h5.png");
    this.load.image("wallh_3", "assets/game_images/walls/h3.png");
    this.load.image("wallh_2", "assets/game_images/walls/h2.png");
    this.load.image("wallv_6", "assets/game_images/walls/v6.png");
    this.load.image("wallv_1", "assets/game_images/walls/v1.png");
    this.load.image("wallv_2", "assets/game_images/walls/v2.png");
    this.load.image("wallv_3", "assets/game_images/walls/v3.png");
    this.load.image("big_wall", "assets/game_images/walls/Terrain (16x16).png");
    this.load.image("to_lvl_2", "assets/game_images/level_ending/02.png");
    this.load.spritesheet("apple", "assets/game_images/food/Apple.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }
  create() {
    this.background = this.add.tileSprite(300, 0, 600, 500, "bg_lvl1");
    this.background.setOrigin(0, 0);

    this.left_panel = this.add.rectangle(0, 0, 300, 500, 0x7ab980);
    this.left_panel.setOrigin(0, 0);

    this.score = 0;
    this.score_label = this.add.text(50, 50, `Score: ${this.score}`, {
      fontFamily: '"Berlin Sans FB Demi", sans-serif',
      fontSize: "42px",
    });

    this.min_score = 20;
    this.alert = this.add.text(
      50,
      130,
      `Score at least\n${this.min_score}pts`,
      { fontFamily: '"Berlin Sans FB Demi", sans-serif', fontSize: "36px" }
    );

    this.hint = this.add.text(50, 290, `Each Apple\n\n\nis 10pts`, {
      fontFamily: '"Berlin Sans FB Demi", sans-serif',
      fontSize: "36px",
    });
    this.apple_hint = this.physics.add.sprite(80, 365, "apple");
    this.apple_hint.scale = 3;

    this.cursorKeys = this.input.keyboard.createCursorKeys();

    this.big_wall1 = this.physics.add.image(343, 203, "big_wall");
    this.big_wall1.scale = 1.35;
    this.big_wall2 = this.physics.add.image(600, 480, "big_wall");
    this.big_wall2.scale = 0.85;

    this.walls_grp = this.physics.add.group();
    this.walls_grp.add(this.physics.add.image(625, 450, "wallh_10"));
    this.walls_grp.add(this.physics.add.image(625, 50, "wallh_10"));
    this.walls_grp.add(this.physics.add.image(855, 300, "wallv_6"));
    this.walls_grp.add(this.physics.add.image(394, 203, "wallv_6"));
    this.walls_grp.add(this.physics.add.image(630, 280, "wallv_2"));
    this.walls_grp.add(this.physics.add.image(760, 280, "wallv_2"));
    this.walls_grp.add(this.physics.add.image(394, 203, "wallv_6"));
    this.walls_grp.add(this.physics.add.image(520, 339, "wallh_5"));
    this.walls_grp.add(this.physics.add.image(800, 339, "wallh_2"));
    this.walls_grp.add(this.physics.add.image(566, 225, "wallh_3"));
    this.walls_grp.add(this.physics.add.image(670, 150, "wallh_8"));
    this.walls_grp.add(this.big_wall1);
    this.walls_grp.add(this.big_wall2);

    this.fruits_grp = this.physics.add.group();
    this.apple_1 = this.physics.add.sprite(605, 250, "apple");
    this.apple_2 = this.physics.add.sprite(830, 310, "apple");
    this.fruits_grp.add(this.apple_1);
    this.fruits_grp.add(this.apple_2);
    this.anims.create({
      key: "apple_anim",
      frames: this.anims.generateFrameNumbers("apple"),
      frameRate: 20,
      repeat: -1,
    });
    this.apple_1.play("apple_anim");
    this.apple_2.play("apple_anim");
    this.apple_hint.play("apple_anim");

    this.trap = this.physics.add.sprite(605, 310, "trap");
    this.trap.play("trap_anim");

    this.ninja = this.physics.add.sprite(325, 450, "ninja");
    this.character_grp = this.physics.add.group();
    this.character_grp.add(this.ninja);
    this.ninja.setCollideWorldBounds(true);
    this.ninja.scale = 1.4;

    this.ninja.play("ninja_anim");
    this.physics.world.setBounds(300, 0, 900, 500);

    this.to_lvl_2 = this.physics.add.sprite(780, 100, "to_lvl_2");
    this.to_lvl_2.scale = 2;

    this.physics.add.collider(this.ninja, this.fruits_grp, (ninja, fruit) => {
      fruit.destroy();
      this.score += 10;
      this.score_label.text = "Score: " + this.score;
    });

    this.physics.add.collider(this.ninja, this.to_lvl_2, () => {
      if (this.score >= 20) this.scene.start("gameLevelTwo");
    });
  }
  update() {
    this.moving_ninja();
  }
  moving_ninja() {
    const x_before_move = this.ninja.x;
    const y_before_move = this.ninja.y;

    if (this.cursorKeys.up.isDown) {
      this.ninja.y -= 3;
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
        this.load.image('reset_btn', 'assets/game_images/buttons/reset_button.png')
        this.load.spritesheet('apple', 'assets/game_images/food/Apple.png', {frameWidth: 32, frameHeight:32})

    }
    create(){
        this.background = this.add.tileSprite(300,0,600, 500, 'bg_lvl1' )
        this.background.setOrigin(0,0)

        this.left_panel = this.add.rectangle(0,0,300,500,0x7ab980)
        this.left_panel.setOrigin(0,0)

        this.score = 0;
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
        this.character_grp = this.physics.add.group()
        this.character_grp.add(this.ninja)
        this.ninja.setCollideWorldBounds(true)
        this.ninja.scale = 1.4

        this.ninja.play('ninja_anim')
        this.physics.world.setBounds(300, 0, 900, 500);

        this.to_lvl_2 = this.physics.add.sprite(780,100,'to_lvl_2')
        this.to_lvl_2.scale = 2

        this.physics.add.collider(this.ninja,this.fruits_grp, (ninja, fruit) => {
            fruit.destroy()
            this.score +=10
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
    if (
      Phaser.Geom.Intersects.RectangleToRectangle(
        this.ninja.getBounds(),
        this.trap.getBounds()
      )
    ) {
      this.ninja.setPosition(x_before_move - 20, y_before_move);
    }
  }
}

class Scene3Level2 extends Phaser.Scene {
  constructor() {
    super("gameLevelTwo");
  }
  preload() {}
  create() {
    this.background = this.add.tileSprite(300, 0, 600, 500, "bg_lvl2");
    this.background.setOrigin(0, 0);
  }
  update() {}
}

const config = {
  type: Phaser.AUTO,
  width: 900,
  height: 500,
  parent: "game",
  dom: {
    createContainer: true,
  },
  scene: [Scene1, Scene2Level1, Scene3Level2],
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
};

let game = new Phaser.Game(config);
