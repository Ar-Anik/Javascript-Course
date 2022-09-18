var cn = document.querySelector("#cnvs");

var cnvs = cn.getContext("2d");

cnvs.lineWidth = 3;
cnvs.strokeStyle = 'black';
cnvs.strokeRect(8, 8, 374, 234);

cnvs.fillStyle = 'green';
cnvs.fillRect(10, 10, 370, 230);

var centerX = cn.width / 2.1;
var centerY = cn.height / 3.2;

// https://www.w3schools.com/tags/canvas_arc.asp
cnvs.beginPath();
cnvs.arc(centerX, centerY, 80, 0, 2*Math.PI, false);
cnvs.fillStyle = "red";
cnvs.fill();

cnvs.stroke();