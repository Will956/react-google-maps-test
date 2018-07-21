import React, { Component } from 'react';
import { compose } from 'redux';
import classNames from 'classnames';

import connectState from './state';
import { googleMapURL } from '../../config';

import Map from '../../components/Map';

import s from './index.scss';

class Home extends Component {
  componentDidMount() {
    const { fetchSessions, fetchWeather } = this.props;
    fetchSessions();
    fetchWeather();
  }

  render() {
    const {
      sessions: { isFetching, error, errorMessage, sessions },
      weather: { weather }
    } = this.props;

    if (isFetching) return <div>Loading...</div>;
    if (error && errorMessage) return <div>Error: {errorMessage}</div>;

    return (
      <div>
        <Map
          googleMapURL={googleMapURL}
          loadingElement={
            <div
              style={{
                height: '100%'
              }}
            />
          }
          containerElement={<div className={classNames(s['map-container'])} />}
          mapElement={<div className={classNames(s.map)} />}
          sessions={sessions}
          weather={weather}
        />
      </div>
    );
  }
}

export { Home };

export default compose(connectState)(Home);
