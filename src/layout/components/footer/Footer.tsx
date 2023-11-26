import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Frontend Engineer Assessment</p>
        <p>Made by Fabio Carbone</p>
      </div>
    </footer>
  );
}

export default Footer;
