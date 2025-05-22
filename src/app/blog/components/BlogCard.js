import styles from "./BlogCard.module.css";

export default function BlogCard() {
  return (
<>
<div className={styles.cardWrap}>
    <div className={styles.card}>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
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
    </div>    <div className={styles.card}>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
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
    </div>    <div className={styles.card}>
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
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
    </div></>
  );
}
