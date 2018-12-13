import React, { Component } from "react";
import { connect } from "react-redux";
import { getSecretWord } from "../actions";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";

import "./App.css";

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <p>Secret is {this.props.secret}</p>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secret } = state;
  return { success, guessedWords, secret };
};

const mapDispatchToProps = { getSecretWord };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedApp);
