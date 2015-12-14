import React, {Component} from 'react';
import angular from 'angular';

export default class Menu extends Component {

  render() {
    return (
      <span>Hello Murzik! {this.props.name} {this.props.surname}</span>
    )
  }
}
