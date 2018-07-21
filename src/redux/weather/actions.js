export const REQUEST_WEATHER = 'REQUEST_WEATHER';
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const ERROR_WEATHER = 'ERROR_WEATHER';

export const fetchWeather = () => ({
  type: REQUEST_WEATHER
});

export const receiveWeather = data => ({
  type: RECEIVE_WEATHER,
  payload: { data }
});

export const errorWeather = error => ({
  type: ERROR_WEATHER,
  payload: { error }
});
