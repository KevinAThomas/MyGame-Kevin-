/*//LET'S TRY A NEW CODE
//class Duck {
    constructor(){
        this.x = 0;
        this.y = 542;

        const img = new Image();
        img.addEventListener('load', () => {
            this.img = img;
            this.draw();
        });
        img.src= "img.src = 'https://cdn-icons-png.flaticon.com/512/950/950868.png'";
        }
        draw() {
            ctx.drawImage(this.img, this.x + speed, this.y, 80, 80);
            } 
}      








/*class Duck {
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
        /*const img = img
        img.onload = function () {
            this.img = img;
            } 
            img.src = 'https://cdn-icons-png.flaticon.com/512/950/950868.png';
    } 
    draw(speed){
       this.context.drawImage(this.img, this.x + speed, this.y, this.W, this.H);  
       }
    }
}
    remove(){
        this.context.clearRect(this.x, this.y, this.W, this.H);
    }
}*/
