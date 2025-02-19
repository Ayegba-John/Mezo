import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Low from "./components/Low/Low";
import Mid from "./components/Mid/Mid";

const page = () => {
  return (
    <div className={styles.navbar}>
      <Navbar />
      <Mid />
      <Low />
    </div>
  );
};

export default page;
