let clearButton = document.querySelector('button');
let container = document.getElementById('container');
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



function setBoxHeight() {
    let box = document.querySelector('.box');
    let boxWidth = box.clientWidth;
    var x = document.getElementById("container");
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

    let newGrid = prompt('What size canvas would you like? EX: 16 creates a 16 x 16 canvas. MAX: 64');

    createGrid(parseInt(newGrid));

    let pixels = document.querySelectorAll('.box');

    pixels.forEach(item => {
        item.addEventListener('mouseover', event => {
            console.log("Wheee!");
            item.style.cssText = "background: rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";
        })
    });

}

function randomRGB() {
    return Math.floor(Math.random() * Math.floor(255));
}

createGrid(32);
//setBoxHeight();

let pixels = document.querySelectorAll('.box');

pixels.forEach(item => {
    item.addEventListener('mouseover', event => {
        console.log("Wheee!");
        item.style.cssText = "background: rgb(" + randomRGB() + "," + randomRGB() + "," + randomRGB() + ")";
    })
});

clearButton.addEventListener('click', function () {
    clearGrid();
})