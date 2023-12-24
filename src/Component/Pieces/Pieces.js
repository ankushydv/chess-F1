import Piece from "./Piece";
import React, { useState, useRef } from "react";
import "./Pieces.css";
import { createPosition } from "../../helper";

const Pieces = () => {
  const ref = useRef();
  const [state, setState] = useState(createPosition);
  const getCordinates = (e) => {
    const { top, left, width } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientY - left) / size);
    const x = 7 - Math.floor((e.clientX - top) / size);
    return { x, y };
  };

  const onDrop = (e) => {
    const { x, y } = getCordinates(e);
    console.log(x, y);
    const [piece, rank, file] = e.dataTransfer.getData("text").split(",");
    console.log(piece, rank, file);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pieces" onDrop={onDrop} ref={ref} onDragOver={onDragOver}>
      {state.map((x, rank) =>
        x.map((f, file) =>
          state[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={state[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Pieces;
