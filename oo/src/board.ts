import { match2D, match2L, match2R, match2U, matchLR, matchUD} from "./helper"

export type Generator<T> = { next: () => T }

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

        for (let i = 0; i < height; i++) {
            let row = []
            for (let j = 0; j < width; j++) {
                row.push(generator.next())
            }
            this.boardValues.push(row)
        }

    }

    addListener(listener: BoardListener<T>) {

    }

    piece(p: Position): T | undefined {
        if (this.boardValues[p.row] === undefined)
            return undefined

        return this.boardValues[p.row][p.col]
    }

    canMove(first: Position, second: Position): boolean {

        if (matchLR(first, second, this.width, this.height, this.boardValues) ||
            matchUD(first, second, this.height, this.width, this.boardValues) ||
            match2D(first, second, this.height, this.width, this.boardValues) ||
            match2U(first, second, this.height, this.width, this.boardValues) ||
            match2R(first, second, this.width, this.height, this.boardValues) ||
            match2L(first, second, this.width, this.height, this.boardValues)) {
            return true;
        }
        return false;
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
