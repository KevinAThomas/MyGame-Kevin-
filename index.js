
const ctx = document.getElementById('canvas').getContext('2d');

const img = document.createElement('img')

const duckImage = {
  img: img,
  x: 0,
  speed: 2,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width; 
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 542, 80, 80);
    ctx.drawImage(this.img, this.x + 110 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 220 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 330 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 440 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 550 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 660 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 770 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 880 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 990 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 1100 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 1210 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 1320 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 1430 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 1540 , 542, 80, 80);
    ctx.drawImage(this.img, this.x + 1650 , 542, 160, 160);
  },
};

let clickX;
let clickY;
document.addEventListener("click", function(event){
    clickX = event.clientX
    clickY = event.clientY
    console.log(clickX, clickY)
});

function clicknremove(clickX, clickY){
  let verificationVertical = this.x < clickX && clickX < this.x + 80 // W
  let verificationHorisontal = 542 < clickY && clickY < 542 + 80 // this.y + H 
  console.log(verificationVertical)
  console.log(verificationHorisontal)
  if(verificationVertical && verificationHorisontal){
    ctx.clearRect(this.x, 542, 80, 80);// alors je supprime le canard
  }
};
clicknremove();

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  duckImage.move();
  duckImage.draw();
  requestAnimationFrame(updateCanvas);
};

img.onload = updateCanvas;

img.src = 'https://cdn-icons-png.flaticon.com/512/950/950868.png';





var countdown = document.getElementById("crono");

function decompte (){
  
}


//MY INITIAL CODE

/*const img = new Image();
img.onload = function() {
  ctx.drawImage(img, 0, 542, 80, 80);
};
img.src = 'https://cdn-icons-png.flaticon.com/512/950/950868.png';


let speed = 0;


function draw(){
    function clearCanvas() {
       ctx.clearRect(0, 0, 1600, 800);
    };
    clearCanvas()

    ctx.drawImage(img, 0 + speed, 542, 80, 80);
    ctx.drawImage(img, 150 + speed, 542, 80, 80);
    ctx.drawImage(img, 300 + speed, 542, 80, 80);
    ctx.drawImage(img, 450 + speed, 542, 80, 80);
    ctx.drawImage(img, 600 + speed, 542, 80, 80);
    ctx.drawImage(img, 750 + speed, 542, 80, 80);
    speed++
  //setInterval(function() {
    //ctx.drawImage(img, 0 + speed, 542, 80, 80);
//desin de canards touttes les 2sec
    //}, 2000)
    requestAnimationFrame(draw) 
}
    draw()


/*function animLoop() {
    draw();
    requestAnimationFrame(animLoop); // replanifie animLoop toutes les 16ms
}
animLoop()*/


