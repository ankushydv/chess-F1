import { getRooksMoves, getKnightMoves } from "./getMoves";

const arbiter = {
  getRegularMoves: function ({ position, piece, rank, file }) {
    if (position[rank][file].endsWith("r")) {
      return getRooksMoves({ position, piece, rank, file });
    }
    if (position[rank][file].endsWith("n")) {
      return getKnightMoves({ position, rank, file });
    }
  },
};

export default arbiter;
