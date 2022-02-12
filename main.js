// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;


// Iteration 1
const numberOfRows = 10;
const size = width / numberOfRows;

function drawGrid() {
    for (let row = 0; row < numberOfRows; row++) {
        for (let column = 0; column < numberOfRows; column++) {
            context.strokeRect(column * size, row * size, size, size)
        }
        }
    }
     drawGrid();
  
// Iteration 2

class Character {
    constructor(col, row) {
      this.col = col;
      this.row = row;
    }

    moveUp() {
        this.col = col;
    }
    moveRight() {
        this.col += 1
    }
    moveDown() {
        this.row += 1
    }
    moveLeft() {
        this.row = row;
    } 
}

// Iteration 3 Draw the player
    
const playerImage = new Image();
playerImage.src = 'images/character-down.png';   
setTimeout(() => {
    context.drawImage(playerImage);
    }, 5000);
    


function drawEverything() {
  drawGrid();
}

drawEverything();