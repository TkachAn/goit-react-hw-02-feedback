import css from './feedBack.module.css';
import React, { Component } from 'react';
export default class FeedBack extends Component {
  // console.log('fff');<button type="button">Increment by {step}</button>
  static defaultProps = {
    InitGood: 0,
    InitNeutral: 0,
    InitBad: 0,
  };
  state = {
    good: this.props.InitGood, //0;
    neutral: this.props.InitNeutral, //0;
    bad: this.props.InitBad, //0;
  };
  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    console.log('this', this);
    console.log('this.props', this.props);
    console.log('this.state', this.state);
    return (
      <div className={css.feedback}>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleGood}>
          good
        </button>
        <button type="button" onClick={this.handleNeutral}>
          neutral
        </button>
        <button type="button" onClick={this.handleBad}>
          bad
        </button>
        <h2>Statistic</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
      </div>
    );
  }
}
// ReactDOM.render(<Counter step={5} />, document.getElementById('root'));
