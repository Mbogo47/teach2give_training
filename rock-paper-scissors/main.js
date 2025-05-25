const choices = document.querySelectorAll(".choice-item");
const handSections = document.querySelectorAll(".hand-section");
const winContainer = document.querySelector(".win-container");
const scoreBoard = document.querySelector(".header p:last-child");

let playerScore = 0;
let computerScore = 0;

// Initial state before any play
// Computer
handSections[0].textContent = "✋"; 
// Player
handSections[1].textContent = "✋"; 
winContainer.textContent = "Currently Draw";
scoreBoard.textContent = `Computer ${computerScore} Player ${playerScore}`;

const getResult = (player, computer) => {
  if (player === computer) return "draw";

  if (
    //   Rock covers Scissors
    (player === "✊" && computer === "✌️") ||
    // Paper covers Rock
    (player === "✋" && computer === "✊") ||
    // Scissors cuts Paper
    (player === "✌️" && computer === "✋")
  ) {
    return "player";
  } else {
    return "computer";
  }
};

// Loop through each choice element
for (const choice of choices) {
  choice.addEventListener("click", () => {
    const playerChoice = choice.textContent;

    //   Generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 2);

    //   Create an array of Computer emoji options
    const emojis = ["✊", "✋", "✌️"];

    //   Set the Computer Choice tto a random option from the array
    const computerChoice = emojis[randomNumber];

    // Display hands
    handSections[0].textContent = computerChoice;
    handSections[1].textContent = playerChoice;

    // display winner
    const result = getResult(playerChoice, computerChoice);

    if (result === "player") {
      playerScore++;
      winContainer.textContent = "player wins";
    } else if (result === "computer") {
      computerScore++;
      winContainer.textContent = "computer wins";
    } else {
      winContainer.textContent = "draw";
    }

    // Update scoreboard
    scoreBoard.textContent = `Computer ${computerScore} Player ${playerScore}`;
  });
}
