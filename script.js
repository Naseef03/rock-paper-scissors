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

// function game(playerSelection) {
//   let playerScore = 0;
//   let computerScore = 0;

//   for (i=0; i<5; i++) {
//     let playerSelection = prompt('Your choice?');
//     let computerSelection = computerPlay();

//     let result = playRound(playerSelection, computerSelection);

//     if (result.startsWith('You Win')) playerScore++
//     else if (result.startsWith('You Lose')) computerScore++

//     console.log(result);
//     console.log(`
//     Total Score
//     Player:   ${playerScore}
//     Computer: ${computerScore}
//     `);
//   }

//   if (playerScore > computerScore) console.log("You Win");
//   else if (playerScore < computerScore) console.log("You Lose");
//   else console.log('Tie');

//   console.log(playRound(playerSelection, computerPlay()));
// }

function showResult(playerSelection) {
  const result = playRound(playerSelection, computerPlay());
  console.log(result);
}

const btns = document.querySelectorAll('button');
btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    showResult(e.target.textContent);
  });
});