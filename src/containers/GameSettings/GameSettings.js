import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Button from "../../components/Button/Button";
import "./GameSettings.css";

class GameSettings extends Component {
  render() {
    return (
      <div className="game-settings">
        <div className="game-settings__content">
          <p className="game-settings__content-text">Board size:</p>
          <div className="game-settings__content-buttons">
            <Button name="50x30" />
            <Button name="70x50" />
            <Button name="100x80" />
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

export default GameSettings;
