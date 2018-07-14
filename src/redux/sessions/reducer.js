import { REQUEST_SESSIONS, RECEIVE_SESSIONS, ERROR_SESSIONS } from './actions';

export default (
  state = {
    isFetching: false,
    error: null
  },
  action
) => {
  switch (action.type) {
    case REQUEST_SESSIONS: {
      return Object.assign({}, state, {
        isFetching: true
      });
    }
    case RECEIVE_SESSIONS: {
      const { data } = action.payload;

      return Object.assign({}, state, {
        isFetching: false,
        ...data
      });
    }
    case ERROR_SESSIONS: {
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
