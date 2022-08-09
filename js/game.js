let playerScore = 0;
let computerScore = 0;

function computerPlay () {
  const playerChoices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random()*playerChoices.length);
  return playerChoices[randomChoice]
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "it's a draw";
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++
    return 'You lost...Rock covered by Paper'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    return 'You win...Rock crushes Scissors'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    return 'You lost...Scissors cuts Paper'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    computerScore++
    return 'You win...Paper covers Rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    return 'You lost...Scissors crushed by Rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    computerScore++
    return 'You win...Scissors cuts Paper'
  }
}

function game () {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Choose your input', 'Rock, Paper, Scissors').toLowerCase()
    const computerSelection = computerPlay()
    playRound(playerSelection, computerSelection)
  }
  if (playerScore > computerScore) {
    return '😄Hurrah!...You beat the computer!'
  } else if (playerScore < computerScore) {
    return '😞What a downer...You got beat by the computer!'
  } else {
    return "😤It's a Draw."
  }
}


console.log(game ())