function setup() {
  var myCanvas = createCanvas(1200, 600);
  myCanvas.parent('container');
  //createA("http://localhost:8000/FHA","Federal Highway Administration");
}

function draw() {
  background(255);
  fill('#f7bf74');
  noStroke();
ellipse(mouseX, mouseY, 40, 40);

}
