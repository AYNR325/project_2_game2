let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userResult = document.querySelector("#user-score");
const compResult = document.querySelector("#comp-score");

function genCompChoice() {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); //generate random number bet 0 to 2
  return options[randIdx]; //random num used as index for array to call choice
}
function drawGame() {
  console.log("game was draw");
  msg.innerText = "Game Was Draw";
  msg.style.backgroundColor = "rgb(10, 26, 57)";
}
function showWinner(userWin, userChoice, compChoice) {
  if (userWin) {
    console.log("you win");
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    userScore++;
    userResult.innerText = userScore;
  } else {
    console.log("you lose");
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
    compScore++;
    compResult.innerText = compScore;
  }
}
function playGame(userChoice) {
  console.log("user choice=", userChoice); //user choice
  const compChoice = genCompChoice();
  console.log("comp choice=", compChoice); //comp choice

  if (userChoice == compChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock"){//paper,scissors 
      if (compChoice === "paper") {
        userWin = false;
      } else {
        userWin = true;
      }
    } else if (userChoice === "paper") { //rock,scissors
      if (compChoice === "rock") {
        userWin = true;
      } else {
        userWin = false;
      }
    } else { //rock,paper
      if (userChoice === "scissors" && compChoice === "rock") {
        userWin = false;
      } else {
        userWin = true;
      }
    }
    showWinner(userWin, userChoice, compChoice);
  }
}
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was click",userChoice);
    playGame(userChoice);
  });
});
