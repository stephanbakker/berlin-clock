import React from 'react';

export class OnOff extends React.Component {
  render() {
      return(
          <span className={'onOff ' + this.props.value}></span>
      );
  }
};
