
export const STONE_DATA = {
    Drow_Lance_Master:  {up: 1, down: 0, right: 0, left: 1, image: "drow_lance_master.png"},
    Mohawk_Cyclops:     {up: 1, down: 0, right: 1, left: 0, image: "mohawk_cyclops.png"},
    Mace_Major:         {up: 0, down: 1, right: 0, left: 1, image: "mace_major.png"},
    Drow_Archer:        {up: 1, down: 1, right: 0, left: 0, image: "drow_archer.png"},
    Blaster_Troll:      {up: 0, down: 0, right: 1, left: 1, image: "blaster_troll.png"},
    Chompy_Bot_9000:    {up: 1, down: 1, right: 0, left: 0, image: "chompy_bot.png"},
    /*Arkeyan_Jouster:    {up: 2, down: 0, right: 1, left: 1},
    Inhuman_Shield:     {up: 0, down: 2, right: 1, left: 1},
    D_Riveter:          {up: 1, down: 1, right: 0, left: 2},
    Jawbreaker:         {up: 1, down: 1, right: 2, left: 0},
    enfuego_chompy:     {up: 1, down: 0, right: 0, left: 0},
    Frigid_chompy:      {up: 0, down: 1, right: 0, left: 0},
    spiderlings:        {up: 0, down: 0, right: 1, left: 0},
    chompy:             {up: 0, down: 0, right: 0, left: 1},
    Axecutioner:        {up: 3, down: 3, right: 3, left: 3},
    Arkeyan_Duelist:    {up: 4, down: 0, right: 0, left: 0},
    Bag_O_Boom:         {up: 0, down: 0, right: 4, left: 0},
    Shadow_Duke:        {up: 0, down: 4, right: 0, left: 0},
    Arkeyan_Sniper:     {up: 0, down: 0, right: 0, left: 4},
    Conquertron:        {up: 4, down: 4, right: 4, left: 4},*/

};

export function getRandomStones(count){
    const allStones = Object.values(STONE_DATA);
    
    for (let i = allStones.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allStones[i], allStones[j]] = [allStones[j], allStones[i]];
    }

    return allStones.slice(0, count);
}