const container = document.querySelector('.container')
let size = 16
const btn = document.querySelector('.btn')
btn.addEventListener('click', restart)

function start() {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let x=1
    while (x<=size*size) {
        const square = document.createElement('div');
        square.className = "square";   
        container.appendChild(square)
        x++
    }

    const squares = document.querySelectorAll('.square')
    
    squares.forEach((square) => {
        square.onmouseover = function() {paint(square)}  
    })
    
    function paint(square) {
        square.style.backgroundColor = 'black'
    }
}

function restart() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    size = window.prompt('Select size.(SxS)', 'S=')
    size = parseInt(size)


    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let x=1
    while (x<=size*size) {
        const square = document.createElement('div');
        square.className = "square";   
        container.appendChild(square)
        x++
    }
    
    const squares = document.querySelectorAll('.square')
    
    squares.forEach((square) => {
        square.onmouseover = function() {paint(square)}  
    })
    
    function paint(square) {
        square.style.backgroundColor = 'black'
    }
}

start()
