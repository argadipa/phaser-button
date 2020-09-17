import "phaser";

import PreloadScene from './Scripts/Scene/PreloadScene';
import GameScene from './Scripts/Scene/GameScene';
type GameConfig = Phaser.Types.Core.GameConfig;

const DEFAULT_WIDTH = 720;
const DEFAULT_HEIGHT = 1200;
 
const config: GameConfig = {
 title: "TapRush",
 scale: {
   parent: "game",
   mode: Phaser.Scale.FIT,
   autoCenter: Phaser.Scale.CENTER_BOTH,
   width: DEFAULT_WIDTH,
   height: DEFAULT_HEIGHT
 },
 physics: {
   default: "arcade",
   arcade: {
     debug: false
   }
 },
 backgroundColor: "#242020",    
 scene: [PreloadScene, GameScene]
};


export class Starter extends Phaser.Game {
    constructor(config: GameConfig){
        super(config);
    }
}

window.onload = () => {
    var game = new Starter(config);
}