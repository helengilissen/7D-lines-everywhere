let x = 50;
let stap = 20;
let stop = 650;
let lijnKleur = ("black");

function setup() {
  createCanvas(700, 150);
  background(240);

}


function draw() {
  strokeWeight (2)
  stroke (lijnKleur);
  while (x < stop) {
    lijnkleur = ("red");
    line(x, 50, x, 100);
    x = x + stap;
  }
  x = 50;
  lijnkleur = ("black")

//   while (stap == 140) {
//   lijnkleur = ("red")
// } 
// lijnkleur = ("black")
} 