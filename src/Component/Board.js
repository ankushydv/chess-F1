// import React, { useEffect } from "react";
import { getCharacter } from "../helper";
import "./Board.css";
import Ranks from "./bits/Ranks";
import Files from "./bits/Files";
import Pieces from "./Pieces/Pieces";
import { useAppContext } from "../context";
import Popup from "./Popup/Popup";

const Board = () => {
  const { AppState } = useAppContext();
  const { turn } = AppState;
  // console.log("turn", turn);
  const enemy = turn === "w" ? "b" : "w";
  // console.log(enemy);

  //Get the current piece move position move.
  const positions = AppState.positions[AppState.positions.length - 1];
  //Genrate the board classname for black and white.
  //It is also give a hint for move as per piece and give hint as cicle position for any enemy piece is available for attack.
  // console.log("ps", positions);
  const getClassName = (i, j) => {
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile-light" : " tile-dark";
    if (AppState.candidateMoves?.find((m) => m[0] === i && m[1] === j)) {
      if (positions[i][j].startsWith(enemy)) c += " attacking";
      else c += " highlighting";
    }
    return c;
  };
  //It's genrated the block as 8 row in chess board(0,1,2,3,4,5,6,7).
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  //It's genrated the block as 8 column in chess board(a,b,c,d,e,f,g,h).
  const files = Array(8)
    .fill()
    .map((x, i) => getCharacter(i));

  return (
    <>
      <div className="board">
        <Ranks ranks={ranks} />
        <div className="tiles">
          {ranks.map((ranks, i) =>
            files.map((files, j) => (
              <div key={ranks + "-" + files} className={getClassName(7 - i, j)}>
                {ranks}
                {files}
              </div>
            ))
          )}
        </div>
        <Pieces />
        <Popup />
        <Files files={files} />
      </div>
    </>
  );
};

export default Board;
