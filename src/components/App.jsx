import React, { Component } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions';
import Section from 'components/Section/Section';
import Container from './container/container';
import css from './container/container.module.css';
import Notification from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtn = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };
  totalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  positiveFeedbackPercentage = ({ good, neutral, bad }) => {
    return good + neutral + bad > 0 ? (good / (good + neutral + bad)) * 100 : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedback(this.state);
    const positivePercentage = Number(
      this.positiveFeedbackPercentage(this.state).toFixed(1)
    );
    return (
      <Container className={css.feedback}>
        <Section title="Please leave feedback" className={css.hh}>
          <div className={css.feed}>
            {/* <h3>Please leave feedback</h3> */}
            <div className={css.pp}>
              <FeedbackOptions
                options={Object.keys(this.state)}
                onLeaveFeedback={this.handleBtn}
              />
            </div>
          </div>
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              percent={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}
