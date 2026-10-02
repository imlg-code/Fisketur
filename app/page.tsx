import Link from 'next/dist/client/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
       <div className={styles.heroContent}>
          <p className={styles.upperText}>Fiskevann i Telemark og Sørmyr</p>
          <h1 className={styles.heroTitle}>Velkommen til Fisketur</h1>
          <p className={styles.heroDescription}>Oppdag nye fiskevann og se hva vi vet om adkomst, bommer og nøkkelmuligheter før dere pakker sekken.
            Se informasjon vi har samlet om fisk, gangavstand, parkering, bommer og nøkkelmuligheter. Vi håper dette kan være til hjelp for deg som ønsker å finne et nytt fiskevann å besøke.
          </p>
        <Link href="/fiskevann" className={styles.button}>Utforsk fiskevann</Link>
       </div>
    </div>
  );
}
