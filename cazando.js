let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

//VARIABLES
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

//CONSTANTES
const ALTO_GATO = 50;
const ANCHO_GATO = 75;
const COLOR_GATO = "black";
const ALTO_COMIDA = 20;
const ANCHO_COMIDA = 20;
const COLOR_COMIDA = "red"


// FUNCIONES
const graficarGato = () => {
  graficarRectagulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, COLOR_GATO )
}

const graficarComida = () => {
  graficarRectagulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, COLOR_COMIDA);
}

const iniciarJuego = () => {
  gatoX = canvas.width/2 - ANCHO_GATO/2;
  gatoY = canvas.height/2 - ALTO_GATO/2;
  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
  graficarGato();
  graficarComida();
}

const graficarRectagulo = (x, y, ancho, alto, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, ancho, alto)
  
}

const limpiarCanva = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

const moverIzquierda = () => {
  gatoX = gatoX - 10;
  limpiarCanva();
  graficarGato();
  graficarComida();

}

