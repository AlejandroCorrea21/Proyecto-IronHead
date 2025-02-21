# IronHead!

## [Juega!](https://alejandrocorrea21.github.io/Proyecto-IronHead/)

![Logo](./assets/logo.png)

# Descripción del juego

IronHead es un juego estilo run and gun donde se debe evitar los proyectiles lanzados de los cañones. El juego no tiene un nivel final, el objetivo es sobrevivir el mayor tiempo posible.

# Funcionalidades Principales

Movimiento del Personaje: El jugador puede mover el personaje libremente en un espacio 2D.
Comportamiento de los proyecties: las balas aparecen en los dos lados y se mueven aleatoriamente, rebotando por las 4 paredes.
Tiempo: intentar aguantar todo lo posible para mejorar el tiempo personal.

# Funcionalidades Pendientes
Mejorar movimiento pj: que no sean tán estático si no que sea más fluido.
Nivel y Dificultad: Implementar niveles progresivamente más difíciles, por ejemplo, cuanto más aguantes más tiempo aguantes más rapido van las balas.
Efectos de Sonido: Agregar más efectos de sonido para acciones, como por ejemplo el sonido de las balas al ser disparadas y rebotar en las paredes, al colisionar con el personaje, etc.
Sistema de vidas: Permitir que los jugadores tengan más vidas para aguantar más en el tiempo.
Sistema de vidas extra: que cada "X" tiempo se genere una vida aleatoria en el mapa donde al recogerla tienes una vida extra.

# Tecnologías Utilizadas
HTML5
CSS3
JavaScript
JS Classes
Local Storage
Manipulación del DOM
Imagenes JS y Audios JS

# Estados

- **Game Start:**
- **Game Screen:**
- **Game Over:**

# Estructura del Proyecto

## Game.js

- startGame()
- gameLoop()
- restartGame()
- moveCharacter(event)
- startMusic()
- checkColisionPlayerBalas()
- iniciarCañones()

## Player.js

- Player()
- moveUp()
- moveDown()
- moveLeft()
- moveRight()

## canon.js
- Canon(type, image, x, y)

## Shoot.js

- shoot(x, y, type)
- automaticMovement()
- colisionBalaPared()

# Extra Links

### Excalidraw
[Link](https://excalidraw.com/#json=JT7Y47xNdxHVOAFSwSpO6,4u6A30aL3DFsp0Gm8X8g1A)

## Deploy
[Link](https://alejandrocorrea21.github.io/Proyecto-IronHead/)

# Creditos

- **Un especial gracias a:** Juan, Kurt y Samuel por el aguante y los ánimos que me han dado en esta semana.
- ** Otro especial gracias a:** Jorge, quien tuvo muchísima paciencia con servidor.
- **Balas** las balas son el logotipo de Hacienda.
- **Cañones** los cañones son sacados del Clash of Clans
- **Fuentes** el fondo, y las fuentes de las letras son del juego *The Binding of Isaac*.
- **Música:** La música que esta en el fondo es *Undertale - Megalovania*.
