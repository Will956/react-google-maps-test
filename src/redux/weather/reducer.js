import { REQUEST_WEATHER, RECEIVE_WEATHER, ERROR_WEATHER } from './actions';

const mapWeather = ({ dt_txt, weather, main: { temp } }) => ({
  dt_txt,
  temp,
  description: weather[0].description
});

export default (
  state = {
    isFetching: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case REQUEST_WEATHER: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case RECEIVE_WEATHER: {
      const { data } = action.payload;

      return Object.assign({}, state, {
        isFetching: false,
        weather: [...data.list.map(l => mapWeather(l))]
      });
    }
    case ERROR_WEATHER: {
      const {
        error: { message }
      } = action.payload;

      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        errorMessage: message
      });
    }

    default:
      return state;
  }
};
