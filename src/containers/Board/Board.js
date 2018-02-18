import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createBoard } from "../../actions/index";
import "./Board.css";

export class Board extends Component {
  renderBoard = () => {
    if (!this.props.board.cells) return;

    return this.props.board.cells.map((row, rowId) =>
      row.map(
        (cell, colId) =>
          cell === 0 ? (
            <div
              key={rowId + colId}
              className="board__cell board__cell--dead"
            />
          ) : (
            <div
              key={rowId + colId}
              className="board__cell board__cell--alive"
            />
          )
      )
    );
  };

  componentWillMount() {
    this.props.createBoard(30, 55);
  }

  render() {
    let gridSetings = {
      gridTemplateRows: `repeat(${this.props.board.height}, ${this.props.board.cellSize})`,
      gridTemplateColumns: `repeat(${this.props.board.width}, ${this.props.board.cellSize})`
    };

    return <div className="board" style={gridSetings}>{this.renderBoard()}</div>;
  }
}

const mapStateToProps = ({ board }) => ({ board });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createBoard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
