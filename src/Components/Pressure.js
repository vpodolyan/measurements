import React from 'react';
import PropTypes from 'prop-types';

import Measure from './Measure';
import SimpleValue from './SimpleValue';

const Pressure = (props, context) => {
    const {data} = context; 

    return (
        <div>
            {data && data.Pressure && <Measure {...data.Pressure} ValueElement={SimpleValue} />}
        </div>
    )
}

Pressure.contextTypes = {
    data: PropTypes.object
}

export default Pressure;