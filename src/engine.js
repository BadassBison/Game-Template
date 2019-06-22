export default class Engine {
    
    constructor(timeStep, update, render) {
        this.accumulatedTime        = 0;
        this.animationFrameRequest  = undefined;
        this.time                   = undefined;
        this.timeStep               = timeStep;
        this.updated                = false;
        this.update                 = update;   // The update function
        this.render                 = render;   // The render function
        this.handleRun              = this.handleRun.bind(this);
    }

    start() {
        this.accumulatedTime        = this.timeStep;
        this.time                   = window.performance.now();
        this.animationFrameRequest  = window.requestAnimationFrame(this.handleRun);
    }

    handleRun(timeStep) { this.run(timeStep) };
  
    run(timeStamp) {
  
        this.accumulatedTime    += timeStamp - this.time;
        this.time               = timeStamp;
    
        // Will update if 3 frames drop
        if (this.accumulatedTime >= this.timeStep * 3) {
            this.accumulatedTime = this.timeStep;
        }
  
        // Updates at the rate of our time step, will catch up if behind
        while(this.accumulatedTime >= this.timeStep) {
            this.accumulatedTime -= this.timeStep;
            this.update(timeStamp);
            this.updated = true;
        }
  
        // Draws once updated
        if (this.updated) {
            this.updated = false;
            this.render(timeStamp);
        }
  
        this.animationFrameRequest = window.requestAnimationFrame(this.handleRun);
    };

    stop() { window.cancelAnimationFrame(this.animationFrameRequest) };
};