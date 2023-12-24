export const getCharacter = (file) => String.fromCharCode(file + 97);

export const createPosition = () => {
  const positions = Array(8)
    .fill("")
    .map((x) => Array(8).fill(""));

  for (let i = 0; i < 8; i++) {
    positions[1][i] = "wp";
    positions[6][i] = "bp";
  }

  positions[0][0] = "wr";
  positions[0][1] = "wkn";
  positions[0][2] = "wb";
  positions[0][3] = "wq";
  positions[0][4] = "wk";
  positions[0][5] = "wb";
  positions[0][6] = "wkn";
  positions[0][7] = "wr";

  positions[7][2] = "bb";
  positions[7][1] = "bkn";
  positions[7][3] = "bq";
  positions[7][4] = "bk";
  positions[7][5] = "bb";
  positions[7][6] = "bkn";
  positions[7][7] = "br";
  positions[7][0] = "br";

  return positions;
};
