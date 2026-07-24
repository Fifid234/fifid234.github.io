import { gameState } from "./gameState.js";

export function GetProducerProduction(producer) {
    return producer.production * producer.count;
}

export function GetTotalProduction() {
    let totalProduction = 0;

    gameState.producers[gameState.currentTier].forEach(producer => {
        totalProduction += GetProducerProduction(producer);
    });

    return totalProduction;
}

export function CanUpgradeProducer(producer) {
    return gameState.currentEnergy >= producer.cost;
}

function ProducerCostFormula(cost) {
    return cost*1.5;
}

function BuyProducer(producer) {
    gameState.currentEnergy -= producer.cost;
    producer.cost = ProducerCostFormula(producer.cost);
    producer.count++;
}

export function ClickedOnProducer(element) {
    let producer = gameState.producers[gameState.currentTier][parseInt(element.id)];
    if (CanUpgradeProducer(producer)) {
        BuyProducer(producer);
    }
}