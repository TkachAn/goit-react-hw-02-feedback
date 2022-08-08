import css from './feedBack.module.css';
import React, { Component } from 'react';
export default class FeedBack extends Component {
  // console.log('fff');<button type="button">Increment by {step}</button>
  state = {
    good: 8,
    neutral: 2,
    bad: 1,
  };
  render() {
    const { good, neutral, bad } = this.props;
    console.log('this', this);
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    return (
      <div className={css.feedback}>
        <h2>Please leave feedback</h2>
        <button type="button">good {good}</button>
        <button type="button">neutral {neutral}</button>
        <button type="button">bad {bad}</button>
        <h2>Statistic</h2>
        <p>good: {this.state.good}</p>
        <p>neutral: {this.state.neutral}</p>
        <p>bad: {this.state.bad}</p>
      </div>
    );
  }
}
// ReactDOM.render(<Counter step={5} />, document.getElementById('root'));
