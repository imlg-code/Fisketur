
import Link from "next/link";
import type { Fiskevann } from "../../library/nve";
import type { Vannomrade } from "../../library/vannomrader";
import styles from "./FiskevannKort.module.css";

type FiskevannKortProps = {
  omrade: Vannomrade;
  innsjoer: Fiskevann[];
};

export default function FiskevannKort(props: FiskevannKortProps) {
  return (
    <article className={styles.card}>
      <h2>
        <Link href={`/fiskevann/${props.omrade.adresseNavn}`}>
          {props.omrade.navn}
        </Link>
      </h2>

      {props.innsjoer.length === 0 ? (
        <p>Innsjøopplysninger mangler.</p>
      ) : (
        props.innsjoer.map((vann) => (
          <p key={vann.vatnlnr}>
            {props.innsjoer.length > 1
              ? `${vann.navn ?? "Innsjø"} – areal: `
              : "Areal: "}
            {vann.areal_km2 !== null
              ? `${vann.areal_km2} km²`
              : "Ikke oppgitt"}
          </p>
        ))
      )}
    </article>
  );
}