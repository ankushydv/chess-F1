// import React, { useEffect } from "react";
import { getCharacter } from "../helper";
import "./Board.css";
import Ranks from "./bits/Ranks";
import Files from "./bits/Files";
import Pieces from "./Pieces/Pieces";
import { useAppContext } from "../context";

const Board = () => {
  const { AppState } = useAppContext();
  const positions = AppState.positions[AppState.positions.length - 1];
  const getClassName = (i, j) => {
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile-light" : " tile-dark";
    if (AppState.candidateMoves?.find((m) => m[0] === i && m[1] === j)) {
      if (positions[i][j]) c += " attacking";
      else c += " highlighting";
    }
    return c;
  };
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
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
        <Files files={files} />
      </div>
    </>
  );
};

export default Board;
