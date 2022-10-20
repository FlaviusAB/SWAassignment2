export type Generator<T>= { next:() => T } 

export type Position = {
    row: number,
    col: number
}

export type Match<T> = {
    matched: T,
    positions: Position[]
}

export type BoardEvent<T> = null;

export type BoardListener<T> = null;

export class Board<T> {
    generator: Generator<T>
    width: number
    height: number
    boardValues: any[] = []

  constructor(generator: Generator<T>, width: number, height: number) {
    this.generator = generator
    this.width = width
    this.height = height
    
    for(let i= 0;i<height;i++)
    {
        let row = []
        for(let j= 0;j<width;j++)
        {
            row.push(generator.next())
        }
        this.boardValues.push(row)
    }
    
  }
  

     
    addListener(listener: BoardListener<T>) {
    }

    piece(p: Position): T | undefined {
        if(this.boardValues[p.row] === undefined)
            return undefined
        
        return this.boardValues[p.row][p.col]
    }

    canMove(first: Position, second: Position): boolean {
        return false
    }
    
    move(first: Position, second: Position) {
    }
}
