import { useAppContext } from "../../../context";
import "./Promotion.css";
const Promotion = () => {
  const { AppState } = useAppContext();
  const { promotionSquar, status } = AppState;
  console.log("prom", promotionSquar, status);
  const options = ["q", "r", "b", "n"];
  const color = "b";
  const getPromotionBoxPosition = () => {
    let style = {};

    if (promotionSquar.x === 7) {
      style.top = "-12.5%";
    } else {
      style.top = "97.5%";
    }

    if (promotionSquar.y <= 1) {
      style.left = "0%";
    } else if (promotionSquar.y >= 5) {
      style.right = "0%";
    } else {
      style.left = `${12.5 * promotionSquar.y - 20}%`;
    }

    return style;
  };
  return (
    <div
      className="popup-inner promotion-choices"
      style={getPromotionBoxPosition()}
    >
      {options.map((options) => (
        <div className={`piece ${color}${options}`} key={options}></div>
      ))}
    </div>
  );
};

export default Promotion;
