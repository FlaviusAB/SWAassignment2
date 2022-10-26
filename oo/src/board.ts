import { findMatches, match2D, match2L, match2R, match2U, matchLR, matchUD} from "./helper"

export type Generator<T> = { next: () => T }

export type Position = {
    row: number,
    col: number
}

export type Match<T> = {
    matched: T,
    positions: Position[]
}

export type BoardEvent<T> = {
    kind:'Match',
    match:Match<T>
} | 
{ 
    kind: 'Refill' 
};

export type BoardListener<T> = (e: BoardEvent<T>) => void;

export class Board<T> {
    generator: Generator<T>
    width: number
    height: number
    boardValues: any[] 
    listenersArray: BoardListener<T>[] 
    matches: Match<T>

    constructor(generator: Generator<T>, width: number, height: number) {
        this.generator = generator
        this.width = width
        this.height = height
        this.boardValues = []
        this.listenersArray = []

        for (let i = 0; i < height; i++) {
            let row = []
            for (let j = 0; j < width; j++) {
                row.push(generator.next())
            }
            this.boardValues.push(row)
        }

    }

    addListener(listener: BoardListener<T>) {
        this.listenersArray.push(listener)
    }

    piece(p: Position): T | undefined {
        if (this.boardValues[p.row] === undefined)
            return undefined

        return this.boardValues[p.row][p.col]
    }

    canMove(first: Position, second: Position): boolean {
        //let canMove = false
        
        let arr:Match<T> = findMatches(first, second, this.width, this.height, this.boardValues)
       
        
        // this.matches = matchLR(first, second, this.width, this.height, this.boardValues);
        // if(this.matches === undefined){
        //     this.matches = matchUD(first, second, this.height, this.width, this.boardValues);
        //     if(this.matches === undefined){
        //         this.matches = match2D(first, second, this.height, this.width, this.boardValues);
        //         if(this.matches === undefined){
        //             this.matches = match2U(first, second, this.height, this.width, this.boardValues);
        //             if(this.matches === undefined){
        //                 this.matches = match2R(first, second, this.height, this.width, this.boardValues);
        //                 if(this.matches === undefined){
        //                     this.matches = match2L(first, second, this.height, this.width, this.boardValues);
        //                     if(this.matches === undefined){
        //                         return false;
        //                     }
        //                 }
        //             }
        //         }
        //     }    
        // }
         return true;
        
    }

    move(first: Position, second: Position) {

        //21 passed with this.canMove(first, second)
        //25 passed with this.canMove(second, first) -- might be false positive
        // if(this.canMove(first, second)){

            
            
        //     let eventObj:BoardEvent<any> = {kind:'Match', match:this.matches};
        //     this.listenersArray.forEach(e => e(eventObj))

        //     if(this.canMove(second, first)){

        //         eventObj = {kind:'Match', match:this.matches};
        //         this.listenersArray.forEach(e => e(eventObj))
        //     }

        //     let firstValue = this.boardValues[first.row][first.col];
        //     let secondValue = this.boardValues[second.row][second.col];
        //     this.boardValues[first.row][first.col] = secondValue;
        //     this.boardValues[second.row][second.col] = firstValue;

            
        // }
        
        
        
    }
}
