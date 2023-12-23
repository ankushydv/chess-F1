import "./Pieces.css";

const Pieces = () => {
  const positions = Array(8)
    .fill("")
    .map((x) => Array(8).fill(""));

  positions[0][0] = "wr";
  positions[7][7] = "br";

  console.log(positions);
  return (
    <div className="pieces">
      {positions.map((x, rank) =>
        x.map((f, file) =>
          positions[rank][file] ? 
          <Piece
            key={rank +'-' + file}
            rank={rank}
            file={file}
            piece={positions[rank][file]}
          /> 
          : null
        )
      )}
    </div>
  );
};

export default Pieces;
