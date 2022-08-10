let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

function computerPlay () {
  const playerChoices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random()*playerChoices.length);
  return playerChoices[randomChoice]
}

function playRound (playerSelection, computerSelection) {
  const p = document.createElement('p')
  if (playerSelection === computerSelection) {
    p.innerText = "it's a draw"
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++
    p.innerText = 'You lost...Rock covered by Paper'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    p.innerText = 'You win...Rock crushes Scissors'
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    p.innerText = 'You lost...Scissors cuts Paper'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    computerScore++
    p.innerText = 'You win...Paper covers Rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    p.innerText = 'You lost...Scissors crushed by Rock'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    computerScore++
    p.innerText = 'You win...Scissors cuts Paper'
  }
  outcomeDiv.appendChild(p)
}

const checkWinner = (playerScore, computerScore) => {
  const h2 = document.createElement('h2')
  if(playerScore === 5) {
    h2.classList.add('playerWon')
    h2.innerText = `You win ${playerScore} to ${computerScore} you beat the computer`
  }
  if (computerScore === 5) {
    h2.classList.add('computerWon')
    h2.innerText = `You lost ${playerScore} to ${computerScore} you got beat by the computer`
  }
  document.querySelector('.reset').style.display = "inline";
  outcomeDiv.appendChild(h2)
}

const scores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const computerSelection = computerPlay()
    const playerSelection = `${button.className}`
  playRound(playerSelection, computerSelection)
  scores(playerScore, computerScore)
  checkWinner(playerScore, computerScore)
  })
})
