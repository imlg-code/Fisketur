import FiskevannKort from "../components/FiskevannKort/FiskevannKort";
import { hentFiskevann  } from "../library/nve";
import { vannomrader } from "../library/vannomrader";
import styles from "./page.module.css";

export default async function FiskevannPage() {
    const fiskevann = await hentFiskevann();
    return ( 
    <div>
      <h1>Utforsk fiskevann</h1>
      <p>
        Her finner du fiskevann kartlagt i Telemark og Sørmyr.
      </p>
      <p>Utforsk {vannomrader.length} vannområder.</p>

      <ul className={styles.lakeList}>
        {vannomrader.map((omrade) => {
          const innsjoer = fiskevann.filter((vann) =>
            omrade.nveIder.includes(vann.vatnlnr)
          );

          return (
            <li key={omrade.adresseNavn}>
              <FiskevannKort omrade={omrade} innsjoer={innsjoer} />
            </li>
          );
        })}
      </ul>
    </div>
    );
}