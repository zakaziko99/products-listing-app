import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });

describe('Testing initial state', () => {
  it('should display loading and have no products', () => {
    const wrapper = shallow(<App />);

    //initial state of products
    expect(wrapper.state().products).toEqual([]);
    expect(wrapper.state().isLoading).toEqual(true);
  });
});
