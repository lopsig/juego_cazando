let canvas = document.getElementById("areaJuego");
let context = canvas.getContext("2d");

const graficarGato = () => {
  context.fillStyle = "red";
  context.fillRect(125, 125, 250, 250);
}