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

NVE bruker tall som id, men jeg ønsker lesbare adresser som /fiskevann/eiangen. Jeg opprettet filen vannomrader.ts i app/library. Definerte typen Vannomrade som beskriver adressenavnet, navnet som skal vises på siden og hvilke NVE id'er området tilhører. Bruker number[] for å håndtere at vannområdene kan ha en id eller flere.

Lagde mappen [adresseNavn] med en page.tsx som skal vise detaljsiden. Disse [] gjør at samme side kan brukes til forskjellige vannområder. Next.js sender navnet fra adressen gjennom params. Bruker await for å lese det. 

Bruker find for å lete etter området som passer til navnet i adressen. Hvis området finnes viser jeg navnet som er lagret i listen. Hvis det ikke finnes viser jeg en paragraf med "Fant ikke vannområdet".

Jeg bruker hentFiskevann til å hente listen med fiskevann fra NVE. Med filter beholder jeg bare vannområdene som tilhører det valgte området. Bruker includes til å sjekke om vannets id finnes i områdets liste med NVE id'er. 
På detaljsiden bruker jeg map til å vise navn og areal.

Jeg la inn de 18 vannområdene i vannomrader.ts. Hvert område har adressenavn og en liste med NVE id'er. Tjennane har to id'er, men skal vises som ett område. Jeg endret oversikten til å lage ett kort til hvert vannområde. Kortet får vannets navn og areal fra props. Jeg brukte Link på overskriften så brukeren kan klikke på navnet og føres til riktig detaljside.

Jeg bruker notFound() hvis navnet i adressen ikke finnes i område listen, da vises Next.js sin standard 404 side. 

Jeg lagde søkefunksjonen i en komponent som heter FiskevannOversikt. Den får vannområdene som props. Jeg la inn "use client" fordi komponenten skal reagere når brukeren skriver. Jeg bruker useState til å huske søketeksten. 

Jeg lagde turinformasjon.ts for å samle informasjon om fiske, adkomst, parkering, bom og nøkkel. Dette er opplysninger jeg legger inn manuelt med kilder, mens navn og areal fortsatt hentes fra NVE.

Jeg lagde typen Opplysning som beskriver tekst, kildenavn, kildelenke og status. Hver opplysning har sin egen status fordi jeg kan ha informasjon om bommen, men ikke vite hvor det er lov å parkere.

Jeg begynte med å legge inn informasjon om Tjennane. På detaljsiden bruker jeg find til å finne turinformasjonen med samme adressenavn som området. Hvis informasjonen mangler viser siden en melding om det.

Jeg lagde komponenten TurOpplysning for å slippe å skrive koden som viser tekst, status og kilde flere ganger. Den får en overskrift og et objekt med informasjon gjennom props. Jeg bruker komponenten til å vise fiske, adkomst, parkering, bom og nøkkel.

Jeg la inn informasjon om bom og adkomst for flere vannområder. Med hjelp av KI brukte jeg kartdata fra statens vegvesen og Norgeskart til å beregne avstander og bommer langs veiene.