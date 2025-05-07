import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.tab}>Свод данных по сотрудникам</div>
        <div className={styles.tab}>Сводный отчет внутри компании</div>
        <div className={styles.tab}>Сводный отчет по сделкам</div>
      </nav>
    </header>
  );
}
