document.querySelector("#start-btn").addEventListener("click", startGame);
const gameContainer = document.querySelector("#game-container");
const gameScreenNode = document.querySelector("#game-screen");
let playerObject = null;
let canonObject = null;
let shootObject = null;
let gameIntervalId = null;

let canon1 = 'arriba izquierda'
let canon2 = 'centro izquierda'
let canon3 = 'abajo izquierda'
let canon4 = 'arriba derecha'
let canon5 = 'centro derecha'
let canon6 = 'abajo derecha'

let balasArray = [];

function startGame() {

  startMusic();
  document.querySelector("#hud").style.display = "flex";
  document.querySelector("#start-screen").style.display = "none";
  gameScreenNode.style.display = "flex";

  personajeObj = new Player();
  function posicionactual() {
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

  // cañones -(Imagen es parámetro, Primer número es posicion lateral, segundo número es altura.)

  canonObject1 = new Canon(`canon1`,"./assets/images/canonlup.png", 10, 10); //Esquina arriba izquierda (canon1)

  canonObject3 = new Canon(`canon3`,"./assets/images/canonldown.png",0,gameContainer.offsetHeight - 140); // esquina abajo izquierda (canon3)

  (canonObject4 = new Canon(`canon4`,"./assets/images/canonrup.png",gameContainer.offsetWidth - 100,0)), // esquina arriba derecha (canon4)

  (canonObject6 = new Canon(`canon6`,"/assets/images/canonrdown.png",gameContainer.offsetWidth - 90,730)), // esquina abajo derecha (canon6)

  (canonObject5 = new Canon(`canon5`,"/assets/images/canonright.png",gameContainer.offsetWidth - 100,gameContainer.offsetHeight - 500)); // lado derecho centro (canon5)

  canonObject2 = new Canon(`canon2`,"/assets/images/canonleft.png",0,gameContainer.offsetHeight - 500); // lado izquierdo centro (canon2)

  // Balas

  shootObject1 = new Shoot(canonObject4.x, canonObject4.y + 120, "canon4")
  balasArray.push(shootObject1)

  shootObject2 = new Shoot(canonObject5.x, canonObject5.y, "canon5")
  balasArray.push(shootObject2)

  shootObject3 = new Shoot(canonObject6.x, canonObject6.y -30, "canon6")
  balasArray.push(shootObject3)

  shootObject4 = new Shoot(canonObject1.x, canonObject1.y + 120, "canon1")
  balasArray.push(shootObject4)

  shootObject5 = new Shoot(canonObject2.x, canonObject2.y, "canon2")
  balasArray.push(shootObject5)

  shootObject6 = new Shoot(canonObject3.x, canonObject3.y -30, "canon3")
  balasArray.push(shootObject6)


  gameIntervalId = setInterval(() => {  // inicio el juego.
    gameLoop()
  }, Math.round(1000/60)) // 60 fps
}


function startMusic() {
  const music = new Audio("./assets/audio/music.mp3"); // música undertale ost
  music.volume = 0.0;
  music.loop = true;
  music.play();
}

function gameLoop() { // loop de las balas

  balasArray.forEach((eachShootObj) => { //metemos la array en el bucle forEach
    eachShootObj.automaticMovement() // inicializa el metodo automaticMovement de cada bala  y detecta colisiones.
  })

}

