import actionTypes from "./action/actionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NEW_MOVE:
      let { turn, positions } = state;
      turn = turn === "w" ? "b" : "w";
      positions = [...positions, action.payload.newPositions];
      return {
        ...state,
        turn,
        positions,
      };
    default:
      return state;
  }
};
