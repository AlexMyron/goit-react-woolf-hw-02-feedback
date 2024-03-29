import { Component } from 'react';

import classes from './Statistics.module.css';

const STATS_LIST = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
  total: 'total',
  positivePercentage: 'Positive feedback',
};

export default class Statistics extends Component {
  render() {
    return (
      <>
        <ul>
          {Object.entries(STATS_LIST).map(([statName]) => (
            <li className={classes.item} key={statName}>
              <span className={classes.label}>{STATS_LIST[statName]}</span>:&nbsp;
              <span>
                {this.props[statName]}
                {statName === 'positive' && '%'}
              </span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
