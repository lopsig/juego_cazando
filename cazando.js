let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

//VARIABLES
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
let puntos = 0;
let tiempo = 10;
let intervalo = null; // para poder usar clearInterval
let juegoActivo = false;

//CONSTANTES
const ALTO_GATO = 100;
const ANCHO_GATO = 80;
const COLOR_GATO = "yellow";
const ALTO_COMIDA = 60;
const ANCHO_COMIDA = 60;
const COLOR_COMIDA = "red"


// FUNCIONES
const graficarGato = () => {
  graficarRectagulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, COLOR_GATO )
}

const graficarComida = () => {
  graficarRectagulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, COLOR_COMIDA);
}

const iniciarJuego = () => {
  juegoActivo = true
  clearInterval(intervalo);
  intervalo = setInterval(restarTiempo, 1000)
  tiempo = 10;
  mostrarEnSpan("tiempo", tiempo);
  puntos = 0;
  mostrarEnSpan("puntos", puntos);
  gatoX = canvas.width/2 - ANCHO_GATO/2;
  gatoY = canvas.height/2 - ALTO_GATO/2;
  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
  graficarGato();
  graficarComida();
  actualizarPantalla();
}

const reiniciarJuego = () => {
  juegoActivo = true; 
  clearInterval(intervalo);
  intervalo = setInterval(restarTiempo, 1000);
  tiempo = 10;
  mostrarEnSpan("tiempo", tiempo);
  puntos = 0;
  mostrarEnSpan("puntos", puntos);
  gatoX = canvas.width / 2 - ANCHO_GATO / 2;
  gatoY = canvas.height / 2 - ALTO_GATO / 2;
  comidaX = canvas.width - ANCHO_COMIDA;
  comidaY = canvas.height - ALTO_COMIDA;
  graficarGato();
  graficarComida();
  actualizarPantalla()
};

const detenerJuego = () => {
  juegoActivo = false;
  clearInterval(intervalo);
  tiempo = 10;
  mostrarEnSpan("tiempo", tiempo);
  puntos = 0;
  mostrarEnSpan("puntos", puntos);
  graficarGato();
  graficarComida();
  actualizarPantalla()
};

const graficarRectagulo = (x, y, ancho, alto, color) => {
  context.fillStyle = color;
  context.fillRect(x, y, ancho, alto)
  
}

const limpiarCanva = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};

const moverIzquierda = () => {
  gatoX = gatoX - 10;
  actualizarPantalla()
  detectarColision()
}
const moverDerecha = () => {
  gatoX = gatoX + 10;
  actualizarPantalla()
  detectarColision()
}
const moverArriba = () => {
  gatoY = gatoY - 10;
  actualizarPantalla()
  detectarColision()
}
const moverAbajo = () => {
  gatoY = gatoY + 10;
  actualizarPantalla()
  detectarColision()
}

const actualizarPantalla = () => {
  limpiarCanva()
  graficarGato()
  graficarComida()
}

const detectarColision = () => {
  if (juegoActivo == false) {
    return
  }


  if (
    gatoX + ANCHO_GATO > comidaX &&
    gatoX < comidaX + ANCHO_COMIDA &&
    gatoY + ALTO_GATO > comidaY &&
    gatoY < comidaY + ALTO_COMIDA
  ) {
    

    posicionAleatoriaComida();
    puntos = puntos + 1;
    mostrarEnSpan("puntos", puntos)
    tiempo = 10;

    if (puntos == 7) {
      juegoActivo = false
      mostrarEnSpan("puntos", puntos);
      alert("GANASTE!!!")
      clearInterval(intervalo)
      tiempo = 10;
      mostrarEnSpan("tiempo", tiempo)
    }
  }
}

const posicionAleatoriaComida = () => {
  comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
  comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA)
  actualizarPantalla()
}

const restarTiempo = () => {
  tiempo = tiempo - 1;
  mostrarEnSpan("tiempo", tiempo)

  if (tiempo == 0) {
    clearInterval(intervalo);
    alert("PERDISTE - SE ACABÓ EL TIEMPO")
    reiniciarJuego()

  }

}

