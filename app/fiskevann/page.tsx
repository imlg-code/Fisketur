import FiskevannKort from "../components/FiskevannKort/FiskevannKort";
import { hentFiskevann  } from "../library/nve";
import styles from "./page.module.css";
export default async function FiskevannPage() {
    const fiskevann = await hentFiskevann();
    return ( 
        <div>
            <h1>Utforsk fiskevann</h1>
            <p>Her kommer oversikt over fiskevann som er kartlagt i Telemark og Sørmyr.</p>
            <p>Har hentet {fiskevann.length} innsjø oppføringer fra NVE.</p>
<ul className={styles.lakeList}>
  {fiskevann.map((vann) => (
    <li key={vann.vatnlnr}>
      <FiskevannKort vann={vann} />
    </li>
  ))}
</ul>
        </div>
    );
}