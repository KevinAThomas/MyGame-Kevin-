const canvasEl = document.getElementById('canvas');
const ctx = canvasEl.getContext('2d');

const img = document.createElement('img')

let ducks = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const duckImage = {
  img: img,
  x: 0,
  speed: 2,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width; 
  },

  draw: function() {
    // je parcours mon tableau de canards
    for( let i = 0; i < ducks.length; i++){
      // Pour chq canard, je check
      if (ducks[i] === 1){
        ctx.drawImage(this.img, this.x + 110*i, 542, 80, 80);
        ctx.drawImage(this.img, -this.x + 110*i, 358, 80, 80);
        ctx.drawImage(this.img, this.x + 110*i, 230, 80, 80);
      }
    }
  },
};

let clickX;
let clickY;

document.addEventListener("click", function(event){
  let canvasX
  let canvasY

  const clientRect = canvasEl.getBoundingClientRect()
  canvasX = clientRect.x
  canvasY = clientRect.y

    clickX = event.clientX - canvasX
    clickY = event.clientY - canvasY

    console.log(clickX, clickY)
});


function removeducks(){
  if(clickX && clickY){
    ducks[i] = 0;
  }
}




/*
function clicknremove(clickX, clickY){
  let verificationVertical = this.x < clickX && clickX < this.x + 80 // W
  let verificationHorizontal = 542 < clickY && clickY < 542 + 80 // this.y + H 
  console.log(verificationVertical)
  console.log(verificationHorizontal)
  if(verificationVertical && verificationHorizontal){
    ctx.clearRect(this.x, 542, 80, 80);// alors je supprime le canard
  }
};
clicknremove();
*/

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  duckImage.move();
  duckImage.draw();

  requestAnimationFrame(updateCanvas);
};

img.onload = updateCanvas;

img.src = 'https://cdn-icons-png.flaticon.com/512/950/950868.png';


//CHRONO BUTTON 


var myTimer;
   function clock() {
     myTimer = setInterval(myClock, 1000);
     var c = 20;

     function myClock() {
       document.getElementById("btnStart").innerHTML = --c;
       if (c == 0) {
         clearInterval(myTimer);
         alert("STOP SHOOTIN'");
       }
     }
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


