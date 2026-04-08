let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

//VARIABLES
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

//CONSTANTES
const ALTO_GATO = 200;
const ANCHO_GATO = 300;
const COLOR_GATO = "red";
const ALTO_COMIDA = 50;
const ANCHO_COMIDA = 50;
const COLOR_COMIDA = "black"


// FUNCIONES
const graficarGato = () => {
  graficarRectagulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, COLOR_GATO )
}

const graficarComida = () => {
  graficarRectagulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, COLOR_COMIDA);
}

const iniciarJuego = () => {
  gatoX = 100;
  gatoY = 150;
  comidaX = 450;
  comidaY = 450;
  graficarGato();
  graficarComida();
}

const graficarRectagulo = (x, y, ancho, alto, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, ancho, alto)
  
}



