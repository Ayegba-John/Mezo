import styles from "./Section.module.css";

const section = () => {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.img}>
          <img className={styles.cylinder} src="metl cylinder.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default section;
