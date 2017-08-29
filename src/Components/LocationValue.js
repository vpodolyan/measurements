import React from 'react';

const LocationValue =({value}) => {
    if (!value || value.length < 2) {
        return null;
    }

    return (<span>{`${value[0]} ${value[1]}`}</span>)
}

export default LocationValue;