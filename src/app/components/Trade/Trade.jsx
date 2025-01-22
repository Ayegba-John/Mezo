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
            <div className={styles.left}>left</div>
            <div className={styles.right}>Right</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default trade;
