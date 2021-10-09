class Child {
    constructor() {
      this.x = 25;
   
      // Load the image
      const img = new Image();
        this.img = img;
        this.draw();
      });
      img.src = 'https://www.picclickimg.com/d/l400/pict/201821777801_/CARTE-PHOTO-Tir-photographique-Surr%C3%A9alisme-F%C3%AAte-Foraine-Tireur.jpg';
    }
    moveLeft() {
      this.x -= 25;
    }
    moveRight() {
      this.x += 25;
    }
    draw() {
      ctx.drawImage(this.img, this.x, 150, 150);
    }
  }

  const child = new Child();