class GlobalVariables{
    constructor() {
        this.finalScore = 100;
        this.gameInProgress = false;
        this.roundScore = 0;
        this.activePLayer = player1;
    }
}

class PlayerElements {
    constructor(name, globalScoreElement, currentScoreElement, backgroundElement, spanElement) {
        this.name = name;
        this.globalScoreElement = globalScoreElement;
        this.currentScoreElement = currentScoreElement;
        this.backgroundElement = backgroundElement;
        this.spanElement = spanElement;
        this.globalScore = 0;
    }
}

