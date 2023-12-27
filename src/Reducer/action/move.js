import actionTypes from "./actionType";

export const makeNewMove = ({ newPositions }) => {
  return {
    type: actionTypes.NEW_MOVE,
    payload: { newPositions },
  };
};
