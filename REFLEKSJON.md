# Refleksjonsnotat

Jeg utvikler Fisketur for å hjelpe familier og andre turinteresserte med å utforske fiskevann i Telemark og Sørmyrområdet. Ideen kom fra en egen opplevelse der en bom førte til en lengre gåtur enn forventet med et lite barn. Jeg ønsker å samle informasjon som gjør det lettere å planlegge turen.

Jeg undersøkte datakilder med hjelp fra KI og valgte NVE innsjødatabase som hoved API. NVE gir blant annet navn, areal og id til innsjøene. Jeg fant ut at fiskearter, bommer og nøkkelordninger må suppleres fra andre kilder. Opplysninger som ikke er bekreftet skal merkes tydelig.

Jeg opprettet prosjektet med Next.js og TypeScript. Jeg valgte vanlig CSS og CSS modules. I Next.js bestemmes rutene av mappene i app-mappen. Filen app/fiskevann/page.tsx viser for eksempel siden på adressen /fiskevann.

Jeg laget forside, fiskevannside og om-side, og en egen header-komponent med navigasjon. Header brukes i layout.tsx slik at den vises på flere sider. Jeg bruker Link til å navigere mellom sidene.

Jeg laget typen Fiskevann som beskriver id, navn og areal. Navn og areal kan være null hvis opplysningene mangler. Jeg lærte at en type beskriver hvilke verdier vi forventer mens et objekt inneholder de faktiske verdiene.

Jeg laget hentFiskevann i app/library/nve.ts for å skille datainnhentingen fra visningen på siden. Funksjonen lager en URL og bruker searchParams.set til å velge innsjøer, felter og JSON-format. Jeg bruker join(",") til å gjøre listen med id om til tekst med komma mellom tallene.

Funksjonen bruker fetch til å sende forespørselen og await til å vente på svaret. Jeg sjekker response.ok før jeg leser innholdet med response.json(). Så kontrollerer jeg om svaret inneholder en feil, eller om features ikke er en liste. Ved feil bruker jeg throw new error. Feilene skal senere vises med en forståelig melding på siden.

Jeg fikk først en feil fordi jeg brukte () istedenfor {} da jeg beskrev error typen. Det gjorde at siden ikke kunne kjøre. Etterpå fikk jeg en annen feil fordi jeg manglet paranteser rundt listen med vann id-er som ble sendt til NVE. 

Jeg bruker map i hentefunksjonen til å hente ut attributes fra hver oppføring. Funksjonen returnerer en liste med vannobjekter. På fiskevannsiden bruker jeg await hentFiskevann() for å få listen og en ny map for å lage listeelementer i jsx. Den ene map-en henter ut data, mens den andre lager innholdet som skal vises.

Jeg la inn reservetekst med ?? når navnet mangler og en betingelse som viser «ikke oppgitt» hvis arealet er null.

Jeg opprettet en hovedoppgave med seks underoppgaver i GitHub for å få oversikt over resten av arbeidet. Jeg bruker refleksjonsnotatet til å dokumentere hvordan jeg jobber underveis. 

Jeg laget FiskevannKort som en egen komponent og flyttet visningen av navn og areal dit. Komponenten mottar ett vannobjekt gjennom propen vann. FiskevannKortProps beskriver typen til props-objektet og inne i komponenten bruker jeg props.vann for å lese opplysningene. Siden henter fortsatt listen mens kortkomponenten bestemmer hvordan ett vann vises.

Jeg laget en CSS Module for kortet og en annen for oversiktssiden. Kortets CSS styrer blant annet bakgrunn, ramme og luft inni kortet. Sidens CSS styrer listen og plasseringen av kortene.

Jeg brukte CSS Grid med repeat, auto-fit og minmax for å tilpasse antall kolonner til tilgjengelig bredde. Kortene kan derfor vises i flere kolonner på en bred skjerm og en kolonne når plassen blir mindre.
