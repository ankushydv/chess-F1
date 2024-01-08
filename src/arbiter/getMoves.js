// Function to get valid moves for rooks on the chessboard
export const getRooksMoves = ({ position, piece, rank, file }) => {
  const moves = [];
  const us = piece[0]; // Determine the current player's turn based on the piece color
  const enemy = us === "w" ? "b" : "w"; // Identify the opponent's color
  //Rooks Move in the board
  const direaction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  // Iterate over possible directions for rook moves
  direaction.forEach((dir) => {
    // Break if out of bounds
    for (let i = 1; i <= 8; i++) {
      //Adding the rows
      const x = rank + i * dir[0];
      //Adding the columns
      const y = file + i * dir[1];
      // Break if out of bounds
      if (position?.[x]?.[y] === undefined) break;
      // Capture enemy pieces
      if (position[x][y].startsWith(enemy)) {
        moves.push([x, y]);
        break;
      }
      // Break if own piece is encountered
      if (position[x][y].startsWith(us)) {
        break;
      }
      // Add the current position to valid moves
      moves.push([x, y]);
    }
  });
  return moves;
};
// Function to get valid moves for knights on the chessboard
export const getKnightMoves = ({ position, rank, file }) => {
  const moves = [];
  const enemy = position[rank][file].startsWith("w") ? "b" : "w";
  const direaction = [
    [-2, 1],
    [2, -1],
    [-2, -1],
    [-1, 2],
    [-1, -2],
    [1, -2],
    [2, 1],
    [1, 2],
  ];
  // Iterate over possible knight moves
  direaction.forEach((c) => {
    const cell = position?.[rank + c[0]]?.[file + c[1]];
    // Add valid moves to the list
    if (cell !== undefined && (cell.startsWith(enemy) || cell === "")) {
      moves.push([rank + c[0], file + c[1]]);
    }
  });
  return moves;
};
// Function to get valid moves for bishops on the chessboard
export const getBishopMoves = ({ position, piece, rank, file }) => {
  const moves = [];
  const us = piece[0];
  const enemy = us === "w" ? "b" : "w";
  const direaction = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
  ];

  // Iterate over possible directions for bishop moves
  direaction.forEach((dir) => {
    for (let i = 1; i <= 8; i++) {
      const x = rank + i * dir[0];
      const y = file + i * dir[1];

      // Break if out of bounds
      if (position?.[x]?.[y] === undefined) break;
      // Capture enemy pieces
      if (position[x][y].startsWith(enemy)) {
        moves.push([x, y]);
        break;
      }
      // Break if own piece is encountered
      if (position[x][y].startsWith(us)) {
        break;
      }
      // Add the current position to valid moves
      moves.push([x, y]);
    }
  });
  return moves;
};
// Function to get valid moves for queens on the chessboard
export const getQueenMoves = ({ position, piece, rank, file }) => {
  const moves = [];
  const us = piece[0];
  const enemy = us === "w" ? "b" : "w";
  const direaction = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  // Iterate over possible directions for queen moves
  direaction.forEach((dir) => {
    for (let i = 1; i <= 8; i++) {
      const x = rank + i * dir[0];
      const y = file + i * dir[1];
      // Break if out of bounds
      if (position?.[x]?.[y] === undefined) break;
      // Capture enemy pieces
      if (position[x][y].startsWith(enemy)) {
        moves.push([x, y]);
        break;
      }
      // Break if own piece is encountered
      if (position[x][y].startsWith(us)) {
        break;
      }
      // Add the current position to valid moves
      moves.push([x, y]);
    }
  });
  return moves;
};
// Function to get valid moves for kings on the chessboard
export const getKingMoves = ({ position, piece, rank, file }) => {
  const moves = [];
  const us = piece[0];
  // const enemy = us === "w" ? "b" : "w";
  const direaction = [
    [-1, 1],
    [1, 1],
    [1, -1],
    [-1, -1],
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  // Iterate over possible king moves
  direaction.forEach((dir) => {
    const x = rank + dir[0];
    const y = file + dir[1];
    // Add valid moves to the list
    if (position?.[x]?.[y] !== undefined && !position[x][y].startsWith(us)) {
      moves.push([x, y]);
    }
  });
  return moves;
};
// Function to get valid moves for pawns on the chessboard
export const getPawnMoves = ({ position, piece, rank, file }) => {
  const moves = [];
  const dir = piece === "wp" ? 1 : -1;
  // Move one square forward if the square is empty
  if (!position?.[rank + dir]?.[file]) {
    moves.push([rank + dir, file]);
  }
  // Special pawn move: move two squares forward if it's the pawn's first move
  if (rank % 5 === 1) {
    if (
      position?.[rank + dir]?.[file] === "" &&
      position?.[rank + dir + dir]?.[file] === ""
    ) {
      moves.push([rank + dir + dir, file]);
    }
  }

  return moves;
};

// Function to get valid capture moves for pawns on the chessboard

export const getPawnCapture = ({
  position,
  prevPosition,
  piece,
  rank,
  file,
}) => {
  const moves = [];
  const dir = piece === "wp" ? 1 : -1;
  const enemy = piece[0] === "w" ? "b" : "w";
  // Capture diagonally left
  if (
    position?.[rank + dir]?.[file - 1] &&
    position?.[rank + dir]?.[file - 1].startsWith(enemy)
  ) {
    moves.push([rank + dir, file - 1]);
  }
  // Capture diagonally right
  if (
    position?.[rank + dir]?.[file + 1] &&
    position?.[rank + dir]?.[file + 1].startsWith(enemy)
  ) {
    moves.push([rank + dir, file + 1]);
  }
  //En-Passant move
  const enemyPawn = dir === 1 ? "bp" : "wp";
  const adjacentPawn = [file - 1, file + 1];
  if (prevPosition) {
    console.log(prevPosition + "Yhaa tak arr h");
    if ((dir === 1 && rank === 4) || (dir === -1 && rank === 3)) {
      console.log("ahha tah");
      adjacentPawn.forEach((f) => {
        if (
          position?.[rank]?.[f] === enemyPawn &&
          position?.[rank + dir + dir]?.[f] === "" &&
          prevPosition?.[rank]?.[f] === "" &&
          prevPosition?.[rank + dir + dir]?.[f] === enemyPawn
        ) {
          console.log("and aaha tak");
          moves.push([rank + dir, file - 1]);
        }
      });
    }
  }

  return moves;
};
