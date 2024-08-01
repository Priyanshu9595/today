import PropTypes from "prop-types";
import styles from "./company-info.module.css";

const CompanyInfo = ({ className = "" }) => {
  return (
    <div className={[styles.companyInfo, className].join(" ")}>
      <div className={styles.companyDetails}>
        <div className={styles.companyHeader}>
          <img className={styles.logoIcon} alt="" src="/logo-1.svg" />
          <div className={styles.footerBrand}>
            <h3 className={styles.zenden}>ZENDEN</h3>
          </div>
        </div>
        <div className={styles.companyDescription}>
          <div className={styles.weAraAContainer}>
            <span>{`We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... `}</span>
            <span className={styles.readMore}>Read More</span>
          </div>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.lighttel}>
          <img className={styles.icons} alt="" src="/icons-6.svg" />
          <div className={styles.text}>
            <div className={styles.tel}>Tel</div>
            <div className={styles.contactValues}>310-437-2766</div>
          </div>
        </div>
        <div className={styles.lighttel}>
          <img className={styles.icons} alt="" src="/icons-7.svg" />
          <div className={styles.text}>
            <div className={styles.tel}>Mail</div>
            <div className={styles.contactValues}>unreal@outlook.com</div>
          </div>
        </div>
        <div className={styles.lightaddress}>
          <img className={styles.icons} alt="" src="/icons-8.svg" />
          <div className={styles.text2}>
            <div className={styles.tel}>Address</div>
            <div className={styles.campfireAveMeriden}>
              706 Campfire Ave. Meriden, CT 06450
            </div>
          </div>
        </div>
        <div className={styles.lightfax}>
          <img
            className={styles.lighticon}
            loading="lazy"
            alt=""
            src="/icons-61.svg"
          />
          <div className={styles.text}>
            <div className={styles.tel}>Fax</div>
            <div className={styles.contactValues}>+1-000-0000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

CompanyInfo.propTypes = {
  className: PropTypes.string,
};

export default CompanyInfo;
