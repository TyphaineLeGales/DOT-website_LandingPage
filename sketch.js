var bold;
var regular;
var light;
var n=0;
var m=0;
var o=0;

function preload() {
  bold = loadFont('assets/Replica-Bold.otf');
  regular = loadFont('assets/Replica-Regular.otf');
  light = loadFont('assets/Replica-Light.otf');
}

function setup() {
  var myCanvas = createCanvas(1100, 600);
  myCanvas.parent('container');
  //createA("http://localhost:8000/FHA","Federal Highway Administration");
}

function draw() {
  background(255);
  n++;
  if(n>900) {
    n = 0;
  }
  m+=2;
  if(m>900) {
    m=0;
  }
  o+=1.5;
  if(o>900) {
    o=0;
  }

  landingMenu();
  mouseCircle();
}

function mouseCircle() {
  if(mouseY<120){
  fill('#e5231f');
  ellipse(mouseX, mouseY, 40, 40);
    if(330+n>mouseX && mouseX>200+n){
        fill('#0d3a5c');
        arc(mouseX,mouseY, 30, 30, 0, HALF_PI);
        fill('#e5231f');
        arc(mouseX,mouseY, 15, 15, 0, HALF_PI);
    }
  } else if(mouseY>230) {
      fill('#0d3a5c');
      ellipse(mouseX, mouseY, 40, 40);
      if(330+m>mouseX && mouseX>200+m && mouseY<350){
        fill('#f7bf74');
        arc(mouseX,mouseY, 30, 30, 0, HALF_PI);
        fill('#0d3a5c');
        arc(mouseX,mouseY, 15, 15, 0, HALF_PI);
        }
        if(mouseY>380 && mouseX < 750) {
          fill('#f7bf74');
          ellipse(mouseX,mouseY, 40, 40);
          if(mouseX < 430) {
            fill('#e5231f');
            ellipse(mouseX,mouseY, 40, 40);
          }
        }
  } else {
      fill('#f7bf74');
      ellipse(mouseX,mouseY, 40, 40);
      if(330+o>mouseX && mouseX>200+o){
        fill('#e5231f');
        arc(mouseX,mouseY, 30, 30, 0, HALF_PI);
        fill('#f7bf74');
        arc(mouseX,mouseY, 15, 15, 0, HALF_PI);
      }
    }
}

function landingMenu() {
 //   textFont(light);
 //   textSize(16);
 //   fill('#f7bf74');
 //  text("Federal Highway Administration", 200, 400);
 //  fill('#0d3a5c');
 // text("Federal Maritim Administration", 500, 400);
 //  fill('#e5231f');
 // text("Federal Railways Administration", 800, 400);

  textFont(bold);
  textSize(36);
  fill('#0d3a5c');
  rect(190, 30, 1000, 100);
  stroke('#f7bf74');
  strokeWeight(5);
  line(200, 85, 1100, 85);
  noStroke();
  fill('#0d3a5c');
  rect(192+n, 68, 120, 40);
  fill('#e5231f');
  rect(190, 130, 1000, 100);
  fill('#f7bf74');
  text("FHWA", 200+n, 100);
  strokeWeight(5);
  stroke('#0d3a5c');
  for(j=0; j<900; j+=15) {
    rect(200+j, 183, 1, 8, 50);
  }
  noStroke();
  fill('#e5231f');
  rect(192+o, 168, 145, 40);
  fill('#0d3a5c');
  text("MARAD", 200+o, 200);
  noStroke();
  fill('#f7bf74');
  rect(190, 230, 1000, 100);

  strokeWeight(5);
  stroke('#e5231f');
  for(i=0; i<900; i+=25) {
    rect(200+i, 284, 8, 5);
  }
  noStroke();
  rect(192+m, 268,90, 40);
  fill('#e5231f');
  text("FRA", 200+m, 300);

}

// function mouseClicked () {

//}

// function hover() {
//   if (mouseX) {
//     fill(0);
//     ellipse(100, 100, 50, 50);
//   }
// }
