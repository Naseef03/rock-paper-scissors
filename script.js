// Make random choice for computer
function computerPlay() {
  const choice = Math.floor(Math.random() * 3);

  switch(choice) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    default:
      return 'scissors'
  }
}

// Decide the winner of the round 
function playRound(playerSelection, computerSelection) {
  switch(playerSelection.toLowerCase()) {
    // Player choose rock
    case 'rock':
      switch(computerSelection) {
        case 'rock':
          return 'Tie! Rock and Rock';
        case 'paper':
          return 'You Lose! Paper beats Rock';
        case 'scissors':
          return 'You Win! Rock beats Scissors';
      }
    
    // Player choose paper
    case 'paper':
      switch(computerSelection) {
        case 'rock':
          return 'You Win! Paper beats Rock';
        case 'paper':
          return 'Tie! Paper and Paper';
        case 'scissors':
          return 'You Lose! Scissors beats Paper';
      }
    
    // Player choose scissors
    case 'scissors':
      switch(computerSelection) {
        case 'rock':
          return 'You Lose! Rock beats scissors';
        case 'paper':
          return 'You Win! Scissors beats Paper';
        case 'scissors':
          return 'Tie! Scissors and Scissors';
      }
  }
}




function game(playerSelection) {
  let computerSelection = computerPlay();

  let result = playRound(playerSelection, computerSelection);

  if (result.startsWith('You Win')) playerScore++
  else if (result.startsWith('You Lose')) computerScore++

  if (playerScore >= 5 || computerScore >= 5) {
    result = 'Math end ' + 
              (playerScore > computerScore ? 'You Win': 'You Lose');
    playerScore = 0;
    computerScore = 0;
  }

  scoreBoard.innerHTML = (`
    ${result}<br>
    Total Score<br>
    Player:   ${playerScore}<br>
    Computer: ${computerScore}<br>
    `);
}

let playerScore = 0;
let computerScore = 0;

const scoreBoard = document.querySelector('#scoreBoard');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    game(e.target.textContent);
  });
});