import Navigation1 from "../components/navigation1";
import SideSection from "../components/side-section";
import FilterSection from "../components/filter-section";
import Newsletter from "../components/newsletter";
import CompanyInfo from "../components/company-info";
import BottomBar from "../components/bottom-bar";
import styles from "./room-view-page.module.css";

const RoomViewPage = () => {
  return (
    <div className={styles.roomViewPage}>
      <Navigation1 />
      <section className={styles.mainContent}>
        <div className={styles.sideSectionWrapper}>
          <SideSection />
        </div>
        <FilterSection />
      </section>
      <footer className={styles.footer}>
        <Newsletter />
        <CompanyInfo />
        <div className={styles.siteFooter}>
          <div className={styles.menus}>
            <div className={styles.menu}>
              <b className={styles.about}>About</b>
              <div className={styles.items}>
                <div className={styles.about}>About us</div>
                <div className={styles.about}>Blog</div>
                <div className={styles.about}>Careers</div>
                <div className={styles.about}>Jobs</div>
                <div className={styles.about}>In Press</div>
              </div>
            </div>
            <div className={styles.menu}>
              <b className={styles.about}>Support</b>
              <div className={styles.items}>
                <div className={styles.about}>Contact us</div>
                <div className={styles.about}>Online Chat</div>
                <div className={styles.about}>Whatsapp</div>
                <div className={styles.about}>Telegram</div>
                <div className={styles.about}>Ticketing</div>
              </div>
            </div>
            <div className={styles.menu}>
              <b className={styles.about}>FAQ</b>
              <div className={styles.items}>
                <div className={styles.about}>Account</div>
                <div className={styles.manageDeliveries}>Manage Deliveries</div>
                <div className={styles.about}>Orders</div>
                <div className={styles.about}>Payments</div>
                <div className={styles.about}>Returns</div>
              </div>
            </div>
            <div className={styles.menu}>
              <b className={styles.about}>About</b>
              <div className={styles.items}>
                <div className={styles.about}>About us</div>
                <div className={styles.about}>Blog</div>
                <div className={styles.about}>Careers</div>
                <div className={styles.about}>Jobs</div>
                <div className={styles.about}>In Press</div>
              </div>
            </div>
            <div className={styles.menu}>
              <b className={styles.about}>Support</b>
              <div className={styles.items}>
                <div className={styles.about}>Contact us</div>
                <div className={styles.about}>Online Chat</div>
                <div className={styles.about}>Whatsapp</div>
                <div className={styles.about}>Telegram</div>
                <div className={styles.about}>Ticketing</div>
              </div>
            </div>
            <div className={styles.menu}>
              <b className={styles.about}>FAQ</b>
              <div className={styles.items}>
                <div className={styles.about}>Account</div>
                <div className={styles.manageDeliveries}>Manage Deliveries</div>
                <div className={styles.about}>Orders</div>
                <div className={styles.about}>Payments</div>
                <div className={styles.about}>Returns</div>
              </div>
            </div>
          </div>
        </div>
        <BottomBar />
      </footer>
    </div>
  );
};

export default RoomViewPage;
