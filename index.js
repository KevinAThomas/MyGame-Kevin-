//DESIGN ESTRADE

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let i = -10

let x = 0

let canard = new Duck(i, 430, 20, 20, ctx);


function draw (){

//DUCk

   /* ctx.fillStyle = 'yellow';
    ctx.fillRect(i, 430, 20, 20);
    i++

    
    
   

    ctx.fillStyle = 'yellow';
    ctx.fillRect(i, 430, 20, 20);
    i++
   
     
    ctx.fillStyle = 'yellow';
    ctx.fillRect(x, 430, 20, 20);
    x++  
*/

function clearCanvas() {
    ctx.clearRect(0, 0, 1600, 800); 
};
clearCanvas()

   //ESTRADE  

  ctx.fillStyle = 'brown';
  ctx.fillRect(0, 500, 1600, 250);

  ctx.fillStyle = 'green';
  ctx.fillRect(0, 450, 1600, 50);

  //Child

  ctx.fillStyle = 'black';
  ctx.fillRect(500, 700, 200, 200);
    
}

function animLoop() {
     
    draw();
    
    requestAnimationFrame(animLoop); // replanifie animLoop toutes les 16ms
}
  
animLoop() 







//CLASS