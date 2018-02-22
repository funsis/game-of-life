import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  changeGeneration,
  clearBoard,
  randomizeBoard
} from "../../actions/index";
import Button from "../../components/Button/Button";
import "./GameControl.css";

class GameControl extends Component {
  constructor(props) {
    super(props);

    this.state = { generation: 0, activeButton: 0 };
  }

  componentWillMount() {
    this.onStartClick();
  }

  changeGeneration = () => {
    this.props.changeGeneration();

    this.setState(prevState => {
      return { generation: prevState.generation + 1 };
    });
  };

  onStartClick = () => {
    if (this.state.activeButton === 1) return;

    this.setState({ activeButton: 1 });

    this.timerId = setInterval(this.changeGeneration, 500);
  };

  onPauseClick = () => {
    this.setState({ activeButton: 2 });
    clearInterval(this.timerId);
  };

  onRandomizeClick = () => {
    this.setState({ activeButton: 4 });

    this.props.clearBoard();
    this.props.randomizeBoard();

    console.log(this.timerId);

    setTimeout(
      () =>
        this.timerId
          ? this.setState({ activeButton: 1 })
          : this.setState({ activeButton: 2 }),
      2000
    );
  };

  render() {
    return (
      <div className="game-control">
        <div className="game-control__generation">
          Genertion: {this.state.generation}
        </div>
        <div className="game-control__buttons">
          <Button
            name="Start"
            active={this.state.activeButton === 1 ? true : false}
            onClick={this.onStartClick}
          />
          <Button
            name="Pause"
            active={this.state.activeButton === 2 ? true : false}
            onClick={this.onPauseClick}
          />
          <Button
            name="Clear"
            active={this.state.activeButton === 3 ? true : false}
          />
          <Button
            name="Randomize"
            active={this.state.activeButton === 4 ? true : false}
            onClick={this.onRandomizeClick}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { changeGeneration, clearBoard, randomizeBoard },
    dispatch
  );

export default connect(null, mapDispatchToProps)(GameControl);
