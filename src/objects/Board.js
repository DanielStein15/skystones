export class Board{
    constructor(){
        this.grid = this.createGrid();
    }

    createGrid(){
        const grid = [];
        for(let row = 0; row < 3; row++){
            grid[row] = [];
            for(let col = 0; col < 3; col++){
                grid[row][col] = {stone: null};
                }
            }
        return grid;

        }
    

    canPlace(row, col){
        if(this.grid[row][col].stone == null){
            return true;
        }
        return false;
    }

    placeStone(row, col, stone){
        if(this.canPlace(row, col) == true){
            this.grid[row][col].stone = stone;
            return true;
        }
        return false;
    }

    isFull(){
        for(let row = 0; row < 3; row++){
            for(let col = 0; col < 3; col++){
                if(this.canPlace(row, col) == true){
                    return false;
                }
            }
        }
        return true;
    }








}