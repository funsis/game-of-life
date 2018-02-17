import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createBoard } from "../../actions/index";
import "./Board.css";

class Board extends Component {
  renderBoard = () => {
    return this.props.board.map((row, rowId) =>
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
    this.props.createBoard(50, 70);
  }

  render() {
    return <div className="board">{this.renderBoard()}</div>;
  }
}

const mapStateToProps = ({ board }) => ({ board });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createBoard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
