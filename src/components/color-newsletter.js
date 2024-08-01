import ColorButton from "./color-button";
import PropTypes from "prop-types";
import styles from "./color-newsletter.module.css";

const ColorNewsletter = ({ className = "" }) => {
  return (
    <div className={[styles.colornewsletter, className].join(" ")}>
      <img className={styles.coloricon} alt="" src="/coloricon.svg" />
      <div className={styles.enterYourEmail}>Enter your email</div>
      <div className={styles.right}>
        <ColorButton />
      </div>
    </div>
  );
};

ColorNewsletter.propTypes = {
  className: PropTypes.string,
};

export default ColorNewsletter;
