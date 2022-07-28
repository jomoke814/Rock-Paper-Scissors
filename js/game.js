const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    for(let i = 0; i <= 5; i++) {
        playRound(i);
    }
    document.querySelector('button').textContent = "Play new game";
    getWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = getComputerChoice();
    const winner = getWinner(playerSelection, computerSelection);
    winners.push(winner);
    getRound(playerSelection,computerSelection,winner,round)
}

function playerChoice() {
    let input = prompt('Type in your choice: ');
    while (input == null){
        input = prompt("Type in your choice: ")
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt('Please check your spelling');
        while (input == null){
            input = prompt("Type in your choice: ");
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}
// validation of input
function validateInput(choice) {
    if(choices.includes(choice)){
        return true;
    } else {
        return false;
    }
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function getWinner(p, c) {
    if (p === c) {
      return 'draw';
    } else if (p === 'rock') {
      if (c === 'paper') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'paper') {
      if (c === 'scissors') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'scissors') {
      if (c === 'rock') {
        return 'computer';
      } else {
        return 'player';
      }
    }
  }

  function getWins() {
    let playerWins = winners.filter((item) => item == 'player').length
    let computerWins = winners.filter((item) => item == 'computer').length
    let draw = winners.filter((item) => item == 'draw').length
    console.log('Results:')
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Draw:', draw);
}

function getRound(playerChoice, getComputerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player chose:', playerChoice);
    console.log('Computer chose:', getComputerChoice);
    console.log(winner, 'Won the Round');
    console.log('************');
}