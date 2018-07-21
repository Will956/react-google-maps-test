import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';
import MapItem from '../MapItem';

import { defaultProps, propTypes } from './props';
import { defaultZoom, defaultCenter } from '../../config';

const Map = ({ sessions }) => (
  <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
    {sessions &&
      sessions.map((session, index) => <MapItem {...session} key={index} />)}
  </GoogleMap>
);

Map.propTypes = propTypes;
Map.defaultProps = defaultProps;

export default withScriptjs(withGoogleMap(Map));
