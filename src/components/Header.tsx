import React from "react";
import styles from "./Header.module.css";

import igniteLogo from "../assets/ignite-logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo ignite" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
