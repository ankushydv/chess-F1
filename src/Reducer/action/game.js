import actionTypes from "./actionType";

export const updateCastling = (direaction) => {
  return {
    type: actionTypes.CAN_CASTLE,
    payload: direaction,
  };
};
