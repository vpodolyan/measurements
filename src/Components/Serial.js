import React from 'react';
import PropTypes from 'prop-types';

import Measure from './Measure';
import SimpleValue from './SimpleValue';

const Serial = (props, context) => {
    const {data} = context; 

    return (
        <div>
            {data && data.Serial && <Measure {...data.Serial} ValueElement={SimpleValue}/>}
        </div>
    )
}

Serial.contextTypes = {
    data: PropTypes.object
}

export default Serial;