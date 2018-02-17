import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createBoard } from "../../actions/index";

class Board extends Component {
  renderTable = () => {
    return this.props.board.map((row, rowId) =>
      <tr>
        {row.map(
          (cell, colId) =>
            cell === 0 ? (
              <td
                key={`${rowId}${colId}`}
                className="board__cell board__cell--dead"
              />
            ) : (
              <td
                key={`${rowId}${colId}`}
                className="board__cell board__cell--alive"
              />
            )
        )}
      </tr>
    );
  };

  componentWillMount() {
    this.props.createBoard(50, 70);
  }

  render() {
    return (
      <div className="board">
        <table>{this.renderTable()}</table>
      </div>
    );
  }
}

const mapStateToProps = ({ board }) => ({ board });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createBoard }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Board);
