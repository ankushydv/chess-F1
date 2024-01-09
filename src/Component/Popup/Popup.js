import Promotion from "./PromotionBox/Promotion";
import { useAppContext } from "../../context";
import { Status } from "../../constant";
import "./Popup.css";

const Popup = () => {
  const { AppState } = useAppContext();
  if (AppState.status === Status.ongoing) {
    return null;
  }
  return (
    <div className="popup">
      <Promotion />
    </div>
  );
};

export default Popup;
