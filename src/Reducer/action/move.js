export const makeNewMove = ({ newPosition }) => {
  return {
    type: "NEW_MAKE",
    payload: { newPosition },
  };
};
