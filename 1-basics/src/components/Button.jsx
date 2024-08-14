import "./Button.css";
import PropTypes from "prop-types";

export const Button = ({text}) => {
  return <button className="btn">{text}</button>;
};


Button.propTypes = {
  text: PropTypes.string.isRequired,
};
