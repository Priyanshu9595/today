import PropTypes from "prop-types";
import styles from "./checkbox.module.css";

const Checkbox = ({ className = "" }) => {
  return (
    <input className={[styles.checkbox, className].join(" ")} type="checkbox" />
  );
};

Checkbox.propTypes = {
  className: PropTypes.string,
};

export default Checkbox;
