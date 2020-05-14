let clearButton = document.querySelector('button');
let container = document.getElementById('gridContainer');
let box = '<div class="box"></div>';

function createGrid($gridSize) {
    if ($gridSize > 64) {
        $gridSize = 64;
        container.setAttribute("style", "grid-template-columns: repeat(" + $gridSize + "," + 100 / $gridSize + "%); grid-template-rows: repeat(" + $gridSize + "," + 100 / $gridSize + "%);");
        for (var i = 0; i < $gridSize * $gridSize; i++) {
            container.innerHTML += box;
        }
    } else {
        container.setAttribute("style", "grid-template-columns: repeat(" + $gridSize + "," + 100 / $gridSize + "%); grid-template-rows: repeat(" + $gridSize + "," + 100 / $gridSize + "%);");
        for (var i = 0; i < $gridSize * $gridSize; i++) {
            container.innerHTML += box;
        }
    }
}

createGrid(32);

function setBoxHeight() {
    let box = document.querySelector('.box');
    let boxWidth = box.clientWidth;
    var x = document.getElementById("gridContainer");
    var y = x.getElementsByTagName("div");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.height = boxWidth + "px";
    }
}

function clearGrid() {
    var child = container.lastElementChild;
    while (child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    let newGrid = prompt('How many squares per side would you like?');
    createGrid(parseInt(newGrid));
    let squares = document.querySelectorAll('.box');
    squares.forEach(item => {
        item.addEventListener('mouseover', event => {
            item.style.cssText = "background-color:gray";
        })
    });

}

let squares = document.querySelectorAll('.box');

squares.forEach(item => {
    item.addEventListener('mouseover', event => {
        item.style.cssText = "background-color:gray";
    })
});

clearButton.addEventListener('click', function () {
    clearGrid();
})