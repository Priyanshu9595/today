import ValueFilter from "./value-filter";
import Checkbox from "./checkbox";
import ScaleOption from "./scale-option";
import PropTypes from "prop-types";
import styles from "./filter-section.module.css";

const FilterSection = ({ className = "" }) => {
  return (
    <div className={[styles.filterSection, className].join(" ")}>
      <div className={styles.filterSectionChild} />
      <div className={styles.horizontalDividerParent}>
        <div className={styles.horizontalDivider} />
        <div className={styles.filterHeadingContainer}>
          <div className={styles.filterHeader}>
            <div className={styles.filtersParent}>
              <a className={styles.filters}>Filters</a>
              <div className={styles.priceFilterLabel}>
                <div className={styles.priceRange}>Price Range</div>
              </div>
            </div>
            <div className={styles.clearFilterButton}>
              <div className={styles.clearFilter}>
                <div className={styles.clearAllWrapper}>
                  <a className={styles.clearAll}>Clear all</a>
                </div>
                <img
                  className={styles.clearFilterChild}
                  alt=""
                  src="/arrow-4.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.priceSlider}>
        <div className={styles.sliderBar}>
          <div className={styles.barHandle}>
            <img
              className={styles.handleIcon}
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
            <img className={styles.barIcon} alt="" src="/bar.svg" />
          </div>
        </div>
        <div className={styles.sliderBar}>
          <div className={styles.filterHeader}>
            <div className={styles.tickValues}>
              <div className={styles.b1}>
                <div className={styles.b1Child} />
                <div className={styles.minTick}>10,000</div>
              </div>
            </div>
            <div className={styles.b11}>
              <div className={styles.b1Child} />
              <div className={styles.maxTick}>1,00,000</div>
            </div>
          </div>
        </div>
        <div className={styles.priceDivider}>
          <div className={styles.priceDividerChild} />
        </div>
        <div className={styles.filters1}>
          <div className={styles.collectionFilterList}>
            <div className={styles.collectionHeader}>
              <div className={styles.collections}>Collections</div>
              <img className={styles.icons} alt="" src="/icons.svg" />
            </div>
            <ValueFilter
              bestValueFromCustomers="Best value from customers"
              membersOnlyDeals="Members only deals"
            />
            <div className={styles.memberDealsOption}>
              <img className={styles.icons1} alt="" src="/icons.svg" />
              <div className={styles.memberDealsLabel}>
                <div className={styles.showMoreCollections}>
                  <div className={styles.showMore}>Show more</div>
                  <img className={styles.icons2} alt="" src="/icons-2.svg" />
                </div>
                <div className={styles.categoryHeader}>
                  <h3 className={styles.categories}>Categories</h3>
                  <ValueFilter
                    propHeight="unset"
                    propFlex="1"
                    bestValueFromCustomers="Less than $25"
                    membersOnlyDeals="$150 - $250"
                  />
                  <div className={styles.greaterThanOption}>
                    <div className={styles.greaterThanFilter}>
                      <Checkbox />
                    </div>
                    <div className={styles.greaterThanLabel}>$250 - $350</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.emptyOption}>
              <div className={styles.emptyFilter}>
                <Checkbox />
              </div>
              <div className={styles.greaterThanLabel}>Greater than $500</div>
            </div>
            <div className={styles.showMoreCategories}>
              <div className={styles.showMore1}>Show more</div>
              <img className={styles.icons3} alt="" src="/icons-3.svg" />
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.rating}>Rating</h3>
            <img className={styles.icons4} alt="" src="/icons.svg" />
            <div className={styles.ratingOptions}>
              <div className={styles.scaleOption}>
                <img
                  className={styles.radioEmpty}
                  alt=""
                  src="/radio--empty.svg"
                />
              </div>
              <div className={styles.greaterThanLabel}>1 Star</div>
            </div>
            <div className={styles.ratingOptions1}>
              <div className={styles.scaleOption}>
                <img
                  className={styles.radioEmpty}
                  alt=""
                  src="/radio--empty.svg"
                />
              </div>
              <div className={styles.greaterThanLabel}>2 Stars</div>
            </div>
            <div className={styles.ratingOptions2}>
              <div className={styles.scaleOption}>
                <img
                  className={styles.radioEmpty}
                  alt=""
                  src="/radio--empty.svg"
                />
              </div>
              <div className={styles.greaterThanLabel}>3 Stars</div>
            </div>
            <div className={styles.ratingOptions3}>
              <div className={styles.scaleOption}>
                <img
                  className={styles.radioEmpty}
                  alt=""
                  src="/radio--empty.svg"
                />
              </div>
              <div className={styles.greaterThanLabel}>4 Stars</div>
            </div>
            <div className={styles.ratingOptions4}>
              <ScaleOption />
              <div className={styles.greaterThanLabel}>5 Stars</div>
            </div>
            <div className={styles.showMore2}>Show more</div>
            <img className={styles.icons5} alt="" src="/icons-5.svg" />
          </div>
          <div className={styles.ratingDivider} />
        </div>
      </div>
      <div className={styles.footerDivider} />
    </div>
  );
};

FilterSection.propTypes = {
  className: PropTypes.string,
};

export default FilterSection;
