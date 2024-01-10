import actionTypes from "./action/actionType";
import { Status } from "../constant";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NEW_MOVE: {
      let { turn, positions } = state;
      turn = turn === "w" ? "b" : "w";
      positions = [...positions, action.payload.newPositions];
      return {
        ...state,
        turn,
        positions,
      };
    }
    case actionTypes.GENRATE_CANDIDATE_MOVE: {
      return {
        ...state,
        candidateMoves: action.payload.candidateMoves,
      };
    }
    case actionTypes.CLEAR_CANDIDATE_MOVE: {
      return {
        ...state,
        candidateMoves: [],
      };
    }
    case actionTypes.PROMOTION_OPEN: {
      return {
        ...state,
        status: Status.promotion,
        promotionSquare: { ...action.payload },
      };
    }
    case actionTypes.PROMOTION_CLOSE: {
      return {
        ...state,
        status: Status.ongoing,
        promotionSquare: null,
      };
    }
    default:
      return state;
  }
};
