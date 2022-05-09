function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i=1; i<=5; i++){
        let playerSelection = prompt('Rock, Paper, or Scissors?'); //Must be made case-insensitive
        let computerSelection = computerPlay();

        function computerPlay(){
            const inputs = ['Rock', 'Paper', 'Scissors']; 
            return inputs[Math.floor(Math.random() * 3)]; 
            //Math.floor(Math.random() * 3); Randomly generates a value 0, 1, or 2
        }

        function playRound(playerSelection, computerSelection){
            //conditional statements to determine the winner. switch? if/else if?
            if (playerSelection === computerSelection){ 
                return 'Draw! Nobody wins this round.';
            }else if (playerSelection === 'Rock' && computerSelection === 'Paper'){ 
                computerScore++;
                return 'You lose! Paper beats Rock';
            }else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
                playerScore++;
                return 'You win! Rock beats Scissors';
            }else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
                playerScore++;
                return 'You win! Paper beats Rock';
            }else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
                computerScore++;
                return 'You lose! Scissors beat Paper';
            }else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
                computerScore++;
                return 'You lose! Rock beats Scissors';
            }else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
                playerScore++;
                return 'You win! Scissors beat Paper';   
            }
        }

        //return string declaring the winner, with details
        console.log(`You played ${playerSelection} and Computer played ${computerSelection}`);
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

