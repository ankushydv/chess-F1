import "./Promotion.css";
const Promotion = () => {
  const options = ["q", "r", "b", "n"];
  const color = "b";
  const x = 1;
  const y = 1;
  const getPromotionBoxPosition = () => {
    let style = {};

    if (x === 7) {
      style.top = "-12.5%";
    } else {
      style.top = "97.5%";
    }

    if (y <= 1) {
      style.left = "0%";
    } else if (y >= 5) {
      style.right = "0%";
    } else {
      style.left = `${12.5 * y - 20}%`;
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
