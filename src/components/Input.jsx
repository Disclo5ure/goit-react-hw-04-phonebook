import PropTypes from 'prop-types';

export const Input = props => (
  <input type={props.type} name={props.name} title={props.title} required />
);

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
};
