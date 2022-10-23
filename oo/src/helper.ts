import { Position , Match} from "./board";


export function matchLR(first: Position, second: Position, width: number, height: number, board: any): Match<any> | undefined {
    const matchThree= {} as Match<any>;
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.col + 1 < width && second.col + 1 >= 0 && second.col - 1 < width && second.col - 1 >= 0) {
                if (board[second.row][second.col + 1] === firstV && board[second.row][second.col - 1] === firstV) {
                    return matchThree;
                }
            }
            if (first.col + 1 < width && first.col + 1 >= 0 && first.col - 1 < width && first.col - 1 >= 0) {
                if (board[first.row][first.col + 1] === secondV && board[first.row][first.col - 1] === secondV) {
                    matchThree.matched = secondV;
                    matchThree.positions?.push({row:first.row,col:first.col-1});
                    matchThree.positions?.push({row:first.row,col:first.col});
                    matchThree.positions?.push({row:first.row,col:first.col+1});
                    return matchThree;
                }
            }
        }
        return undefined;
    }

}

export function matchUD(first: Position, second: Position, height: number, width: number, board: any): Match<any> | undefined {
    const matchThree= {} as Match<any>;
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.row + 1 < height && second.row + 1 >= 0 && second.row - 1 < height && second.row - 1 >= 0) {
                if (board[second.row][second.col + 1] === firstV && board[second.row][second.col - 1] === firstV) {
                    matchThree.matched = firstV;
                    matchThree.positions?.push({row:second.row-1,col:second.col});
                    matchThree.positions?.push({row:second.row,col:second.col});
                    matchThree.positions?.push({row:second.row+1,col:second.col});
                    return matchThree;
                }
            
            if (first.col + 1 < height && first.col + 1 >= 0 && first.col - 1 < height && first.col - 1 >= 0) {
                if (board[first.row + 1][first.col] === secondV && board[first.row - 1][first.col] === secondV) {
                    matchThree.matched = secondV;
                    matchThree.positions?.push({row:first.row-1,col:first.col});
                    matchThree.positions?.push({row:first.row,col:first.col});
                    matchThree.positions?.push({row:first.row+1,col:first.col});
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
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.row + 2 < height && second.row + 2 >= 0) {
                if (board[second.row + 1][second.col] === firstV && board[second.row + 2][second.col] === firstV) {
                    matchThree.matched = firstV;
                    matchThree.positions?.push({row:second.row,col:second.col});
                    matchThree.positions?.push({row:second.row+1,col:second.col});
                    matchThree.positions?.push({row:second.row+2,col:second.col});
                    return matchThree;
                }
            
            if (first.row + 2 < height && first.row + 2 >= 0) {
                if (board[first.row + 1][first.col] === secondV && board[first.row + 2][first.col] === secondV) {
                    matchThree.matched = secondV;
                    matchThree.positions?.push({row:first.row,col:first.col});
                    matchThree.positions?.push({row:first.row+1,col:first.col});
                    matchThree.positions?.push({row:first.row+2,col:first.col});
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
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.row - 2 < height && second.row - 2 >= 0) {
                if (board[second.row - 1][second.col] === firstV && board[second.row - 2][second.col] === firstV) {
                    matchThree.matched = firstV;
                    matchThree.positions?.push({row:second.row-2,col:second.col});
                    matchThree.positions?.push({row:second.row-1,col:second.col});
                    matchThree.positions?.push({row:second.row,col:second.col});
                    return matchThree;
                }
            
            if (first.row - 2 < height && first.row - 2 >= 0) {
                if (board[first.row - 1][first.col] === secondV && board[first.row - 2][first.col] === secondV) {
                    matchThree.matched = secondV;
                    matchThree.positions?.push({row:first.row-2,col:first.col});
                    matchThree.positions?.push({row:first.row-1,col:first.col});
                    matchThree.positions?.push({row:first.row,col:first.col});
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
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.col + 2 < width && second.col + 2 >= 0) {
                if (board[second.row][second.col + 1] === firstV && board[second.row][second.col + 2] === firstV) {
                    matchThree.matched = firstV;
                    matchThree.positions?.push({row:second.row,col:second.col});
                    matchThree.positions?.push({row:second.row,col:second.col+1});
                    matchThree.positions?.push({row:second.row,col:second.col+2});
                    return matchThree;
                }
            
            if (first.col + 2 < width && first.col + 2 >= 0) {
                if (board[first.row][first.col + 1] === secondV && board[first.row][first.col + 2] === secondV) {
                
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
    if (first.row < height && first.row >= 0 && first.col < width && first.col >= 0 &&
        second.row < height && second.row >= 0 && second.col < width && second.col >= 0) {
        let firstV = board[first.row][first.col];
        let secondV = board[second.row][second.col];
        if (diagonalMove(first, second)) {
            if (second.col - 2 < width && second.col - 2 >= 0) {
                if (board[second.row][second.col - 1] === firstV && board[second.row][second.col - 2] === firstV) {
                    matchThree.matched = firstV;
                    matchThree.positions?.push({row:second.row,col:second.col-2});
                    matchThree.positions?.push({row:second.row,col:second.col-1});
                    matchThree.positions?.push({row:second.row,col:second.col});
                    return matchThree;
                }
            
            if (first.col - 2 < width && first.col - 2 >= 0) {
                if (board[first.row][first.col - 1] === secondV && board[first.row][first.col - 2] === secondV) {
                    matchThree.matched = secondV;
                    matchThree.positions?.push({row:first.row,col:first.col-2});
                    matchThree.positions?.push({row:first.row,col:first.col-1});
                    matchThree.positions?.push({row:first.row,col:first.col});
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

// export function markForCrush<T>(boardValues: any[], width: number, height: number): Position[] {
//     const arr: Match<T>[] = [];

//     //check per width
//     let widthAccumulator: Match<T>[] = [];
//     for (let i = 0; i < height; i++) {
//         for (let j = 0; j < width; j++) {
//             if (widthAccumulator.length === 0 || (j > 0 && widthAccumulator[widthAccumulator.length - 1].matched === boardValues[i][j - 1])) {
//                 widthAccumulator.push({matched: boardValues[i][j - 1], positions:[{col: i, row: j}]})
//                 console.log("col"+ i + " row:"+j)
//             } else {
//                 if (widthAccumulator.length < 3) {
//                     widthAccumulator = [];
//                 } else {
//                     arr.push(...widthAccumulator);
//                 }
//                 widthAccumulator[i].positions.push({ col: i, row: j} )
//             }
//         }
//     }

//     //check per width
//     let heightAccumulator: Position[] = [];
//     for (let i = 0; i < width; i++) {
//         for (let j = 0; j < height; j++) {
//             if (heightAccumulator.length === 0 || (j > 0 && heightAccumulator[heightAccumulator.length - 1] === boardValues[i][j - 1])) {
//                 heightAccumulator.push({ col: i, row: j } as Position)
//                 console.log("col"+ i + " row:"+j)
//             } else {
//                 if (heightAccumulator.length < 3) {
//                     heightAccumulator = [];
//                 } else {
//                     arr.push(...heightAccumulator);
//                 }
//                 heightAccumulator.push({ col: i, row: j } as Position)
//             }
//         }
//     }

//     return arr;
// }