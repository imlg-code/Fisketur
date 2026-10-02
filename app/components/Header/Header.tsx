import Link from "next/link";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        Fisketur
      </Link>
      <nav className={styles.nav} aria-label="Hovednavigasjon">
        <Link className={styles.link} href="/fiskevann">
          Fiskevann
        </Link>
        <Link className={styles.link} href="/omFisketur">
          Om Fisketur
        </Link>
      </nav>
      </div>
    </header>
  );
}
