import { clearCandidateMoves, makeNewMove } from "../../../Reducer/action/move";
import { useAppContext } from "../../../context";
import { copyPosition } from "../../../helper";
import "./Promotion.css";
const Promotion = ({ onClosePopUp }) => {
  const { AppState, dispatch } = useAppContext();
  const { promotionSquare, status } = AppState;
  if (!promotionSquare) {
    return;
  }
  console.log("prom", promotionSquare, status);
  const options = ["q", "r", "b", "n"];
  const getPromotionBoxPosition = () => {
    let style = {};

    if (promotionSquare.x === 7) {
      style.top = "-12.5%";
    } else {
      style.top = "97.5%";
    }

    if (promotionSquare.y <= 1) {
      style.left = "0%";
    } else if (promotionSquare.y >= 5) {
      style.right = "0%";
    } else {
      style.left = `${12.5 * promotionSquare.y - 20}%`;
    }

    return style;
  };

  const OnClick = (options) => {
    onClosePopUp();
    const newPositions = copyPosition(
      AppState.positions[AppState.positions.length - 1]
    );

    newPositions[promotionSquare.rank][promotionSquare.file] = "";
    newPositions[promotionSquare.x][promotionSquare.y] =
      AppState.turn + options;

    dispatch(clearCandidateMoves());
    dispatch(makeNewMove({ newPositions }));
  };
  return (
    <div className="popup">
    <div
      className="popup-inner promotion-choices"
      style={getPromotionBoxPosition()}
    >
      {options.map((options) => (
        <div
          className={`piece ${AppState.turn}${options}`}
          key={options}
          onClick={() => OnClick(options)}
        ></div>
      ))}
    </div>
    </div>
  );
};

export default Promotion;
