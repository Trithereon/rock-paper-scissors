function game(){
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    let playerSelection = "";
   
    const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                playerSelection = button.id;
                const computerSelection = computerPlay();
                playRound(playerSelection, computerSelection);
                const results = document.getElementById("resultsOutput");
                results.innerHTML = `Player score = ${playerScore} <br>Computer score = ${computerScore} <br>Draws = ${draws}`;
                if (playerScore === 5){
                    const victoryStatement = document.createElement("div");
                    victoryStatement.innerHTML = `<br>And the grand winner is... You!`;
                    results.appendChild(victoryStatement);
                    console.log("player victory");
                }
                else if (computerScore === 5){
                    const victoryStatement = document.createElement("div");
                    victoryStatement.innerHTML = `<br>And the grand winner is... Computer!`;
                    results.appendChild(victoryStatement);
                    console.log("computer victory");
                }   
            });
        });
        
        //the prompt below can be used instead of buttons. Requires user typing input.
        //let playerSelection = prompt('Rock, Paper, or Scissors?'); //Must be made case-insensitive
        //playerSelection = playerSelection.toUpperCase();
        //let computerSelection = computerPlay();

        function computerPlay(){
            const inputs = ['ROCK', 'PAPER', 'SCISSORS']; 
            return inputs[Math.floor(Math.random() * 3)]; 
            //Math.floor(Math.random() * 3); Randomly generates a value 0, 1, or 2
        }

        function playRound(playerSelection, computerSelection){
            //conditional statements to determine the winner. switch? if/else if?
            if (playerSelection === computerSelection){ 
                draws++;
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
        
    

    //the final verdict is determined
    /* if (playerScore > computerScore) 
        console.log(`You win the game with a score of ${playerScore} to ${computerScore}!`);
    else if (playerScore < computerScore) 
        console.log(`You lose the game with a score of ${playerScore} to ${computerScore}!`);
    else 
        console.log(`The game has ended in a draw! ${playerScore} to ${computerScore}!`);*/

}

game();

