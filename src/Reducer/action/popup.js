import actionTypes from "./actionType";

export const openPromotion = ({ rank, file, x, y }) => {
  console.log("ahha  tka andar", rank, file, x, y);
  return {
    type: actionTypes.PROMOTION_OPEN,
    payload: { rank, file, x, y },
  };
};
