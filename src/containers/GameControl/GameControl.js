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

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  isGameOver() {
    const { cells } = this.props.board;

    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        if (cells[i][j] === 1) return false;
      }
    }

    return true;
  }

  changeGeneration = () => {
    //проверяем, что доска не пуста и не статична
    if (this.isGameOver()) {
      //ставим на паузу
      clearInterval(this.timerId);
      //отменяем таймер для смены активной кнопки
      clearTimeout(this.timeoutId);

      this.setState({ activeButton: 3 });

      this.timeoutId = setTimeout(
        () => this.setState({ activeButton: 0 }),
        500
      );

      return;
    }

    this.props.changeGeneration();

    this.setState(prevState => {
      return { generation: prevState.generation + 1 };
    });
  };

  onStartClick = () => {
    if (this.state.activeButton === 1) return;

    this.setState({ activeButton: 1 });

    this.timerId = setInterval(this.changeGeneration, 100);
  };

  onPauseClick = () => {
    this.setState({ activeButton: 2 });
    clearInterval(this.timerId);
  };

  onClearClick = () => {
    this.setState({ generation: 0, activeButton: 3 });

    //ставим на паузу
    clearInterval(this.timerId);
    //отменяем таймер для смены активной кнопки
    clearTimeout(this.timeoutId);

    this.props.clearBoard();

    //таймер, чтобы сменить активную кнопку
    this.timeoutId = setTimeout(() => this.setState({ activeButton: 2 }), 1000);
  };

  onRandomizeClick = () => {
    this.setState({ generation: 0, activeButton: 4 });

    //ставим на паузу
    clearInterval(this.timerId);
    //отменяем таймер для смены активной кнопки
    clearTimeout(this.timeoutId);

    this.props.clearBoard();
    this.props.randomizeBoard();

    //таймер, чтобы сменить активную кнопку
    this.timeoutId = setTimeout(() => this.setState({ activeButton: 2 }), 1000);
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
            onClick={this.onClearClick}
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

const mapStateToProps = ({ board }) => ({ board });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { changeGeneration, clearBoard, randomizeBoard },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(GameControl);
