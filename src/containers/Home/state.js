import { connect } from 'react-redux';

import { fetchSessions } from '../../redux/sessions/actions';

export const mapStateToProps = state => ({
  sessions: state.sessions
});

export const mapDispatchToProps = dispatch => ({
  fetchSessions: () => dispatch(fetchSessions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
