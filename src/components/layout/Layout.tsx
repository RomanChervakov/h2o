import styles from "./Layout.module.scss";
import LayoutSidebar from "./layout-sidebar/LayoutSidebar.tsx";
import LayoutHeader from "./layout-header/LayoutHeader.tsx";
import type { ReactNode } from "react";

interface ILayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={styles.layout}>
      <LayoutSidebar />
      <div className={styles.container}>
        <LayoutHeader />
        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
