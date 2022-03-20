const canvas = document.querySelector('.canvas');
const restart = document.querySelector('.restart');

for (let i = 0; i < 256; i++) {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    canvas.appendChild(grid);
}

let grids = document.querySelectorAll('.grid');

function fill() {
    console.log("filling " + this);
    this.classList.add('filled')
}

function clearGrids() {
    grids.forEach(gridBox => gridBox.classList.remove('filled'));
    let size;
    do {
        size = prompt("Enter squares per side (4 - 100)");
    } while (size > 100 || size < 4);
    canvas.innerHTML = "";

    const gridSizes = 960 / size;
    document.documentElement.style.setProperty('--gridSize', `${gridSizes}px`);
    console.log(gridSizes);

    for (let i = 0; i < size * size; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        canvas.appendChild(grid);
    }
    grids = document.querySelectorAll('.grid');
    grids.forEach(gridBox => gridBox.addEventListener('mouseenter', fill));
}

grids.forEach(gridBox => gridBox.addEventListener('mouseenter', fill));
restart.addEventListener('click', clearGrids);