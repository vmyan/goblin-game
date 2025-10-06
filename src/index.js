import './style.css';
import goblin from './assets/goblin.png';

const gridSize = 4;
const gameBoard = document.createElement('div');
gameBoard.className = 'game-board';
document.body.appendChild(gameBoard);

// Создаём поле 4x4
for (let i = 0; i < gridSize * gridSize; i++) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  gameBoard.appendChild(cell);
}

// Создаём персонажа
const img = document.createElement('img');
img.src = goblin;
img.className = 'goblin';
moveGoblin();

// Перемещение персонажа каждые 1.5 секунды
setInterval(moveGoblin, 1500);

function moveGoblin() {
  const cells = document.querySelectorAll('.cell');
  let newCell;
  do {
    newCell = cells[Math.floor(Math.random() * cells.length)];
  } while (newCell.contains(img));

  newCell.appendChild(img);
}
