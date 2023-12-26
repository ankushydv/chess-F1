export const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_MOVE":
      return {
        ...state,
        position: action.payload.position,
      };
    default:
      return state;
  }
  return state;
};
