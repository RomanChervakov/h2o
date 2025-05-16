import styles from "./LayoutSidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faGear,
  faUserFriends,
  faCoins,
  faChartPie,
  faBoxArchive,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../../assets/logo.svg";
import clsx from "clsx";

export default function LayoutSidebar() {
  return (
    <div className={styles.sidebar}>
      <img src={logo} alt="logo" className={styles.logo} />
      <nav className={styles.navigation}>
        <button className={styles.button}>
          <FontAwesomeIcon
            icon={faCalendarDays}
            size="2x"
            style={{ color: "#FFFFFF" }}
          />
        </button>
        <button className={styles.button}>
          <FontAwesomeIcon
            icon={faBoxArchive}
            size="2x"
            style={{ color: "#FFFFFF" }}
          />
        </button>
        <button className={styles.button}>
          <FontAwesomeIcon
            icon={faRectangleList}
            size="2x"
            style={{ color: "#FFFFFF" }}
          />
        </button>
        <button className={styles.button}>
          <FontAwesomeIcon
            icon={faUserFriends}
            size="2x"
            style={{ color: "#FFFFFF" }}
          />
        </button>
        <button className={styles.button}>
          <FontAwesomeIcon
            icon={faCoins}
            size="2x"
            style={{ color: "#FFFFFF" }}
          />
        </button>
        <button className={clsx(styles.button, styles.active)}>
          <FontAwesomeIcon
            icon={faChartPie}
            size="2x"
            style={{ color: "#FFFFFF" }}
          />
        </button>
        <button className={styles.button}>
          <FontAwesomeIcon
            icon={faGear}
            size="2x"
            style={{ color: "#FFFFFF" }}
          />
        </button>
      </nav>
    </div>
  );
}
