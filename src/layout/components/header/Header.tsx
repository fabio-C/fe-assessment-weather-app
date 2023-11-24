import { Link } from "react-router-dom";
import { FaWind } from "react-icons/fa6";

import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.mainLink}>
        <FaWind className={styles.mainIcon} />
      </Link>
    </header>
  );
}

export default Header;
