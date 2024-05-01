import actionTypes from "./actionType";

export const updateCastling = (direaction) => {
  return {
    type: actionTypes.CAN_CASTLE,
    payload: direaction,
  };
};

export const  setInsufficientMaterial = () =>{
  return{
    type: actionTypes.SET_INSUFFICIENT_MATERIAL
  }
}