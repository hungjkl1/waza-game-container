import Phaser from 'phaser';

import player from '../assets/player.png';
import background from '../assets/background.png';

import playerShip from 'images/ship.png';
import ship1 from 'images/ship1.png';
import ship2 from 'images/ship2.png';
import ship3 from 'images/ship3.png';
import explosion from 'images/explosion.png';
import powerUp from 'images/power-up.png';

class SceneOne extends Phaser.Scene {
  constructor() {
    super("bootGame")
  };

  create() {
    // this.add.text(20,20, "loading game...");
        this.textures.addBase64("background", background);
    this.textures.addBase64("player", player);
    let ship1SS = new Image()
    let ship2SS = new Image()
    let ship3SS = new Image()
    let explosionSS = new Image()
    let powerUpSS = new Image()
    let playerShipSS = new Image()

    ship1SS.onload = () => {
      this.textures.addSpriteSheet("enemy1", ship1SS, {
        frameWidth: 16,
        frameHeight: 16
      });
    };
    ship2SS.onload = () => {
      this.textures.addSpriteSheet("enemy2", ship2SS, {
        frameWidth: 24,
        frameHeight: 24
      });
    };

    ship3SS.onload = () => {
      this.textures.addSpriteSheet("enemy3", ship3SS, {
        frameWidth: 32,
        frameHeight: 32
      });
    };

    powerUpSS.onload = () => {
      this.textures.addSpriteSheet("powerUp", powerUpSS, {
        frameWidth: 16,
        frameHeight: 16
      });
    };

    explosionSS.onload = () => {
      this.textures.addSpriteSheet("explosion", explosionSS, {
        frameWidth: 16,
        frameHeight: 16
      });
    };

    powerUpSS.onload = () => {
      this.textures.addSpriteSheet("powerUp", powerUpSS, {
        frameWidth: 16,
        frameHeight: 16
      });
    };

    playerShipSS.onload = () => {
      this.textures.addSpriteSheet("playerShip", playerShipSS, {
        frameWidth: 16,
        frameHeight: 24
      });
   };
   
    ship1SS.src = ship1 
    ship2SS.src = ship2
    ship3SS.src = ship3
    explosionSS.src = explosion
    powerUpSS.src = powerUp
    playerShipSS.src = playerShip

    this.scene.start("startGame")

    this.anims.create({
      key: 'enemy1_anim',
      frames: this.anims.generateFrameNumbers('enemy1'),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'enemy2_anim',
      frames: this.anims.generateFrameNumbers('enemy2'),
      frameRate: 20,
      repeat: -1
    })

    this.anims.create({
      key: 'enemy3_anim',
      frames: this.anims.generateFrameNumbers('enemy3'),
      frameRate: 20,
      repeat: -1
    })

    this.anims.create({
      key: 'explosion_anim',
      frames: this.anims.generateFrameNumbers('explosion'),
      frameRate: 20,
      repeat: 0,
      hideOnComplete: true
    })

    this.anims.create({
      key: 'red',
      frames: this.anims.generateFrameNumbers('powerUp', {
        start: 0,
        end: 1
      }),
      frameRate: 20,
      repeat: -1,
    })

    this.anims.create({
      key: 'gray',
      frames: this.anims.generateFrameNumbers('powerUp', {
        start: 2,
        end: 3
      }),
      frameRate: 20,
      repeat: -1,
    })

    this.anims.create({
      key: 'thrust',
      frames: this.anims.generateFrameNumbers('playerShip',),
      frameRate: 20,
      repeat: -1,
    })
  };
}

export default SceneOne;