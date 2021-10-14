const canvasEl = document.getElementById('canvas');
const ctx = canvasEl.getContext('2d');

const img = document.createElement('img')

let ducks = [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

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

/*function clicknremove(){
let w = clickX < canvas.width + 80;
let h = clickY < 542 + 80
for(let i = 0; i < ducks.length; i++){

};
clicknremove();*/

//SCORE




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


