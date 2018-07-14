// Remove the .example and fil your api-key

const config = {
  googleMapURL:
    'https://maps.googleapis.com/maps/api/js?key={apiKey}&v=3.exp&libraries=geometry,drawing,places',
  apiKey: 'your-api-key',
  defaultZoom: 13,
  defaultCenter: {
    lat: 48.856614,
    lgn: 2.3522219
  }
};

export const apiKey = config.apiKey;
export const googleMapURL = config.googleMapURL.replace('{apiKey}', apiKey);
export const defaultZoom = config.defaultZoom;
export const defaultCenter = config.defaultCenter;

export default config;
