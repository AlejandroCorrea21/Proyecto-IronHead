class Player {
  constructor() {
    // Pongo todas las propiedades del PJ principal

    // Creamos el nodo y añadimos la caja del juego.
    this.node = document.createElement("img"); // creamos el nodo de el personaje <img />
    this.node.src = "./assets/images/ironhead.png"; // añadimos el src de la imagen
    gameContainer.append(this.node); // añadimos el nodo a la caja de juego

    // 2. configurar posicion y dimensiones iniciales
    this.x = 440; // posición en el eje horizontal
    this.y = 370; // posición en el eje vertical
    this.w = 80;
    this.h = 120;

    this.node.style.position = "absolute"; // para poder ubicarlo dentro de la caja de juego
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
  }

  moveUp() {
    if (this.y + this.h > 262) {
      this.y -= 15;
      this.node.style.top = `${this.y}px`;
    }
  }

  moveDown() {
    if (this.y + this.h <= gameContainer.offsetHeight - 130) {
      this.y += 15;
      this.node.style.top = `${this.y}px`;
    }
  }

  moveLeft() {
    if (this.x >= 110) {
      this.x -= 15;
      this.node.style.left = `${this.x}px`;
    }
  }

  moveRight() {
    if (this.x + this.w <= gameContainer.offsetWidth - 110) {
      this.x += 15;

      this.node.style.left = `${this.x}px`;
    }
  }
}
