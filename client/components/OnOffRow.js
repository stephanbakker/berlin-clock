import React from 'react';

import {OnOff} from './OnOff';

export class OnOffRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const titleStyle = {
      color: 'green',
      background: 'pink'
    };

    const items = [];
    for(let i = 0; i < this.props.length; i++) {
      items.push(<OnOff key={i} value={i < this.props.value ? 'on' : 'off'}></OnOff>);
    };

    return (
      <div className="onOffRow">
        {items} 
      </div>
    );
  }
};
