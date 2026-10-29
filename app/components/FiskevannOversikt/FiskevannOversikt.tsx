"use client";
import { useState } from "react";
import type { Fiskevann } from "../../library/nve";
import type { Vannomrade } from "../../library/vannomrader";
import FiskevannKort from "../FiskevannKort/FiskevannKort";
import styles from "../../fiskevann/page.module.css";

type FiskevannOversiktProps = {
    innsjoer: Fiskevann[];
    omrader: Vannomrade[];
};
export default function FiskevannOversikt(
    props: FiskevannOversiktProps
){
    const [ sokeTekst, setSokeTekst ] = useState("");
    const sok = sokeTekst.trim().toLowerCase();
    const filtrerOmrader = props.omrader.filter((omrade) =>
    omrade.navn.toLowerCase().includes(sok)
);
    return(
        <div>
            <label htmlFor="fiskevann-sok" >Søk etter fiskevann</label>
            <input
            id="fiskevann-sok"
            type="search"
            value={sokeTekst}
            onChange={(event) => setSokeTekst(event.target.value)}
            placeholder="Søk etter fiskevann"
            />
            <p>Søket gjelder våre {props.omrader.length} utvalgte områder.</p>
            <p aria-live="polite">
                Antall treff: {filtrerOmrader.length}
            </p>
            {filtrerOmrader.length === 0 ? (
                <p>Fant ingen vannområder som passer til søket. Prøv et annet navn.</p>
            ) : (
                <ul className={styles.lakeList}>
                    {filtrerOmrader.map((omrade) => {
                        const innsjoer = props.innsjoer.filter((vann) =>
                            omrade.nveIder.includes(vann.vatnlnr)
                    );
                    return(
                        <li key={omrade.adresseNavn}>
                            <FiskevannKort omrade={omrade} innsjoer={innsjoer} />
                        </li>
                    );
                    })}
                </ul>
            )}
        </div>
    )
}