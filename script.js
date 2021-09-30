const container = document.querySelector('.container')
let size = 16
container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
container.style.gridTemplateRows = `repeat(${size}, 1fr)`


for (x=1; x<=size*size; x++) {
    const square = document.createElement('div');
    square.className = "square";
    square.setAttribute('onmouseover', 'paint()')
    container.appendChild(square)
}

const squares = document.querySelectorAll('.square')

squares.forEach((square) => {
    square.onmouseover = function() {paint(square)}  
})

function paint(square) {
    square.style.backgroundColor = 'black'
}
