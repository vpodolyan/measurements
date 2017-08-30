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

    constructor(props) {
        super(props);

        this.eventSource = props.evenSource || new EventSource('https://jsdemo.envdev.io/sse');
    }

    getChildContext() {
        return { data: this.state.data };
    }

    componentWillMount() {
        if (!this.eventSource) {
            return;
        }

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
                {this.props.children}
            </div>
        )
    }
}
