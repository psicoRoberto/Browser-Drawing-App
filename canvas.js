window.addEventListener('load', ()=>{
    const canvas = document.querySelector("#canvas");
    const context = canvas.getContext("2d");

    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    //Variables
    let painting = false;

    function startPosition(e){
        painting = true;
        draw(e)
        
        ;
    }
    function finishedPosition(){
        painting = false;
        context.beginPath();
    }

    function draw(e){
        if(!painting) return;
        if(e.target == canvas){
            e.preventDefault();
        }
        
        context.lineWidth = 10;
        context.lineCap = "round";

        context.lineTo(e.clientX, e.clientY);
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY);
    }
    //EventListeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishedPosition);
    canvas.addEventListener("mousemove", draw);
    
    canvas.addEventListener("touchstart", startPosition);
    canvas.addEventListener("touchend", finishedPosition);
    canvas.addEventListener("touchmove", draw);

    /*document.body.addEventListener("touchstart", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);
    document.body.addEventListener("touchend", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false);
    document.body.addEventListener("touchmove", function (e) {
        if (e.target == canvas) {
            e.preventDefault();
        }
    }, false); */
});

