import React, { Component } from "react";
import Button from "../../components/Button/Button";

class GameControl extends Component {
  constructor(props) {
     super(props);

     this.state = { generation: 0 };
  }

  render() {
    return <div className="game-contorl">
      <div className="game-control__generation">
        <Button name="Start" />
        <Button name="Pause" />
        <Button name="Clear" />
        <Button name="Randomize" />
        Genertion: {this.state.generation}
      </div>
    </div>
  }
}

export default GameControl;
