import React, {Component} from 'react';

import styles from './menu.css';

export default class Menu extends Component {

  render() {

    var menu = this.props.items.map((item) => {
        return (
          <li><a href={item.link}>{item.name}</a></li>
        )
    });
    return (
      <ul>{menu}</ul>
    )
  }
}
