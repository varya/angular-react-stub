import React, {Component} from 'react';

import styles from './menu.css';

export default class Menu extends Component {

  render() {

    var menu = this.props.items.map((item) => {
        const itemKey = 'Menu' + item.id;
        return (
          <li key={itemKey}><a href={item.link}>{item.name}</a></li>
        )
    });
    return (
      <ul key="Menu">{menu}</ul>
    )
  }
}
