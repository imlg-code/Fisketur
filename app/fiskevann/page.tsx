import { hentFiskevann  } from "../library/nve";
export default async function FiskevannPage() {
    const fiskevann = await hentFiskevann();
    return ( 
        <div>
            <h1>Utforsk fiskevann</h1>
            <p>Her kommer oversikt over fiskevann som er kartlagt i Telemark og Sørmyr.</p>
            <p>Har hentet {fiskevann.length} innsjø oppføringer fra NVE.</p>
<ul>
  {fiskevann.map((vann) => (
    <li key={vann.vatnlnr}>
      <h2>{vann.navn ?? "Navn mangler"}</h2>

      <p>
        Areal:{" "}
        {vann.areal_km2 !== null
          ? `${vann.areal_km2} km²`
          : "Ikke oppgitt"}
      </p>
    </li>
  ))}
</ul>
        </div>
    );
}