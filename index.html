<!DOCTYPE html>
<html>
<head>
  <title>Drawing</title>
  <link rel="stylesheet" type="text/css" href="style.css">
  <link rel="icon" type="icon/png" href="icon.png">
</head>
<body>


<canvas id="canvas"></canvas>
<a id="a"></a>
<div class="menu">
  <div class="inline">Cores:</div>
  <div class="color" id="blue" onclick="cor(this)"></div>
  <div class="color" id="red" onclick="cor(this)"></div>
  <div class="color" id="yellow" onclick="cor(this)"></div>
  <div class="color" id="green" onclick="cor(this)"></div>
  <div class="color" id="orange" onclick="cor(this)"></div>
  <div class="color" id="black" onclick="cor(this)"></div>
  <div class="color" id="eraser" onclick="cor(this)">
    <img src="https://clipartmag.com/image/eraser-drawing-19.jpg">
  </div>
  <div class="buton" id="apagar" onclick="erase()">Apagar</div>
  <div class="buton" id="apagar" onclick="download()">Download</div>
</div>
<script type="text/javascript">
// create canvas element and append it to document body
var canvas = document.getElementById("canvas");
var a = document.getElementById('a');

var color = "#000"
var grossura = 5;

function cor(obj) {

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

// some hotfixes... ( ≖_≖)
document.body.style.margin = 0;
canvas.style.position = 'fixed';

// get canvas 2D context and set him correct size
var ctx = canvas.getContext('2d');
resize();

function erase() {
        var m = confirm("Tem certeza?");
        if (m) {
           ctx.clearRect(0, 0, 10000, 10000);
        }
    }

function download(){

  var dataURL = canvas.toDataURL();
  var confirma = confirm('Fazer download?');

  var msg = prompt("Digite um nome para o arquivo:", "download");

  if (confirma) {
    a.href = dataURL;
    a.download = msg;
    a.click();
  }
}

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
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 10000, 10000);
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
</script>

</body>
</html>
