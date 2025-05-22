import Image from "next/image";
import styles from "./BlogAuthor.module.css";

export default function BlogAuthor() {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.heading}>About Alex Carter</h2>
      <Image
        src="/banner.png"
        alt="Alex Carter"
        width={50}
        height={50}
        className={styles.avatar}
      />
      <p className={styles.description}>
       With over a decade of experience in the fitness industry, Alex specializes in
         strength training and functional fitness. Certified by
        NASM and known for his motivational style, Alex designs workout programs that are both
        challenging and achievable. His passion lies in helping clients build strength and
        confidence through personalized training routines. Outside the gym, Alex is an avid runner
        and enjoys outdoor adventures.
      </p>
    </div>
  );
}
