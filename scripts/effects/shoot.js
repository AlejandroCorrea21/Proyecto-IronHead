class Shoot {
  constructor(x, y, xplayer, yplayer) {
    // Creamos el nodo y añadimos la caja del juego.
    this.node = document.createElement("img"); // creamos el nodo de el personaje <img />
    this.node.src = "./assets/images/hacienda.png"; // añadimos el src de la imagen

    // 2. configurar posicion y dimensiones iniciales
    this.x = x; // posición en el eje horizontal
    this.y = y; // posición en el eje vertical
    this.node.style.position = "absolute"; // para poder ubicarlo dentro de la caja de juego
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `60px`;
    this.node.style.height = `60px`;
  }

  generate() {
    gameContainer.append(this.node);
  }

  targetPlayer() {
    this.node.style.left = `${xplayer}px`;
    this.node.style.top = `${yplayer}px`;
  }
}
