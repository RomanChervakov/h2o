import Layout from "./components/layout/Layout.tsx";
import GeneralStatistics from "./components/general-statistics/GeneralStatistics.tsx";
import ReportCard from "./components/report-card/ReportCard.tsx";
import styles from "./App.module.scss";

export default function App() {
  return (
    <Layout>
      <div className={styles.report}>
        <div className={styles.reportCards}>
          <ReportCard />
          <ReportCard />
          <ReportCard />
        </div>
        <GeneralStatistics />
      </div>
    </Layout>
  );
}
