// Assign ID for each square in grid

let playerTurn = "X";
let counter = 0
let moves = ['','','','','','','','',''];

// function to loop through filled in squares and check for winner

const squares = document.querySelectorAll(".square");
for (i=0; i < squares.length; i++) {
    squares[i].id = i;
    squares[i].addEventListener("click", function() {
        this.innerText = playerTurn;
        moves[this.id] = playerTurn;    
        counter++
        if (counter > 4) {
            checkForWinner()
        }        
        if (playerTurn === "X") {
            playerTurn = "O";
        } else {
            playerTurn = "X";
        }
    });
}

// For loop to determine winner
// Alerts to notify winner or draw

function checkForWinner() {
    if (moves[0] === moves[1] && moves[1] === moves[2] && moves[0] !== '') {
        alert(`${playerTurn} wins!`);
    } else if (moves[3] === moves[4] && moves[4] === moves[5] && moves[3] !== '') {
        alert(`${playerTurn} wins!`);
    } else if (moves[6] === moves[7] && moves[7] === moves[8] && moves[6] !== '') {
        alert(`${playerTurn} wins!`);
    } else if (moves[0] === moves [3] && moves[3] === moves[6] && moves[0] !== '') {
        alert(`${playerTurn} wins!`);
    } else if (moves [1] === moves [4] && moves[4] === moves[7] && moves[1] !== '') {
        alert(`${playerTurn} wins!`);
    } else if (moves[2] === moves[5] && moves[5] === moves[8] && moves[2] !== '') {
        alert(`${playerTurn} wins!`);
    } else if (moves[0] === moves[4] && moves[4] === moves[8] && moves[0] !== '') {
        alert(`${playerTurn} wins!`);
    } else if (moves[2] === moves[4] && moves[4] === moves[6] && moves[2] !== '') {
        alert(`${playerTurn} wins!`);
    } else if (counter === 9) {
        alert("Draw! Start new game.");
    } else {
        return
    }
}

const emptyGrid = document.querySelector(".button");
   emptyGrid.addEventListener("click", function() {
        console.log("button clicked");
   let square = document.querySelectorAll(".squares", function() {
          for (i = 0; i <= squares.length; i++) {                   
                   squares[i].innerText = "";
   }

})        
})