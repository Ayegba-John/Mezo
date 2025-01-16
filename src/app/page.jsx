import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Body from "./components/Body/Body";
import Product from "./components/Product/Product";
import Trade from "./components/Trade/Trade";
import Section from "./components/Section/Section";

const page = () => {
  return (
    <div className={styles.navbar}>
      <Navbar />
      <Body />
      <Trade />

      <Product name="bag" discription="leather bag" price={500} />
      <Product name="iphone" discription="iphone 13" price={1500} />
      <Product name="water" discription="bottle water" price={200} />
      <Product name="fan" discription="Lontor" price={5300} />
      <Section />
    </div>
  );
};

export default page;
