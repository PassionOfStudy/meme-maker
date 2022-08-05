const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// Project One : House
ctx.fillRect(100, 100, 50, 150);
ctx.fillRect(300, 100, 50, 150);
ctx.lineWidth = 5;
ctx.strokeRect(200, 175, 50, 75);
ctx.fillRect(100, 100, 250, 10);
ctx.beginPath();
ctx.moveTo(100, 100);
ctx.lineTo(225, 50);
ctx.lineTo(350, 100);
ctx.stroke();

// Project Two : Human
ctx.beginPath();
ctx.fillRect(430-20, 400, 15, 120);
ctx.fillRect(600-20, 400, 15, 120);
ctx.fillRect(500-20, 400, 50, 200);
ctx.arc(500, 325, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(535-10, 325-7, 10, 1 * Math.PI, 2 * Math.PI);
ctx.arc(490-10, 325-7, 10, 1 * Math.PI, 2 * Math.PI);
ctx.fill();


