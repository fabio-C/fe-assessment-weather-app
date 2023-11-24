import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

function Error() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.errorPage}>
          <h2 className={styles.subtitle}>Oops! Page Not Be Found</h2>
          <p className={styles.help}>
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
          <Link to="/" className={styles.homeLink}>
            Back to home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Error;
