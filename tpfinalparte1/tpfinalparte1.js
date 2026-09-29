// Trabajo Practico Final Parte 1

//Minardi Ciro, Caro Chris

let texto;
let pantalla = 0;
let imgInicio, img1, img2, img3, img4;

function preload() {
  // Cargamos el texto
  texto = loadStrings("data/casatomadaprueba.txt");

  // Cargamos las imágenes
  imgInicio = loadImage("data/Pinicio.png");
  img1 = loadImage("data/ptn1.png");
  img2 = loadImage("data/ptn2.png");
  img3 = loadImage("data/ptn3.png");
}

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(0);

  if (pantalla === 0) {
    // PANTALLA DE INICIO-------------------------------
    image(imgInicio, 0, 0, width, height);

    // Título
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text("Casa Tomada", width / 2, height / 2 - 60);

    // Botón Iniciar
    fill(200);
    rectMode(CENTER);
    rect(width / 2, height / 2 + 30, 160, 50, 10);


    fill(0);
    textSize(24);
    text("Iniciar", width / 2, height / 2 + 28);


    textAlign(LEFT, BASELINE);
    rectMode(CORNER);
  } else if (pantalla === 1) {

    //pantalla 1---------------------------

    image(img1, 0, 0, width, height);


    fill(255);
    rect(30, 340, 735, 90);

    fill(0);
    textSize(18);

    if (texto) {
      for (let i = 3; i < texto.length; i++) {
        text(texto[i], 40, 28 * i + 280);
      }
    }

    //BOTON--------------
    fill(50, 150, 250);
    rectMode(CENTER);
    rect(720, 405, 90, 30, 8);

    fill(255);
    textSize(14);
    textAlign(CENTER, CENTER);
    text("Siguiente", 720, 405);

    textAlign(LEFT, BASELINE);
    rectMode(CORNER);
  } else if (pantalla === 2) {
    //pantalla 2---------------------------
    image(img2, 0, 0, width, height);

    fill(255);
    rect(30, 340, 735, 90);

    fill(0);
    textSize(18);

    // Texto 2------------------------
    if (texto) {
      for (let i = 7; i < texto.length; i++) {
        if (texto[i]) {
          text(texto[i], 40, 25 * (i - 6) + 342);
        }
      }
    }

    //BOTON----------------------------
    fill(50, 150, 250);
    rectMode(CENTER);
    rect(720, 405, 90, 30, 8);

    fill(255);
    textSize(14);
    textAlign(CENTER, CENTER);
    text("Siguiente", 720, 405);

    // Restablecer valores
    textAlign(LEFT, BASELINE);
    rectMode(CORNER);
  } else if (pantalla === 3) {


    //pantalla 3-----------------------------------
    image(img3, 0, 0, width, height);

    fill(255);
    rect(30, 340, 735, 90);

    fill(0);
    textSize(18);

    // Texto 3------------------------
    if (texto) {
      for (let i = 10; i < texto.length; i++) {  //me falla
        if (texto[i]) {
          text(texto[i], 40, 25 * (i - 10) + 342);
        }
      }
    }
    //BOTON----------------------------
    fill(50, 150, 250);
    rectMode(CENTER);
    rect(720, 405, 90, 30, 8);

    fill(255);
    textSize(14);
    textAlign(CENTER, CENTER);
    text("Siguiente", 720, 405);

    // Restablecer valores
    textAlign(LEFT, BASELINE);
    rectMode(CORNER);
  } else if (pantalla === 4) {


    //pantalla 4-----------------------------------
    image(img3, 0, 0, width, height);

    //BOTON DECISION 1
    fill(50, 150, 250);
    rectMode(CENTER);
    rect(235, 385, 245, 55, 10);

    fill(255);
    textSize(12);
    textAlign(CENTER, CENTER);
    text("Ir a ver que pasa en al fondo de la casona.", 235, 385);
    
    //BOTON DECISION 2
    fill(50, 150, 250);
    rectMode(CENTER);
    rect(535, 385, 245, 55, 10);

    fill(255);
    textSize(12);
    textAlign(CENTER, CENTER);
    text("Ir a decirle a Irene para decidir que hacer.", 535, 385);
    // Restablecer valores
    textAlign(LEFT, BASELINE);
    rectMode(CORNER);
    
  } else if (pantalla === 5){  //La idea esta pero no funciona
    fill (0);
    rect (800, 450, 800, 450);
  }
}


function mousePressed() {
  if (pantalla === 0) {
    let botonX = width / 2;
    let botonY = height / 2 + 30;

    if (
      mouseX > botonX - 80 &&
      mouseX < botonX + 80 &&
      mouseY > botonY - 25 &&
      mouseY < botonY + 25
      ) {
      pantalla = 1;
    }
  } else if (pantalla === 1) {
    let botonSigX = 720;
    let botonSigY = 405;

    if (
      mouseX > botonSigX - 45 &&
      mouseX < botonSigX + 45 &&
      mouseY > botonSigY - 15 &&
      mouseY < botonSigY + 15
      ) {
      pantalla = 2; // lleva a la pantalla 2
    }
  } else if (pantalla === 2) {
    let botonSigX = 720;
    let botonSigY = 405;

    // lleva a la Pantalla 3
    if (
      mouseX > botonSigX - 45 &&
      mouseX < botonSigX + 45 &&
      mouseY > botonSigY - 15 &&
      mouseY < botonSigY + 15
      ) {
      pantalla = 3;
    }
  } else if (pantalla === 3) {
    let botonSigX = 720;
    let botonSigY = 405;

    if (
      mouseX > botonSigX - 45 &&
      mouseX < botonSigX + 45 &&
      mouseY > botonSigY - 15 &&
      mouseY < botonSigY + 15
      ) {
      pantalla = 4;
    } else if (pantalla === 4){
      let botonAccion1X = 235;
      let botonAccion1Y = 385;
      //Si presiona el boton, pasa a la pantalla negra (pantalla "11")
      if (
      mouseX > botonAccion1X - 55 &&
      mouseX < botonAccion1X + 55 &&
      mouseY > botonAccion1Y - 25 &&
      mouseY < botonAccion1Y + 25
      ) {
      pantalla = 5;
    }
      
    }
  } 
}
