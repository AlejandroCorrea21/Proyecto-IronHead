class Canon {
  constructor(image, x, y) {
    // Pongo todas las propiedades del PJ principal

    // Creamos el nodo y añadimos la caja del juego.
    this.node = document.createElement("img"); // creamos el nodo de el personaje <img />
    this.node.src = image; // añadimos el src de la imagen
    gameContainer.append(this.node); // añadimos el nodo a la caja de juego

    // 2. configurar posicion y dimensiones iniciales
    this.x = x; // posición en el eje horizontal
    this.y = y; // posición en el eje vertical
    this.w = 100;
    this.h = 140;

    this.node.style.position = "absolute"; // para poder ubicarlo dentro de la caja de juego
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;
  }

  shoot() {
    function sayhello() {
      console.log("Disparando");
    }
    setInterval(sayhello, 1000);
  }
}
