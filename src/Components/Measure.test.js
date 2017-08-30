import React from 'react';
import { mount } from 'enzyme';

import Measure from './Measure';

it('renders ValueElement correctly', () => {
    const txt = 'text';
    const element = () => (<span className="awesome-element">{txt}</span>);

    const wrapper = mount(
        <Measure measurements={[1, 2]} ValueElement={element} />
    );

    const span = wrapper.find('.awesome-element').first();
    expect(span.text()).toBe(txt);
})