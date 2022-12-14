import { Position , Match} from "./board";


export function matchLR(first: Position, second: Position, width: number, height: number, board: any): Match<any> | undefined {
    const matchThree= {} as Match<any>;
    const positions:Position[] = [];
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.col + 1 < width && second.col + 1 >= 0 && second.col - 1 < width && second.col - 1 >= 0) {
                if (board[second.row][second.col + 1] === firstV && board[second.row][second.col - 1] === firstV) {
                    matchThree.matched = firstV;
                    positions.push({row:second.row,col:second.col-1});
                    positions.push({row:second.row,col:second.col});
                    positions.push({row:second.row,col:second.col+1});
                    matchThree.positions = positions;
                    return matchThree;
                }
                if (first.col + 1 < width && first.col + 1 >= 0 && first.col - 1 < width && first.col - 1 >= 0) {
                if (board[first.row][first.col + 1] === secondV && board[first.row][first.col - 1] === secondV) {
                    matchThree.matched = secondV;
                    positions.push({row:first.row,col:first.col-1});
                    positions.push({row:first.row,col:first.col});
                    positions.push({row:first.row,col:first.col+1});
                    matchThree.positions = positions;
                    return matchThree;
                }
            }
            }
            
        }
        return undefined;
    }

}

export function matchUD(first: Position, second: Position, height: number, width: number, board: any): Match<any> | undefined {
    const matchThree= {} as Match<any>;
    const positions:Position[] = [];
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.row + 1 < height && second.row + 1 >= 0 && second.row - 1 < height && second.row - 1 >= 0) {
                if (board[second.row][second.col + 1] === firstV && board[second.row][second.col - 1] === firstV) {
                    matchThree.matched = firstV;
                    positions.push({row:second.row-1,col:second.col});
                    positions.push({row:second.row,col:second.col});
                    positions.push({row:second.row+1,col:second.col});
                    matchThree.positions = positions;
                    return matchThree;
                }
                if (first.col + 1 < height && first.col + 1 >= 0 && first.col - 1 < height && first.col - 1 >= 0) {
                if (board[first.row + 1][first.col] === secondV && board[first.row - 1][first.col] === secondV) {
                    matchThree.matched = secondV;
                    positions.push({row:first.row-1,col:first.col});
                    positions.push({row:first.row,col:first.col});
                    positions.push({row:first.row+1,col:first.col});
                    matchThree.positions = positions;
                    return matchThree;
                }
            }
            }
            
        }
        return undefined;
    }

}

export function match2D(first: Position, second: Position, height: number, width: number, board: any): Match<any> | undefined {
    const matchThree= {} as Match<any>;
    const positions:Position[] = [];
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.row + 2 < height && second.row + 2 >= 0) {
                if (board[second.row + 1][second.col] === firstV && board[second.row + 2][second.col] === firstV) {
                    matchThree.matched = firstV;
                    positions.push({row:second.row,col:second.col});
                    positions.push({row:second.row+1,col:second.col});
                    positions.push({row:second.row+2,col:second.col});
                    matchThree.positions = positions;
                    return matchThree;
                }
                if (first.row + 2 < height && first.row + 2 >= 0) {
                if (board[first.row + 1][first.col] === secondV && board[first.row + 2][first.col] === secondV) {
                    matchThree.matched = secondV;
                    positions.push({row:first.row,col:first.col});
                    positions.push({row:first.row+1,col:first.col});
                    positions.push({row:first.row+2,col:first.col});
                    matchThree.positions = positions;
                    return matchThree;
                }
            }
            }
            
        }
        return undefined;
    }
}

export function match2U(first: Position, second: Position, height: number, width: number, board: any): Match<any> | undefined {
    const matchThree= {} as Match<any>;
    const positions:Position[] = [];
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.row - 2 < height && second.row - 2 >= 0) {
                if (board[second.row - 1][second.col] === firstV && board[second.row - 2][second.col] === firstV) {
                    matchThree.matched = firstV;
                    positions.push({row:second.row-2,col:second.col});
                    positions.push({row:second.row-1,col:second.col});
                    positions.push({row:second.row,col:second.col});
                    matchThree.positions = positions;
                    return matchThree;
                }
                if (first.row - 2 < height && first.row - 2 >= 0) {
                if (board[first.row - 1][first.col] === secondV && board[first.row - 2][first.col] === secondV) {
                    matchThree.matched = secondV;
                    positions.push({row:first.row-2,col:first.col});
                    positions.push({row:first.row-1,col:first.col});
                    positions.push({row:first.row,col:first.col});
                    matchThree.positions = positions;
                    return matchThree;
                }
            }
            }
            
        }
        return undefined;
    }
}

export function match2R(first: Position, second: Position, width: number, height: number, board: any): Match<any> | undefined{
    const matchThree= {} as Match<any>;
    const positions:Position[] = [];
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.col + 2 < width && second.col + 2 >= 0) {
                if (board[second.row][second.col + 1] === firstV && board[second.row][second.col + 2] === firstV) {
                    matchThree.matched = firstV;
                    positions.push({row:second.row,col:second.col});
                    positions.push({row:second.row,col:second.col+1});
                    positions.push({row:second.row,col:second.col+2});
                    matchThree.positions = positions;
                    return matchThree;
                }
                if (first.col + 2 < width && first.col + 2 >= 0) {
                if (board[first.row][first.col + 1] === secondV && board[first.row][first.col + 2] === secondV) {
                    matchThree.matched = secondV;
                    positions.push({row:first.row,col:first.col});
                    positions.push({row:first.row,col:first.col+1});
                    positions.push({row:first.row,col:first.col+2});
                    matchThree.positions = positions;
                    return matchThree;
                }
            }
            }
            
        }
        return undefined;
    }
}

export function match2L(first: Position, second: Position, width: number, height: number, board: any): Match<any> | undefined {
    const matchThree= {} as Match<any>;
    const positions:Position[] = [];
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.col - 2 < width && second.col - 2 >= 0) {
                if (board[second.row][second.col - 1] === firstV && board[second.row][second.col - 2] === firstV) {
                    matchThree.matched = firstV;
                    positions.push({row:second.row,col:second.col-2});
                    positions.push({row:second.row,col:second.col-1});
                    positions.push({row:second.row,col:second.col});
                    matchThree.positions = positions;
                    return matchThree;
                }
                if (first.col - 2 < width && first.col - 2 >= 0) {
                if (board[first.row][first.col - 1] === secondV && board[first.row][first.col - 2] === secondV) {
                    matchThree.matched = secondV;
                    positions.push({row:first.row,col:first.col-2});
                    positions.push({row:first.row,col:first.col-1});
                    positions.push({row:first.row,col:first.col});
                    matchThree.positions = positions;
                    return matchThree;
                }
            }
            }
            
        }
        return undefined;
    }
}

export function diagonalMove(first: Position, second: Position) {
    if (first.row === second.row || first.col === second.col) {
        return true;
    }
    return false;
}