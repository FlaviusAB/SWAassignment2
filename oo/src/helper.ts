import {
    Position,
    Match
} from "./board";

export function isNotDiagonalMove(first: Position, second: Position) {
    if (first.row === second.row || first.col === second.col) {
        return true;
    }
    return false;
}

export function findMatches(first: Position, second: Position, width: number, height: number, board: any): Match < any >[] | undefined {
    const matchThree = {}as Match < any > ;
    const positions: Position[] = [];
    matchThree.positions = []
    let allMatches: Match<any>[] = []

    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0 && isNotDiagonalMove(first,second)) {
        
        let firstValue = board[first.row][first.col];
        let secondValue = board[second.row][second.col];
       
        board[first.row][first.col] = secondValue;
        board[second.row][second.col] = firstValue;
        //check if 3 matches on every row
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width - 2; j++) {

                if (board[i][j] === board[i][j + 1] && board[i][j + 1] === board[i][j + 2]) {
                    positions.push({
                        row: i,
                        col: j
                    })
                    positions.push({
                        row: i,
                        col: j + 1
                    })
                    positions.push({
                        row: i,
                        col: j + 2
                    })

                    matchThree.positions = Object.assign([], positions)
                    matchThree.matched = board[i][j]
                    allMatches.push(matchThree)

                }
            }
        }
        //check if 3 matches on every column
        for (let i = 0; i < height - 2; i++) {
            for (let j = 0; j < width; j++) {
                if (board[i][j] === board[i + 1][j] && board[i + 1][j] === board[i + 2][j]) {
                    positions.push({
                        row: i,
                        col: j
                    })
                    positions.push({
                        row: i + 1,
                        col: j
                    })
                    positions.push({
                        row: i + 2,
                        col: j
                    })

                    matchThree.positions = Object.assign([], positions)
                    matchThree.matched = board[i][j]
                    allMatches.push(matchThree)
                }
            }
        }
        board[first.row][first.col] = firstValue;
        board[second.row][second.col] = secondValue;
    }
    return allMatches;
}