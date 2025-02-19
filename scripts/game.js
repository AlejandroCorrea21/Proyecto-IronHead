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
  function posicionactual() {
    console.log(personajeObj.x, personajeObj.y);
  }

  setInterval(posicionactual, 1000);
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

  // cañones

  canonObject = new Canon(`izquierdo`, "./assets/images/canonlup.png", 10, 10); //Esquina arriba izquierda

  canonObject = new Canon(
    `izquierdo`,
    "./assets/images/canonldown.png",
    0,
    gameContainer.offsetHeight - 140
  ); // esquina abajo izquierda

  (canonObject = new Canon(
    `derecho`,
    "./assets/images/canonrup.png",
    gameContainer.offsetWidth - 100,
    0
  )), // esquina arriba derecha
    (canonObject = new Canon(
      `derecho`,
      "/assets/images/canonrdown.png",
      gameContainer.offsetWidth - 90,
      730
    )), // esquina abajo derecha
    (canonObject = new Canon(
      `derecho`,
      "/assets/images/canonright.png",
      gameContainer.offsetWidth - 100,
      gameContainer.offsetHeight - 500
    )); // lado derecho

  canonObject = new Canon(
    `izquierdo`,
    "/assets/images/canonleft.png",
    0,
    gameContainer.offsetHeight - 500
  ); // lado izquierdo
}

function startMusic() {
  const music = new Audio("./assets/audio/music.mp3"); // música undertale ost
  music.volume = 0.0;
  music.loop = true;
  music.play();
}
