import React, { Component } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from 'components/Section/Section';
import Container from './container/container';
import css from './container/container.module.css';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = e => {
    const val = e.currentTarget.name;
    this.setState(prevState => {
      return {
        [val]: prevState[val] + 1,
      };
    });
  };

  countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return good + neutral + bad > 0 ? (good / (good + neutral + bad)) * 100 : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const positivePercentage = Number(
      this.countPositiveFeedbackPercentage(this.state).toFixed(1)
    );
    return (
      <Container className={css.feedback}>
        <Section title="Please leave feedback" className={css.hh}>
          <div className={css.feed}>
            {/* <h3>Please leave feedback</h3> */}
            <div className={css.pp}>
              <FeedbackOptions
                options="good"
                onLeaveFeedback={this.handleBtn}
              />
              <FeedbackOptions
                options="neutral"
                onLeaveFeedback={this.handleBtn}
              />
              <FeedbackOptions options="bad" onLeaveFeedback={this.handleBtn} />
            </div>
          </div>
        </Section>
        <Section title="Statistics">
          {good + neutral + bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={positivePercentage}
            />
          ) : (
            <div className={css.perc}>There is no feedback</div>
          )}
        </Section>
      </Container>
    );
  }
}
