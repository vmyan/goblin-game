import './style.css';
import goblin from './goblin.png';

const container = document.getElementById('game-container');
const grid = document.createElement('div');
grid.classList.add('grid');
container.appendChild(grid);

for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);
}

const img = document.createElement('img');
img.src = goblin;
img.classList.add('goblin');
grid.children[Math.floor(Math.random() * 16)].appendChild(img);

setInterval(() => {
  const current = img.parentElement;
  let newCell;
  do {
    newCell = grid.children[Math.floor(Math.random() * 16)];
  } while (newCell === current);
  newCell.appendChild(img);
}, 1000);
