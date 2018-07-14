import { REQUEST_SESSIONS, RECEIVE_SESSIONS, ERROR_SESSIONS } from './actions';
import reducer from './reducer';

describe('Sessions reducer', () => {
  it('returns state when action is not a valid case', () => {
    const state = { hello: 'world' };
    const action = { type: 'another one' };
    expect(reducer(state, action)).toEqual(state);
  });

  describe(REQUEST_SESSIONS, () => {
    it('returns action payload', () => {
      const state = {};
      const action = {
        type: REQUEST_SESSIONS
      };
      expect(reducer(state, action)).toEqual({
        isFetching: true
      });
    });
  });

  describe(RECEIVE_SESSIONS, () => {
    it('returns action payload', () => {
      const state = {};
      const action = {
        type: RECEIVE_SESSIONS,
        payload: { data: { sessions: [{ name: 'one' }] } }
      };
      expect(reducer(state, action)).toEqual({
        isFetching: false,
        sessions: [{ name: 'one' }]
      });
    });
  });

  describe(ERROR_SESSIONS, () => {
    it('returns action payload', () => {
      const state = {};
      const action = {
        type: ERROR_SESSIONS,
        payload: { error: { message: 'error' } }
      };
      expect(reducer(state, action)).toEqual({
        isFetching: false,
        error: true,
        errorMessage: 'error'
      });
    });
  });
});
