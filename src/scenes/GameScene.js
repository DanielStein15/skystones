import Phaser from 'phaser';
import { Board } from '../objects/Board.js';
import { Owner } from '../objects/Owner.js';
import { STONE_DATA } from '../objects/data/stoneData.js';



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
        this.renderHands();
        this.drawGrid();

    }
    


    renderHands(){
        //owner
        for(let i = 0; i < 5; i++){
            const owner1Hand = this.add.rectangle(100 + (200*i), 600, CELL_SIZE - 4, CELL_SIZE - 4, 0x3a3a5c);
            owner1Hand.setData('stone', this.player1.stones[i]);
           // const image = this.add.image(100 + (200*i), 600, stone.image);
           // rect.drawImage(this.player1.stones[i].image, img, 100 + (200*i), 600, CELL_SIZE - 4, CELL_SIZE - 4,);

            owner1Hand.setInteractive();
            owner1Hand.on('pointerdown', () => {
                this.selectedStone = owner1Hand.getData('stone');
                owner1Hand.setFillStyle(0xff0000);
            });
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
                rect.on('pointerdown', ()=> {
                        if(!this.selectedStone) return;  // nothing selected, do nothing
                        const placed = this.board.placeStone(row, col, this.selectedStone);
                            if(placed){
                                rect.setStrokeStyle(2, 0x0000ff);
                                this.selectedStone.destroy();
                                if(this.currentPlayer = 1){
                                    currentPlayer = 2;
                                }
                                else{
                                    currentPlyaer = 1;
                                }



                        }

                }

                )


            }
        }
    }
}
