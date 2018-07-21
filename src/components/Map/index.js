import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import MapItem from '../MapItem';

import { defaultProps, propTypes } from './props';
import { defaultZoom, defaultCenter } from '../../config';

const Map = ({ sessions, weather }) => {
  const getClosestDate = (date, arr) => {
    const sortedArray = arr.sort((a, b) => {
      const firstDate = Math.abs(date - new Date(a.dt_txt));
      const secondDate = Math.abs(date - new Date(b.dt_txt));
      return firstDate - secondDate;
    });

    const beforeDates = sortedArray.filter(item => {
      return new Date(item.dt_txt) - date < 0;
    });

    return beforeDates[0];
  };

  const mapWeather = sessions.map(({ date }) => {
    return getClosestDate(new Date(date), weather);
  });

  return (
    <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
      {sessions &&
        sessions.map((session, index) => (
          <MapItem {...session} weather={mapWeather[index]} key={index} />
        ))}
    </GoogleMap>
  );
};

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default withScriptjs(withGoogleMap(Map));
