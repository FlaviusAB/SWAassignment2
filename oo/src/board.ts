import { match2D, match2L, match2R, match2U, matchLR, matchUD } from "./helper"


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
    kind: string,
    match: Match<T>
};

export type BoardListener<T> = (e: BoardEvent<T>) => void;

export class Board<T> {
    generator: Generator<T>
    width: number
    height: number
    boardValues: any[] = []
    listenersArray: ((e: BoardEvent<T>) => void)[] = []
    matches: any[]

    constructor(generator: Generator<T>, width: number, height: number) {
        this.generator = generator
        this.width = width
        this.height = height

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

    next(e: BoardEvent<T>) {
        this.listenersArray.forEach(element => {
            element(e);
        });
    }

    piece(p: Position): T | undefined {
        if (this.boardValues[p.row] === undefined)
            return undefined

        return this.boardValues[p.row][p.col]
    }

    canMove(first: Position, second: Position): boolean {
        let canMove = false
        this.matches = []
        this.matches.push(matchLR(first, second, this.width, this.height, this.boardValues))
        this.matches.push(matchUD(first, second, this.height, this.width, this.boardValues))
        this.matches.push(match2D(first, second, this.height, this.width, this.boardValues))
        this.matches.push(match2U(first, second, this.height, this.width, this.boardValues))
        this.matches.push(match2R(first, second, this.height, this.width, this.boardValues))
        this.matches.push(match2L(first, second, this.height, this.width, this.boardValues))

        this.matches.map(match => {
            if(match)
                {
                    //this.move(first,second)
                    //refil(match.positions)
                    canMove=true
                }
        })
        return canMove
    }

    move(first: Position, second: Position) {
        if(this.canMove(first, second)){
            let firstValue = this.boardValues[first.row][first.col];
            let secondValue = this.boardValues[second.row][second.col];
            this.boardValues[first.row][first.col] = secondValue;
            this.boardValues[second.row][second.col] = firstValue;

            
        }

    }
}