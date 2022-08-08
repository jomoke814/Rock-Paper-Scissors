let playerScore = 0;
let computerScore = 0;

function computerPlay () {
  const playerChoices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random()*playerChoices.length);
  const computerChoice = playerChoices[randomChoice]
  return computerChoice
}

function playRound (playerSelection, computerSelection) {
  console.log('1 ', playerSelection, '2 ', computerSelection)
  if (playerSelection === computerSelection) {
    return "it's a draw";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    return 'You lost...Rock covered by Paper'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You win...Rock crushes Scissors'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    return 'You lost...Scissors cuts Paper'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You win...Paper covers Rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return 'You lost...Scissors crushed by Rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You win...Scissors cuts Paper'
  }
}

const playerSelection = 'scissors'

function game () {
  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay()
    console.log(playRound(playerSelection, computerSelection))
  }
}

game ()