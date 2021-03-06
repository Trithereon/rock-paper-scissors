function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i=1; i<=5; i++){
        let playerSelection = prompt('Rock, Paper, or Scissors?'); //Must be made case-insensitive
        playerSelection = playerSelection.toUpperCase();
        let computerSelection = computerPlay();

        function computerPlay(){
            const inputs = ['ROCK', 'PAPER', 'SCISSORS']; 
            return inputs[Math.floor(Math.random() * 3)]; 
            //Math.floor(Math.random() * 3); Randomly generates a value 0, 1, or 2
        }

        function playRound(playerSelection, computerSelection){
            //conditional statements to determine the winner. switch? if/else if?
            if (playerSelection === computerSelection){ 
                return 'Draw! Nobody wins this round.';
            }else if (playerSelection === 'ROCK' && computerSelection === 'PAPER'){ 
                computerScore++;
                return 'You lose the round! Paper beats Rock';
            }else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {
                playerScore++;
                return 'You win the round! Rock beats Scissors';
            }else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {
                playerScore++;
                return 'You win the round! Paper beats Rock';
            }else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
                computerScore++;
                return 'You lose the round! Scissors beat Paper';
            }else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
                computerScore++;
                return 'You lose the round! Rock beats Scissors';
            }else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
                playerScore++;
                return 'You win the round! Scissors beat Paper';   
            }
        }

        //return string declaring the winner, with details
        //uncomment line below to display round details. Commented it to clean up the output.
        //console.log(`You played ${playerSelection} and Computer played ${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }

    //the final verdict is determined
    if (playerScore > computerScore) 
        console.log(`You win the game with a score of ${playerScore} to ${computerScore}!`);
    else if (playerScore < computerScore) 
        console.log(`You lose the game with a score of ${playerScore} to ${computerScore}!`);
    else 
        console.log(`The game has ended in a draw! ${playerScore} to ${computerScore}!`);
}

game();

