import { findMatches, replaceTiles} from "./helper"

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
   
        if(matches[0]===undefined)
            return false
        return true;
        
    }

    move(first: Position, second: Position) {
        let eventObj:BoardEvent<any> 
        let matches:Match<T>[] = []
        matches = findMatches(first, second, this.width, this.height, this.boardValues)
        let positionsForReplacing :Position[] = []
        

        
        if(matches[0]!==undefined){
            matches.forEach(b =>{
               
                b.positions.forEach(p=>{
                        positionsForReplacing.push(p)
                    })
                    
                    eventObj = {kind:'Match', match:b};
                    this.listenersArray.forEach(e => e(eventObj))
                })
                let firstValue = this.boardValues[first.row][first.col];
                let secondValue = this.boardValues[second.row][second.col];
                this.boardValues[first.row][first.col] = secondValue;
                this.boardValues[second.row][second.col] = firstValue;     

            let replacedBoard = replaceTiles(positionsForReplacing,this.width,this.height,this.boardValues,this.generator)
            eventObj = {kind:'Refill'};
            this.listenersArray.forEach(e => e(eventObj))
            
            
        }
        
        
    }
}
