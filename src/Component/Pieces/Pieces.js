import Piece from "./Piece";
import React, { useState } from "react";
import "./Pieces.css";
import { createPosition } from "../../helper";

const Pieces = () => {
  const [state, setState] = useState(createPosition);

  return (
    <div className="pieces">
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
