import styles from "./Trade.module.css";

const trade = () => {
  return (
    <div className={styles.main}>
      <div className={styles.Wrapper}>
        <div>
          <p>
            Biggest players in the LPG sector Mezo Energy Trading Limited (METL)
            Mezoenergy trading limited is an energy company that has a big
            reputation in gas trading with supply chains across the country. The
            company was established in 2021 and is positioned to be the fastest
            growing gas trading company in Nigeria. We have an unmatched
            reputation for our commitment to our excellence and dedication to
            quality, safety and use of technology makes us the most reliable
            partner for most businesses. With our beautiful and innovative
            composite gas cylinder, we have also been able to win the trust of
            end-users who share the same core values as we do. In partnership
            with mezovest, we provide gas financing where we deliver high
            quality cooking gas to our vendors. Hundreds of small businesses
            have leveraged this credit system to grow their business as well as
            several stakeholders in the LPG value chain. Mezo Energy Image
          </p>
        </div>

        <div className={styles.img}>
          <img className={styles.cylinder} src="metl cylinder.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default trade;
