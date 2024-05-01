//genrate letter as Character code with 97 is (a, b, c, d, e, f, g, h)
export const getCharacter = (file) => String.fromCharCode(file + 97);

//In chess board piece position create by the function
export const createPosition = () => {
  const positions = Array(8)
    .fill("")
    .map((x) => Array(8).fill(""));

  for (let i = 0; i < 8; i++) {
    positions[1][i] = "wp";
    positions[6][i] = "bp";
  }

  positions[0][0] = "wr";
  positions[0][1] = "wn";
  positions[0][2] = "wb";
  positions[0][3] = "wq";
  positions[0][4] = "wk";
  positions[0][5] = "wb";
  positions[0][6] = "wn";
  positions[0][7] = "wr";

  positions[7][2] = "bb";
  positions[7][1] = "bn";
  positions[7][3] = "bq";
  positions[7][4] = "bk";
  positions[7][5] = "bb";
  positions[7][6] = "bn";
  positions[7][7] = "br";
  positions[7][0] = "br";

  return positions;
};

//After piece move this function copy the latest positions of pieces
export const copyPosition = (positions) => {
  //create a new position array of 2 deimensional of 8 by 8 and fill empty string
  const newPosition = new Array(8).fill("").map((x) => new Array(8).fill(""));

  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < positions[0].length; file++) {
      newPosition[rank][file] = positions[rank][file];
    }
  }
  return newPosition;
};

export const areSameColorTiles = (coords1, coords2) =>
  (coords1.x + coords1.y) % 2 === coords2.x + coords2.y;

export const findPieceCoords = (position, type) => {
  let results = [];
  position.forEach((rank, i) => {
    rank.forEach((pos, j) => {
      if (pos === type) results.push({ x: i, y: j });
    });
  });
  return results;
};
