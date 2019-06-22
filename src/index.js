import Engine from './engine.js';
import Game from './game/game.js';
import Display from './display/display.js';
import Controller from './controller/controller.js';

window.addEventListener("load", function(event) {

    "use strict";

    const render = () => {
    
        display.renderColor(game.color);
        display.render();
  
    };
  
    const update = () => {
  
      game.update();
  
    };
  
    // The controller handles user input.
    let controller = new Controller();

    // The display handles window resizing, as well as the on screen canvas. 
    let display    = new Display(document.querySelector("canvas"));

    // The game handles game logic.
    let game       = new Game();

    // The engine is where the above three sections can interact.
    let engine     = new Engine(1000/30, render, update);
  
  
    window.addEventListener("resize",  display.handleResize);
    window.addEventListener("keydown", controller.handleKeyDownUp);
    window.addEventListener("keyup",   controller.handleKeyDownUp);
    //   window.addEventListener("keydown", e => console.log(e));
  
    display.resize();
    engine.start();
});  