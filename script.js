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