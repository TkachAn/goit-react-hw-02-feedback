import React, { Component } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import css from './App.module.css';
// import css from './App.module.css';
export class App extends Component {
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

  handleBtn = e => {
    const val = e.currentTarget.name;
    this.setState(prevState => {
      return {
        [val]: prevState[val] + 1,
      };
    });
  };

  // countTotalFeedback = ({ good, neutral, bad }) => {
  //   return good + neutral + bad;
  // };

  // countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
  //   return good + neutral + bad !== 0
  //     ? (good / (good + neutral + bad)) * 100
  //     : 0;
  // };

  render() {
    const { good, neutral, bad } = this.state;
    // const total = this.countTotalFeedback(this.state); //className={css.h2}
    // const percent = this.countPositiveFeedbackPercentage(this.state).toFixed(1);
    return (
      <div className={css.feedback}>
        <section title="Feedback" className={css.hh}>
          <h2>Please leave feedback</h2>
          <div className={css.pp}>
            <FeedbackOptions
              name="good"
              options="Good"
              onLeaveFeedback={this.handleBtn}
            />
            <FeedbackOptions
              name="neutral"
              options="Neutral"
              onLeaveFeedback={this.handleBtn}
            />
            <FeedbackOptions
              name="bad"
              options="Bad"
              onLeaveFeedback={this.handleBtn}
            />
          </div>
        </section>
        <section title="Statistics">
          {good + neutral + bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              // total={total}
              // positivePercentage={percent}
            />
          ) : (
            <div className={css.perc}>There is no feedback</div>
          )}
        </section>
      </div>
    );
  }
}
