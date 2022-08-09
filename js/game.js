let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector('.rock')
const paperButton = document.querySelector('.paper')
const scissorsButton = document.querySelector('.scissors')
const outcomeDiv = document.querySelector('.outcome')
const playerScoreSpan = document.querySelector('.player-score')
const computerScoreSpan = document.querySelector('.computer-score')

function computerPlay () {
  const playerChoices = ['rock', 'paper', 'scissors'];
  const randomChoice = Math.floor(Math.random()*playerChoices.length);
  return playerChoices[randomChoice]
}

function playRound (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    const p = document.createElement('p')
    p.innerText = "it's a draw"
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++
    const p = document.createElement('p')
    p.innerText = 'You lost...Rock covered by Paper'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++
    const p = document.createElement('p')
    p.innerText = 'You win...Rock crushes Scissors'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++
    const p = document.createElement('p')
    p.innerText = 'You lost...Scissors cuts Paper'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    computerScore++
    const p = document.createElement('p')
    p.innerText = 'You win...Paper covers Rock'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++
    const p = document.createElement('p')
    p.innerText = 'You lost...Scissors crushed by Rock'
    outcomeDiv.appendChild(p)
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    computerScore++
    const p = document.createElement('p')
    p.innerText = 'You win...Scissors cuts Paper'
    outcomeDiv.appendChild(p)
  }
}

// function game () {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt('Choose your input', 'Rock, Paper, Scissors').toLowerCase()
//     const computerSelection = computerPlay()
//     playRound(playerSelection, computerSelection)
//   }
//   if (playerScore > computerScore) {
//     return '😄Hurrah!...You beat the computer!'
//   } else if (playerScore < computerScore) {
//     return '😞What a downer...You got beat by the computer!'
//   } else {
//     return "😤It's a Draw."
//   }
// }

const checkWinner = (playerScore, computerScore) => {
  if(playerScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add('playerWon')
    h2.innerText = `You win ${playerScore} to ${computerScore} you beat the computer`
    outcomeDiv.appendChild(h2)
  }
  if (computerScore === 5) {
    const h2 = document.createElement('h2')
    h2.classList.add('computerWon')
    h2.innerText = `You lost ${playerScore} to ${computerScore} you got beat by the computer`
    outcomeDiv.appendChild(h2)
  }
}

const scores = (playerScore, computerScore) => {
  playerScoreSpan.innerText = `Player Score: ${playerScore}`
  computerScoreSpan.innerText = `Computer Score: ${computerScore}`
}

rockButton.addEventListener('click', () => {
  const computerSelection = computerPlay()
  const playerSelection = 'rock'
  playRound(playerSelection, computerSelection)
  scores(playerScore, computerScore)
  checkWinner(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
  const computerSelection = computerPlay()
  const playerSelection = 'paper'
  playRound(playerSelection, computerSelection)
  scores(playerScore, computerScore)
  checkWinner(playerScore, computerScore)
})

scissorsButton.addEventListener('click', () => {
  const computerSelection = computerPlay()
  const playerSelection = 'scissors'
  playRound(playerSelection, computerSelection)
  scores(playerScore, computerScore)
  checkWinner(playerScore, computerScore)
})


// game ()