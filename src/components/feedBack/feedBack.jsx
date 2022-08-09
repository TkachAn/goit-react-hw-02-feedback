import css from './feedBack.module.css';
import React, { Component } from 'react';
export default class FeedBack extends Component {
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

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return good + neutral + bad !== 0
      ? (good / (good + neutral + bad)) * 100
      : 0;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const percent = this.countPositiveFeedbackPercentage(this.state).toFixed(1);
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

        <h2 className={css.h22}>Statistic</h2>
        <div className={css.statistic}>
          <p className={css.p}>
            good: <span className={css.number}>{good}</span>
          </p>
          <p className={css.p}>
            neutral: <span className={css.number}>{neutral}</span>
          </p>
          <p className={css.p}>
            bad: <span className={css.number}>{bad}</span>
          </p>
          <p className={css.p}>
            total: <span className={css.number}>{total}</span>
          </p>
        </div>
        <div className={css.percent}>
          <p>
            positive feedback: <span className={css.number}>{percent}%</span>
          </p>
        </div>
      </div>
    );
  }
}
