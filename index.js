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
    // and for each one we add a 'click' listener
    pixel.addEventListener('mouseover', () => {
        pixel.classList.add('black');
    });
  });


