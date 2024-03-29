import { Component } from 'react';

import classes from './Notification.module.css';

export default class Notification extends Component {
  render() {
    return <p className={classes.message}>{this.props.message}</p>;
  }
}
