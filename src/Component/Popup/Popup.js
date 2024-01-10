import Promotion from "./PromotionBox/Promotion";
import { useAppContext } from "../../context";
import { Status } from "../../constant";
import "./Popup.css";
import { closePopup } from "../../Reducer/action/popup";

const Popup = () => {
  const { AppState, dispatch } = useAppContext();
  if (AppState.status === Status.ongoing) {
    return null;
  }

  const onClosePopUp = () => {
    dispatch(closePopup());
  };
  return (
    <div className="popup">
      <Promotion onClosePopUp={onClosePopUp} />
    </div>
  );
};

export default Popup;
