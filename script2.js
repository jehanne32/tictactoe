// Assign ID for each square in grid

let playerTurn = "X";
let counter = 0
let moves = ['','','','','','','','',''];

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
        // console.log(moves);
    });
}

// For loop to determine winner

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
