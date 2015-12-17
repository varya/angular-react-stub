import React, {Component} from 'react';
import Button from 'react-toolbox/lib/button';

import styles from './button.css';

export default class MyButton extends Button {
  render() {
    return (
      <Button className="button">
        {this.props.text}
      </Button>
    )
  }
}
