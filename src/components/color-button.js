import PropTypes from "prop-types";
import styles from "./color-button.module.css";

const ColorButton = ({ className = "" }) => {
  return (
    <button className={[styles.colorbutton, className].join(" ")}>
      <div className={styles.registerLogin}>Submit</div>
    </button>
  );
};

ColorButton.propTypes = {
  className: PropTypes.string,
};

export default ColorButton;
