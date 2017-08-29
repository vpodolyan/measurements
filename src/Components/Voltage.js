import React from 'react';
import PropTypes from 'prop-types';

import Measure from './Measure';
import SimpleValue from './SimpleValue';

const Voltage = (props, context) => {
    const {data} = context;
    const fieldName = 'Batt. Voltage';

    return (
        <div>
            {data && data[fieldName] && <Measure {...data[fieldName]} ValueElement={SimpleValue} />}
        </div>
    )
}

Voltage.contextTypes = {
    data: PropTypes.object
}

export default Voltage;