export const SecToMili = 1000;
export const MiliToSec = 1 / 1000;

export let gameState = {
    currentEnergy: 1,
    ticksPerSecond: 1,

    currentTier: 0,
    producers: [
        [
            { id:"0", name: "1Hz Radio Photon Emitter",             cost: 1,    production: 1,   count: 0 },
            { id:"1", name: "Cosmic Microwave Background Absorber", cost: 1e2,  production: 1e1, count: 0 },
            { id:"2", name: "Hydrogen Spin-Flipper",                cost: 1e4,  production: 1e3, count: 0 },
            { id:"3", name: "Thermal Vacuum Fluctuation Harvester", cost: 1e6,  production: 1e5, count: 0 },
            { id:"4", name: "Alpha Particle Decay Collector",       cost: 1e8,  production: 1e7, count: 0 }, 
            { id:"5", name: "Zeptosecond Laser Pulse Harvester",    cost: 1e10, production: 1e9, count: 0 }
        ]
    ],

    settings: {
        uiUpdateInterval: 50,
        autoSaveInterval: 30 * SecToMili,
        numberPresion: 3,
    }
};