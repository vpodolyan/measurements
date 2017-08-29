import React from 'react';
import PropTypes from 'prop-types';

import Measure from './Measure';
import LocationValue from './LocationValue';

const Location = (props, context) => {
    const {data} = context;

    return (
        <div>
            {data && data.Location && <Measure {...data.Location} ValueElement={LocationValue} />}
        </div>
    )
}

Location.contextTypes = {
    data: PropTypes.object
}

export default Location;