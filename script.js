const playerSelection = prompt('Rock, Paper, or Scissors?'); //Must be made case-insensitive
const computerSelection = computerPlay();

function computerPlay(){
    const inputs = ['Rock', 'Paper', 'Scissors']; 
    return inputs[Math.floor(Math.random() * 3)]; 
    //Math.floor(Math.random() * 3); Randomly generates a value 0, 1, or 2
}

function playRound(playerSelection, computerSelection){
    //conditional statements to determine the winner. switch? if/else if?
    if (playerSelection === computerSelection) return 'Draw! Nobody wins this round.';
    else if (playerSelection === 'Rock' && computerSelection === 'Paper') 
        return 'You lose! Paper beats Rock';
    else if (playerSelection === 'Rock' && computerSelection === 'Scissors') 
        return 'You win! Rock beats Scissors';
    else if (playerSelection === 'Paper' && computerSelection === 'Rock') 
        return 'You win! Rock beats Scissors';
    else if (playerSelection === 'Paper' && computerSelection === 'Scissors') 
        return 'You lose! Scissors beat Paper';
    else if (playerSelection === 'Scissors' && computerSelection === 'Rock') 
        return 'You lose! Rock beats Scissors';
    else if (playerSelection === 'Scissors' && computerSelection === 'Paper') 
        return 'You win! Scissors beat Paper';   
}

//return string declaring the winner, with details
console.log(playRound(playerSelection, computerSelection));

