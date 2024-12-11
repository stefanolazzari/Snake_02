// Variabili per lo Snake
let snake = [];
let snakeLength = 1;
let snakeDir = [1, 0]; // Direzione iniziale (destra)

// Variabili per il cibo
let food;
let gridSize = 20; // Dimensione di ogni cella

function setup() {
  createCanvas(400, 400);
  frameRate(10); // Velocità del gioco

  // Posizione iniziale dello Snake
  snake.push(createVector(floor(width / 2 / gridSize), floor(height / 2 / gridSize)));

  // Genera il primo cibo
  spawnFood();
}

function draw() {
  background(220);

  // Disegna il cibo
  fill(255, 0, 0);
  rect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

  // Aggiorna la posizione dello Snake
  updateSnake();

  // Controlla le collisioni
  checkCollisions();

  // Disegna lo Snake
  fill(0);
  for (let segment of snake) {
    rect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
  }
}

function updateSnake() {
  // Calcola la nuova posizione della testa
  let newHead = createVector(
    snake[0].x + snakeDir[0],
    snake[0].y + snakeDir[1]
  );

  // Aggiunge la nuova testa all'inizio dell'array
  snake.unshift(newHead);

  // Controlla se lo Snake ha mangiato il cibo
  if (newHead.x === food.x && newHead.y === food.y) {
    spawnFood(); // Genera un nuovo cibo
    snakeLength++; // Aumenta la lunghezza dello Snake
  } else {
    // Rimuove l'ultimo segmento se non ha mangiato il cibo
    while (snake.length > snakeLength) {
      snake.pop();
    }
  }
}

function spawnFood() {
  // Genera una nuova posizione per il cibo
  food = createVector(floor(random(width / gridSize)), floor(random(height / gridSize)));

  // Assicura che il cibo non compaia sopra lo Snake
  for (let segment of snake) {
    if (food.equals(segment)) {
      spawnFood();
      return;
    }
  }
}

function checkCollisions() {
  // Controlla se lo Snake esce dai bordi
  let head = snake[0];
  if (head.x < 0 || head.y < 0 || head.x >= width / gridSize || head.y >= height / gridSize) {
    resetGame();
  }

  // Controlla se lo Snake si morde
  for (let i = 1; i < snake.length; i++) {
    if (head.equals(snake[i])) {
      resetGame();
    }
  }
}

function resetGame() {
  // Ripristina le variabili del gioco
  snake = [createVector(floor(width / 2 / gridSize), floor(height / 2 / gridSize))];
  snakeLength = 1;
  snakeDir = [1, 0];
  spawnFood();
}

function keyPressed() {
  // Cambia la direzione dello Snake in base alla freccia premuta
  if (keyCode === LEFT_ARROW && snakeDir[0] === 0) {
    snakeDir = [-1, 0];
  } else if (keyCode === RIGHT_ARROW && snakeDir[0] === 0) {
    snakeDir = [1, 0];
  } else if (keyCode === UP_ARROW && snakeDir[1] === 0) {
    snakeDir = [0, -1];
  } else if (keyCode === DOWN_ARROW && snakeDir[1] === 0) {
    snakeDir = [0, 1];
  }
}
