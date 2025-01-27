import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Trade from "./components/Trade/Trade";
import Mid from "./components/Mid/Mid";
import Water from "./components/Water/Water";

const page = () => {
  return (
    <div className={styles.navbar}>
      <Navbar />
      <Trade />

      <Water />
    </div>
  );
};

export default page;
