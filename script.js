//javascript

const drawingBoard = document.getElementById("drawingBoard");
const btnReset = document.getElementById("btnReset");
const btnResize = document.getElementById("btnResize");
const btnColor = document.getElementById("btnColor");
let randomColor = false;

let size = window.prompt('Pick a Size (1 - 64)', '16');

while (isNaN(size) || size > 64 || size < 1){

 size = window.prompt('Pick a Size (1 - 64)', '16');

}

createGrid(size);

btnResize.addEventListener('click', () => {
    resizeBoard();
  });
  
btnColor.addEventListener('click', () => {
    toggleColor();
});

btnReset.addEventListener('click', () => {
    resetGame();
});



function createGrid(size){
   
    let cellSize = "";

    for(let i = 0; i < size; i++){                              //get the size of cell based on container
        cellSize += (100/size) + "% ";
        
    }

    drawingBoard.gridTemplateColumns = cellSize;

    for (let i = 0; i < size * size; i++) {                     //create cells in grid
        const cellBlock = document.createElement("div");
        cellBlock.style.width = 100 / size + "%";
        cellBlock.classList.add("cellBlock");
        cellBlock.style.opacity = 0.0;

        if (randomColor) {
            cellBlock.style.backgroundColor = "#" + Math.floor(Math.random() * 16777216).toString(16);
        } else {
            cellBlock.style.backgroundColor = "#303B5C";
        }

        drawingBoard.appendChild(cellBlock);

    }

    const blocks = document.querySelectorAll(".cellBlock");
        
    blocks.forEach(element => {
        element.addEventListener("mouseenter", function () {
            element.style.opacity = Number(element.style.opacity) + 0.2;
        })
    });
}

function resizeBoard(){
    size = window.prompt('Pick a Size', '16');              //asks for new size
 
    while (isNaN(size) || size > 64 || size < 1){
        size = window.prompt('Pick a Size (1 - 64)', '16');
    }

    while (drawingBoard.firstChild) {                           //clears board
        drawingBoard.removeChild(drawingBoard.firstChild);
    }
   
    createGrid(size);                                           //create newboard
}

function toggleColor(){

    randomColor = !randomColor;
    while (drawingBoard.firstChild) {                           //clears board
        drawingBoard.removeChild(drawingBoard.firstChild);
    }
    //resizeBoard()
    createGrid(size);
}

function resetGame(){

    while (drawingBoard.firstChild) {                           //clears board
        drawingBoard.removeChild(drawingBoard.firstChild);
    }
    createGrid(size);  

}



  
