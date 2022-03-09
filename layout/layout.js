import Link from "next/link";
import React from "react";
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/articles">
              <a>Liste des articles</a>
            </Link>
          </li>
        </ul>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>Copyright © 2022 Hariba</footer>
    </div>
  );
}
