# Fisketur

Dette er et individuelt skoleprosjekt som er laget med next.js og typescript.

## Formål og målgruppe

Fisketur skal hjelpe familier eller tur interesserte med å utforske fiskevann utvalgt i Telemark og Sørmyr området. Nettstedet skal samle informasjon om fisk, vann, adkomst, bommer og evt nøkkelinformasjon, så brukeren kan planlegge turen etter forskjellige forhold.

## Teknologi

- Next.js med App router
- React og Typescript
- CSS og CSS modules

## Hvordan kjøre prosjektet

Du trenger Node.js og npm
Kjør kodene fra web-mappen i terminalen.

- npm install
- npm run dev
  Åpne adressen som vises i terminalen.

Du trenger ingen API nøkkel til denne nettsiden, du trenger internett forbindelse for å data fra NVE.

## Kilder

Nettstedet henter innsjø opplysninger som er id, navn og areal fra:
[NVEs innsjødatabase](https://kart.nve.no/enterprise/rest/services/Innsjodatabase2/MapServer/5).
Hentingen skjer i app/library/nve.ts
I app/library/vannomrader.ts kobles vannområdene til riktig NVE id.
Et vannområde kan ha flere innsjøer.
Informasjon om fiske, adkomst, bommer, nøkler og parkering er lagt inn manuelt i
app/library/turinformasjon.ts. Kildene er blant annet fiskeforeninger, grunneiere,
Statens vegvesen og Norgeskart.

## Kjente begrensninger

Utvalget av fiskevann er begrenset til 18 fiskevannområder. Ikke alle gangruter, parkeringsplasser eller koblinger mellom bom og nøkkel er bekreftet. Manglende info skal merkes tydelig. Nettsiden gir ikke sanntids status på bommer eller tilgjengelige nøkler.

## Krav til oppgaven

- Utvikle nettstedet med Next.js og TypeScript.
- Teste at valgt eksternt API gir både liste og detaljer før resten bygges.
- Hente og vise data fra minst ett eksternt API.
- Lage en forside som forklarer formålet og viser veien videre.
- Lage en oversiktsside med elementer hentet fra API-et.
- Lage dynamiske detaljsider som bruker ruteverdien til å finne riktig innhold.
- Lage en om-side med målgruppe, datakilder og hvem som har laget nettstedet.
- Bruke Link til navigasjon mellom sidene.
- Sørge for at sidene fungerer ved direkte URL og refresh.
- Bruke layout.tsx til felles header, main og footer.
- Dele grensesnittet i komponenter med tydelige ansvar og gjenbruke dem der det passer.
- Bruke TypeScript-typer for data og props.
- Implementere minst én funksjon for søk, filtrering eller sortering.
- Vise en forståelig melding ved null treff og tydeliggjøre søkets eventuelle avgrensning.
- Håndtere API-feil og elementer som ikke finnes.
- Lage en sammenhengende visuell stil som fungerer på mobil og større skjermer.
- Bruke semantisk HTML og logisk overskriftstruktur.
- Gi skjemafelt tydelige etiketter og bilder passende alternativ tekst.
- Gjøre navigasjon og skjemaer brukbare med tastatur og synlig fokus.
- Ha commits som viser utviklingen underveis.
- Dokumentere formål, målgruppe, installasjon, oppstart og API i README.
- Beskrive kjente feil og begrensninger i README.
- Holde eventuelle hemmelige API-nøkler utenfor Git-repositoryet.
- Skrive et refleksjonsnotat om valg, utfordringer, læring og mulige forbedringer.
- Teste brukerflyten, navigasjonen, detaljsidene og feiltilstandene.
- Kontrollere at npm run build fullføres uten feil.
