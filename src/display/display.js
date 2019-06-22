export default class Display {
    constructor (canvas) {
        this.buffer  = document.createElement("canvas").getContext("2d"),
        this.context = canvas.getContext("2d");
        this.handleResize = this.handleResize.bind(this);
    }
  
    renderColor(color) {
        this.buffer.fillStyle = color;
        this.buffer.fillRect(0, 0, this.buffer.canvas.width, this.buffer.canvas.height);
    };
  
    render() { 
        this.context.drawImage(
            this.buffer.canvas, 
            0, 
            0, 
            this.buffer.canvas.width, 
            this.buffer.canvas.height, 
            0, 
            0, 
            this.context.canvas.width, 
            this.context.canvas.height
        ); 
    };
  
    handleResize(e) { this.resize(e); };
    
    resize(e) {
        
        let height = innerHeight;
        let width  = innerWidth;
    
        this.context.canvas.height = height;
        this.context.canvas.width = width;
    
        this.render();
    };
};