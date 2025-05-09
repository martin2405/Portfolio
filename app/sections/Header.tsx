import styles from "@/styles/header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.accessibility}>
          <div />
          <span>Open to work</span>
        </div>
      </div>
      <div className={styles.titlesContainer}>
        <h1>Hey, I&apos;m Marcin</h1>
        <h1>I&apos;m a Fullstack Developer</h1>
      </div>
      <p className={styles.quote}>
        The wisest is the one who knows what he does not know <br /> I like
        trying new things
      </p>
    </div>
  );
}
