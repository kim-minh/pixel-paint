const container = document.querySelector('.container');
const sizeButton = document.querySelector('.size');

//Create a grid of n x n
function createGrid(size) {
    for(let i = 0; i < size * size; ++i) {
        //Create new cell
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    container.style.setProperty('--size', size); //Set custom property for css
}

//Create default grid of 16 x 16
createGrid(16);

//Add event for customize button
sizeButton.addEventListener('click', () => {
    const size = prompt('Choose grid size', getComputedStyle(container).getPropertyValue('--size'));
    if(size != undefined) {
        container.replaceChildren();
        createGrid(size);
    }
});