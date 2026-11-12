let imgInicio;
let principal;
let imgTitulo;
let imgPasillo;
let imgsProta = [];
let imgsPuerta = [];
let imgsHabitacion = [];
let texto;
let cajaText;
let sonido;

function preload() {
  imgInicio = loadImage("data/portada.png");
  imgTitulo = loadImage("data/titulo.png");

  imgPasillo = loadImage("data/pasillo.png");

  for (let i = 0; i <= 6; i++) {
    imgsProta[i] = loadImage("data/prota" + i + ".png");
  }

  for (let i = 0; i <= 4; i++) {
    imgsPuerta[i] = loadImage("data/puerta" + i + ".png");
  }
  for (let i = 0; i < 5; i++) {
    imgsHabitacion[i] = loadImage("data/habitacion" + i + ".png");
  }
  sonido = loadSound("data/dread.mp3");
}


function setup() {
  createCanvas(800, 400);
  //cajaText = new cajaText ();
  //texto = new Texto ();
  principal = new Principal(imgInicio, imgTitulo, imgsHabitacion);
}

function draw() {
  background(0);
  principal.actualizar();
}

function mousePressed() {
  principal.manejarClick();
}
