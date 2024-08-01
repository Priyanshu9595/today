import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./card-container.module.css";

const CardContainer = ({
  className = "",
  cardBackground,
  imagePlaceholder,
  typcnlocation,
  propPadding,
  amenityIconBackground,
  fluentMdl2calculatorAddit,
  propColor,
  priceBackground,
}) => {
  const cardAmenitiesStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const moreStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={[styles.cardContainer, className].join(" ")}>
      <div className={styles.card3}>
        <div className={styles.card3Child} />
        <img
          className={styles.cardBackgroundIcon}
          alt=""
          src={cardBackground}
        />
        <div className={styles.cardContent}>
          <div className={styles.cardTop}>
            <img
              className={styles.imagePlaceholderIcon}
              alt=""
              src={imagePlaceholder}
            />
            <div className={styles.titleContainerWrapper}>
              <div className={styles.titleContainer}>
                <div className={styles.superCollectionAvenue}>
                  Super collection Avenue near Gandhi maidan
                </div>
                <div className={styles.locationContainer}>
                  <div className={styles.locationDetails}>
                    <div className={styles.addressContainer}>
                      <div className={styles.gandhiMaidanPatna}>
                        Gandhi maidan, Patna
                      </div>
                    </div>
                    <img
                      className={styles.typcnlocationIcon}
                      alt=""
                      src={typcnlocation}
                    />
                    <div className={styles.addressContainer}>
                      <div className={styles.km}>3.3 km</div>
                    </div>
                  </div>
                  <div className={styles.ratingCardParent}>
                    <div className={styles.ratingCard}>
                      <div className={styles.ratingCardChild} />
                      <div className={styles.emptyStar}>3.7</div>
                      <img
                        className={styles.materialSymbolsstarIcon}
                        alt=""
                        src="/materialsymbolsstar.svg"
                      />
                    </div>
                    <div className={styles.ratings}>112 ratings</div>
                    <div className={styles.good}>Good</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardAmenities} style={cardAmenitiesStyle}>
            <div className={styles.amenityItems}>
              <img
                className={styles.amenityIconBackground}
                alt=""
                src={amenityIconBackground}
              />
              <div className={styles.amenityIconContainer}>
                <img
                  className={styles.materialSymbolswifiIcon}
                  alt=""
                  src="/materialsymbolswifi.svg"
                />
              </div>
              <div className={styles.amenityLabelContainer}>
                <div className={styles.freeWifi}>Free wifi</div>
              </div>
              <input className={styles.tVIconContainer} type="checkbox" />
              <div className={styles.tVLabelContainer}>
                <div className={styles.tv}>Tv</div>
              </div>
            </div>
            <div className={styles.aCIconContainerWrapper}>
              <div className={styles.aCIconContainer}>
                <img
                  className={styles.fluentMdl2snowShowerDayIcon}
                  alt=""
                  src="/fluentmdl2snowshowerday.svg"
                />
                <div className={styles.aCLabelContainer}>
                  <div className={styles.tv}>Ac</div>
                </div>
              </div>
            </div>
            <div className={styles.moreItemsWrapper}>
              <div className={styles.moreItems}>
                <div className={styles.moreIconContainer}>
                  <img
                    className={styles.fluentMdl2calculatorAdditioIcon}
                    alt=""
                    src={fluentMdl2calculatorAddit}
                  />
                </div>
                <div className={styles.more} style={moreStyle}>
                  4 more
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cardFooter}>
            <div className={styles.priceContainer}>
              <img
                className={styles.imagePlaceholderIcon}
                alt=""
                src={priceBackground}
              />
              <div className={styles.priceLabelContainer}>
                <div className={styles.rs10000}>Rs 10,000</div>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <div className={styles.viewDetails}>
                <div className={styles.viewDetailsChild} />
                <div className={styles.viewDetails1}>View Details</div>
              </div>
              <div className={styles.viewDetails2}>
                <div className={styles.viewDetailsItem} />
                <div className={styles.bookNow}>Book Now</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardContainer.propTypes = {
  className: PropTypes.string,
  cardBackground: PropTypes.string,
  imagePlaceholder: PropTypes.string,
  typcnlocation: PropTypes.string,
  amenityIconBackground: PropTypes.string,
  fluentMdl2calculatorAddit: PropTypes.string,
  priceBackground: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propColor: PropTypes.any,
};

export default CardContainer;
