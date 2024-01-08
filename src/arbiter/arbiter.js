import {
  getRooksMoves,
  getKnightMoves,
  getBishopMoves,
  getQueenMoves,
  getKingMoves,
  getPawnMoves,
  getPawnCapture,
} from "./getMoves";

const arbiter = {
  //Get the position of the piece and there name exmaple: pieceName (piece or position)
  getRegularMoves: function ({ position, piece, rank, file }) {
    if (position[rank][file].endsWith("r"))
      return getRooksMoves({ position, piece, rank, file });

    if (position[rank][file].endsWith("b"))
      return getBishopMoves({ position, piece, rank, file });

    if (position[rank][file].endsWith("q"))
      return getQueenMoves({ position, piece, rank, file });

    if (position[rank][file].endsWith("n"))
      return getKnightMoves({ position, rank, file });

    if (position[rank][file].endsWith("k"))
      return getKingMoves({ position, piece, rank, file });

    if (position[rank][file].endsWith("p"))
      return [
        ...getPawnMoves({ position, piece, rank, file }),
        ...getPawnCapture({ position, piece, rank, file }),
      ];
  },
};

export default arbiter;
