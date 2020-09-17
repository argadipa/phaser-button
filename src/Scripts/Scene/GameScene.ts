import * as Phaser from "phaser";
import Button from "../../Object/Button";

export default class GameScene extends Phaser.Scene {
  private centerW: number;
  private centerH: number;

  constructor() {
    super({ key: "GameScene" });
  }

  preload() {}

  create() {
    this.centerW = this.cameras.main.width / 2;
    this.centerH = this.cameras.main.height / 2;

    var sampleButton: Button = new Button({
      scene: this,
      x: this.centerW / 2,
      y: this.centerH + 100,
      defaultImage: "button",
      callback: () => {
        console.log("button clicked by callback");
      },
      overImage: "buttonClick",
      text: "Nice Button",
      textStyle: {
        fontSize: "24px",
      },
    });


    let sampleButton2: Button = new Button({
        scene: this,
        x: this.centerW * 1.5,
        y: this.centerH + 100,
        defaultImage: "button",
        callback: () => {
          console.log("button2 clicked by callback");
        },
        overImage: "buttonClick",
        text: "Cool Button",
        textStyle: {
          fontSize: "24px",
        },
      });

  }

  

  update() {}
}
