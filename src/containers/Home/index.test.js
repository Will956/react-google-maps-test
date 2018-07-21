import React from 'react';
import { shallow } from 'enzyme';
import { googleMapURL } from '../../config';

import { Home } from './index';
import Map from '../../components/Map';

describe('<Home /> tests', () => {
  const noop = () => {};
  const mockData = {
    isFetching: false,
    error: null,
    sessions: [
      {
        name: 'first',
        coordinates: {
          lat: 48.8558986,
          lng: 2.2980875
        }
      },
      {
        name: 'second',
        coordinates: {
          lat: 50.8558986,
          lng: 2.2980875
        }
      }
    ]
  };

  it('snapshot: renders default state', () => {
    const wrapper = shallow(
      <Home
        sessions={mockData}
        weather={[]}
        fetchSessions={noop}
        fetchWeather={noop}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('correctly takes googleMapURL filled in the config', () => {
    const wrapper = shallow(
      <Home
        sessions={mockData}
        weather={[]}
        fetchSessions={noop}
        fetchWeather={noop}
      />
    );

    expect(wrapper.find(Map).props().googleMapURL).toEqual(googleMapURL);
  });
});
