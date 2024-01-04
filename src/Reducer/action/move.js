import actionTypes from "./actionType";

export const makeNewMove = ({ newPositions }) => {
  return {
    type: actionTypes.NEW_MOVE,
    payload: { newPositions },
  };
};

export const genrateCandidateMoves = ({ candidateMoves }) => {
  return {
    type: actionTypes.GENRATE_CANDIDATE_MOVE,
    payload: { candidateMoves },
  };
};
