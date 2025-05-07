import styles from "./Layout.module.scss";
import Sidebar from "./sidebar/Sidebar.tsx";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.container}>
        <header className={styles.header} />
        <main className={styles.main} />
      </div>
    </div>
  );
}
