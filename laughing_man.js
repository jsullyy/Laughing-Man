const SQUARE_COUNT = 3;

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#square").addEventListener("click", () => {
        alert("OMG YOU CLICKED ME!");
    });

    let box = document.querySelector("#box");

    document.querySelector("#square").addEventListener("mouseover", () => {
        document.querySelector("#square").style.backgroundColor = getColor();
    });

    for (let i = 0; i < SQUARE_COUNT; i++) {
        let square = document.createElement("img");

        square.src = "laughing_man.png";
        square.alt = "Catch the Laughing Man!";
        square.className = "square";

        square.style.left = Math.random() * 450 + "px";
        square.style.top = Math.random() * 350 + "px";

        square.addEventListener("mouseover", () => {
            square.src = "Orochimaru.jpg";
        });
        square.addEventListener("mouseout", () => {
            square.src = "laughing_man.jpg";
        });

        box.appendChild(square);
    }
});

function getColor() {
    let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
    let randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}