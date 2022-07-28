function getComputerChoice() {
    let rand = Math.random();
    if(rand < 0.34) {
        return 'rock';
    } else if(rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return 'draw';
    } else if(playerSelection === 'rock') {
        if(computerSelection === 'paper') {
            return 'Computer'
        } else {
            return 'Player'
        }
    } else if(playerSelection === 'paper') {
        if(computerSelection === 'scissors') {
            return 'Computer'
        } else {
            return 'Player'
        }
    } else if(playerSelection === 'scissors') {
        if(computerSelection === 'rock') {
            return 'Computer'
        } else {
            return 'Player'
        }
    }
}

const playerSelection = 'rock';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));