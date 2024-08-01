import CardContainer from "./card-container";
import PropTypes from "prop-types";
import styles from "./side-section.module.css";

const SideSection = ({ className = "" }) => {
  return (
    <div className={[styles.sideSection, className].join(" ")}>
      <div className={styles.sideSectionChild} />
      <div className={styles.navigationPanel}>
        <div className={styles.locationHierarchy}>
          <div className={styles.locationItems}>
            <div className={styles.locationItem}>
              <a className={styles.india}>India</a>
            </div>
            <img
              className={styles.weuiarrowFilledIcon}
              alt=""
              src="/weuiarrowfilled.svg"
            />
            <div className={styles.stateItem}>
              <a className={styles.bihar}>Bihar</a>
            </div>
            <div className={styles.weuiarrowFilledWrapper}>
              <img
                className={styles.weuiarrowFilledIcon1}
                alt=""
                src="/weuiarrowfilled-1.svg"
              />
            </div>
            <div className={styles.cityItem}>
              <a className={styles.patna}>Patna</a>
            </div>
          </div>
        </div>
        <div className={styles.mapView}>
          <a className={styles.mapView1}>Map View</a>
          <div className={styles.mapButtonContainer}>
            <div className={styles.mapButton}>
              <div className={styles.mapButtonChild} />
              <div className={styles.mapMarker} />
            </div>
          </div>
          <a className={styles.sortBy}>Sort By</a>
          <div className={styles.filterButton}>
            <div className={styles.filterButtonChild} />
            <a className={styles.popularity}>Popularity</a>
            <div className={styles.weuiarrowFilledContainer}>
              <img
                className={styles.weuiarrowFilledIcon2}
                alt=""
                src="/weuiarrowfilled-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.collectionList}>
        <div className={styles.collectionCards}>
          <div className={styles.collectionCard}>
            <img
              className={styles.cardBackgroundIcon}
              loading="lazy"
              alt=""
              src="/rectangle-83@2x.png"
            />
            <div className={styles.collectionCardImage}>
              <img
                className={styles.imagePlaceholderIcon}
                loading="lazy"
                alt=""
                src="/rectangle-84@2x.png"
              />
              <img
                className={styles.imagePlaceholderIcon}
                loading="lazy"
                alt=""
                src="/rectangle-85@2x.png"
              />
              <img
                className={styles.imagePlaceholderIcon}
                loading="lazy"
                alt=""
                src="/rectangle-86@2x.png"
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardDetails}>
                <div className={styles.locationInfo}>
                  <div className={styles.superCollectionAvenue}>
                    Super collection Avenue near Gandhi maidan
                  </div>
                  <div className={styles.addressDetails}>
                    <div className={styles.pinAddressParent}>
                      <div className={styles.pinAddress}>
                        <div className={styles.frameParent}>
                          <div className={styles.specificLocationParent}>
                            <div className={styles.specificLocation}>
                              <div className={styles.gandhiMaidanPatna}>
                                Gandhi maidan, Patna
                              </div>
                            </div>
                            <img
                              className={styles.typcnlocationIcon}
                              alt=""
                              src="/typcnlocation.svg"
                            />
                          </div>
                          <div className={styles.ratingAmenities}>
                            <div className={styles.ratingCard}>
                              <div className={styles.ratingCardChild} />
                              <div className={styles.ratingValue}>3.7</div>
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
                        <div className={styles.wifiDetailsParent}>
                          <div className={styles.wifiDetails}>
                            <img
                              className={styles.materialSymbolswifiIcon}
                              alt=""
                              src="/materialsymbolswifi.svg"
                            />
                          </div>
                          <div className={styles.wifiLabel}>
                            <div className={styles.freeWifi}>Free wifi</div>
                          </div>
                          <input className={styles.iontv} type="checkbox" />
                          <div className={styles.tvLabel}>
                            <div className={styles.tv}>Tv</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.distanceDetails}>
                        <div className={styles.km}>3.3 km</div>
                        <div className={styles.acDetails}>
                          <img
                            className={styles.fluentMdl2snowShowerDayIcon}
                            loading="lazy"
                            alt=""
                            src="/fluentmdl2snowshowerday.svg"
                          />
                        </div>
                      </div>
                      <div className={styles.ac}>Ac</div>
                    </div>
                    <div className={styles.moreDetails}>
                      <div className={styles.moreOptions}>
                        <div
                          className={styles.fluentMdl2calculatorAdditioWrapper}
                        >
                          <img
                            className={styles.fluentMdl2calculatorAdditioIcon}
                            alt=""
                            src="/fluentmdl2calculatoraddition.svg"
                          />
                        </div>
                        <div className={styles.more}>4 more</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.pricing}>
                  <div className={styles.frameGroup}>
                    <div className={styles.rs10000Wrapper}>
                      <div className={styles.rs10000}>Rs 10,000</div>
                    </div>
                    <div className={styles.actionButtons}>
                      <button className={styles.viewDetails}>
                        <div className={styles.viewDetailsChild} />
                        <div className={styles.viewDetails1}>View Details</div>
                      </button>
                      <button className={styles.viewDetails2}>
                        <div className={styles.viewDetailsItem} />
                        <div className={styles.bookNow}>Book Now</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card2}>
            <div className={styles.card2Child} />
            <img
              className={styles.listingBackgroundIcon}
              alt=""
              src="/rectangle-83-1@2x.png"
            />
            <div className={styles.listingDetails}>
              <div className={styles.primaryInfo}>
                <img
                  className={styles.imageContainerIcon}
                  alt=""
                  src="/rectangle-84-1@2x.png"
                />
                <div className={styles.contentArea}>
                  <div className={styles.titleAddress}>
                    <div className={styles.superCollectionAvenue1}>
                      Super collection Avenue near Gandhi maidan
                    </div>
                    <div className={styles.combinedLocationParent}>
                      <div className={styles.specificLocationParent}>
                        <div className={styles.specificLocation}>
                          <div className={styles.gandhiMaidanPatna}>
                            Gandhi maidan, Patna
                          </div>
                        </div>
                        <img
                          className={styles.typcnlocationIcon1}
                          alt=""
                          src="/typcnlocation-1.svg"
                        />
                        <div className={styles.specificLocation}>
                          <div className={styles.km1}>3.3 km</div>
                        </div>
                      </div>
                      <div className={styles.ratingAmenities}>
                        <div className={styles.ratingCard}>
                          <div className={styles.ratingCardChild} />
                          <div className={styles.ratingValue}>3.7</div>
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
              <div className={styles.amenityHighlights}>
                <div className={styles.primaryAmenities}>
                  <img
                    className={styles.separatorBarIcon}
                    alt=""
                    src="/rectangle-85-1@2x.png"
                  />
                  <div className={styles.wifiRepresentation}>
                    <img
                      className={styles.materialSymbolswifiIcon}
                      alt=""
                      src="/materialsymbolswifi.svg"
                    />
                  </div>
                  <div className={styles.amenityLabels}>
                    <div className={styles.freeWifi}>Free wifi</div>
                  </div>
                  <input className={styles.tvRepresentation} type="checkbox" />
                  <div className={styles.amenityLabels1}>
                    <div className={styles.tv}>Tv</div>
                  </div>
                </div>
                <div className={styles.additionalFeatures}>
                  <div className={styles.fluentMdl2snowShowerDayParent}>
                    <img
                      className={styles.fluentMdl2snowShowerDayIcon}
                      alt=""
                      src="/fluentmdl2snowshowerday.svg"
                    />
                    <div className={styles.acWrapper}>
                      <div className={styles.tv}>Ac</div>
                    </div>
                  </div>
                </div>
                <div className={styles.expansionOptions}>
                  <div className={styles.moreIconContainerParent}>
                    <div className={styles.moreIconContainer}>
                      <img
                        className={styles.fluentMdl2calculatorAdditioIcon}
                        alt=""
                        src="/fluentmdl2calculatoraddition-1.svg"
                      />
                    </div>
                    <div className={styles.more}>4 more</div>
                  </div>
                </div>
              </div>
              <div className={styles.priceBooking}>
                <div className={styles.priceDetails}>
                  <img
                    className={styles.imageContainerIcon}
                    alt=""
                    src="/rectangle-86-1@2x.png"
                  />
                  <div className={styles.priceTag}>
                    <div className={styles.rs100001}>Rs 10,000</div>
                  </div>
                </div>
                <div className={styles.buttonContainer}>
                  <div className={styles.viewDetails3}>
                    <div className={styles.viewDetailsChild} />
                    <div className={styles.viewDetails4}>View Details</div>
                  </div>
                  <div className={styles.viewDetails5}>
                    <div className={styles.viewDetailsItem} />
                    <div className={styles.bookNow1}>Book Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CardContainer
            cardBackground="/rectangle-83-2@2x.png"
            imagePlaceholder="/rectangle-84-2@2x.png"
            typcnlocation="/typcnlocation.svg"
            amenityIconBackground="/rectangle-85-2@2x.png"
            fluentMdl2calculatorAddit="/fluentmdl2calculatoraddition-1.svg"
            priceBackground="/rectangle-86-2@2x.png"
          />
          <CardContainer
            cardBackground="/rectangle-83-3@2x.png"
            imagePlaceholder="/rectangle-84-1@2x.png"
            typcnlocation="/typcnlocation-1.svg"
            propPadding="unset"
            amenityIconBackground="/rectangle-85-1@2x.png"
            fluentMdl2calculatorAddit="/fluentmdl2calculatoraddition.svg"
            propColor="rgba(0, 0, 0, 0.7)"
            priceBackground="/rectangle-86-1@2x.png"
          />
          <div className={styles.cardContainer}>
            <div className={styles.card5}>
              <div className={styles.card2Child} />
              <img
                className={styles.listingBackgroundIcon}
                alt=""
                src="/rectangle-83@2x.png"
              />
              <div className={styles.listingDetails}>
                <div className={styles.primaryInfo}>
                  <img
                    className={styles.imageContainerIcon}
                    alt=""
                    src="/rectangle-84-2@2x.png"
                  />
                  <div className={styles.frameWrapper}>
                    <div className={styles.titleAddress}>
                      <div className={styles.superCollectionAvenue1}>
                        Super collection Avenue near Gandhi maidan
                      </div>
                      <div className={styles.combinedLocationParent}>
                        <div className={styles.specificLocationParent}>
                          <div className={styles.specificLocation}>
                            <div className={styles.gandhiMaidanPatna}>
                              Gandhi maidan, Patna
                            </div>
                          </div>
                          <img
                            className={styles.typcnlocationIcon1}
                            alt=""
                            src="/typcnlocation.svg"
                          />
                          <div className={styles.specificLocation}>
                            <div className={styles.km1}>3.3 km</div>
                          </div>
                        </div>
                        <div className={styles.ratingAmenities}>
                          <div className={styles.ratingCard}>
                            <div className={styles.ratingCardChild} />
                            <div className={styles.ratingValue}>3.7</div>
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
                <div className={styles.frameParent2}>
                  <div className={styles.primaryAmenities}>
                    <img
                      className={styles.separatorBarIcon}
                      alt=""
                      src="/rectangle-85-2@2x.png"
                    />
                    <div className={styles.materialSymbolswifiWrapper}>
                      <img
                        className={styles.materialSymbolswifiIcon}
                        alt=""
                        src="/materialsymbolswifi.svg"
                      />
                    </div>
                    <div className={styles.freeWifiWrapper}>
                      <div className={styles.freeWifi}>Free wifi</div>
                    </div>
                    <div className={styles.iontvWrapper}>
                      <input className={styles.iontv1} type="checkbox" />
                    </div>
                    <div className={styles.tvWrapper}>
                      <div className={styles.tv}>Tv</div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper1}>
                    <div className={styles.fluentMdl2snowShowerDayParent}>
                      <img
                        className={styles.fluentMdl2snowShowerDayIcon}
                        alt=""
                        src="/fluentmdl2snowshowerday.svg"
                      />
                      <div className={styles.acContainer}>
                        <div className={styles.tv}>Ac</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameWrapper2}>
                    <div className={styles.moreIconContainerParent}>
                      <div
                        className={styles.fluentMdl2calculatorAdditioWrapper}
                      >
                        <img
                          className={styles.fluentMdl2calculatorAdditioIcon}
                          alt=""
                          src="/fluentmdl2calculatoraddition.svg"
                        />
                      </div>
                      <div className={styles.more}>4 more</div>
                    </div>
                  </div>
                </div>
                <div className={styles.priceBooking}>
                  <div className={styles.priceDetails}>
                    <img
                      className={styles.imageContainerIcon}
                      alt=""
                      src="/rectangle-86-2@2x.png"
                    />
                    <div className={styles.rs10000Container}>
                      <div className={styles.rs100002}>Rs 10,000</div>
                    </div>
                  </div>
                  <div className={styles.viewDetailsParent}>
                    <div className={styles.viewDetails6}>
                      <div className={styles.viewDetailsChild} />
                      <div className={styles.viewDetails7}>View Details</div>
                    </div>
                    <div className={styles.viewDetails8}>
                      <div className={styles.viewDetailsItem} />
                      <div className={styles.viewDetails7}>Book Now</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SideSection.propTypes = {
  className: PropTypes.string,
};

export default SideSection;
