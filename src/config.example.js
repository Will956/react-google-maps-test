// Remove the .example and fill your api-key

const config = {
  googleMap: {
    url:
      'https://maps.googleapis.com/maps/api/js?key={apiKey}&v=3.exp&libraries=geometry,drawing,places',
    apiKey: '',
    defaultZoom: 13,
    defaultCenter: {
      lat: 48.856614,
      lng: 2.3522219
    }
  },
  openWeather: {
    url:
      'https://api.openweathermap.org/data/2.5/forecast?id=2968815&appid={apiKey}&lang=fr&units=metric',
    apiKey: ''
  }
};

export const googleMapApiKey = config.googleMap.apiKey;
export const googleMapURL = config.googleMap.url.replace(
  '{apiKey}',
  googleMapApiKey
);
export const defaultZoom = config.googleMap.defaultZoom;
export const defaultCenter = config.googleMap.defaultCenter;

export const openWeatherApiKey = config.openWeather.apiKey;
export const openWeatherUrl = config.openWeather.url.replace(
  '{apiKey}',
  openWeatherApiKey
);

export default config;
