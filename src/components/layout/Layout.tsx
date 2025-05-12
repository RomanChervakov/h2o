import styles from "./Layout.module.scss";
import Sidebar from "./sidebar/Sidebar.tsx";
import Header from "./header/Header.tsx";
import type { ReactNode } from "react";

interface ILayoutProps {
  children?: ReactNode;
}


export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
