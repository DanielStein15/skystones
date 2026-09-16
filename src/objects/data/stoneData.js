
export const STONE_DATA = {
    Troll:  {left :2, right : 1, up : 2, down: 1},
    Cyclops:  {left :1, right : 2, up : 1, down: 2},

};

export function getRandomStones(count){
    const allStones = Object.values(STONE_DATA);
    
    for (let i = allStones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allStones[i], allStones[j]] = [allStones[j], allStones[i]];
    }

    return allStones.slice(0, count);
}