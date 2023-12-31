import { getRooksMoves, getKnightMoves, getBishopMoves } from "./getMoves";

const arbiter = {
  getRegularMoves: function ({ position, piece, rank, file }) {
    if (position[rank][file].endsWith("r")) {
      return getRooksMoves({ position, piece, rank, file });
    }
    if (position[rank][file].endsWith("b")) {
      return getBishopMoves({ position, piece, rank, file });
    }
    if (position[rank][file].endsWith("n")) {
      return getKnightMoves({ position, rank, file });
    }
  },
};

export default arbiter;
