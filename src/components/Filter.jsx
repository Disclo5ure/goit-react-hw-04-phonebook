import PropTypes from 'prop-types';

export const Filter = props => (
  <>
    <p>Find contacts by name</p>
    <input type="text" onChange={props.handleFilter} />
  </>
);

Filter.propTypes = {
  handleFilter: PropTypes.func,
};
