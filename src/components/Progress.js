import PropTypes from 'prop-types';
import React from 'react';

class Progress extends React.Component {
  render() {
    const { value, max, color } = this.props;
    const percent = (value * 100) / max;
    return (
      <div
        className="progressbar"
        style={ {
          position: 'relative',
          borderRadius: '1rem',
          width: '50%',
          height: '1rem',
          background: '#d0d2d5',
        } }
      >
        <span
          className="progress"
          style={ {
            position: 'absolute',
            width: `${percent > 100 ? 100 : percent}%`,
            background: color,
            height: '100%',
            borderRadius: '1rem',
          } }
        />
      </div>
    );
  }
}

Progress.propTypes = {
  max: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Progress;
