class Canon {
  constructor(type, image, x, y) {
    // Creamos el nodo y añadimos la caja del juego.
    this.node = document.createElement("img"); // creamos el nodo de el personaje <img />
    this.node.src = image; // añadimos el src de la imagen
    gameContainer.append(this.node); // añadimos el nodo a la caja de juego

    // 2. configurar posicion y dimensiones iniciales
    this.x = x; // posición en el eje horizontal
    this.y = y; // posición en el eje vertical
    this.w = 100;
    this.h = 140;
    this.bulletx = this.x;
    this.bullety = this.y;

    this.node.style.position = "absolute"; // para poder ubicarlo dentro de la caja de juego
    this.node.style.left = `${this.x}px`;
    this.node.style.top = `${this.y}px`;
    this.node.style.width = `${this.w}px`;
    this.node.style.height = `${this.h}px`;

    // cuando el cañon aparece empieza a disparar.

    this.type = type;
    // this.shoot();
  }

  /*shoot() {
    let balaID = setInterval( () => {
      let bala = new Shoot(this.bulletx, this.bullety);
      bala.automaticMovement();
      }, 2000)
      console.log("Estamos dentro de shoot")
    const shootBullet = () => {
      let shoot = new Shoot(this.bulletx, this.bullety);
    };

    setInterval(shootBullet, 1000);
  } */

}
