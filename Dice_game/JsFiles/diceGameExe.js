//assigning elements
let allButtons = document.getElementsByTagName("button");
let newGameButton = allButtons[0];
let instructionsButton = allButtons[1];
let setFinalSvoreButton = allButtons[2];
let rollDiceButton = allButtons[3];
let holdScoreButton = allButtons[4];
let backToGame = document.getElementsByTagName("a")[0];

let label = document.getElementsByTagName("label")[0];
let inputValue = document.getElementById("finalScoreLable");

let dicePicture = document.querySelector("#diceContainer > img");
let pElements = document.querySelectorAll("p:last-of-type");
let playerContainer = document.querySelectorAll(".player");
let spans = document.querySelectorAll(".playerContainer span");

let instuction = document.getElementById("rules");
let container = document.getElementById("gameContainer");
                             //  name,        globalScore,   currentscore,  bacground,          span
let player1 = new PlayerElements(pElements[0], pElements[1], pElements[2], playerContainer[0], spans[0]);
let player2 = new PlayerElements(pElements[3], pElements[4], pElements[5], playerContainer[1], spans[1]);
let global = new GlobalVariables();

//assigning eventlisteners
newGameButton.addEventListener("click", newGame);
setFinalSvoreButton.addEventListener("click", newFinalScore);
rollDiceButton.addEventListener("click",  rollDice);
holdScoreButton.addEventListener("click", holdScore);
instructionsButton.addEventListener("click", instructions);
backToGame.addEventListener("click", instructions); 


