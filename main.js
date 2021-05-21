canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";
var last_Position_of_x, last_Position_of_y;
color="black";
width_line=1;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color=document.getElementById("color_input").value;
    width_line=document.getElementById("linwidth").value;
    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    currentPosition_of_mouseX=e.clientX-canvas.offsetLeft;
    currentPosition_of_mouseY=e.clientY-canvas.offsetTop;
    if (mouseEvent="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=document.getElementById("linewidth").value;
        console.log("Last position of X and Y: ");
        console.log("X = " + last_Position_of_x + "Y = " + last_Position_of_y);
        ctx.moveTo(last_Position_of_x, last_Position_of_y);
        ctx.lineTo(currentPosition_of_mouseX, currentPosition_of_mouseY);
        ctx.stroke();
    }
    last_Position_of_x = currentPosition_of_mouseX;
    last_Position_of_y = currentPosition_of_mouseY;
}