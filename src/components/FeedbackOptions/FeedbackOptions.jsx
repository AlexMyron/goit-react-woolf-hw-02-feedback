import { Component } from 'react';

import classes from './FeedbackOptions.module.css';

const BUTTONS_LIST = ['good', 'neutral', 'bad'];

export default class FeedbackOptions extends Component {
  render() {
    const { buttonHandler } = this.props;

    return (
      <div className={classes['button-bar']}>
        {BUTTONS_LIST.map(buttonName => (
          <button
            className={classes.button}
            key={buttonName}
            onClick={() => buttonHandler(buttonName)}
          >
            {buttonName}
          </button>
        ))}
      </div>
    );
  }
}
