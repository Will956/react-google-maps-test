import { combineReducers } from 'redux';

import sessionsReducer from './sessions/reducer';
import weatherReducer from './weather/reducer';

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  weather: weatherReducer
});

export default rootReducer;
