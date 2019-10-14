// Assign ID for each square in grid


let playerTurn = "X";

let moves = [];


const squares = document.querySelectorAll(".square");
for (i=0; i < squares.length; i++) {
    squares[i].id = i;
    squares[i].addEventListener("click", function() {
        moves[this.id] = playerTurn;
        if (playerTurn === "X") {
            playerTurn = "O";
        } else {
            playerTurn = "X";
        }
        console.log(moves);
    });
}

// Assign click listener to each square, button and X and O

button.addEventListener("click");

//Create empty array for player selections

const playerSelection = [];

// Create callback function to get square ID# and send it to empty array

function selected(squares, callback) {

    callback();
}

// Create innerText function to record each X or O click

const clicked = document.getElementById("squares").innerText;

// For loop to determine winner

// for(let i = 0; i <= length; i++)
//     if (0 === 1  && 1 === 2 || 2 === 1 && 1 === 0) {
//         alert("X wins!");
//     } else if (3 === 4 && 4 === 5 || 5 === 4 && 4 === 3) {
//         alert("X wins!");
//     } else if (6 === 7 && 7 === 8 || 8 === 7 && 7 === 6) {
//         alert("X wins!");
//     } else if (0 === 3 && 3 === 6 || 6 === 3 && 3 === 0) {
//         alert("X wins!");
//     } else if (1 === 4 && 4 === 7 || 7 === 4 && 4 === 1) {
//         alert("X wins!");
//     } else if (2 === 5 && 5 === 8 || 8 === 5 && 5 === 2) {
//         alert("X wins!");
//     } else if (0 === 4 && 4 === 8 || 8 === 4 && 4 === 0) {
//         alert("X wins!");
//     } else if (2 === 4 && 4 === 6 || 6 === 4 && 4 === 2) {
//         alert("X wins!");
//     } else alert("Draw!");

document.querySelectorAll(square)
if (square === "X" || "O") {
    square === " ";
}






