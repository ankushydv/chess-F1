import { useReducer } from "react";
import "./App.css";
import Board from "./Component/Board";
import AppContext from "./context/context";
import { reducer } from "./Reducer/reducer";
import { initGameState } from "./constant";

function App() {
  const [AppState, dispatch] = useReducer(reducer, initGameState);
  const ProviderState = {
    AppState,
    dispatch,
  };

  // console.log("turn", AppState.turn);
  return (
    <AppContext.Provider value={ProviderState}>
      <div className="App">
        <Board />
      </div>
    </AppContext.Provider>
  );
}

export default App;
