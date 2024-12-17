//Rock - Paper - Scissors

 const choices =["rock", "paper", "scissors"];
 const playerDisplay = document.getElementById("playerDisplay");
 const computerDisplay = document.getElementById("computerDisplay");
 const resultDisplay = document.getElementById("resultDisplay");

 function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE 🤝";
    }
    else{

        switch(playerChoice){

            case "rock" :
            result = (computerChoice === "scissors") ? "YOU WIN!🎉" : "YOU LOSE😟";
            break;
            case "paper" :
            result = (computerChoice === "rock") ? "YOU WIN!🎉" : "YOU LOSE😟";
            break;
            case "scissors" :
            result = (computerChoice === "paper") ? "YOU WIN!🎉" : "YOU LOSE😟";
            break;
        }
    }
    playerDisplay.textContent = `PLAYER: ${playerChoice.toUpperCase()}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice.toUpperCase()}`;
    resultDisplay.textContent = `RESULT: ${result}`;
 }