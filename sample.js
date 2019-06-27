window.onload = function() {
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var img=document.getElementById("scream");
ctx.drawImage(img,227,220);
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.beginPath();
context.rect(188, 50, 200, 100);
context.fillStyle = 'yellow';
context.fill();
context.lineWidth = 7;
context.strokeStyle = 'black';
context.stroke();
}
