import { createPosition } from "./helper";

export const Status = {
  ongoing: "Ongoing",
  promotion: "Promoting",
  white: "White wins",
  black: "Black wins",
};

export const initGameState = {
  positions: [createPosition()],
  turn: "w",
  candidateMoves: [],
  status: Status.ongoing,
  promotionSquar: null,
};
