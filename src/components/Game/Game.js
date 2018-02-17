import React from "react";
import Board from "../../containers/Board/Board";
import Notice from "../Notice/Notice";
import "./Game.css"

const Game = () => (
  <body className="game">
    <div className="game__content">
      <Board />
      <Notice />
    </div>
  </body>
);

export default Game;
