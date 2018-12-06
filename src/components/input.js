import React from "react";
import { connect } from "react-redux";
import { guessWord } from "../actions";

export class UnconnectedInput extends React.Component {
  constructor(props) {
    super(props);

    this.inputBox = React.createRef();
  }

  submitGuess = event => {
    event.preventDefault();
    const guess = this.inputBox.current.value;
    if (guess && guess.length > 0) {
      this.props.guessWord(guess);
    }
    this.inputBox.current.value = "";
  };

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          ref={this.inputBox}
          data-test="input-box"
          className="mb-2 mb-3"
          id="word-guess"
          type="text"
          placeholder="Enter a guess word"
        />
        <button
          onClick={this.submitGuess}
          data-test="input-button"
          className="btn btn-primary"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => ({ success });

const mapDispatchToProps = { guessWord };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedInput);
