let i = 50;
let stap = 20;
let stop = 650;



function setup() {
  createCanvas(700, 150);
  background(240);
}


function draw() {
i = 50;

  while (i < stop) {
    x = i;

if (i==170 || i==490){
  stroke ("red");
} else (
  stroke ("black")
)

  line(x, 50, x, 100);
  i=i+20
  }

  noLoop ();

//   while (stap == 140) {
//   lijnkleur = ("red")
// } 
// lijnkleur = ("black")
} 