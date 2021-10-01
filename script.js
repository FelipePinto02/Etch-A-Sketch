const container = document.querySelector('.container-grid')
let size = 16
const restartBtn = document.querySelector('.restart-btn')
restartBtn.addEventListener('click', restart)
const eraserBtn = document.querySelector('#eraser-btn')
eraserBtn.addEventListener('click', toggle)

function toggle() {
    if (eraserBtn.classList.contains('unactive')) {
        eraserBtn.classList.remove('unactive')
        eraserBtn.classList.add('active')
    }
    else if (eraserBtn.classList.contains('active')) {
        eraserBtn.classList.remove('active')
        eraserBtn.classList.add('unactive')
    }
}


function paint(square) {
    square.style.backgroundColor = 'black'
}

function unpaint(square) {
    square.style.backgroundColor = 'white'
}




function start() {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    eraserBtn.addEventListener('click', eraser)
    

    let x=1
    while (x <= size*size) {
        const square = document.createElement('div');
        square.className = "square";   
        container.appendChild(square)
        x++
    }

    const squares = document.querySelectorAll('.square')
    
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
    while (x <= size*size) {
        const square = document.createElement('div');
        square.className = "square";   
        container.appendChild(square)
        x++
    }
    
    const squares = document.querySelectorAll('.square')
    
    squares.forEach((square) => {
        square.onmouseover = function() {paint(square)}  
    })  
}

start()
