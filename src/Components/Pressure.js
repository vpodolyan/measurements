import React from 'react';
import PropTypes from 'prop-types';

import Measure from './Measure';

const Pressure = (props, context) => {
    const {data} = context; 

    return (
        <div>
            {data && data.Pressure && <Measure {...data.Pressure} />}
        </div>
    )
}

Pressure.contextTypes = {
    data: PropTypes.object
}

export default Pressure;