import React from 'react';
import PropTypes from 'prop-types';

import Measure from './Measure';
import SimpleValue from './SimpleValue';

const PM1 = (props, context) => {
    const {data} = context; 

    return (
        <div>
            {data && data.PM1 && <Measure {...data.PM1} ValueElement={SimpleValue} />}
        </div>
    )
}

PM1.contextTypes = {
    data: PropTypes.object
}

export default PM1;