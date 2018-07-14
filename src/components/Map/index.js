import React from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs
} from 'react-google-maps';

import { defaultProps, propTypes } from './props';
import { defaultZoom, defaultCenter } from '../../config';

const Map = ({ sessions }) => (
  <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
    {sessions &&
      sessions.map(({ coordinates: { lat, lng }, name }) => (
        <Marker position={{ lat, lng }} key={name} />
      ))}
  </GoogleMap>
);

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default withScriptjs(withGoogleMap(Map));
