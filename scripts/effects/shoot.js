class Shoot {
    constructor(x, y, type) {
        // Creamos el nodo y añadimos la caja del juego.
        this.node = document.createElement("img");
        this.node.src = "./assets/images/hacienda.png";
        gameContainer.append(this.node);

        // Configurar posición y dimensiones iniciales
        this.x = x; // posición en el eje horizontal
        this.y = y; // posición en el eje vertical
        this.w = 60;  // ancho de la bala
        this.h = 60;  // alto de la bala
        this.node.style.position = "absolute";
        this.node.style.left = `${this.x}px`;
        this.node.style.top = `${this.y}px`;
        this.node.style.width = "60px";
        this.node.style.height = "60px";
        this.movementSpeed = 2;
        this.type = type;
        this.seEstaMoviendoHaciaLaDerecha = true;
        this.seEstaMoviendoHaciaAbajo = true;
    }
    // Movimiento autonático balas
    automaticMovement() {
        if (this.seEstaMoviendoHaciaLaDerecha === true) {
            this.x += this.movementSpeed; // bala a la derecha si es true
        } else {
            this.x -= this.movementSpeed; // si es false a la izquierda
        }
        this.node.style.left = `${this.x}px`; // linea que actualiza el DOM // (posición en X)
        if (this.seEstaMoviendoHaciaAbajo === true) {
            this.y += this.movementSpeed; // si es true, la bala va abajo
        } else {
            this.y -= this.movementSpeed; //si es false, la bala va arriba
        }
        this.node.style.top = `${this.y}px`; // linea que actualiza el DOM
        // (posicion en Y) (va en diagonal)

    }
    colisionBalaPared() {
        if (this.x + this.w >= 1050) { // colisión pared derecha
            this.seEstaMoviendoHaciaLaDerecha = false;
        }
        if (this.y + this.h >= gameContainer.offsetHeight - 125) { // colisión bottom
            this.seEstaMoviendoHaciaAbajo = false;
        }
        if (this.x <= 105) { // colisión pared izquierda
            this.seEstaMoviendoHaciaLaDerecha = true;
        }
        if (this.y <= 130) { // colisión top
            this.seEstaMoviendoHaciaAbajo = true;
        }
    }
}    