import PropTypes from "prop-types";
import styles from "./bottom-bar.module.css";

const BottomBar = ({ className = "" }) => {
  return (
    <div className={[styles.bottombar, className].join(" ")}>
      <div className={styles.footerLinks}>
        <div className={styles.aboutUs}>About us</div>
        <div className={styles.contact}>Contact</div>
        <div className={styles.privacyPolicy}>Privacy policy</div>
        <div className={styles.sitemap}>Sitemap</div>
        <div className={styles.termsOfUse}>Terms of Use</div>
      </div>
      <div className={styles.allRightsReserved}>
        © 2000-2021, All Rights Reserved
      </div>
    </div>
  );
};

BottomBar.propTypes = {
  className: PropTypes.string,
};

export default BottomBar;
