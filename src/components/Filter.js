import PropTypes from 'prop-types';
import React from 'react';

class Filter extends React.Component {
  render() {
    const { filterName, filterRare, filterTrunfo, onInputChange } = this.props;
    return (
      <div className="filter">
        <label htmlFor="filterName">
          Nome:
          <input
            id="filterName"
            name="filterName"
            data-testid="name-filter"
            type="text"
            onChange={ onInputChange }
            value={ filterName }
            disabled={ filterTrunfo }
          />
        </label>
        <label htmlFor="filterRare">
          Raridade:
          <select
            id="filterRare"
            name="filterRare"
            data-testid="rare-filter"
            onChange={ onInputChange }
            value={ filterRare }
            disabled={ filterTrunfo }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="filterTrunfo">
          Super Trunfo:
          <input
            id="filterTrunfo"
            name="filterTrunfo"
            data-testid="trunfo-filter"
            type="checkbox"
            checked={ filterTrunfo }
            onChange={ onInputChange }
          />
        </label>
      </div>
    );
  }
}

Filter.defaultProps = {
  filterName: '',
  filterRare: '',
  filterTrunfo: false,
};

Filter.propTypes = {
  filterName: PropTypes.string,
  filterRare: PropTypes.string,
  filterTrunfo: PropTypes.bool,
  onInputChange: PropTypes.func.isRequired,
};

export default Filter;
