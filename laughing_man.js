const SQUARE_COUNT = 3;
const TIMER_SPEED = 500;

let box;
let zIndexCounter = 1;

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("#square").addEventListener("click", () => {
        alert("OMG YOU CLICKED ME!");
    });

    box = document.querySelector("#box");

    document.querySelector("#addSquareButton").addEventListener("click", addSquare);
    document.querySelector("#changeColorsButton").addEventListener("click", changeColors);

    for (let i = 0; i < SQUARE_COUNT; i++) {
        addSquare();
    }
});

function addSquare(){
    // make the element, but its not anything or on the page
    let square = document.createElement('div');

    // Set the attributes /properties of that element
    square.className = "square";

    let size = parseInt(Math.random() * 11) + 45;
    square.style.width = size + "px";
    square.style.height = size + "px";

    square.style.backgroundColor = getRandomColor();

    square.style.left = parseInt(Math.random() * 450) + "px";
    square.style.top = parseInt(Math.random() * 350) + "px";

    square.onclick = function(){
        if(parseInt(square.style.zIndex) == zIndexCounter){
            square.remove();
        } else {
            zIndexCounter++;
            square.style.zIndex = zIndexCounter;
        }
    };

    box.appendChild(square);

    moveSquare(square);
}

function moveSquare(element){
    const parent = element.parentElement;
    const maxX = parent.clientWidth - element.clientWidth;
    const maxY = parent.clientHeight - element.clientHeight;

    let dx = TIMER_SPEED * Math.random() * 2 - 1; // This gives a # from -1 to .99999
    let dy = TIMER_SPEED * Math.random() * 2 - 1;

    let x = parseInt(element.style.left) || 225;
    let y = parseInt(element.style.top) || 175;

    setInterval(() => {

        if(x <=0 || x>=maxX){
            dx*=-1;
        }
        if(y <=0 || y >=maxY){
            dy *= -1;
        }

        x += dx;
        y += dy;

        element.style.left = x + "px";
        element.style.top = y + "px";
    }, TIMER_SPEED);
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

function changeColors(){
    let allSquares = document.querySelectorAll(".square");

    for(let i = 0; i < allSquares.length; i++){
        allSquares[i].style.backgroundColor = getRandomColor();
    }
}