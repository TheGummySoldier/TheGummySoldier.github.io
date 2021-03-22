  
fill(255, 0, 255);

draw = function() {
    background(255, 255, 255);
    ellipse(mouseX, mouseY, 1, 1); 
    line(mouseX, mouseY, 200, 200);
    line(mouseX, mouseY, 150, 150);
    line(mouseX, mouseY, 250, 250);
    line(mouseX, mouseY, 150, 250);
    line(mouseX, mouseY, 250, 150);
    line(mouseX, mouseY, 400, 1);
    line(mouseX, mouseY, 1, 400);
    line(mouseX, mouseY, 400, 400);
    line(mouseX, mouseY, 1, 1);
var label = "   " + mouseX + "," + mouseY;

text(label, mouseX, mouseY);
};
