import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProductStats from './ProductStats';

configure({ adapter: new Adapter() });

describe('Testing ProductStats component display', () => {
  const productStats = {
    open: "62.00000000",
    high: "62.00000000",
    low: "62.00000000",
    volume: "1.05263157",
    last: "62.00000000",
    volume_30day: "9963.86394451"
  };
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ProductStats data={productStats} />);
  });

  it('should have a volume', () => {
    expect(wrapper.find('.volume').text().length).toBeGreaterThan(0);
  });
});
