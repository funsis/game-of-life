import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { createBoard } from "../../actions/index";
import Button from "../../components/Button/Button";
import "./GameSettings.css";

class GameSettings extends Component {
  render() {
    return (
      <div className="game-settings">
        <div className="game-settings__content">
          <p className="game-settings__content-text">Board size:</p>
          <div className="game-settings__content-buttons">
            <Button name="50x30" onClick={() => this.props.createBoard(30, 50, "15px")} />
            <Button name="70x50" onClick={() => this.props.createBoard(50, 70)} />
            <Button name="100x80" onClick={() => this.props.createBoard(80, 100, "9px")}/>
          </div>
        </div>
        <div className="game-settings__content">
          <p className="game-settings__content-text">Sim Speed:</p>
          <div className="game-settings__content-buttons">
            <Button name="Slow" />
            <Button name="Medium" />
            <Button name="Fast" />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createBoard }, dispatch);

export default connect(null, mapDispatchToProps)(GameSettings);
