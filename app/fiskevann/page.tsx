
import { hentFiskevann  } from "../library/nve";
import { vannomrader } from "../library/vannomrader";
import FiskevannOversikt from "../components/FiskevannOversikt/FiskevannOversikt";

export default async function FiskevannPage() {
    const fiskevann = await hentFiskevann();
    return ( 
    <div>
      <h1>Utforsk fiskevann</h1>
      <p>
        Her finner du fiskevann kartlagt i Telemark og Sørmyr.
      </p>
      <FiskevannOversikt 
      innsjoer={fiskevann}
      omrader={vannomrader}
      />
    </div>
    );
}