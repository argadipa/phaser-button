import * as Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: "PreloadScene" });
  }

  preload() {
		this.load.path = 'src/Assets/';
		this.load.image('button', 'button.png');
		this.load.image('buttonClick', 'button_click.png');
  }

  create() {
    this.scene.start("GameScene");
  }
}
