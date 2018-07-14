import { mapStateToProps, mapDispatchToProps } from './state';
import { fetchSessions } from '../../redux/sessions/actions';

describe('<Home /> state', () => {
  describe('mapStateToProps', () => {
    it('correctly map state to props', () => {
      const state = {
        sessions: [
          {
            name: 'first',
            coordinates: {
              lat: 48.8558986,
              lng: 2.2980875
            }
          },
          {
            name: 'second',
            coordinates: {
              lat: 50.8558986,
              lng: 2.2980875
            }
          }
        ]
      };

      expect(mapStateToProps(state)).toEqual({
        sessions: state.sessions
      });
    });
  });

  describe('mapDispatchToProps', () => {
    it('fetchSessions', () => {
      const dispatch = jest.fn();
      const mappedDispatchProps = mapDispatchToProps(dispatch);

      mappedDispatchProps.fetchSessions();
      expect(dispatch).toHaveBeenLastCalledWith(fetchSessions());
    });
  });
});
