import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: React.ReactNode
}

function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
