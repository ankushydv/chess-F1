import { copyPosition } from "../helper";

export const movePawn = ({ positions, piece, rank, file, x, y }) => {
  //Detect En passant move of pawn then capture enemy pawn
  const newPositions = copyPosition(positions);
  if (!newPositions[x][y] && x !== rank && y !== file)
    newPositions[rank][y] = "";

  newPositions[rank][file] = "";
  newPositions[x][y] = piece;
  return newPositions;
};

export const movePiece = ({ positions, piece, rank, file, x, y }) => {
  const newPositions = copyPosition(positions);

  if (piece.endsWith("k") && Math.abs(y - file) > 1) {
    if (y === 2) {
      newPositions[rank][0] = "";
      newPositions[rank][3] = piece.startsWith("w") ? "wr" : "br";
    }
    if (y === 6) {
      newPositions[rank][7] = "";
      newPositions[rank][5] = piece.startsWith("w") ? "wr" : "br";
    }
  }

  newPositions[rank][file] = "";
  newPositions[x][y] = piece;
  return newPositions;
};
