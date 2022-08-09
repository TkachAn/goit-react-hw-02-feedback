import React, { Component } from 'react';
export default class FeedBack extends Component {
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.feedback}>
        <div className={css.button}>
          <h2 className={css.h2}>Please leave feedback</h2>
          <button type="button" onClick={this.handleGood}>
            good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            bad
          </button>
        </div>
      </div>
    );
  }
}
