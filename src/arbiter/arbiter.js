import {
  getRooksMoves,
  getKnightMoves,
  getBishopMoves,
  getQueenMoves,
  getKingMoves,
  getPawnMoves,
  getPawnCapture,
  getCastlingMoves,
  getPieces,
  getKingPosition,
} from "./getMoves";
import {areSameColorTiles,
  findPieceCoords} from "../helper"
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
    moves.forEach(([x,y]) => {

      const positionAfterMove = this.performMoves({ positions:position, piece , rank, file, x, y});
      // console.log("positionAfterMove" , positionAfterMove)
      if(!this.isPlayerInCheck({positionAfterMove,position, player:piece[0]})){
          notInCheckMoves.push( [x,y] );
      }
    })
    return notInCheckMoves;
  },
  isPlayerInCheck: function ({positionAfterMove, position , player}){
    const enemy = player.startsWith("w") ? "b" : "w";
    let kingPos = getKingPosition(positionAfterMove, player);
    const enemyPieces = getPieces(positionAfterMove, enemy);
    const enemyMoves = enemyPieces.reduce(
      (acc, p) =>
        (acc = [
          ...acc,
          ...(p.piece.endsWith("p")
            ? getPawnCapture({
                position: positionAfterMove,
                prevPosition: position,
                ...p,
              })
            : this.getRegularMoves({
                position: positionAfterMove,
                ...p,
              })),
        ]),
      []
    );

    if (enemyMoves.some(([x, y]) => kingPos[0] === x && kingPos[1] === y)){
      // console.log("is come")
      return true;
    }
    else return false;

  },
  performMoves: function ({ positions, piece, rank, file, x, y }) {
    if (piece.endsWith("p")) {
      return movePawn({ positions, piece, rank, file, x, y });
    } else {
      return movePiece({ positions, piece, rank, file, x, y });
    }
  },
  insufficientMaterial: function (position) {
    const pieces = position.reduce(
      (acc, rank) => (acc = [...acc, ...rank.filter((spot) => spot)]),
      []
    );

    // King vs. king
    if (pieces.length === 2) return true;

    // King and bishop vs. king
    // King and knight vs. king
    if (
      pieces.length === 3 &&
      pieces.some((p) => p.endsWith("b") || p.endsWith("n"))
    )
      return true;

    // King and bishop vs. king and bishop of the same color as the opponent's bishop
    if (
      pieces.length === 4 &&
      pieces.every((p) => p.endsWith("b") || p.endsWith("k")) &&
      new Set(pieces).size === 4 &&
      areSameColorTiles(
        findPieceCoords(position, "wb")[0],
        findPieceCoords(position, "bb")[0]
      )
    )
      return true;

    return false;
  },
};

export default arbiter;
