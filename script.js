let playerScore = 0;
let computerScore = 0; 

function getComputerChoice(){
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    
    var rand = Math.random();

    if (rand<0.33){
        return rock;
    } else if (rand<0.67){
        return paper;
    } else{
        return scissors;
    }
}
var computerSelection = getComputerChoice();

const container = document.querySelector('.container');
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

let playerResult = document.querySelector('.player-score');
let computerResult = document.querySelector('.computer-score');

const playerResultDiv = document.createElement('div');
playerResultDiv.textContent = playerScore;
playerResult.appendChild(playerResultDiv);

const computerResultDiv = document.createElement('div');
computerResultDiv.textContent = computerScore;
computerResult.appendChild(computerResultDiv);




function playRound(playerSelection, computerOpinion){
    computerOpinion = getComputerChoice();
   if(playerSelection === rockBtn){
    if(computerOpinion === 'Scissors'){
        playerScore++;
        playerResultDiv.textContent = playerScore;


        return "You win"



    } else if(playerSelection.innerText === computerOpinion){
        return "it's a tie!";
    } else{
        computerScore++;
        computerResultDiv.textContent = computerScore;
    }
   }

   if(playerSelection === paperBtn){
    if(computerOpinion === 'Rock'){
        playerScore++;
        playerResultDiv.textContent = playerScore;
    } else if(playerSelection.innerText === computerOpinion){
        return "it's a tie!";
    } else {
        computerScore++;
        computerResultDiv.textContent = computerScore;
    }
   }

   if(playerSelection === scissorsBtn){
    if(computerOpinion === 'Paper'){
        playerScore++;
        playerResultDiv.textContent = playerScore;
    } else if(playerSelection.innerText === computerOpinion){
        return "it's a tie!";
    } else {
        computerScore++;
        computerResultDiv.textContent = computerScore;
    }
   }
}
const finalResult = document.querySelector('.final-result');
const finalResultDiv = document.createElement('div');

function fiveGame(){
  for (let i =0;(computerScore||playerScore) ===5;i++){
    computerSelection = getComputerChoice();
    playerSelection = rockBtn, paperBtn, scissorsBtn;
    
  }
  if(computerScore ===5){
    finalResultDiv.textContent ="You have lost";
  } else {
    finalResultDiv.textContent = 'You won'
  }
};
rockBtn.addEventListener('click',()=>{
  playRound(rockBtn,computerSelection);
});

paperBtn.addEventListener('click', ()=>{
    console.log(playRound(paperBtn, computerSelection));
});

scissorsBtn.addEventListener('click', ()=>{
    console.log(playRound(scissorsBtn,computerSelection));
});