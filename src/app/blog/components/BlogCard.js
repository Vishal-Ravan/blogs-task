import styles from "./BlogCard.module.css";

export default function BlogCard() {
  return (
    <>
      <div className={styles.cardWrap}>
        <div className={styles.card}>
          <img
            src="/explore.png"
            alt="Blog cover"
            className={styles.image}
          />
          <div className={styles.content}>
            <div className={styles.meta}>
              <span className={styles.category}>Culinary</span>
              <span className={styles.separator}>|</span>
              <span className={styles.date}>13 Jun 2022</span>
            </div>
            <p className={styles.text}>
              Two women in local stand are chatting during morning..
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <img
            src="/explore.png"
            alt="Blog cover"
            className={styles.image}
          />
          <div className={styles.content}>
            <div className={styles.meta}>
              <span className={styles.category}>Culinary</span>
              <span className={styles.separator}>|</span>
              <span className={styles.date}>13 Jun 2022</span>
            </div>
            <p className={styles.text}>
              Two women in local stand are chatting during morning..
            </p>
          </div>
        </div>


        <div className={styles.card}>
          <img
            src="/explore1.png"
            alt="Blog cover"
            className={styles.image}
          />
          <div className={styles.content}>
            <div className={styles.meta}>
              <span className={styles.category}>Travel</span>
              <span className={styles.separator}>|</span>
              <span className={styles.date}>13 Jun 2022</span>
            </div>
            <p className={styles.text}>
              The lush green surroundings of the campgrounds create a..
            </p>
          </div>
        </div>

      </div></>
  );
}
