const Piece = ({ file, piece, rank }) => {
  const onDragStart = (e) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", `${piece}, ${rank}, ${file}`);
    setTimeout(() => {
      e.target.style.display = "none";
    }, 0);
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
