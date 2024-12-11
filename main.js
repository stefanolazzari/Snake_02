let posSnakeX = 0;
let posSnakeY = 0;

let velSnakeX = 1;
let velSnakeY = 1;

let dirX = 0;
let dirY = 1;

function setup(){
    createCanvas(400,400);
}

function draw(){
    background(120);
    posSnakeX = posSnakeX + velSnakeX * dirX;
    posSnakeY = posSnakeY + velSnakeY * dirY;
    square(posSnakeX,posSnakeY,20);
}

function keyPressed(){
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