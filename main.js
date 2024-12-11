let snakeX, snakeY; // Coordinate della testa del serpente
let foodX, foodY;   // Coordinate del cibo
let directionX = 1, directionY = 0; // Direzione del movimento
let gridSize = 20;  // Dimensione della griglia
let snakeLength = 1; // Lunghezza (cresce visivamente)
let gameSpeed = 10;  // Velocità del gioco
let frameCounter = 0; // Contatore dei frame

function setup() {
  createCanvas(400, 400); // Creazione del canvas
  snakeX = width / 2; // Posizione iniziale del serpente
  snakeY = height / 2;
  generateFood(); // Posiziona il primo cibo
}

function draw() {
  background(220); // Sfondo grigio chiaro

  // Controlla la velocità del gioco
  frameCounter++;
  if (frameCounter % gameSpeed === 0) {
    moveSnake(); // Muove il serpente solo a intervalli regolari
  }

  // Disegna il cibo
  fill(255, 0, 0); // Rosso
  rect(foodX, foodY, gridSize, gridSize);

  // Disegna il serpente
  fill(0); // Nero
  for (let i = 0; i < snakeLength; i++) {
    rect(snakeX - i * gridSize * directionX, 
         snakeY - i * gridSize * directionY, 
         gridSize, gridSize);
  }
}

// Muove il serpente e controlla collisioni
function moveSnake() {
  // Aggiorna la posizione del serpente
  snakeX += directionX * gridSize;
  snakeY += directionY * gridSize;

  // Controlla se il serpente mangia il cibo
  if (snakeX === foodX && snakeY === foodY) {
    snakeLength++; // Incrementa la lunghezza del serpente (visivamente)
    generateFood(); // Genera nuovo cibo
  }

  // Controlla se il serpente colpisce il bordo
  if (snakeX < 0 || snakeX >= width || snakeY < 0 || snakeY >= height) {
    noLoop(); // Termina il gioco
    console.log("Game Over!");
  }
}

// Cambia la direzione del serpente
function keyPressed() {
  if (keyCode === UP_ARROW && directionY === 0) {
    directionX = 0;
    directionY = -1;
  } else if (keyCode === DOWN_ARROW && directionY === 0) {
    directionX = 0;
    directionY = 1;
  } else if (keyCode === LEFT_ARROW && directionX === 0) {
    directionX = -1;
    directionY = 0;
  } else if (keyCode === RIGHT_ARROW && directionX === 0) {
    directionX = 1;
    directionY = 0;
  }
}

// Genera il cibo in una posizione casuale
function generateFood() {
  foodX = floor(random(width / gridSize)) * gridSize;
  foodY = floor(random(height / gridSize)) * gridSize;
}
