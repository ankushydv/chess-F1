import { createPosition } from "./helper";

export const Status = {
  ongoing: "Ongoing",
  promotion: "Promoting",
  white: "White wins",
  black: "Black wins",
  stalemate:"Game is draw due to not enough move",
};

export const initGameState = {
  positions: [createPosition()],
  turn: "w",
  candidateMoves: [],
  status: Status.ongoing,
  promotionSquare: null,
  castleDirection: {
    w: "both",
    b: "both",
  },
};
