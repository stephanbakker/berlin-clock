import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <BerlinClock/>
      </div>
    );
  }
};

class OnOffRow extends React.Component {
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

class OnOff extends React.Component {
  render() {
      return(
          <span className={'onOff ' + this.props.value}></span>
      );
  }
};


class BerlinClock extends React.Component {

  constructor() {
    super();
    this.tick.bind(this);
    this.start();
  }

  state = {
    berlin: {}
  }

  tick() {
    var d = new Date();

    var time = {
      hours: d.getHours(),
      minutes: d.getMinutes(),
      seconds: d.getSeconds(),
    };

    this.setState({
        berlin: {
          hours1: Math.floor(time.hours/5),
          hours2: time.hours % 5,
          minutes1: Math.floor(time.minutes/5),
          minutes2: time.minutes % 5,
          seconds: time.seconds % 2
        }
    });

  }

  start() {
    setInterval(this.tick.bind(this), 1000)
  }

  render() {
    return (
      <div className="berlinClock">
        <OnOffRow length="1" value={this.state.berlin.seconds}/>
        <OnOffRow length="4" value={this.state.berlin.hours1}/>
        <OnOffRow length="4" value={this.state.berlin.hours2}/>
        <OnOffRow length="11" value={this.state.berlin.minutes1}/>
        <OnOffRow length="4" value={this.state.berlin.minutes2}/>
      </div>
    );
  }
};


ReactDOM.render(
    <App/>
  , document.getElementById('app')
);
