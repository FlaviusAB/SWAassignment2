import { Position } from "./board";


export function matchLR(first: Position, second: Position, width: number, height: number, board: any): boolean {
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        console.log("matchLR METHOD")
        console.log("first row: " + first.row + " first col: " + first.col + " value: " + firstV)
        console.log("second row: " + second.row + " second col: " + second.col + " value: " + secondV)
        if (diagonalMove(first, second)) {
            if (second.col + 1 < width && second.col + 1 >= 0 && second.col - 1 < width && second.col - 1 >= 0) {
                if (board[second.row][second.col + 1] === firstV && board[second.row][second.col - 1] === firstV) {
                    return true;
                }
            }
            if (first.col + 1 < width && first.col + 1 >= 0 && first.col - 1 < width && first.col - 1 >= 0) {
                if (board[first.row][first.col + 1] === secondV && board[first.row][first.col - 1] === secondV) {
                    return true;
                }
            }
        }
        return false;
    }

}

export function matchUD(first: Position, second: Position, height: number, width: number, board: any): boolean {
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        console.log("matchUD METHOD")
        console.log("first row: " + first.row + " first col: " + first.col + " value: " + firstV)
        console.log("second row: " + second.row + " second col: " + second.col + " value: " + secondV)
        if (diagonalMove(first, second)) {
            if (second.row + 1 < height && second.row + 1 >= 0 && second.row - 1 < height && second.row - 1 >= 0) {
                if (board[second.row][second.col + 1] === firstV && board[second.row][second.col - 1] === firstV) {
                    return true;
                }
            }
            if (first.col + 1 < height && first.col + 1 >= 0 && first.col - 1 < height && first.col - 1 >= 0) {
                if (board[first.row + 1][first.col] === secondV && board[first.row - 1][first.col] === secondV) {
                    return true;
                }
            }
        }
        return false;
    }

}

export function match2D(first: Position, second: Position, height: number, width: number, board: any): boolean {
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        console.log("match2D METHOD")
        console.log("first row: " + first.row + " first col: " + first.col + " value: " + firstV)
        console.log("second row: " + second.row + " second col: " + second.col + " value: " + secondV)
        if (diagonalMove(first, second)) {
            if (second.row + 2 < height && second.row + 2 >= 0) {
                if (board[second.row + 1][second.col] === firstV && board[second.row + 2][second.col] === firstV) {
                    return true;
                }
            }
            if (first.row + 2 < height && first.row + 2 >= 0) {
                if (board[first.row + 1][first.col] === secondV && board[first.row + 2][first.col] === secondV) {
                    return true;
                }
            }
        }
        return false;
    }
}

export function match2U(first: Position, second: Position, height: number, width: number, board: any): boolean {
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        console.log("match2U METHOD")
        console.log("first row: " + first.row + " first col: " + first.col + " value: " + firstV)
        console.log("second row: " + second.row + " second col: " + second.col + " value: " + secondV)
        if (diagonalMove(first, second)) {
            if (second.row - 2 < height && second.row - 2 >= 0) {
                if (board[second.row - 1][second.col] === firstV && board[second.row - 2][second.col] === firstV) {
                    return true;
                }
            }
            if (first.row - 2 < height && first.row - 2 >= 0) {
                if (board[first.row - 1][first.col] === secondV && board[first.row - 2][first.col] === secondV) {
                    return true;
                }
            }
        }
        return false;
    }
}

export function match2R(first: Position, second: Position, width: number, height: number, board: any): boolean {
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        console.log("match2R METHOD")
        console.log("first row: " + first.row + " first col: " + first.col + " value: " + firstV)
        console.log("second row: " + second.row + " second col: " + second.col + " value: " + secondV)
        if (diagonalMove(first, second)) {
            if (second.col + 2 < width && second.col + 2 >= 0) {
                if (board[second.row][second.col + 1] === firstV && board[second.row][second.col + 2] === firstV) {
                    return true;
                }
            }
            if (first.col + 2 < width && first.col + 2 >= 0) {
                if (board[first.row][first.col + 1] === secondV && board[first.row][first.col + 2] === secondV) {
                    return true;
                }
            }
        }
        return false;
    }
}

export function match2L(first: Position, second: Position, width: number, height: number, board: any): boolean {
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        console.log("match2L METHOD")
        console.log("first row: " + first.row + " first col: " + first.col + " value: " + firstV)
        console.log("second row: " + second.row + " second col: " + second.col + " value: " + secondV)
        if (diagonalMove(first, second)) {
            if (second.col - 2 < width && second.col - 2 >= 0) {
                if (board[second.row][second.col - 1] === firstV && board[second.row][second.col - 2] === firstV) {
                    return true;
                }
            }
            if (first.col - 2 < width && first.col - 2 >= 0) {
                if (board[first.row][first.col - 1] === secondV && board[first.row][first.col - 2] === secondV) {
                    return true;
                }
            }
        }
        return false;
    }
}

export function diagonalMove(first: Position, second: Position) {
    if (first.row === second.row || first.col === second.col) {
        return true;
    }
    return false;
}