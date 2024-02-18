import {
  getRooksMoves,
  getKnightMoves,
  getBishopMoves,
  getQueenMoves,
  getKingMoves,
  getPawnMoves,
  getPawnCapture,
  getCastlingMoves,
} from "./getMoves";
import { movePawn, movePiece } from "./move";

const arbiter = {
  //Get the position of the piece and there name exmaple: pieceName (piece or position)
  getRegularMoves: function ({ position, prevPosition, piece, rank, file }) {
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
        ...getPawnCapture({ position, prevPosition, piece, rank, file }),
      ];
  },
  getValidMoves: function ({
    position,
    prevPosition,
    castleDirection,
    piece,
    rank,
    file,
  }) {
    let moves = this.getRegularMoves({ position, piece, rank, file });
    if (piece.endsWith("p")) {
      moves = [
        ...moves,
        ...getPawnCapture({ position, prevPosition, piece, rank, file }),
      ];
    }
    if (piece.endsWith("k")) {
      moves = [
        ...moves,
        ...getCastlingMoves({
          position,
          castleDirection,
          piece,
          rank,
          file,
        }),
      ];
      console.log("position:" , position )
      moves.forEach(([x,y]) => {
        const positionAfterMove = this.performMoves({ positions:position, piece , rank, file, x, y});
        console.log(positionAfterMove)
      })
    }
    return moves;
  },
  performMoves: function ({ positions, piece, rank, file, x, y }) {
    if (piece.endsWith("p")) {
      return movePawn({ positions, piece, rank, file, x, y });
    } else {
      return movePiece({ positions, piece, rank, file, x, y });
    }
  },
};

export default arbiter;
