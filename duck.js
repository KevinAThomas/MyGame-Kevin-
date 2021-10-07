class Duck {
    constructor(x, y, W, H, context){
        this.x = x;
        this.y = y;
        this.W = W;
        this.H = H;
        this.context = context;
    }
    draw(){
        ctx.fillStyle = 'yellow';
        ctx.fillRect(this.x, this.y, this.W, this.H);
    }
    remove(){
        ctx.clearRect(this.x, this.y, this.W, this.H);
    }
}