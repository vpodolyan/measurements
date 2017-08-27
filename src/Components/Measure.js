import React from 'react';

export default class Measure extends React.Component {
    
    shouldComponentUpdate (nextProps) {
        const {measurements} = nextProps;
        if (!measurements || measurements.length === 0) {
            return false;
        }

        return true;
    }

    render () {
        const {measurements, name, unit} = this.props;
        
        return (
            <div>
                <h3>{name}</h3>
                <div>
                {
                        measurements.map(item => (
                            <div key={item[0]}>
                                <div>t = {new Date(item[0]).toLocaleString()}</div>
                                <div>v = {`${item[1]} ${unit}`}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}