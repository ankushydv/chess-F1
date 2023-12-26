const Piece = ({ file, piece, rank }) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData("text/plain", `${piece}, ${rank}, ${file}`);
  };
  return (
    <div
      className={`piece ${piece} p-${rank}${file}`}
      draggable={true}
      onDragStart={onDragStart}
    />
  );
};

export default Piece;
