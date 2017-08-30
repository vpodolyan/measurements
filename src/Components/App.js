import React, { Component } from 'react';

import logo from '../img/logo.svg';
import '../css/App.css';

import MeasurementsProvider from './MeasurementsProvider';
import Pressure from './Pressure';
import Temperature from './Temperature';
import Serial from './Serial';
import Voltage from './Voltage';
import Location from './Location';
import PM1 from './PM1';

const colClassName = 'col-xs-3 p-3';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Measurements</h2>
                </div>
                <MeasurementsProvider>
                    <div className="container">
                        <div className="row measure">
                            <div className={colClassName}>
                                <Pressure />
                            </div>
                            <div className={colClassName}>
                                <Temperature />
                            </div>
                            <div className={colClassName}>
                                <Serial />
                            </div>
                            <div className={colClassName}>
                                <Voltage />
                            </div>
                        </div>
                        <div className="row measure">
                            <div className={colClassName}>
                                <Location />
                            </div>
                            <div className={colClassName}>
                                <PM1 />
                            </div>
                        </div>
                    </div>
                </MeasurementsProvider>
            </div>
        );
    }
}

export default App;
