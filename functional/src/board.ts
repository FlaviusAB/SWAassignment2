import { findMatchesWhenMoving, findMatchesRowAndColumn, replaceTiles} from "./helper"
export type Generator<T>= { next:() => T } 

export type Position = {
    row: number,
    col: number
}    

export type Match<T> = {
    matched: T,
    positions: Position[]
}    

export type Board<T> = {
    width: number,
    height: number,
    boardValues: any[]
};

export type Effect<T> = {
    kind: 'Match',
    match: Match<T>
} | 
{
    kind: 'Refill',
    board: Board<T>
}

export type MoveResult<T> = {
    board: Board<T>,
    effects: Effect<T>[]
}    

export function create<T>(generator: Generator<T>, width: number, height: number): Board<T> {
    
    let boardValues = []
    for (let i = 0; i < height; i++) {
        let row = []
        for (let j = 0; j < width; j++) {
            row.push(generator.next())
        }
        boardValues.push(row)
    }
    return {width: width, height: height, boardValues: boardValues}
}    

export function piece<T>(board: Board<T>, p: Position): T | undefined {
    if (board.boardValues[p.row] === undefined)
            return undefined

        return board.boardValues[p.row][p.col]
}    

export function canMove<T>(board: Board<T>, first: Position, second: Position): boolean {
    let matches:Match<T>[] = findMatchesWhenMoving(first, second, board.width, board.height, board.boardValues)       
   
        if(matches[0]===undefined)
            return false
        return true;
}

export function move<T>(generator: Generator<T>, board: Board<T>, first: Position, second: Position): MoveResult<T> {
        let effects:Effect<T>[] = []
        let matches:Match<T>[] = []
        matches = findMatchesWhenMoving(first, second, board.width, board.height, board.boardValues)
        let positionsForReplacing :Position[] = []
        let matchedPositionsAfterRefil :Position[] = []
        let replacedBoard
        let replacedBoardAfter


        if(matches[0]!==undefined){
            matches.forEach(matchedValues =>{
               
                matchedValues.positions.forEach(p=>{
                        positionsForReplacing.push(p)
                    })
                    
                    effects.push( {kind:'Match', match:matchedValues});
                    
                })
                let firstValue = board.boardValues[first.row][first.col];
                let secondValue = board.boardValues[second.row][second.col];
                board.boardValues[first.row][first.col] = secondValue;
                board.boardValues[second.row][second.col] = firstValue;     

            replacedBoard = replaceTiles(positionsForReplacing,board.width,board.height,board.boardValues,generator)
            effects.push({kind:'Refill', board:replacedBoard});
            

            let matchesAfterRefil = findMatchesRowAndColumn(board.width,board.height,replacedBoard)
            while(matchesAfterRefil[0]!==undefined){
                matchesAfterRefil.forEach(matchedValues =>{
               
                    matchedValues.positions.forEach(p=>{
                        matchedPositionsAfterRefil.push(p)
                        })
                        
                        effects.push({kind:'Match', match:matchedValues});
                        
                    })
                    replacedBoardAfter = replaceTiles(matchedPositionsAfterRefil,board.width,board.height,board.boardValues,generator)
                    effects.push({kind:'Refill', board:replacedBoardAfter});
                    
                    matchesAfterRefil = findMatchesRowAndColumn(board.width,board.height,replacedBoardAfter)
            }
             
        }
      
      return {board: board, effects:effects}  
        
    }

