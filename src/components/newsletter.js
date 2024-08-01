import ColorNewsletter from "./color-newsletter";
import PropTypes from "prop-types";
import styles from "./newsletter.module.css";

const Newsletter = ({ className = "" }) => {
  return (
    <div className={[styles.newsletter, className].join(" ")}>
      <div className={styles.menu}>
        <div className={styles.newsletter1}>Newsletter</div>
        <div className={styles.beTheFirst}>
          Be the first one to know about discounts, offers and events
        </div>
      </div>
      <ColorNewsletter />
    </div>
  );
};

Newsletter.propTypes = {
  className: PropTypes.string,
};

export default Newsletter;
