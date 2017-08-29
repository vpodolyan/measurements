import React from 'react';
import PropTypes from 'prop-types';

import Measure from './Measure';
import SimpleValue from './SimpleValue';

const Temperature = (props, context) => {
    const {data} = context; 

    return (
        <div>
            {data && data.Temperature && <Measure {...data.Temperature} ValueElement={SimpleValue} />}
        </div>
    )
}

Temperature.contextTypes = {
    data: PropTypes.object
}

export default Temperature;