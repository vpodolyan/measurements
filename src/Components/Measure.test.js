import React from 'react';
import ReactDOM from 'react-dom';
import {Measure} from './Measure';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Measure />, div);
});
