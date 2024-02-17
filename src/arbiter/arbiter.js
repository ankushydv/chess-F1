import {
  getRooksMoves,
  getKnightMoves,
  getBishopMoves,
  getQueenMoves,
  getKingMoves,
  getPawnMoves,
  getPawnCapture,
  getCastlingMoves,
  getkingPosition,
  getPiece,
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
    const notInCheckMoves = [];
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
    }
    moves.forEach(([x, y]) => {
      const positionAfterMove = this.performMoves({
        position,
        piece,
        rank,
        file,
        x,
        y,
      });
      if (
        !this.isPlayerInCheck({ positionAfterMove, position, player: piece[0] })
      ) {
        notInCheckMoves.push([x, y]);
      }
    });
    return notInCheckMoves;
  },
  performMoves: function ({ positions, piece, rank, file, x, y }) {
    if (piece.endsWith("p")) {
      return movePawn({ positions, piece, rank, file, x, y });
    } else {
      return movePiece({ positions, piece, rank, file, x, y });
    }
  },
  isPlayerInCheck: function ({positionAfterMove, position, player}){
    const enemy = player.startsWith('w') ? 'b' : 'w';
    const kingPos = getkingPosition(positionAfterMove, player);
    const enemyPiece = getPiece (positionAfterMove, enemy)

    const enemyMoves = enemyPiece.reduce((acc, p) => acc = [
      ...acc,
      ...(p.piece.endWith('p'))
    ? getPawnCapture({
      position:positionAfterMove,
      prevPosition:position,
      ...p

    })
    : this.getRegularMoves({
      position: positionAfterMove,
      ...p
    })
    ],[])
    if(enemyMoves.some(([x,y])=> kingPos[0] === x && kingPos[1] === y)){
      return true
    }
    return false
  },
};

export default arbiter;
