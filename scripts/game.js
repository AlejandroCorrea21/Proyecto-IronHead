// Boton
document.querySelector("#start-btn").addEventListener("click", startGame);
const restartBtn = document.querySelector("#restart-btn");
restartBtn.addEventListener("click", restartGame);

// Pantallas
const gameContainer = document.querySelector("#game-container");
const gameScreenNode = document.querySelector("#game-screen");
const gameOverScreenNode = document.querySelector("#game-over-screen");

// Tiempo
const timeCounter = document.getElementById("time");

// Variables
let time = 0;
let personajeObj = null;
let gameIntervalId = null;
let shootIntervalId = null;
let balasArray = [];

timeCounter.innerText = "Tiempo"; // Inicializa el contenido del timeCounter en el HTML

// Función para mover el personaje
function moveCharacter(event) {
  if (event.key === "w") {
    personajeObj.moveUp();
  } else if (event.key === "s") {
    personajeObj.moveDown();
  } else if (event.key === "a") {
    personajeObj.moveLeft();
  } else if (event.key === "d") {
    personajeObj.moveRight();
  }
}

let timeIntervalId = null;
let gameLoopIntervalId = null;

function startGame() {
  if (timeIntervalId) {
    clearInterval(timeIntervalId); // Limpiar intervalo de tiempo
  }

  if (gameLoopIntervalId) {
    clearInterval(gameLoopIntervalId); // Limpiar intervalo del loop
  }

  startMusic();

  timeIntervalId = setInterval(() => {
    time++;
    timeCounter.innerText = `Tiempo ${time}`;
  }, 1000);

  // pantallas - mostrar - ocultar
  document.querySelector("#hud").style.display = "flex";
  document.querySelector("#start-screen").style.display = "none";
  gameScreenNode.style.display = "flex";

  // Crear PJ
  personajeObj = new Player();

  // Invocar cañones
  iniciarCañones();

  // EventListener para el movimiento del personaje
  document.addEventListener("keydown", moveCharacter);

  // Iniciar el loop del juego
  gameLoopIntervalId = setInterval(gameLoop, 1000 / 60);
}
// Iniciar música
function startMusic() {
  music = new Audio("./assets/audio/music.mp3");
  music.volume = 0.1;
  music.loop = true;
  music.play();
}


// Loop del juego
function gameLoop() {
  balasArray.forEach((eachShootObj) => {
    eachShootObj.automaticMovement();
    eachShootObj.colisionBalaPared();
  });
  checkColisionPlayerBalas(); // Verifica colisión con el jugador
}

// Verifica colisión entre balas y personaje
function checkColisionPlayerBalas() {
  balasArray.forEach((eachShootObj) => {
    if (
      eachShootObj.x < personajeObj.x + personajeObj.w &&
      eachShootObj.x + eachShootObj.w > personajeObj.x &&
      eachShootObj.y < personajeObj.y + personajeObj.h &&
      eachShootObj.y + eachShootObj.h > personajeObj.y
    ) {
      gameOver();
    }
  });
}

// Inicializa cañones y balas
function iniciarCañones() {
  let cañones = [
    new Canon("canon1", "./assets/images/canonlup.png", 10, 10),
    new Canon("canon3", "./assets/images/canonldown.png", 0, gameContainer.offsetHeight - 140),
    new Canon("canon4", "./assets/images/canonrup.png", gameContainer.offsetWidth - 100, 0),
    new Canon("canon6", "./assets/images/canonrdown.png", gameContainer.offsetWidth - 90, 730),
    new Canon("canon5", "./assets/images/canonright.png", gameContainer.offsetWidth - 100, gameContainer.offsetHeight - 500),
    new Canon("canon2", "./assets/images/canonleft.png", 0, gameContainer.offsetHeight - 500)
  ];

  let posicionesBalas = [ //creo balas a partir de la posición de los cañones e inicio disparos.

    [cañones[2].x, cañones[2].y + 120, "canon4"],
    [cañones[4].x, cañones[4].y, "canon5"],
    [cañones[3].x, cañones[3].y - 30, "canon6"],
    [cañones[0].x, cañones[0].y + 120, "canon1"],
    [cañones[5].x, cañones[5].y, "canon2"],
    [cañones[1].x, cañones[1].y - 30, "canon3"]
  ];

  posicionesBalas.forEach(([x, y, tipo]) => {
    balasArray.push(new Shoot(x, y, tipo));
  });
}

function gameOver() {
  clearInterval(gameIntervalId);
  clearInterval(shootIntervalId);

  gameScreenNode.style.display = "none";
  gameOverScreenNode.style.display = "flex";
}

function restartGame() {
  time = 0;
  if (music) {
    music.pause();
    music.currentTime = 0; // Reinicio música
  }
  if (gameIntervalId) {
    clearInterval(gameIntervalId);
  }

  gameOverScreenNode.style.display = "none";

  if (personajeObj && personajeObj.node) {
    personajeObj.node.remove(); //elimina el PJ del juego
  }

  personajeObj = null; //indicamos que ya no hay PJ.

  balasArray.forEach((bala) => { //eliminamos todas las balas
    if (bala.node) {
      bala.node.remove();
    }
  });

  balasArray = [];

  document.removeEventListener("keydown", moveCharacter); // El EventListener (keydown) lo ponemos para que no vaya acumulando la velocidad cada vez que le damos restart.

  startGame();
}
