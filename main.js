// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;


// Iteration 1
const numberOfRows = 10;
const size = width / numberOfRows;

function drawGrid() {
    for (let rows = 0; rows < numberOfRows; rows++) {
        for (let column = 0; column < numberOfRows; column++) {
            context.strokeRect(column * size, rows * size, size, size)
        }
        }
        context.strokeStyle = 'black';
        context.lineWidth = 2;
        context.stroke();
    }
    drawGrid();

// Iteration 2

class Character {
    constructor(row, col, direction) {
        this.row = row;
        this.col = col;
        this.direction = direction;
    }

    moveUp() {
        this.row -= 1;
    }
    moveRight() {
        this.col += 1;
    }
    moveDown() {
        this.row += 1;
    }
    moveLeft() {
        this.col -= 1;
    } 
}

// Iteration 3 Draw the player

const player = new Character(0,0);

function drawPlayer() {
const playerImage = new Image();
playerImage.src = '/images/character-down.png';   

setTimeout(() => {
    context.drawImage(playerImage, player.col, player.row, 50, 50);
  }, 1000);
    
};

drawPlayer();

// Iteration 4 Treasure

function randomBetweenIntegers(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Treasure {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    setRandomPosition() {
        this.row = randomBetweenIntegers(0, 10) * size;
        this.col = randomBetweenIntegers(0, 10) * size;
    }
}

const treasure = new Treasure(50, 50);

function drawTreasure() {
    const treasureImage = new Image();
    treasureImage.src = '/images/treasure.png';  
    
    setTimeout(() => {
        context.drawImage(treasureImage, treasure.col, treasure.row, 50, 50);
      }, 1000);
        
    };
    
    drawTreasure();


    // Iteration 5 Make everything react

    const clean = () => {
        context.clearRect(0, 0, 500, 500);
      }

    window.addEventListener('keydown', (event) => {
        // Stop the default behavior (moving the screen to the left/up/right/down)
        event.preventDefault();

        switch (event.code) {
            case 'ArrowLeft':
                player.moveLeft();
                break;
            case 'ArrowUp':
                player.moveUp();
                break;
            case 'ArrowRight':
                player.moveRight();
                break;
            case 'ArrowDown':
                player.moveDown();
                break;
  }
  clean();
  drawEverything();
});

function drawEverything() {
    drawGrid(); 
    drawPlayer(100, 100);
    drawTreasure(100, 100);
  }
  drawEverything();

   // Iteration 6 bonus