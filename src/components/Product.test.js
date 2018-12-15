import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Product from './Product';

configure({ adapter: new Adapter() });

describe('Testing Product component display', () => {
  const product = {
    id: "BCH-USD",
    base_currency: "BCH",
    quote_currency: "USD",
    base_min_size: "0.01",
    base_max_size: "350",
    quote_increment: "0.01",
    display_name: "BCH/USD",
    status: "online",
    margin_enabled: false,
    status_message: null,
    min_market_funds: "10",
    max_market_funds: "1000000"
  };
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<Product data={product} />);
  });

  it('contains a label', () => {
    expect(wrapper.find('h2.ProductName').text().length).toBeGreaterThan(0);
  });

  it('should have a status', () => {
    expect(wrapper.find('.textStatus').text().length).toBeGreaterThan(0);
  });
});
