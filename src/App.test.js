import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('snapshot: renders default state', () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
