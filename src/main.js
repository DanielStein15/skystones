import Phaser from 'phaser';
import { GameScene } from './scenes/GameScene.js';

const config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 800,
  parent: 'game',
  backgroundColor: '#1a1a2e',
  scene: [GameScene],
};
new Phaser.Game(config);