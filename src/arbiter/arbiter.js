import { getRooksMoves } from "./getMoves";

const arbiter = {
  getRegularMoves: function ({ position, piece, rank, file }) {
    return getRooksMoves({ position, piece, rank, file });
  },
};

export default arbiter;
