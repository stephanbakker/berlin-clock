import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {BerlinClock} from './components/BerlinClock';

ReactDOM.render(
    <BerlinClock/>
  , document.getElementById('app')
);
