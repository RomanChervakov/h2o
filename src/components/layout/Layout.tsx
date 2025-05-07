import styles from "./Layout.module.scss";
import Sidebar from "./sidebar/Sidebar.tsx";
import Header from "./header/Header.tsx";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.container}>
        <Header />
        <main className={styles.main} />
      </div>
    </div>
  );
}
