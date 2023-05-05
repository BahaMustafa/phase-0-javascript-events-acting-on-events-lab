// Your code here
// index.js
const DODGER = document.getElementById('dodger'); 

function moveDodgerLeft() {
  const currentPosition = parseInt(DODGER.style.left, 10);

  if (currentPosition > 0) {
    DODGER.style.left = `${currentPosition - 1}px`;
  }
}

// Usage of the function
moveDodgerLeft();

// index.js
const DODGER1 = document.getElementById('dodger'); 
const GAME_WIDTH = 400; 


function moveDodgerRight() {
  const currentPosition = parseInt(DODGER1.style.left, 10);
  const dodgerWidth = parseInt(DODGER1.offsetWidth, 10);
  const rightEdge = GAME_WIDTH - dodgerWidth;

  if (currentPosition < rightEdge) {
    DODGER1.style.left = `${currentPosition + 1}px`;
  }
}

// Usage of the function
moveDodgerRight();
