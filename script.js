const container = document.querySelector('.container');

const rows = 16, cols = 16;
const size = rows * cols;
for(let i = 0; i < size; ++i) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}