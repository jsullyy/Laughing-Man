let squareArea = document.querySelector("#squarearea");
//let squareArea = document.getElementById("squarearea");
let squareCount = parseInt(Math.random()*21)+30; //30-50
//Make some variable for zindex
let zIndexCounter = 1;

window.onload = function() {
    squareArea = document.querySelector("#squarearea");

    for(let i =0; i < squareCount; i++){
        addSquare();
    }
};

function addSquare(){ //function to add another square
    let square = document.createElement("div");
    square.className = "square";

    let size = parseInt(Math.random()*11)+45;
    square.style.width = size + "px";
    square.style.height = size + "px";

    square.style.left = parseInt(Math.random()*(squareArea.clientWidth - size))+"px";
    square.style.top = parseInt(Math.random()*(squareArea.clientHeight - size))+"px";

    square.style.backgroundColor = getRandomColor();

    //I can put a onclick and a function(this)
    square.onclick = function(){
        if(square.style.zIndex == zIndexCounter){
            square.remove();
        }else {
            zIndexCounter++;
            square.style.zIndex = zIndexCounter;
        }
    };

    //put it on the screen
    squareArea.append(square);
}

function getRandomColor(){
    //Make a Color ->
    let letters = "0123456789ABCDEF";
    let color = "#";

    for(let i =0; i<6; i++){
        color+=letters.charAt(parseInt(Math.random()*letters.length));
    }

    return color; //return that string
}

function changeColor(){ //function to change color of squares
    let allSquares = document.querySelectorAll(".square");

    for(let i = 0; i < allSquares.length; i++){ //for loop to change color of squares
        allSquares[i].style.backgroundColor = getRandomColor();
    }
}