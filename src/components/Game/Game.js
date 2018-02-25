import React from "react";
import GameControl from "../../containers/GameControl/GameControl";
import Board from "../../containers/Board/Board";
import GameSettings from "../../containers/GameSettings/GameSettings";
import Notice from "../Notice/Notice";
import "./Game.css"

const Game = () => (
  <body className="game">
    <div className="game__content">
      <GameControl />
      <Board />
      <GameSettings />
      <Notice />
    </div>
  </body>
);

export default Game;
