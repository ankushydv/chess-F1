import actionTypes from "./actionType";

export const updateCastling = (direaction) => {
  return {
    type: actionTypes.CAN_CASTLE,
    payload: direaction,
  };
};

export const detectStalemate = () => {
  return {
      type: actionTypes.STALEMATE,
  }
}

export const detectCheckMate = winner => {
  console.log("winner" ,winner)
  return {
      type: actionTypes.WIN,
      payload: winner
  }
}
