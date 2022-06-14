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