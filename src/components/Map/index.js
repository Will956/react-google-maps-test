import React from 'react';
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

import { defaultZoom, defaultCenter } from '../../config';

const Map = () => (
  <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter} />
);

export default withScriptjs(withGoogleMap(Map));
