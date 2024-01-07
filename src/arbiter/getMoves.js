export const getRooksMoves = ({ position, piece, rank, file }) => {
  const moves = [];
  const us = piece[0];
  const enemy = us === "w" ? "b" : "w";
  const direaction = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  direaction.forEach((dir) => {
    for (let i = 1; i <= 8; i++) {
      const x = rank + i * dir[0];
      const y = file + i * dir[1];
      if (position?.[x]?.[y] === undefined) break;

      if (position[x][y].startsWith(enemy)) {
        moves.push([x, y]);
        break;
      }
      if (position[x][y].startsWith(us)) {
        break;
      }
      moves.push([x, y]);
    }
  });
  // console.log(moves[moves.length - 1]);
  return moves;
};
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
  direaction.forEach((c) => {
    const cell = position?.[rank + c[0]]?.[file + c[1]];
    if (cell !== undefined && (cell.startsWith(enemy) || cell === "")) {
      moves.push([rank + c[0], file + c[1]]);
    }
  });
  return moves;
};

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
  direaction.forEach((dir) => {
    for (let i = 1; i <= 8; i++) {
      const x = rank + i * dir[0];
      const y = file + i * dir[1];
      if (position?.[x]?.[y] === undefined) break;

      if (position[x][y].startsWith(enemy)) {
        moves.push([x, y]);
        break;
      }
      if (position[x][y].startsWith(us)) {
        break;
      }
      moves.push([x, y]);
    }
  });
  // console.log(moves[moves.length - 1]);
  return moves;
};

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
  direaction.forEach((dir) => {
    for (let i = 1; i <= 8; i++) {
      const x = rank + i * dir[0];
      const y = file + i * dir[1];
      if (position?.[x]?.[y] === undefined) break;

      if (position[x][y].startsWith(enemy)) {
        moves.push([x, y]);
        break;
      }
      if (position[x][y].startsWith(us)) {
        break;
      }
      moves.push([x, y]);
    }
  });
  // console.log(moves[moves.length - 1]);
  return moves;
};

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
  direaction.forEach((dir) => {
    // for (let i = 1; i <= 8; i++) {
    const x = rank + dir[0];
    const y = file + dir[1];
    if (position?.[x]?.[y] !== undefined && !position[x][y].startsWith(us)) {
      moves.push([x, y]);
    }

    // if (position[x][y].startsWith(enemy)) {
    //   moves.push([x, y]);
    //   break;
    // }

    // moves.push([x, y]);
    // }
  });
  // console.log(moves[moves.length - 1]);
  return moves;
};

export const getPawnMoves = ({ position, piece, rank, file }) => {
  const moves = [];
  const dir = piece === "wp" ? 1 : -1;

  if (!position?.[rank + dir]?.[file]) {
    moves.push([rank + dir, file]);
  }
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
