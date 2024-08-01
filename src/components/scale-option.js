import PropTypes from "prop-types";
import styles from "./scale-option.module.css";

const ScaleOption = ({ className = "" }) => {
  return (
    <div className={[styles.scaleOption, className].join(" ")}>
      <div className={styles.scaleOption1}>
        <img className={styles.radioFilled} alt="" src="/radio--filled.svg" />
      </div>
    </div>
  );
};

ScaleOption.propTypes = {
  className: PropTypes.string,
};

export default ScaleOption;
