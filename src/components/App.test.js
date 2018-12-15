import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';

configure({ adapter: new Adapter() });

describe('Testing fetching API data', () => {
  it('renders products when it fetched data successfully', () => {
    // const wrapper = shallow(<App />);
  });
});
