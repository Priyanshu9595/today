import PropTypes from "prop-types";
import styles from "./navigation1.module.css";

const Navigation1 = ({ className = "" }) => {
  return (
    <header className={[styles.navigation, className].join(" ")}>
      <div className={styles.logoParent}>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
        />
        <div className={styles.zendenWrapper}>
          <a className={styles.zenden}>ZENDEN</a>
        </div>
      </div>
      <nav className={styles.primaryNavigation}>
        <nav className={styles.navigationLinks}>
          <div className={styles.servicesLink}>
            <a className={styles.services}>Services</a>
          </div>
          <div className={styles.featuresLink}>
            <a className={styles.features}>Features</a>
          </div>
          <a className={styles.aboutUs}>About Us</a>
        </nav>
      </nav>
      <div className={styles.authButtons}>
        <button className={styles.buttoncontained}>
          <img
            className={styles.materialSymbolsloginIcon}
            alt=""
            src="/materialsymbolslogin.svg"
          />
          <a className={styles.button}>LogIn</a>
        </button>
        <div className={styles.buttoncontained1}>
          <img className={styles.mdiuserIcon} alt="" src="/mdiuser.svg" />
          <div className={styles.userDropdown}>
            <img
              className={styles.quillhamburgerIcon}
              alt=""
              src="/quillhamburger.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

Navigation1.propTypes = {
  className: PropTypes.string,
};

export default Navigation1;
