const container = document.querySelector('.container')
for (x=1; x<=16*16; x++) {
    const square = document.createElement('div');
    let size = `${544/16 - 2}px`
    square.className = "square";
    // square.style.width = size
    // square.style.height = size

    container.appendChild(square)
}