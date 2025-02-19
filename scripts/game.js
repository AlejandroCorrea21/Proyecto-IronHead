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

  canonObject = new Canon("./assets/images/canonlup.png", 10, 10, 78, 90); //Esquina arriba izquierda
  canonObject.shoot();

  canonObject = new Canon(
    "./assets/images/canonldown.png",
    0,
    gameContainer.offsetHeight - 140,
    52,
    gameContainer.offsetHeight - 160
  ); // esquina abajo izquierda
  canonObject.shoot();

  (canonObject = new Canon(
    "./assets/images/canonrup.png",
    gameContainer.offsetWidth - 100,
    0,
    gameContainer.offsetWidth - 130,
    80
  )), // esquina arriba derecha
    canonObject.shoot();

  (canonObject = new Canon(
    "./assets/images/canonrdown.png",
    gameContainer.offsetWidth - 100,
    gameContainer.offsetHeight - 140,
    gameContainer.offsetWidth - 110,
    gameContainer.offsetHeight - 150
  )), // esquina abajo derecha
    canonObject.shoot();

  (canonObject = new Canon(
    "./assets/images/canonright.png",
    gameContainer.offsetWidth - 100,
    gameContainer.offsetHeight - 500,
    gameContainer.offsetWidth - 140,
    gameContainer.offsetHeight - 490
  )), // lado derecho
    canonObject.shoot();

  canonObject = new Canon(
    "./assets/images/canonleft.png",
    0,
    gameContainer.offsetHeight - 500,
    78,
    gameContainer.offsetHeight - 490
  ); // lado izquierdo
  canonObject.shoot();
}

function startMusic() {
  const music = new Audio("./assets/audio/music.mp3"); // música undertale ost
  music.volume = 0.05;
  music.loop = true;
  music.play();
}

startGame();
