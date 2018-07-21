import { connect } from 'react-redux';

import { fetchSessions } from '../../redux/sessions/actions';
import { fetchWeather } from '../../redux/weather/actions';

export const mapStateToProps = state => ({
  sessions: state.sessions,
  weather: state.weather
});

export const mapDispatchToProps = dispatch => ({
  fetchSessions: () => dispatch(fetchSessions()),
  fetchWeather: () => dispatch(fetchWeather())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
