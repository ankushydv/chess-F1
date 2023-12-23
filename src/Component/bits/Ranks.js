import "./Ranks.css";

const Ranks = (ranks) => {
  console.log(ranks.ranks.map((rank, i) => rank));
  if (ranks.length === 0) return "Loading";
  return (
    <div className="ranks">
      {ranks.ranks.map((rank, i) => (
        <span key={rank}>{rank}</span>
      ))}
    </div>
  );
};

export default Ranks;
