function setup() {
  createCanvas(500, 500);
  background(255);
  frameRate(10)

}

function draw() {
 
   // flower
  for (let i = 0; i < 9; i ++) {

    fill (255);
    translate(mouseX, mouseY);
    
    for (let i = 0; i < 12; i ++) {
      fill (random(10, 255), random(10, 255),             random(10, 255));
      
      strokeWeight (2);
      ellipse(0, 50, random(-10,70), random (70, 170));
      rotate(PI/6);}
  
    
  //blank smiley face
  fill (255)
  translate (-250, -250);
  ellipse (width/2, height/2, 100,100); 
  strokeWeight (4);  
  point (225,240);
  point (275,240);
  line (228,265, 273, 265); 
}
  
  
   
}

