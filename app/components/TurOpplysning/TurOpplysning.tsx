
import type { Opplysning } from "../../library/turinformasjon";
import "./TurOpplysning.css";

type TurOpplysningProps = {
  overskrift: string;
  opplysning: Opplysning;
};

export default function TurOpplysning(props: TurOpplysningProps) {
  return (
    <section className="tur-kort">
      <h2 className="tur-kort-tittel">
        {props.overskrift}
      </h2>

      <p className="tur-kort-tekst">
        {props.opplysning.tekst}
      </p>

      <div className="tur-kort-info">
        <span className="tur-kort-status">
          {props.opplysning.status === "kildebelagt"
            ? "Kildebelagt"
            : "Ikke bekreftet"}
        </span>

        {props.opplysning.kildeNavn && (
          <p className="tur-kort-kilde">
            Kilde:{" "}
            {props.opplysning.kildeUrl ? (
              <a
                href={props.opplysning.kildeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {props.opplysning.kildeNavn}
              </a>
            ) : (
              props.opplysning.kildeNavn
            )}
          </p>
        )}
      </div>
    </section>
  );
}

