import { vannomrader } from "../../library/vannomrader";
import { hentFiskevann } from "../../library/nve";
import {notFound} from "next/navigation";
type DetaljSideProps = {
  params: Promise<{
    adresseNavn: string;
  }>;
};
export default async function FiskevannDetaljPage(props: DetaljSideProps) {
  const adresse = await props.params;
  const valgtOmrade = vannomrader.find(
    (omrade) => omrade.adresseNavn === adresse.adresseNavn,
  );
  if (!valgtOmrade) {
    notFound();
  }
  const fiskevann = await hentFiskevann();
  const vannIomradet = fiskevann.filter((vann) =>
    valgtOmrade.nveIder.includes(vann.vatnlnr),
  );
  return (
    <div>
      <h1>Detaljer om {valgtOmrade.navn}</h1>

      {vannIomradet.length === 0 ? (
        <p>Fant ingen innsjøopplysninger for dette området.</p>
      ) : (
        <ul>
          {vannIomradet.map((vann) => (
            <li key={vann.vatnlnr}>
              <h2>{vann.navn ?? valgtOmrade.navn}</h2>

              <p>
                Areal:{" "}
                {vann.areal_km2 !== null
                  ? `${vann.areal_km2} km²`
                  : "Ikke oppgitt"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
