//PMIW Trabajo Practico Comision 1
//Ciro Minardi

let sonic=[];
let animacion;
let posX;
let posY;
let contador;
let sprite;
let vel;

function preload () {
  for (let i=0; i<17; i++) {
    sonic[i]=loadImage("data/sonic"+i+".png");
  }
}

function setup() {
  createCanvas (800, 600);
  animacion = 0;
  posX = 50;
  posY = 100;
  contador = 0;
  sprite = 0;
  vel = 0;
}

function draw() {
  background (255);

  //Idle

  contador++;
  if (contador > 50 && contador < 100) {
    animacion = 0;
    if (animacion === 0) {
      sprite = 0;
    }
  } else if (contador > 100 && contador < 150) {
    animacion = 1;
    if (animacion === 1) {
      sprite = 1;
    }
  } else if (contador > 150 && contador < 200) {
    animacion = 2;
    if (animacion === 2) {
      sprite = 2;
    }
  } else if (contador > 200 && contador < 250) {
    animacion = 3;
    if (animacion === 3) {
      sprite = 3;
    }
  } else if (contador > 250 && contador < 350) {
    if (sprite === 3) {
      sprite = 2;
    } else if (sprite === 2) {
      sprite = 3;
    }
  }

  //Caminar

  image(sonic[sprite], posX, posY, 55, 75);
}
