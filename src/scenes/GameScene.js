import Phaser from 'phaser';
import { Board } from '../objects/Board.js';
import { Owner } from '../objects/Owner.js';

const CELL_SIZE = 120;
const GRID_ORIGIN_X = 200;
const GRID_ORIGIN_Y = 120;

export class GameScene extends Phaser.Scene {
    constructor(){
        super('GameScene');
        this.currentPlayer = 1;
        this.player1 = new Owner(1);
        this.player2 = new Owner(2);
    }

    create(){
        this.board = new Board();
        this.drawGrid();
        this.renderHands();
    }

    renderHands(){
        //owner
        stones[5] 
        for(let i = 0; i < 5; i++){
            tempRect = this.add.rectangle(100 + (200*i), 600, CELL_SIZE - 4, CELL_SIZE - 4, 0x3a3a5c);
            tempRect = this.player1.stones[i];
        }
    }

    drawGrid(){
        for(let row = 0; row < 3; row++){
            for(let col = 0; col < 3; col++){
                const x = GRID_ORIGIN_X + col * CELL_SIZE;
                const y = GRID_ORIGIN_Y + row * CELL_SIZE;

                const rect = this.add.rectangle(x, y, CELL_SIZE - 4, CELL_SIZE - 4, 0x3a3a5c);
                rect.setOrigin(0, 0);
                rect.setStrokeStyle(2, 0xffffff);

                rect.setInteractive();
                let stone;
                rect.on('pointerdown', () => {
                    console.log(`Clicked cell [${row}][${col}]`);
                    if(this.currentPlayer == 1){
                        stone = {left :1, right : 1, up : 1, down: 1, owner: 1};
                    }
                    else{
                        stone = {left :1, right : 1, up : 1, down: 1, owner: 2};
                    }
                    const placed = this.board.placeStone(row,col, stone);
                    if(placed == true && this.currentPlayer == 1){
                        rect.setFillStyle(0xff0000);  
                        this.currentPlayer = 2
                    }
                    else if(placed == true && this.currentPlayer == 2){
                        rect.setFillStyle(0x0000ff);
                        this.currentPlayer = 1;
                    }
                });
            }
        }
    }
}