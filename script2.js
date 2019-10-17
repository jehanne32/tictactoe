// Create variable to hold player turn and counter to count through squares in grid

let playerTurn = "X";
let counter = 0;
// Create empty array to hold all player moves
let moves = ["", "", "", "", "", "", "", "", ""];

// function to loop through filled in squares and check for winner

const squares = document.querySelectorAll(".square");
// Loop through all the squares
for (i = 0; i < squares.length; i++) {
  squares[i].id = i;
  // Add event listener, click, to each square
  squares[i].addEventListener(
    "click",
    function() {
      this.innerText = playerTurn;
      moves[this.id] = playerTurn;
      // Add counter to count squares clicked

      // Do not start counter until 5 squares have been clicked
      if (counter > 3) {
        setTimeout(checkForWinner, 500);
      }
      if (playerTurn === "X") {
        playerTurn = "O";
      } else {
        playerTurn = "X";
      }
      counter++;
    },
    {
      once: true
    }
  );
}

// If statements to determine winner or draw with && and === and !== ''
// Alerts to notify winner or draw

function checkForWinner() {
  if (moves[0] === moves[1] && moves[1] === moves[2] && moves[0] !== "") {
    alert(`${moves[0]} wins!`);
  } else if (
    moves[3] === moves[4] &&
    moves[4] === moves[5] &&
    moves[3] !== ""
  ) {
    alert(`${moves[3]} wins!`);
  } else if (
    moves[6] === moves[7] &&
    moves[7] === moves[8] &&
    moves[6] !== ""
  ) {
    alert(`${moves[6]} wins!`);
  } else if (
    moves[0] === moves[3] &&
    moves[3] === moves[6] &&
    moves[0] !== ""
  ) {
    alert(`${moves[0]} wins!`);
  } else if (
    moves[1] === moves[4] &&
    moves[4] === moves[7] &&
    moves[1] !== ""
  ) {
    alert(`${moves[1]} wins!`);
  } else if (
    moves[2] === moves[5] &&
    moves[5] === moves[8] &&
    moves[2] !== ""
  ) {
    alert(`${moves[2]} wins!`);
  } else if (
    moves[0] === moves[4] &&
    moves[4] === moves[8] &&
    moves[0] !== ""
  ) {
    alert(`${moves[0]} wins!`);
  } else if (
    moves[2] === moves[4] &&
    moves[4] === moves[6] &&
    moves[2] !== ""
  ) {
    alert(`${moves[2]} wins!`);
  } else if (counter === 9) {
    alert("Draw! Start new game.");
  } else {
    return;
  }
}

// Create new variable and function to reset grid to clear after game completion

const emptyGrid = document.querySelector(".button");
emptyGrid.addEventListener("click", function() {
  for (i = 0; i < squares.length; i++) {
    squares[i].innerText = " ";
  }
});
