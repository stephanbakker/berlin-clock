import React from 'react';

import {BerlinClockService} from '../berlin-clock-service';
import {OnOffRow} from './OnOffRow';

export class BerlinClock extends React.Component {

  constructor() {
    super();
    const berlinClock = new BerlinClockService();
    this.tick = berlinClock.tick;
    this.start();
  }

  state = {
    berlin: {}
  }

  start() {
    setInterval(() => {
      this.setState({berlin: this.tick(new Date())});
    }, 1000)
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
