import type { Fiskevann  } from "../../library/nve";
import styles from "./FiskevannKort.module.css";
type FiskevannKortProps = {
    vann: Fiskevann;
};
export default function FiskevannKort(props: FiskevannKortProps) {
    return (
        <article className={styles.card}>
            <h2>{props.vann.navn ?? "Navn ikke tilgjengelig"}</h2>
            <p>
                Areal:{" "}
                {props.vann.areal_km2 !== null
                ? `${props.vann.areal_km2} km²`
            : "Ikke oppgitt"}
            </p>
        </article>
    )
}