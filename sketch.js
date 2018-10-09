function preload(){
  // put preload code here
}

var myList1 = [
  '#d2b5a3',
  '#4c5a69',
  '#ffffff',
  '#646c75',
  '#d1b4a2'
]

var myList2 = [
  '#88cde4',
  '#2d6585',
  '#d2b5a3',
  '#de9d8a',
  '#cf92dc'
]

noStroke();


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
   background(0)
   frameRate(3);
}

function draw() {
  // put drawing code here

for (var x = 10; x < width; x += 25) {
  for (var y = 10; y < height; y += 25 )
 {
    noStroke();

  //colorLists
  if (mouseIsPressed) {
    fill(color(random(myList2)));

  } else {
    fill(color(random(myList1)));
  }

   //triangle
   triangle(x, y, x + 20, y + 5, x + 10, y + 15);
   triangle(x, y, x + 10, y + 15, x + 15, y + 10);
  }
}




//text

   noStroke();
   fill(255);
   textSize(18);
   textFont('Futura.light');
   text('Click on the screen!', 95, 75);


}
