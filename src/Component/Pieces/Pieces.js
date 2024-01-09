import Piece from "./Piece";
import React, { useRef } from "react";
import "./Pieces.css";
import { useAppContext } from "../../context";
import { makeNewMove, clearCandidateMoves } from "../../Reducer/action/move";
import arbiter from "../../arbiter/arbiter";

const Pieces = () => {
  const ref = useRef();
  const { AppState, dispatch } = useAppContext();
  // console.log("AppState", AppState);
  const currentPosition = AppState.positions[AppState.positions.length - 1];
  const getCordinates = (e) => {
    const { top, left, width } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
  };

  const move = (e) => {
    const { x, y } = getCordinates(e);
    const [piece, rank, file] = e.dataTransfer.getData("text").split(",");
    let rankNumber = Number(rank);
    let fileNumber = Number(file);
    if (AppState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
      const newPositions = arbiter.performMoves({
        positions: currentPosition,
        piece,
        rank: rankNumber,
        file: fileNumber,
        x,
        y,
      });
      dispatch(makeNewMove({ newPositions }));
    }
    dispatch(clearCandidateMoves());
  };

  const onDrop = (e) => {
    e.preventDefault();
    move(e);
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
