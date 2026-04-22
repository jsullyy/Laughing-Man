const SQUARE_COUNT = 3;

document.addEventListener('DOMContentLoaded', () => {
document.querySelector("#square").addEventListener("click", () => {
alert("OMG YOU CLIKED ME!");
});

let box = document.querySelector("#box");

for (let i = 0; i < SQUARE_COUNT; i++) {
// make the element, but its not anything or on the page
let square = document.createElement('img');

// Set the attributes /properties of that element
square.src = "laughing_man.jpg";
square.alt = "Catch the Laughing Man!";
square.className = "square";

box.appendChild(square);
}
});