var playerChoice = "";
var computerChoice = "";
var playerWins = 0;
var computerWins = 0;
var gamesTied = 0;
var possibleChoices = ["R", "P", "S"];
function computerChooses(){
    computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

function compareChoices(){
    computerChooses();
    if(computerChoice == "R" && playerChoice == "S"){ //Computer Win Scenarios
        alert("Computer chose rock, you lose!");
        computerWins = computerWins + 1; //computerWins++
    }  else if(computerChoice == "P" && playerChoice =="R"){
        alert("Computer chose paper, you lose!");
        computerWins = computerWins + 1; 
    } else if(computerChoice == "S" && playerChoice =="P"){
        alert("Computer chose scissors, you lose!");
        computerWins = computerWins + 1; 
    } else if (computerChoice == playerChoice){ //Tie Scenario
        alert("You chose the same option, no winners!");
        gamesTied = gamesTied + 1;
    } else if(playerChoice == "R" && computerChoice == "S"){ //Player Win Scenario
        alert("Computer chose scissors, you win!");
        playerWins = playerWins + 1; 
    } else if(playerChoice == "P" && computerChoice=="R"){
        alert("Computer chose rock, you win!");
        playerWins = playerWins + 1; 
    } else if(playerChoice == "S" && computerChoice == "P"){
        alert("Computer chose paper, you win!");
        playerWins = playerWins + 1; 
    }
}

function displayResults(){
    alert("You have " + playerWins + " wins.\nThe computer has " + computerWins + " wins.\nYou've tied " + gamesTied + " games.");
}

alert("Let's play rock, paper, scissors!");
playerChoice = prompt("Choose r for rock\n p for paper\n s for scissors")
playerChoice = playerChoice.toUpperCase();
while(playerChoice == "R" || playerChoice == "P" || playerChoice == "S"){
    compareChoices();
    displayResults();
    playerChoice = prompt("Choose r for rock\n p for paper\n s for scissors \nPress cancel to quit.")
    playerChoice = playerChoice.toUpperCase();
}

displayResults();
alert("Thanks for playing!");