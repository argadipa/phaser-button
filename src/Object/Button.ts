// template for generic button
import * as Phaser from "phaser";

class Button extends Phaser.GameObjects.Container {
  constructor(args: {
    scene: Phaser.Scene;
    x: number;
    y: number;
    defaultImage: string;
    callback: () => void;
    overImage?: string;
    text?: string;
    textStyle?: Phaser.Types.GameObjects.Text.TextStyle;
  }) {
    const {
      scene,
      x,
      y,
      defaultImage,
      callback,
      overImage,
      text,
      textStyle,
    } = args;
    super(scene, x, y);

    // asssign the components
    let buttonImage = scene.add.image(0, 0, defaultImage);
    buttonImage.setInteractive();

    let label = scene.add.text(0, 0, text);
    if (textStyle) {
      label.setStyle(textStyle);
    }
    label.setWordWrapWidth(buttonImage.width, true);

    // set up the container
    //Phaser.Display.Align.In.Center(buttonImage, this);
    Phaser.Display.Align.In.Center(label, buttonImage);
    this.setSize(buttonImage.width, buttonImage.height);
    this.add([buttonImage, label]);


    // clear up the event
    buttonImage.removeAllListeners();

    // set up the event
    buttonImage.on(
      "pointerdown",
      (pointer) => {
        callback();
        if (overImage) buttonImage.setTexture(overImage);
      },
      this
    );

    buttonImage.on(
      "pointerup",
      (pointer) => {
        if (overImage) buttonImage.setTexture(defaultImage);
      },
      this
    );

    buttonImage.on(
      "pointerout",
      (pointer) => {
        if (overImage) buttonImage.setTexture(defaultImage);
      },
      this
    );

    scene.add.existing(this);
  }
}

export default Button;
