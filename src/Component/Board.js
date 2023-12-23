import "./Board.css";

const Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((x, i) => i);

  return (
    <>
      <div className="board">
        <div className="tile">
          <h1>Board</h1>
          {ranks.map((ranks, i) =>
            files.map((files, i) => (
              <div key={ranks + "-" + files}>
                {ranks}
                {/* {files} */}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Board;
