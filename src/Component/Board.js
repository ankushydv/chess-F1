import { getCharacter } from "../helper";
import "./Board.css";

const Board = () => {
  const getClassName = (i, j) => {
    let c = "tile";
    c += (i + j) % 2 === 0 ? " tile-light" : " tile-dark";
    console.log(c);
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
        <div className="tiles">
          {ranks.map((ranks, i) =>
            files.map((files, j) => (
              <div key={ranks + "-" + files} className={getClassName(i, j)}>
                {ranks}
                {files}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Board;
