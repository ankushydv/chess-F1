import Piece from "./Piece";
import React, { useState } from "react";
import "./Pieces.css";
import { createPosition } from "../../helper";

const Pieces = () => {
  const [state, setState] = useState(createPosition);

  const onDrop = (e) => {
    const [piece, rank, file] = e.dataTransfer.getData("text").split(",");
    console.log(piece, rank, file);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pieces" onDrop={onDrop} onDragOver={onDragOver}>
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
