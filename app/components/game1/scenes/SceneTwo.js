import Phaser from 'phaser';
import {screenWidth,screenHeight} from '../const'


const gameSettings = {
  playerSpeed: 200
}

class SceneTwo extends Phaser.Scene {
  constructor() {
    super("startGame")
  };

  moveShipDown(ship, speed) {
    ship.y += speed;
    if (ship.y >= screenHeight) {
      this.resetShipPos(ship);
    }
  };

  rotate(ship, speed) {
    ship.angle += speed;
  };

  resetShipPos(ship) {
    const rndX = Phaser.Math.Between(0, screenWidth);
    ship.y = 0;
    ship.x = rndX;
  };

  destroyShip(pointer, gameObject) {
    gameObject.setTexture('explosion');
    gameObject.play('explosion_anim');
  };

  movePlayerManager() {
    if (this.cursorKeys.left.isDown) {
      this.playerShip.setVelocityX(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.right.isDown) {
      this.playerShip.setVelocityX(gameSettings.playerSpeed);
    } else if (this.cursorKeys.up.isDown) {
      this.playerShip.setVelocityY(-gameSettings.playerSpeed);
    } else if (this.cursorKeys.down.isDown) {
      this.playerShip.setVelocityY(gameSettings.playerSpeed);
    } else {
      this.playerShip.setVelocityX(0);
      this.playerShip.setVelocityY(0);
    }
  };

  create() {
    this.background = this.add.tileSprite(0, 0, screenWidth * 4, screenHeight * 4, "background");
    this.playerShip = this.physics.add.sprite(screenWidth / 2, screenHeight - 20, "playerShip");
    this.playerShip.setCollideWorldBounds(true);
    
    this.enemy1 = this.add.sprite(Phaser.Math.Between(0, screenWidth), 0, "enemy1");
    this.enemy2 = this.add.sprite(Phaser.Math.Between(0, screenWidth), 0, "enemy2");
    this.enemy3 = this.add.sprite(Phaser.Math.Between(0, screenWidth), 0, "enemy3");
    
    
    // Add powerUps to physics group
    this.powerUps = this.physics.add.group();
    
    const maxObject = 2;
    for (let i = 0; i <= maxObject; i++) {
      const powerUp = this.physics.add.sprite(16, 16, "powerUp");
      this.powerUps.add(powerUp);
      powerUp.setRandomPosition(0, 0, screenWidth, screenHeight);
      // Set animation 
      (Math.random() > 0.5) ? powerUp.play("red") : powerUp.play("gray");
      console.log('here')
      
      powerUp.setVelocity(100, 200);
      powerUp.setCollideWorldBounds(true);
      powerUp.setBounce(1);
    };
    
    // play animation
    this.playerShip.play("thrust");
    this.enemy1.play("enemy1_anim");
    this.enemy2.play("enemy2_anim");
    this.enemy3.play("enemy3_anim");
    
    // Create key
    this.cursorKeys = this.input.keyboard.createCursorKeys();
    this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    
    // EXAMPLE CODE
    // this.background.setOrigin(0, 0);
    // this.background.setDisplaySize(160 * 4, 144 * 4);
    // playerShip.angle += 90;
    // this.add.text(20, 20, "starting game...", { fill: 'yellow' });
  }

  update() {
    this.background.tilePositionY -= 3;

    this.moveShipDown(this.enemy1, 3);
    this.moveShipDown(this.enemy2, 2);
    this.moveShipDown(this.enemy3, 4);

    this.enemy1.setInteractive();
    this.enemy2.setInteractive();
    this.enemy3.setInteractive();

    this.input.on('gameobjectdown', this.destroyShip, this);

    this.movePlayerManager();
    if (Phaser.Input.Keyboard.JustDown(this.spacebar)) {
      console.log("Fire!")
    }
  };
}

export default SceneTwo;