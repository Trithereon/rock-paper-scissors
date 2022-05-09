let playerSelection = prompt('Rock, Paper, or Scissors?');
const computerSelection = computerPlay();

function computerPlay(){
    const inputs = ['Rock', 'Paper', 'Scissors']; 
    return inputs[Math.floor(Math.random() * 3)]; 
    //Math.floor(Math.random() * 3); Randomly generates a value 0, 1, or 2
}

function playRound(playerSelection, computerSelection){

}