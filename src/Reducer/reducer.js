import actionTypes from "./action/actionType";

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.NEW_MOVE:
      let { turn, position } = state;
      turn = turn === "w" ? "b" : "w";
      position = [...position, action.payload.newPositions];
      return {
        ...state,
        turn,
        position,
      };
    default:
      return state;
  }
};
