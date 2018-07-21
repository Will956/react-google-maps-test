import { REQUEST_WEATHER, receiveWeather, errorWeather } from './actions';

import { openWeatherUrl } from '../../config';

const weatherMiddleware = ({ dispatch }) => next => action => {
  if (action.type === REQUEST_WEATHER) {
    fetch(openWeatherUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => next(receiveWeather(data)))
      .catch(err => next(errorWeather(err)));
  }

  return next(action);
};

export default weatherMiddleware;
