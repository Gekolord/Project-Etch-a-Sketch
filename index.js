const canvas = document.querySelector('.canvas')
for (let i = 0; i < 16;i++) {
    for (let j = 0; j < 16;j++){
        let pixel = document.createElement('div');
        pixel.className = "pixel";
        canvas.appendChild(pixel)
    }
}

const pixels = document.querySelectorAll('.pixel');


pixels.forEach((pixel) => {
    pixel.style.width = `${360 / 16}px`
    // for each one add a 'mouseover' listener
    pixel.addEventListener('mouseover', () => {
        pixel.classList.add('black');
    });
  });

const newGrid = document.querySelector('.newGrid');

// removes a grid of specified selector

function removeGrid (gridSelector, parentNode) {
    gridSelector.forEach((square) => parentNode.removeChild(square));
} 

// creates a new grid with number of pixels and class specified 

function createGrid (gridVolume, parentNode, gridClass) {
    for (let i = 0; i < gridVolume;i++){
        for (let j = 0; j < gridVolume;j++){
            let pixel = document.createElement('div');
            pixel.className = gridClass;
            parentNode.appendChild(pixel);
        }
    }
}

// ask for pixel volume and remove current grid, then create new one 

function createNewGrid () {
    let volume = 1
    while (true)  {
        volume = prompt("Please specify volume of grid (bigger than 0 and lesser than 100");
        if (volume > 0 && volume < 101) {
            break;
        }
    }
    removeGrid(pixels, canvas);
    createGrid(volume, canvas, "pixel");
}

createNewGrid()