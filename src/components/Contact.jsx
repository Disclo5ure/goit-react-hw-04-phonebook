import PropTypes from 'prop-types';

export const Contact = props => (
  <li>
    {props.name}: {props.number}
    <button
      className="delete-button"
      onClick={() => props.handleDelete(props.name)}
    >
      Delete
    </button>
  </li>
);

Contact.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
};
