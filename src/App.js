import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MeasurementsProvider from './Components/MeasurementsProvider';
import Pressure from './Components/Pressure';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Measurements</h2>
        </div>
        <div className="container">
          <div className="row">
            <MeasurementsProvider>
              <div className="col-xs-6">
                <Pressure />
              </div>
            </MeasurementsProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
