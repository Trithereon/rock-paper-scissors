The objective of this project is to build a rock-paper-scissors game that runs in the Chrome DevTools console, using javascript.

The exercise is taken from https://www.theodinproject.com/lessons/foundations-rock-paper-scissors

Here is pseudocode that I will base my design on:

- User prompted to input either 'rock', 'paper', or 'scissors' (case-insensitive).
- Input is stored in the playerSelection variable.
- Function computerPlay returns a random value between options 'Rock', 'Paper', and 'Scissors'.
- It is executed and the value returned is stored in the computerSelection variable.
- Function playRound plays a single round of the game, in player-versus-computer mode.
- It has two parameters playerSelection and computerSelection.
- It determines the winner by comparing the two input parameters.
- It returns a string that declares the winner e.g. "You lose! Paper beats Rock".

Once that is complete and functional, I will add the following:

- New function game() calls the playRound function
- Loop rounds until five rounds are played
- console.log() reports the winner of each round, then the winner at the end of the game

