var mouseEvent="empty";
var x1,y1, x2, y2;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)

{
   
    mouseEvent="mouseDown";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    x2=e.clientX-canvas.offsetLeft;
    y2=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("Last position of x and y coordinates= ");
        console.log("x="+x1+"y="+y1)
        ctx.moveTo(x1,y1);
        console.log("Current position of x and y coordinates=");
        console.log("x="+x2+"y="+y2);
        ctx.lineTo(x2,y2)
        ctx.stroke();
    }
    x1=x2;
    y1=y2;

}
