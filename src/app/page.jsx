import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Mid from "./components/Mid/Mid";

const page = () => {
  return (
    <div className={styles.navbar}>
      <Navbar />
      <Mid />
    </div>
  );
};

export default page;
