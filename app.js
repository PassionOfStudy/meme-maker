const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(200, 200, 50, 150);
ctx.fillRect(400, 200, 50, 150);
ctx.lineWidth = 5;
ctx.strokeRect(300, 275, 50, 75);
ctx.fillRect(200, 200, 250, 10);
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(325, 150);
ctx.lineTo(450, 200);
ctx.stroke();
