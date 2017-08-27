import React from 'react';
import PropTypes from 'prop-types';

export default class MeasurementsProvider extends React.Component {
    static childContextTypes = {
        data: PropTypes.object
    }
    
    state = {
        data: {}
    }

    eventSource = null;

    getChildContext() {
        return { data: this.state.data };
    }

    componentWillMount() {
        this.eventSource = new EventSource('https://jsdemo.envdev.io/sse');
        this.eventSource.onmessage = (e) => {
            
            const data = JSON.parse(e.data);

            const result = data.reduce((obj, item) => {
                return { ...obj, [item.name]: item }
            }, {});

            this.setState({
                data: {
                    ...this.state.data,
                    ...result
                }
            });
        }
    }

    componentWillUnmount() {
        this.eventSource && this.eventSource.close();
    }

    render() {
        return (
            <div>
                <h1>Measurements Provider</h1>
                {this.props.children}
            </div>
        )
    }
}
