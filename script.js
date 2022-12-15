let playerScore = 0; 
let computerScore = 0; 

//this function will aim to return randomly either Rock Paper Scissors
function getComputerChoice(){
    var rock = "rock"
    var paper = "paper"
    var scissors = "scissors"

    var rand = Math.random()

    if (rand<0.33){
        return rock;
    } else if (rand < 0.67){
        return paper;
    } else {
        return scissors;
    }
}
var playerSelection = "rock";
var computerSelection = getComputerChoice();


//function to play single round of Rock Paper Scissors
function singleRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase(); 
    
    if (
        (playerSelection == "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "rock")
    ){
        playerScore ++; 
        return "You win this round!";
    } else if (playerSelection === computerSelection){
        return "It's a tie!"
    } else {
        computerScore ++;
        return "You lose this round!"
    }
}

//function to play the main game, winner is the guy that has 5 rounds won 
function game(){
    for (let i =0; i<5; i++){
        playerSelection = prompt("rock, paper or scissors?");
        computerSelection = getComputerChoice();
        const result = console.log(singleRound(playerSelection, computerSelection)); 
        console.log(`Player: ${playerScore} - Computer: ${computerScore}`)
    }
    if (playerScore>computerScore){
        console.log("You have won the game!")
    } else {
        console.log("You have lost! You suck so much")
    }
   
}
console.log(game())                                                                                                                     