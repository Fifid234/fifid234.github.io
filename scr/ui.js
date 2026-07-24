import { ClickedOnProducer, GetTotalProduction, GetProducerProduction, CanUpgradeProducer } from "./producers.js";
import { gameState } from "./gameState.js";

function FormatNumber(number) {
    return number.toPrecision(gameState.settings.numberPresion)
}

export function InitUI() {
    const producerList = document.getElementById("producer-list");
    producerList.innerHTML = "";
    
    let currentProducersTier = gameState.producers[gameState.currentTier];
    
    currentProducersTier.forEach(producer => {
        const card = document.createElement("div");
        card.classList.add("producer-card");
        card.id = producer.id;

        card.onclick = (e) => ClickedOnProducer(e.currentTarget);

        card.innerHTML = `
            <span class="title">
                ${producer.name}
            </span>
            <span class="count">${producer.count}</span>
            <div class="info">
                <span class="cost">${producer.cost} J</span>
                <span class="rate">+${producer.production} J</span>
            </div>
        `;

        producerList.appendChild(card);
    });
}

export function UpdateUI() {
    const energyDisplay = document.getElementById("currentEnergy");
    energyDisplay.textContent = `${FormatNumber(gameState.currentEnergy)} J`;
    
    const energyRateDisplay = document.getElementById("currentEnergyPerSecond");
    energyRateDisplay.textContent = `+${FormatNumber(GetTotalProduction())} J`
    
    const tickDisplay = document.getElementById("totalTick");
    tickDisplay.textContent = `${FormatNumber(gameState.ticksPerSecond)} T/S`;

    let currentProducersTier = gameState.producers[gameState.currentTier];
    currentProducersTier.forEach(producer => {
        const card = document.getElementById(producer.id);
        if (CanUpgradeProducer(producer)) {
            card.classList.add("active");
        }
        else if (card.classList.contains("active")) {
            card.classList.remove("active")
        }

        card.querySelector(".title").textContent = producer.name;
        card.querySelector(".count").textContent = producer.count;
        card.querySelector(".cost").textContent = `${FormatNumber(producer.cost)} J`;
        card.querySelector(".rate").textContent = `+${FormatNumber(producer.production)} J`;
    });
}
