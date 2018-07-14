import { REQUEST_SESSIONS, receiveSessions, errorSessions } from './actions';

const sessionsMiddleware = ({ dispatch }) => next => action => {
  if (action.type === REQUEST_SESSIONS) {
    fetch('/api/sessions.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(data => next(receiveSessions(data)))
      .catch(err => next(errorSessions(err)));
  }
  return next(action);
};

export default sessionsMiddleware;
