import { InitUI, UpdateUI } from "./ui.js";
import { SaveGame, LoadGame } from "./save.js";
import { gameState, MiliToSec } from "./gameState.js";
import { GetTotalProduction } from "./producers.js";

//-------------------------------------------

let lastTimestamp = performance.now();
let uiTimer = 0;
let saveGameTimer = 0;

function gameLoop(currentTimestamp) {
    let deltaTime = currentTimestamp - lastTimestamp;
    lastTimestamp = currentTimestamp;
    
    gameState.currentEnergy += GetTotalProduction() * gameState.ticksPerSecond * deltaTime * MiliToSec;

    uiTimer += deltaTime;
    if (uiTimer >= gameState.settings.uiUpdateInterval) {
        UpdateUI();
        uiTimer -= gameState.settings.uiUpdateInterval;
    }
    
    saveGameTimer += deltaTime;
    if (saveGameTimer >= gameState.settings.autoSaveInterval) {
        SaveGame();
        saveGameTimer -= gameState.settings.autoSaveIntervall;
    }
    
    requestAnimationFrame(gameLoop);
}

//-------------------------------------------

LoadGame();

InitUI();

UpdateUI();

requestAnimationFrame(gameLoop);
