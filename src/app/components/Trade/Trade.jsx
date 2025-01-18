import styles from "./Trade.module.css";

const trade = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Wrapper}>
        <div>
          <div>
            <p>
              <span>Who we are </span>
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
        </div>
      </div>
    </div>
  );
};
export default trade;
