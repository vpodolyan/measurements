import React from 'react';

import {Measure} from './Measure';

export const Measurements = ({list}) => (
    <div>
        {
            list.map((measure, i) => (
                <Measure key={i} {...measure} />
            ))
        }
    </div>
)