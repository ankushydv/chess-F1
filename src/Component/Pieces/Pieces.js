import Piece from "./Piece";
import "./Pieces.css";

const Pieces = () => {
  const positions = Array(8)
    .fill("")
    .map((x) => Array(8).fill(""));

  positions[0][0] = "wr";
  positions[0][0] = "wk";
  positions[0][0] = "wkn";
  positions[0][0] = "wq";
  positions[0][0] = "wp";
  positions[0][0] = "wb";

  positions[7][7] = "br";
  positions[0][7] = "br";

  positions[4][7] = "bk";
  positions[1][7] = "bkn";
  positions[6][7] = "bkn";
  positions[3][7] = "bq";
  positions[2][7] = "bp";
  positions[5][7] = "bp";

  console.log(positions);
  return (
    <div className="pieces">
      {positions.map((x, rank) =>
        x.map((f, file) =>
          positions[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={positions[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Pieces;
