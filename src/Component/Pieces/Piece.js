import { useAppContext } from "../../context";
import arbiter from "../../arbiter/arbiter";
import { genrateCandidateMoves } from "../../Reducer/action/move";

const Piece = ({ file, piece, rank }) => {
  const { AppState, dispatch } = useAppContext();
  const { turn, positions, castleDirection } = AppState;
  //export as context for current position
  const currentPosition = positions[positions.length - 1];

  const onDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${piece}, ${rank}, ${file}`);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
    if (turn === piece[0]) {
      const candidateMoves = arbiter.getValidMoves({
        position: currentPosition,
        prevPosition: positions[positions.length - 2],
        castleDirection: castleDirection[turn],
        piece,
        rank,
        file,
      });
      // console.log("candidate move", candidateMoves);
      dispatch(genrateCandidateMoves({ candidateMoves }));
    }
  };

  const onDragEnd = (e) => {
    e.target.style.display = "block";
  };
  return (
    <div
      className={`piece ${piece} p-${file}${rank}`}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    />
  );
};

export default Piece;
