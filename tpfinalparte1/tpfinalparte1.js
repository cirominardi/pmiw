// Trabajo Practico Final Parte 1

//Minardi Ciro, Caro Chris

let texto;
let pantalla;
let boton;

function preload () {
  //Edite un toque el texto, el prof me dijo de retocarlo para que quepa
  texto =loadStrings("data/casatomadaprueba.txt");
}

function setup() {
  createCanvas (800, 450);
}


function draw() {
  // programar las primeras pantallas con botones (pantalla 0 - pantalla 5) - Consigna profe que me dio

  background (0);
  fill (255);
  rect (30, 340, 735, 400);
  fill (0);
  textSize (20);
  for (let i=0; i<texto.length; i++)
    text(texto[i], 40, 50*i+220);
  //text (texto, 40, 370); <- Intento viejo no le des bola
  //Condicionales para cambiar de pantallas
}
