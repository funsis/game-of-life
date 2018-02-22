import React, { Component } from "react";
import Button from "../../components/Button/Button";
import "./GameControl.css"

class GameControl extends Component {
  constructor(props) {
    super(props);

    this.state = { generation: 0 };
  }

  render() {
    return (
      <div className="game-control">
        <div className="game-control__buttons">
        <Button name="Start" active="true" className="game-control__button" />
        <Button name="Pause" className="game-control__button" />
        <Button name="Clear" className="game-control__button" />
        <Button name="Randomize" className="game-control__button" />
        </div>
        <div className="game-control__generation">
          Genertion: {this.state.generation}
        </div>
      </div>
    );
  }
}

export default GameControl;
