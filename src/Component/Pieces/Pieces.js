import Piece from "./Piece";
import React, { useState, useRef } from "react";
import "./Pieces.css";
import { createPosition, copyPosition } from "../../helper";
import { useAppContext } from "../../Context/Context";
import { makeNewMove } from "../../Reducer/action/move";

const Pieces = () => {
  const ref = useRef();
  const { AppState, dispatch } = useAppContext();
  console.log("AppState", AppState);
  const currentPosition = AppState.positions;
  // const [state, setState] = useState(createPosition);
  const getCordinates = (e) => {
    const { top, left, width } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
  };

  const onDrop = (e) => {
    let newPositions = copyPosition(currentPosition);
    const { x, y } = getCordinates(e);
    console.log(x, y);
    const [piece, rank, file] = e.dataTransfer.getData("text").split(",");
    let rankNumber = Number(rank);
    let fileNumber = Number(file);
    newPositions[rankNumber][fileNumber] = "";
    newPositions[x][y] = piece;
    console.log(newPositions);
    dispatch(makeNewMove({ newPositions }));
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pieces" onDrop={onDrop} ref={ref} onDragOver={onDragOver}>
      {currentPosition.map((x, rank) =>
        x.map((f, file) =>
          currentPosition[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={currentPosition[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Pieces;
