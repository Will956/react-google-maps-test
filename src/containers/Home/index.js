import React from 'react';
import classNames from 'classnames';
import { googleMapURL } from '../../config';

import Map from '../../components/Map';

import s from './index.scss';

const Home = () => (
  <div>
    <Map
      googleMapURL={googleMapURL}
      loadingElement={
        <div
          style={{
            height: `100%`
          }}
        />
      }
      containerElement={<div className={classNames(s['map-container'])} />}
      mapElement={<div className={classNames(s.map)} />}
    />
  </div>
);

export default Home;
