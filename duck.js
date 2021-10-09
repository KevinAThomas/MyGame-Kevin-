class Duck {
    constructor(x, y, W, H, context){
        this.x = x;
        this.y = y;
        this.W = W;
        this.H = H;
        this.context = context;
    } 
    draw(speed){
        this.context.fillStyle = 'yellow';
        this.context.fillRect(this.x + speed, this.y, this.W, this.H);
    }
    remove(){
        this.context.clearRect(this.x, this.y, this.W, this.H);
    }
}