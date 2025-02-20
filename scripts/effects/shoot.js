class Shoot {
    constructor(x, y, type) {
        // Creamos el nodo y añadimos la caja del juego.
        this.node = document.createElement("img"); // creamos el nodo de el personaje <img />
        this.node.src = "./assets/images/hacienda.png"; // añadimos el src de la imagen
        gameContainer.append(this.node);

        // Configurar posición y dimensiones iniciales
        this.x = x; // posición en el eje horizontal
        this.y = y; // posición en el eje vertical
        this.w = 60;  // ancho de la bala
        this.h = 60;  // alto de la bala
        this.node.style.position = "absolute"; // para poder ubicarlo dentro de la caja de juego
        this.node.style.left = `${this.x}px`;
        this.node.style.top = `${this.y}px`;
        this.node.style.width = "60px";
        this.node.style.height = "60px";
        this.movementSpeed = 10; // velocidad de la bala
        this.type = type; // type define la bala, esto ayuda a que el enterno de juego sepa que tipo de objetos estoy creando.
        this.seEstaMoviendoHaciaLaDerecha = true;
        this.seEstaMoviendoHaciaAbajo = true;
    }

    automaticMovement() {





        //movimiento automático de la bala
        /* if (this.type === "canon4" || this.type === "canon5" || this.type === "canon6") {
            this.x -= this.movementSpeed; // movimiento de derecha a izquierda
            this.node.style.left = `${this.x}px`;
        }

        if (this.type === "canon1" || this.type === "canon2" || this.type === "canon3") {
            this.x += this.movementSpeed; // movimiento de izquierda a derecha
            this.node.style.left = `${this.x}px`;
        } */
    }
    colisionBalaPared() {
        if (this.x + this.w >= 1150) { // colision pared derecha
            this.seEstaMoviendoHaciaLaDerecha = false;

        }
        if (this.y + this.h >= gameContainer.offsetHeight) { // colisión bottom
            this.seEstaMoviendoHaciaAbajo = false;
        }
        if (this.x <= 0) { // colision pared izquierda
            this.seEstaMoviendoHaciaLaDerecha = true;
        }
        if (this.y <= 0) { // colision top
            this.seEstaMoviendoHaciaAbajo = true;
        }
    }

}