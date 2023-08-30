import './Loading.css';
import PropTypes from 'prop-types';

const Loading = ({ type }) => (
  <div className="loading--container">
    <h4 className="Loading--header">{`Loading ${type} ...`}</h4>
    <p>Please hold on...</p>
  </div>
);

Loading.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Loading;
