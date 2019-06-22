/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller/button_input.js":
/*!****************************************!*\
  !*** ./src/controller/button_input.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ButtonInput; });\nclass ButtonInput {\n    constructor() {\n        this.active = this.down = false;\n    }\n  \n    getInput(down) {\n        if (this.down != down) this.active = down;\n        this.down = down;\n    }\n};\n\n//# sourceURL=webpack:///./src/controller/button_input.js?");

/***/ }),

/***/ "./src/controller/controller.js":
/*!**************************************!*\
  !*** ./src/controller/controller.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\n/* harmony import */ var _button_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button_input.js */ \"./src/controller/button_input.js\");\n\n\nclass Controller {\n    constructor() {\n        this.down  = new _button_input_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.left  = new _button_input_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.right = new _button_input_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.up    = new _button_input_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        this.handleKeyDownUp = this.handleKeyDownUp.bind(this);\n    }\n  \n    handleKeyDownUp(e) { this.keyDownUp(e) };\n\n    keyDownUp(e) {\n  \n      let down = (e.type == \"keydown\") ? true : false;\n  \n      switch(e.keyCode) {\n  \n        case 37: this.left.getInput(down);  break; // Left\n        case 38: this.up.getInput(down);    break; // Up\n        case 39: this.right.getInput(down); break; // Right\n        case 40: this.down.getInput(down);         // Down\n      }\n  \n      console.log(`You pressed ${e.keyCode}`);\n    };\n};\n\n//# sourceURL=webpack:///./src/controller/controller.js?");

/***/ }),

/***/ "./src/display/display.js":
/*!********************************!*\
  !*** ./src/display/display.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Display; });\nclass Display {\n    constructor (canvas) {\n        this.buffer  = document.createElement(\"canvas\").getContext(\"2d\"),\n        this.context = canvas.getContext(\"2d\");\n        this.handleResize = this.handleResize.bind(this);\n    }\n  \n    renderColor(color) {\n        this.buffer.fillStyle = color;\n        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);\n    };\n  \n    render() { \n        this.context.drawImage(\n            this.buffer.canvas, \n            0, \n            0, \n            this.buffer.canvas.width, \n            this.buffer.canvas.height, \n            0, \n            0, \n            this.context.canvas.width, \n            this.context.canvas.height\n        ); \n    };\n  \n    handleResize(e) { this.resize(e); };\n    \n    resize(e) {\n        \n        let height = innerHeight;\n        let width  = innerWidth;\n    \n        this.context.canvas.height = height;\n        this.context.canvas.width = width;\n    \n        this.render();\n    };\n};\n\n//# sourceURL=webpack:///./src/display/display.js?");

/***/ }),

/***/ "./src/engine.js":
/*!***********************!*\
  !*** ./src/engine.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Engine; });\nclass Engine {\n    \n    constructor(timeStep, update, render) {\n        this.accumulatedTime        = 0;\n        this.animationFrameRequest  = undefined;\n        this.time                   = undefined;\n        this.timeStep               = timeStep;\n        this.updated                = false;\n        this.update                 = update;   // The update function\n        this.render                 = render;   // The render function\n        this.handleRun              = this.handleRun.bind(this);\n    }\n\n    start() {\n        this.accumulatedTime        = this.timeStep;\n        this.time                   = window.performance.now();\n        this.animationFrameRequest  = window.requestAnimationFrame(this.handleRun);\n    }\n\n    handleRun(timeStep) { this.run(timeStep) };\n  \n    run(timeStamp) {\n  \n        this.accumulatedTime    += timeStamp - this.time;\n        this.time               = timeStamp;\n    \n        // Will update if 3 frames drop\n        if (this.accumulatedTime >= this.timeStep * 3) {\n            this.accumulatedTime = this.timeStep;\n        }\n  \n        // Updates at the rate of our time step, will catch up if behind\n        while(this.accumulatedTime >= this.timeStep) {\n            this.accumulatedTime -= this.timeStep;\n            this.update(timeStamp);\n            this.updated = true;\n        }\n  \n        // Draws once updated\n        if (this.updated) {\n            this.updated = false;\n            this.render(timeStamp);\n        }\n  \n        this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);\n    };\n\n    stop() { window.cancelAnimationFrame(this.animationFrameRequest) };\n};\n\n//# sourceURL=webpack:///./src/engine.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\nclass Game {\n    constructor() {\n        this.color  = \"rgb(0,0,0)\";\n        this.colors = [0, 0, 0];\n        this.shifts = [1, 1, 1];\n    }\n  \n    update() {\n  \n      for (let index = 0; index < 3; index ++) {\n  \n        let color = this.colors[index];\n        let shift = this.shifts[index];\n  \n        if (color + shift > 255 || color + shift < 0) {\n          shift = (shift < 0) ? Math.floor(Math.random() * 2) + 1 : Math.floor(Math.random() * -2) - 1;\n        }\n  \n        color += shift;\n  \n        this.colors[index] = color;\n        this.shifts[index] = shift;\n      }\n  \n      this.color = \"rgb(\" + this.colors[0] + \",\" + this.colors[1] + \",\" + this.colors[2] + \")\";\n    };\n  \n};\n\n  \n\n//# sourceURL=webpack:///./src/game/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _engine_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engine.js */ \"./src/engine.js\");\n/* harmony import */ var _game_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game.js */ \"./src/game/game.js\");\n/* harmony import */ var _display_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./display/display.js */ \"./src/display/display.js\");\n/* harmony import */ var _controller_controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller/controller.js */ \"./src/controller/controller.js\");\n\n\n\n\n\nwindow.addEventListener(\"load\", function(event) {\n\n    \"use strict\";\n\n    const render = () => {\n    \n        display.renderColor(game.color);\n        display.render();\n  \n    };\n  \n    const update = () => {\n  \n      game.update();\n  \n    };\n  \n    // The controller handles user input.\n    let controller = new _controller_controller_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n\n    // The display handles window resizing, as well as the on screen canvas. \n    let display    = new _display_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](document.querySelector(\"canvas\"));\n\n    // The game handles game logic.\n    let game       = new _game_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n    // The engine is where the above three sections can interact.\n    let engine     = new _engine_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1000/30, render, update);\n  \n  \n    window.addEventListener(\"resize\",  display.handleResize);\n    window.addEventListener(\"keydown\", controller.handleKeyDownUp);\n    window.addEventListener(\"keyup\",   controller.handleKeyDownUp);\n    //   window.addEventListener(\"keydown\", e => console.log(e));\n  \n    display.resize();\n    engine.start();\n});  \n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });