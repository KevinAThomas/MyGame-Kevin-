const ctx = document.getElementById('canvas').getContext('2d');

let speed = 0


function draw(){
    function clearCanvas() {
        ctx.clearRect(0, 0, 1600, 800);
    };
    clearCanvas()
    let canard = new Duck(0, 542, 80, 80, ctx);
    canard.draw(speed)
    speed++

    setInterval(function() {

    }, 2000)
    
}


function animLoop() {
    draw();
    requestAnimationFrame(animLoop); // replanifie animLoop toutes les 16ms
}
animLoop()


