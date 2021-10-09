
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let speed = 0

let canard1 = new Duck(0, 600, 20, 20, ctx);
let canard2 = new Duck(50, 600, 20, 20, ctx);
let canard3 = new Duck(100, 600, 20, 20, ctx);
let canard4 = new Duck(150, 600, 20, 20, ctx);
let canard5 = new Duck(200, 600, 20, 20, ctx);
let canard6 = new Duck(250, 600, 20, 20, ctx);
let canard7 = new Duck(300, 600, 20, 20, ctx);
let canard8 = new Duck(350, 600, 20, 20, ctx);
let canard9 = new Duck(400, 600, 20, 20, ctx);
let canard10 = new Duck(450, 600, 20, 20, ctx);
let canard11 = new Duck(500, 600, 20, 20, ctx);
let canard12 = new Duck(550, 600, 20, 20, ctx);
let canard13 = new Duck(600, 600, 20, 20, ctx);
let canard14 = new Duck(650, 600, 20, 20, ctx);
let canard15 = new Duck(700, 600, 20, 20, ctx);
let canard16 = new Duck(750, 600, 20, 20, ctx);
let canard17 = new Duck(800, 600, 20, 20, ctx);
let canard18 = new Duck(850, 600, 20, 20, ctx);
let canard19 = new Duck(900, 600, 20, 20, ctx);
let canard20 = new Duck(950, 600, 20, 20, ctx);
let canard21 = new Duck(1000, 600, 20, 20, ctx);
let canard22 = new Duck(1050, 600, 20, 20, ctx);

let canards = [canard1, canard2, canard3, canard4, canard5, canard6, canard7, canard8, canard9, canard10, canard11, canard12, canard13, canard14, canard15, canard16, canard17, canard18, canard19, canard20, canard21, canard22];
function draw() {
    //DUCk
    // ctx.fillStyle = 'yellow';
    // ctx.fillRect(i, 430, 20, 20);
    // i++
    function clearCanvas() {
        ctx.clearRect(0, 0, 1600, 800);
    };
    
    clearCanvas()
    // ctx.fillStyle = 'yellow';
    // ctx.fillRect(i, 430, 20, 20);
    // i++
    
    // ctx.fillStyle = 'yellow';
    // ctx.fillRect(x, 430, 20, 20);
    // x++  
    canard1.draw(speed)
    canard2.draw(speed)
    canard3.draw(speed)
    canard4.draw(speed)
    canard5.draw(speed)
    canard6.draw(speed)
    canard7.draw(speed)
    canard8.draw(speed)
    canard9.draw(speed)
    canard10.draw(speed)
    canard11.draw(speed)
    canard12.draw(speed)
    canard13.draw(speed)
    speed++

    /*  ***************************DEBUT DEVOIR  KEVIN************************************ */
    // créer un canard tous les 5 secs.
    // ajouter le canard créé dans le tableau de canards 
    /*
    setInterval(function(){
        let canard = new Duck(0, 430, 20, 20, ctx)
        canards.push(canard)
    }, 5000)
*/
    
    // parcourir dans le tableau de canard
    // dessiner chacun de canard puis ajouter la vitesse 
    /*  ***************************FIN DEVOIR  KEVIN************************************ */
    //ESTRADE  
    /*ctx.fillStyle = 'brown';
    ctx.fillRect(0, 500, 1600, 250);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 450, 1600, 50);
    //Child
    ctx.fillStyle = 'black';
    ctx.fillRect(500, 700, 200, 200);*/
}
function animLoop() {
    draw();
    requestAnimationFrame(animLoop); // replanifie animLoop toutes les 16ms
}
animLoop()
//CLASS