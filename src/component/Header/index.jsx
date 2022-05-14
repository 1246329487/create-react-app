import { useState } from "react";
import logo from "../../image/logo.png";
import styles from "./index.module.css";
import Avater from "../Avater";
import { Statistic } from "antd";

const Header = () => {
  const { Countdown } = Statistic;

  const [time, setTime] = useState(new Date().toLocaleString());
  setInterval(() => {
    setTime(new Date().toLocaleString());
  }, 1000);
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img src={logo} alt="数据监控" className={styles.logo} />
        <span className={styles.title}>数据监控平台</span>
      </div>
      <div className={styles.time} key="time">
        <span style={{ marginRight: "20px" }}>{time}</span>
        <Avater />
      </div>
    </header>
  );
};
export default Header;
