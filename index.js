const canvasEl = document.getElementById('canvas');
const ctx = canvasEl.getContext('2d');

const img = document.createElement('img')

let ducks = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

let position = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const duckImage = {
  img: img,
  x: 0,
  speed: 4,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width; 
  },

  draw: function() {
    for( let i = 0; i < ducks.length; i++){
      
      if (ducks[i] === 1){
        ctx.drawImage(this.img, this.x + 110*i, 542, 80, 80);
        position[i] = this.x + 110*i;
      }
    }
  },
};


//REMOVES DUCK WHEN CLICKING

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
  clicknremove()
});

function clicknremove(){
position.forEach( function(duckX, i){
  if(duckX < clickX && clickX < duckX + 80){
    ducks[i] = 0
  }
} )
};

//CHRONO BUTTON 

var myTimer;
function clock() {
  myTimer = setInterval(myClock, 1000);
  var c = 10;
  function myClock() {
  document.getElementById("btnStart").innerHTML = --c;
  if (c === 0) {
    clearInterval(myTimer);
    alert("STOP SHOOTIN'");
    }
  }
}

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  duckImage.move();
  duckImage.draw();
  requestAnimationFrame(updateCanvas);
};

img.onload = updateCanvas;

img.src = 'https://cdn-icons-png.flaticon.com/512/950/950868.png';








