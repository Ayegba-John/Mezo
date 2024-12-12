import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.Hero}>
      <div>
        <img className={styles.Hero_image} src="grow-hero.svg" alt="image" />
      </div>
      <div>
        <div className={styles.stroke}>
          <div>
            <img src="green-stroke.svg" alt="green arrow" />
          </div>
          <div>Pioneering the future of</div>
        </div>
        <div className={styles.text}>
          <span className={styles.commerce}>Commerce </span> <br /> For Energy
          Business Industry
        </div>
        <div className={styles.text_dwown}>
          <p>
            leaders in gas & energy business. With Mezovest's comprehensive
            commerce solutions you can expand your reach, maximise profits, and
            become a key player in the LPG and CNG industry.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
