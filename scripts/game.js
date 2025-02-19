document.querySelector("#start-btn").addEventListener("click", startGame);
const gameContainer = document.querySelector("#game-container");
const gameScreenNode = document.querySelector("#game-screen");
let playerObject = null;
let canonObject = null;

function startGame() {
  startMusic();
  document.querySelector("#hud").style.display = "flex";
  document.querySelector("#start-screen").style.display = "none";
  gameScreenNode.style.display = "flex";

  personajeObj = new Player();
  document.addEventListener("keydown", (event) => {
    if (event.isComposing || event.key === "w") {
      personajeObj.moveUp();
    } else if (event.isComposing || event.key === "s") {
      personajeObj.moveDown();
    } else if (event.isComposing || event.key === "a") {
      personajeObj.moveLeft();
    } else if (event.isComposing || event.key === "d") {
      personajeObj.moveRight();
    }
  });

  canonObject = new Canon("./assets/canonlup.png", 10, 10); //Esquina arriba izquierda
  canonObject.shoot();

  canonObject = new Canon(
    "./assets/canonldown.png",
    0,
    gameContainer.offsetHeight - 140
  ); // esquina abajo izquierda
  canonObject.shoot();

  (canonObject = new Canon(
    "./assets/canonrup.png",
    gameContainer.offsetWidth - 100,
    0
  )), // esquina arriba derecha
    canonObject.shoot();

  (canonObject = new Canon(
    "./assets/canonrdown.png",
    gameContainer.offsetWidth - 100,
    gameContainer.offsetHeight - 140
  )), // esquina abajo derecha
    canonObject.shoot();

  (canonObject = new Canon(
    "./assets/canonderecha.png",
    gameContainer.offsetWidth - 100,
    gameContainer.offsetHeight - 500
  )), // lado derecho
    canonObject.shoot();

  canonObject = new Canon(
    "./assets/canonizquierda.png",
    0,
    gameContainer.offsetHeight - 500
  ); // lado izquierdo
  canonObject.shoot();
}

function startMusic() {
  const music = new Audio("./assets/music.mp3"); // música undertale ost
  music.volume = 0.05;
  music.loop = true;
  music.play();
}
