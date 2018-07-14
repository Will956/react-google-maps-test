import PropTypes from 'prop-types';

export const propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
      coordinates: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number
      }),
      max_participant: PropTypes.number,
      nb_participant: PropTypes.number,
      type: PropTypes.string
    })
  )
};

export const defaultProps = {
  sessions: []
};
