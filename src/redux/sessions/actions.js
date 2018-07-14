export const REQUEST_SESSIONS = 'REQUEST_SESSIONS';
export const RECEIVE_SESSIONS = 'RECEIVE_SESSIONS';
export const ERROR_SESSIONS = 'ERROR_SESSIONS';

export const fetchSessions = () => ({
  type: REQUEST_SESSIONS
});

export const receiveSessions = data => ({
  type: RECEIVE_SESSIONS,
  payload: { data }
});

export const errorSessions = error => ({
  type: ERROR_SESSIONS,
  payload: { error }
});
