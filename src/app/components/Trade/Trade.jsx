import styles from "./Trade.module.css";

const trade = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Wrapper}>
        <div>
          <div className={styles.stroke}>
            <div>
              <img src="green-stroke.svg" alt="green arrow" />
            </div>

            <div>We want you to succeed</div>
          </div>
          <div className={styles.Wrapper_one}>
            <p>
              <span className={styles.Wrapper_text}>Who we are </span>
              <br />
              At Mezovest, we are on a mission to revolutionize the commerce
              landscape, and our focus is squarely on the dynamic energy
              industry, specifically LPG aka cooking gas and CNG . As a leading
              commerce solution company, we are dedicated to providing
              innovative, efficient, and seamless solutions that cater to the
              unique needs of businesses operating in the energy sector.
            </p>
          </div>
          <img
            className={styles.group}
            src="swad.svg"
            alt="group photo
            "
          />
          <div className={styles.Wrapper_two}>
            <div className={styles.same}>
              {" "}
              <img src="metl-truck.svg" alt="" />
              <p>
                Modern & durable trucks for transporting composite cylinders
              </p>
            </div>
            <div className={styles.same}>
              <img src="gas-plant.svg" alt="" />
              <p>
                Strategic Micro Distribution Centres for fast and reliable
                deliveries
              </p>
            </div>
            <div className={styles.same}>
              <img src="metl-trailer.svg" alt="" />
              <p>Gas reservoirs for storing gas making it readily accessible</p>
            </div>
          </div>
          <div>
            <button>learn more</button> <button>Exlpore options</button>
          </div>

          {/* finiance structure  */}

          <div className={styles.Wrapper_down}>
            <div className={styles.left}>
              <div className={styles.stroke}>
                <div>
                  <img src="green-stroke.svg" alt="green arrow" />
                </div>

                <div>We want you to succeed</div>
              </div>
              <div>
                <p>Finance Infrastructure Technology(F.I.T)</p>
                <ul>
                  <li>
                    Finance:Mezovest offers cash loan and inventory financing to
                    eligible vendors. We offer cash loans by monitoring their
                    sales and use their volume of sales to determine how much we
                    can lend to them.
                  </li>
                  <li>
                    Infrastructure:With Mezovest’s unique commerce solution
                    model, F.I.T, mezovest founded a sister company, Mezo energy
                    trading limited (METL) which uses supply chain
                    infrastructures like logistic, micro distribution centres
                    (MDCs) to supply cooking gas to her vendors since mezovest
                    currently services the LPG commerce sector
                  </li>
                  <li>
                    Technology:Using technology as leverage, we provide online
                    marketplaces and payment solutions which enable businesses
                    to reach customers nationwide, expanding market
                    opportunities
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.right}>Right</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default trade;
