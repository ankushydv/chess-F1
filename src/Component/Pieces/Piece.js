const Piece = ({ file, piece, rank }) => {
  return <div className={`piece ${piece} p-${rank}${file}`} />;
};

export default Piece;
