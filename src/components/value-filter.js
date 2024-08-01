import { useMemo } from "react";
import Checkbox from "./checkbox";
import PropTypes from "prop-types";
import styles from "./value-filter.module.css";

const ValueFilter = ({
  className = "",
  propHeight,
  propFlex,
  bestValueFromCustomers,
  membersOnlyDeals,
}) => {
  const valueFilterStyle = useMemo(() => {
    return {
      height: propHeight,
      flex: propFlex,
    };
  }, [propHeight, propFlex]);

  return (
    <div
      className={[styles.valueFilter, className].join(" ")}
      style={valueFilterStyle}
    >
      <div className={styles.valueOptions}>
        <div className={styles.bestValueOption}>
          <Checkbox />
        </div>
        <div className={styles.bestValueFrom}>{bestValueFromCustomers}</div>
      </div>
      <div className={styles.valueOptions}>
        <div className={styles.checkboxWrapper}>
          <Checkbox />
        </div>
        <div className={styles.bestValueFrom}>{membersOnlyDeals}</div>
      </div>
    </div>
  );
};

ValueFilter.propTypes = {
  className: PropTypes.string,
  bestValueFromCustomers: PropTypes.string,
  membersOnlyDeals: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propFlex: PropTypes.any,
};

export default ValueFilter;
