import React from 'react';
import { shallow } from 'enzyme';
import { googleMapURL } from '../../config';

import Home from './index';
import Map from '../../components/Map';

describe('<Home /> tests', () => {
  it('snapshot: renders default state', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });

  it('correctly takes googleMapURL filled in the config', () => {
    const wrapper = shallow(<Home />);

    expect(wrapper.find(Map).props().googleMapURL).toEqual(googleMapURL);
  });
});
