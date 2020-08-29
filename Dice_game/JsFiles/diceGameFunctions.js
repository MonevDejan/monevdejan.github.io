function newGame() {
    if (global.activePLayer.globalScore >= global.finalScore) {
        disableEnableButtons();
        newGameButton.classList.toggle("animation");
    }

    //To set scrore to 0
    global.roundScore = 0;
    player1.name.innerHTML = "Player1 ";
    player2.name.innerHTML = "Player2 ";
    player1.globalScoreElement.textContent = "0";
    player2.globalScoreElement.textContent = "0";
    player1.globalScore = 0;
    player2.globalScore = 0;
    player1.currentScoreElement.textContent = "0";
    player2.currentScoreElement.textContent = "0";

    // to change background  and indicator of players turn
    player1.name.classList.remove("winner");
    player2.name.classList.remove("winner");
    toggleClasses();
  
    global.activePLayer = player1;
    toggleClasses();

    inputValue.setAttribute("placeholder", "");
    inputValue.value = "";

    global.gameInProgress = false;
}

function rollDice() {
    if (global.gameInProgress === false) {
        global.gameInProgress = true;
    }
 
    let randomValue = Math.round(Math.random() * (6 - 1) + 1);
    dicePicture.setAttribute("src", `./images/dice-${randomValue}.png`);

    if (randomValue !== 1) {
        global.roundScore += randomValue;
        global.activePLayer.currentScoreElement.textContent = global.roundScore;
    }
    else {
        nextPlayer();
    }
}

function holdScore() {
    global.activePLayer.globalScore += global.roundScore;
    global.activePLayer.globalScoreElement.textContent = global.activePLayer.globalScore;
    checkForWinner();
}

function checkForWinner() {
    if (global.activePLayer.globalScore >= global.finalScore) {
        global.activePLayer.name.textContent = "WINNER!";
        global.activePLayer.name.classList.toggle("winner");
        global.gameInProgress = false;
        disableEnableButtons();
        newGameButton.classList.toggle("animation");
    }
    else {
        nextPlayer();
    }
}

function nextPlayer() {
    // to reset the current player back to inactive
    global.roundScore = 0;
    global.activePLayer.currentScoreElement.textContent = "0";
    toggleClasses();

    //to set the next player to active
    global.activePLayer === player1 ? global.activePLayer = player2 : global.activePLayer = player1;
    toggleClasses();
}

function newFinalScore() {
    if(global.gameInProgress === false ) {
        if(isNaN(inputValue.value) || !inputValue.value || (inputValue.value <= 0) ) 
        { 
            inputValue.value = "";
            inputValue.setAttribute("placeholder", "Insert valid number!");
        }
        else
        {  
            global.finalScore = inputValue.value;
            inputValue.setAttribute("placeholder", "");
            label.textContent = `Final score = ${inputValue.value}`;
            inputValue.value = "";
        }
    }
    else {
        inputValue.setAttribute("placeholder", "Game in progress!");
    }
}

function disableEnableButtons() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.toggle("inactiveLink");
    }
    newGameButton.classList.toggle("inactiveLink");
}

function toggleClasses() {
    global.activePLayer.backgroundElement.classList.toggle("backgroundColorPale");
    global.activePLayer.spanElement.classList.toggle("redDot");
    global.activePLayer.name.classList.toggle("fontWeight400");
}

function instructions() {
    instuction.classList.toggle("displayNone");
    container.classList.toggle("displayNone");
}