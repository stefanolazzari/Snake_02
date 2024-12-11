let posSnakeX = 0;
let posSnakeY = 0;

let velSnakeX = 1;
let velSnakeY = 1;

let dirX = 0;
let dirY = 1;

let lato = 1;

function setup(){
    createCanvas(400,400);
    scale(20);
}

function draw(){
    frameRate(5);
    background(120);
    scale(20);
    //definiamo l'incremeto delle variabili di posizione
    posSnakeX = posSnakeX + velSnakeX * dirX;
    posSnakeY = posSnakeY + velSnakeY * dirY;

    //togliamo il bordo del quadrato perchè potrebbe causare problemi per via dello scale()
    noStroke();
    square(posSnakeX,posSnakeY,lato);
}

function keyPressed(){
    
    // struttura di controllo switch. Serve per determinare il comportamento in base al valore della variabile keyCode, 
    // che rappresenta un codice associato a un tasto premuto sulla tastiera.
    switch (keyCode) {
        case UP_ARROW:
            dirX = 0;
            dirY = -1;
            break;
        case DOWN_ARROW:
            dirX = 0;
            dirY = 1;
            break;
        case RIGHT_ARROW:
            dirX = 1;
            dirY = 0;
            break;
        case LEFT_ARROW:
            dirX = -1;
            dirY = 0;
            break;
        default:
            break;
    }
}