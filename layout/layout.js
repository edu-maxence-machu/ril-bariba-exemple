import React from "react";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <ul>
          <li>Home</li>
        </ul>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>Copyright © 2022 Hariba</footer>
    </div>
  );
}
