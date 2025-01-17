import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";

import Trade from "./components/Trade/Trade";

const page = () => {
  return (
    <div className={styles.navbar}>
      <Navbar />
      <Body />
      <Trade />
    </div>
  );
};

export default page;
