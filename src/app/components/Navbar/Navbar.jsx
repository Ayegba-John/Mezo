import styles from "./Navbar.module.css";
import Hero from "../Hero/Hero";

const Navbar = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_wrap}>
        <div className={styles.hero_header}>
          <div className={styles.logo}>
            <img
              className={styles.logo_size}
              src="logo-santa.png"
              alt="Mezovest logo"
            />
          </div>
          <div className={styles.right}>
            <div className={styles.email}>
              <div>
                <img src="email-icon.svg" alt="email icon" />
              </div>
              <div className={styles.text_logo}>
                <p>Email us</p>
                <p> hello@mezovest.com</p>
              </div>
            </div>
            <div className={styles.call}>
              <div>
                <img src="call-icon.svg" alt="call icon" />
              </div>
              <div className={styles.text_logo}>
                <p>call us</p>
                <p>+234 807 400 0005</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navbar}>
        <ul className={styles.navbar_left}>
          <li>Solutions</li>
          <li>About us</li>
          <li>Become a partner</li>
          <li>Support</li>
          <li>blog</li>
        </ul>
        <div className={styles.navbar_right}>
          <div className={styles.talk}> Talk sales</div>
          <div>
            <img src="right-arrow.svg" alt="arrow log" />
          </div>
        </div>
      </div>
      <div className={styles.santa}>
        <img
          className={styles.santa_img}
          src="banner-santa.png"
          alt="christmas logo"
        />
      </div>
      <Hero />
    </div>
  );
};
export default Navbar;
