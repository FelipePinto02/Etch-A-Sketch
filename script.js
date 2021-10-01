const container = document.querySelector('.container-grid')
let size = 16
const restartBtn = document.querySelector('.restart-btn')
restartBtn.addEventListener('click', restart)
const eraserBtn = document.querySelector('#eraser-btn')
eraserBtn.addEventListener('click', toggle)
const clearBtn = document.querySelector('#clear-btn')

function toggle() {
    if (eraserBtn.classList.contains('unactive')) {
        eraserBtn.classList.toggle('unactive')
        eraserBtn.classList.toggle('active')
    }
    else if (eraserBtn.classList.contains('active')) {
        eraserBtn.classList.toggle('active')
        eraserBtn.classList.toggle('unactive')
    }
}

function paint(square) {
    square.style.backgroundColor = 'black'
    square.classList.remove('cleared')
}

function unpaint(square) {
    square.style.backgroundColor = 'white'
    square.classList.remove('cleared')
}


function start() {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    eraserBtn.addEventListener('click', eraser)
    clearBtn.addEventListener('click', clear)

    let x=1
    while (x <= size*size) {
        const square = document.createElement('div');
        square.id = "square";   
        container.appendChild(square)
        x++
    }

    const squares = document.querySelectorAll('#square')
    
    squares.forEach((square) => {
        square.onmouseover = function() {paint(square)}  
    })

    function eraser() {
        if (eraserBtn.classList.contains('unactive')) {
            squares.forEach((square) => {
                square.onmouseover = function() {paint(square)}  
            })
        }
        else if (eraserBtn.classList.contains('active')) {
            squares.forEach((square) => {
                square.onmouseover = function() {unpaint(square)}  
            })
        }
    }

    function clear() {
        squares.forEach((square) => {
        if (square.style.backgroundColor == 'black') {
            square.classList.toggle('cleared')
            square.style.backgroundColor = 'white'  
        }
        })
    }
}

function restart() {
    while (container.firstChild) {
        container.removeChild(container.lastChild)
    }
    size = window.prompt('Select size.(SxS)', 'S=')
    size = parseInt(size)

    if (eraserBtn.classList.contains('active')) {
        eraserBtn.classList.toggle('unactive')
        eraserBtn.classList.toggle('active')
    }

    start()  
}

start()
