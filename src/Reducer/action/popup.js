import actionTypes from "./actionType";

export const openPromotion = ({ rank, file, x, y }) => {
  return {
    action: actionTypes.OPEN_PROMOTION,
    payload: { rank, file, x, y },
  };
};
