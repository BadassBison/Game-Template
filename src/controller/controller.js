import ButtonInput from './button_input.js';

export default class Controller {
    constructor() {
        this.down  = new ButtonInput();
        this.left  = new ButtonInput();
        this.right = new ButtonInput();
        this.up    = new ButtonInput();
        this.handleKeyDownUp = this.handleKeyDownUp.bind(this);
    }
  
    handleKeyDownUp(e) { this.keyDownUp(e) };

    keyDownUp(e) {
  
      let down = (e.type == "keydown") ? true : false;
  
      switch(e.keyCode) {
  
        case 37: this.left.getInput(down);  break; // Left
        case 38: this.up.getInput(down);    break; // Up
        case 39: this.right.getInput(down); break; // Right
        case 40: this.down.getInput(down);         // Down
      }
  
      console.log(`You pressed ${e.keyCode}`);
    };
};