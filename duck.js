class Duck {
    constructor(x, y, W, H, context
        ){
        const img = new Image();
        this.x = x;
        this.y = y;
        this.W = W;
        this.H = H;
        this.context = context;
        img.onload = function () {
            this.img = img;
            } 
            img.src = 'https://cdn-icons-png.flaticon.com/512/950/950868.png';
    } 
    draw(speed){
       if (this.img){
        this.context.drawImage(this.img, this.x + speed, this.y, this.W, this.H);  
       }
    }
    remove(){
        this.context.clearRect(this.x, this.y, this.W, this.H);
    }
}
