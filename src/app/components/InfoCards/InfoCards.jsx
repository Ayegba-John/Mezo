import styles from "./InfoCards.module.css";

const InfoCards = ({ pic, text }) => {
  return (
    <div>
      <div className={styles.Cards}>
        <img src={pic} />
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default InfoCards;
