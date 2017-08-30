import React from 'react';

const SimpleValue = ({value, unit}) => (<span>{`${value} ${unit || ''}`}</span>)

export default SimpleValue;