import Phaser from 'phaser'
import SceneOne from './scenes/SceneOne';
import SceneTwo from './scenes/SceneTwo';
import {screenWidth,screenHeight} from './const'


export default {
  width: screenWidth,
  height: screenHeight,
  backgroundColor: 0x000000,
  parent: 'game',
  type: Phaser,
  scene: [
    SceneOne,
    SceneTwo
  ],
  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  }
};