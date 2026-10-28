import { vannomrader } from "../../library/vannomrader";
import { hentFiskevann } from "../../library/nve";
import { notFound } from "next/navigation";
import { turinformasjon } from "../../library/turinformasjon";
import TurOpplysning from "../../components/TurOpplysning/TurOpplysning";
import "./FiskevannDetalj.css";
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
  const valgtTurinformasjon = turinformasjon.find(
    (informasjon) => informasjon.adresseNavn === valgtOmrade.adresseNavn,
  );
  const fiskevann = await hentFiskevann();
  const vannIomradet = fiskevann.filter((vann) =>
    valgtOmrade.nveIder.includes(vann.vatnlnr),
  );
  return (
    <div className="detalj-side">
      <h1 className="detalj-tittel">Detaljer om {valgtOmrade.navn}</h1>
      <div className="innsjo-info">
        {vannIomradet.length === 0 ? (
          <p>Fant ingen innsjøopplysninger for dette området.</p>
        ) : (
          vannIomradet.map((vann) => (
            <section key={vann.vatnlnr}>
              <h2 className="innsjo-navn">{vann.navn ?? valgtOmrade.navn}</h2>
              <p className="innsjo-areal">
                Areal:{" "}
                {vann.areal_km2 !== null
                  ? `${vann.areal_km2} km²`
                  : "Ikke oppgitt"}
              </p>
            </section>
          ))
        )}
      </div>
      {valgtTurinformasjon ? (
        <div className="detalj-grid">
          <TurOpplysning
            overskrift="Fiske"
            opplysning={valgtTurinformasjon.fiske}
          />
          <TurOpplysning
            overskrift="Adkomst"
            opplysning={valgtTurinformasjon.adkomst}
          />
          <TurOpplysning
            overskrift="Parkering"
            opplysning={valgtTurinformasjon.parkering}
          />
          <TurOpplysning
            overskrift="Bom"
            opplysning={valgtTurinformasjon.bom}
          />
          <TurOpplysning
            overskrift="Nøkkel"
            opplysning={valgtTurinformasjon.nokkel}
          />
        </div>
      ) : (
        <p>Vi har ikke turinformasjon for dette området enda.</p>
      )}
    </div>
  );
}
