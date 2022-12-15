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

//function to play single round of Rock Paper Scissors, and it takes parameter of each player and computer (and compare the results)
function playRound(playerSelection, computerSelection){
    //This is to make inputs case insensitive
    var playerSelection = playerSelection.toLowerCase();
    var computerSelection = computerSelection.toLowerCase();

  

    if (playerSelection == "paper"){
        if (computerSelection == 'paper'){
            return "it's a draw!";
        } else if (computerSelection == 'rock'){
            return 'you win!'
        } else {
            return "you lose!"
        }
    }

    if (playerSelection == "rock"){
        if (computerSelection == 'paper'){
            return "you lose!";
        } else if (computerSelection == 'rock'){
            return "it's a draw"
        } else {
            return "you win"
        }
    }

    if (playerSelection == "scissors"){
        if (computerSelection == "paper"){
            return "you win!";
        }
        else if (computerSelection == "rock"){
            return  "you lose!";
        }
        else {
            return "it's a draw!"; 
        }
    }

    


}
function game(){
    
}