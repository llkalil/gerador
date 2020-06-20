
var canvas = document.getElementById("canvas");
var a = document.getElementById('a');

var color = "#000"
var grossura = 5;

function cor(obj) {

    expand();

    switch(obj.id){
        case "blue":
            color = "#0800ff";
            break;
        case "red":
            color = "#ff0000";
            break;
        case "yellow":
            color = "#ffff00";
            break;
        case "green":
            color = "#00ff00";
            break;
        case "white":
            color = "#ffffff";
            break;
        case "orange":
            color = "#ff9d00";
            break;
        case "black":
            color = "#000000";
            break;
        case "eraser":
            color = "#ffffff";

            break;
    }
    if (obj.id === "eraser") {
        grossura = 20;
    }else{
        grossura = 5;
    }

}


// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();

// last known position
var pos = { x: 0, y: 0 };

window.addEventListener('resize', resize);
document.addEventListener('mousemove', draw);
document.addEventListener('mousedown', setPosition);
document.addEventListener('mouseenter', setPosition);

// new position from mouse event
function setPosition(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
}

// resize canvas
function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

function erase() {

    expand();

    var m = confirm("Tem certeza?");
    if (m) {
        ctx.clearRect(0, 0, 10000, 10000);
        white();
    }

}

function download(){

    expand();
    //document.getElementById('id01').style.display='block';
    var dataURL = canvas.toDataURL();
    var confirma = confirm('Fazer download?');

    var msg = prompt("Digite um nome para o arquivo:", "download");



        ///input_formulario.value = dataURL;


        a.href = dataURL;
        a.download = msg;
        a.click();

}

function draw(e) {
    // mouse left button must be pressed
    if (e.buttons !== 1) return;

    ctx.beginPath(); // begin

    ctx.lineWidth = grossura;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;

    ctx.moveTo(pos.x, pos.y); // from
    setPosition(e);
    ctx.lineTo(pos.x, pos.y); // to

    ctx.stroke(); // draw it!
}
var state = true;


function expand() {
    if (state = false) {
        document.getElementById('items').style.transform = 'scaleX(1)';
        document.getElementById('toggle').style.transform = 'rotate(180deg)';
        state = true;
    }else{
        document.getElementById('items').style.transform = 'scaleX(0)';
        document.getElementById('toggle').style.transform = 'rotate(0deg)';
        state = false;
    }
}
