import { combineReducers } from 'redux';

import sessionsReducer from './sessions/reducer';

const rootReducer = combineReducers({
  sessions: sessionsReducer
});

export default rootReducer;
