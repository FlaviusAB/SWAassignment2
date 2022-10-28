import { findMatches} from "./helper"

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

        
        let matches:Match<T>[] = findMatches(first, second, this.width, this.height, this.boardValues)
       
        matches.forEach(element => {
            element.positions.forEach(el =>{
                console.log("possss............... [ "+el.row+","+el.col+"]")
            })
            
        });
       // console.log("possssMAtc............... = "+matches[0].matched+" doi.. "+matches[1].matched)

        if(matches[0]===undefined)
            return false
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
