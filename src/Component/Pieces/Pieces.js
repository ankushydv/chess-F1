import Piece from "./Piece";
import React, { useRef } from "react";
import "./Pieces.css";
import { useAppContext } from "../../context";
import { makeNewMove, clearCandidateMoves } from "../../Reducer/action/move";
import arbiter from "../../arbiter/arbiter";
import { openPromotion } from "../../Reducer/action/popup";
import { updateCastling } from "../../Reducer/action/game";
import { getCastlingDirections } from "../../arbiter/getMoves";

const Pieces = () => {
  const ref = useRef();
  const { AppState, dispatch } = useAppContext();
  const currentPosition = AppState.positions[AppState.positions.length - 1];
  const getCordinates = (e) => {
    const { top, left, width } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
  };

  const openPromotionBox = ({ rank, file, x, y }) => {
    dispatch(
      openPromotion({
        rank,
        file,
        x,
        y,
      })
    );
  };

  const updateCastlingState = ({ piece, rank, file }) => {
    console.log(AppState.castleDirection);
    const direction = getCastlingDirections({
      castleDirection: AppState.castleDirection,
      piece,
      rank,
      file,
    });
    if (direction) dispatch(updateCastling(direction));
  };

  const move = (e) => {
    const { x, y } = getCordinates(e);
    const [piece, rank, file] = e.dataTransfer.getData("text").split(",");
    let rankNumber = Number(rank);
    let fileNumber = Number(file);
    if (AppState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
      if ((x === 7 && piece === "wp") || (x === 0 && piece === "bp")) {
        openPromotionBox({ rank: rankNumber, file: fileNumber, x, y });
        return;
      }
      if (piece.endsWith("k") || piece.endsWith("r")) {
        updateCastlingState({ piece, file, rank });
      }
      const newPositions = arbiter.performMoves({
        positions: currentPosition,
        piece,
        rank: rankNumber,
        file: fileNumber,
        x,
        y,
      });
      dispatch(makeNewMove({ newPositions }));
    }
    dispatch(clearCandidateMoves());
  };

  const onDrop = (e) => {
    e.preventDefault();
    move(e);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pieces" onDrop={onDrop} ref={ref} onDragOver={onDragOver}>
      {currentPosition.map((x, rank) =>
        x.map((f, file) =>
          currentPosition[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={currentPosition[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Pieces;
