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

  newPositions[rank][file] = " ";
  newPositions[x][y] = piece;
  return newPositions;
};
