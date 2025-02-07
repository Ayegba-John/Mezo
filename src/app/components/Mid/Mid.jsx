import styles from "./Mid.module.css";
import InfoCards from "../InfoCards/InfoCards";

const mid = () => {
  return (
    <div>
      <div className={styles.wrap}>
        <section className={styles.first_section}>
          <div className={styles.section_one_first}>
            <div>
              <img src="green-stroke.svg" alt="green arrow" />
            </div>
            <p>We want you to succeed</p>
          </div>
          <div className={styles.section_one_second}>
            <h2 className={styles.text}>Who we are</h2>
            <p>
              At Mezovest, we are on a mission to revolutionize the commerce
              landscape, and our focus is squarely on the{" "}
              <span className={styles.span}>
                dynamic energy industry, specifically LPG aka cooking gas and
                CNG{" "}
              </span>{" "}
              . As a leading commerce solution company, we are dedicated to
              providing innovative, efficient, and seamless solutions that cater
              to the unique needs of businesses operating in the energy sector.
            </p>
          </div>
        </section>
        <section className={styles.section_two}>
          <div>
            <img
              className={styles.image_one}
              src="swad.svg"
              alt="group picture"
            />
          </div>
        </section>
        <section className={styles.sec_InfoCrads}>
          <div className={styles.InfoCards}>
            <InfoCards
              pic="metl-truck.svg"
              text="Modern & durable trucks for transporting composite cylinders"
            />
            <InfoCards
              pic="gas-plant.svg"
              text="Strategic Micro Distribution Centres for fast and reliable deliveries"
            />
            <InfoCards
              pic="metl-trailer.svg"
              text="Gas reservoirs for storing gas making it readily accessible"
            />
          </div>
          <div className={styles.btn}>
            <div>
              <button className={styles.btn_learn}>Learn more</button>
            </div>
            <div>
              <button className={styles.btn_explore}>
                Explore more options
              </button>
            </div>
          </div>
        </section>
        <section className={styles.section_three}>
          <div className={styles.section_three_wrap}>
            <div className={styles.section_three_left}>
              <div className={styles.section_three_up}>
                <div>
                  <img src="green-stroke.svg" alt="green arrow" />
                </div>
                <div>How do we deliver our promise?</div>
              </div>
              <div>
                <h2 className={styles.text_two}>
                  Finance Infrastructure Technology(F.I.T)
                </h2>
              </div>
            </div>

            <div className={styles.section_three_right}></div>
          </div>
        </section>
        <section>
          <div>
            {" "}
            <img src="mez-fit.svg" alt="" />
          </div>
          <div>
            {" "}
            <img src="mez.svg" alt="" />
          </div>
          <div>
            {" "}
            <img src="mez-pos.svg" alt="" />{" "}
          </div>
        </section>
      </div>
    </div>
  );
};
export default mid;
