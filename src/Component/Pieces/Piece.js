const Piece = ({ file, piece, rank }) => {
  return <div className={`piece ${piece} p-${rank}${file}`} draggable={true} />;
};

export default Piece;
