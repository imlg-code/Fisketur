//Beskriver en opplysning med tilhørende kilde, tillater null dersom kilde/opplysninger mangler
//Har status på hver opplsyning for jeg kan feks finne noe om bommen uten å vite noe om parkering
export type Opplysning = {
  tekst: string;
  kildeNavn: string | null;
  kildeUrl: string | null;
  status: "kildebelagt" | "ikke bekreftet";
};
//Beskriver turinformasjon for et fiskevann, adresseNavn er koblingen til området
export type Turinformasjon = {
  adresseNavn: string;
  fiske: Opplysning;
  adkomst: Opplysning;
  parkering: Opplysning;
  bom: Opplysning;
  nokkel: Opplysning;
};
/*Const oppretter variablen, "Opplysning" sier at verdien skal passe denne typen, objektet etter =
inneholder verdiene som fyller kravene til typen. */
const fiskeTjennane: Opplysning = {
  tekst: "Porsgrunn JFF oppgir at det finnes abbor og ørret i Tjennane.",
  kildeNavn: "Porsgrunn JFF",
  kildeUrl: "https://www.njff.no/telemark/porsgrunn/fiske",
  status: "kildebelagt",
};
export const turinformasjon: Turinformasjon[] = [
  {
    adresseNavn: "tjennane",
    fiske: fiskeTjennane,
    adkomst: {
      tekst:
        "Ca. 2 km langs skogsbilveien forbi Lia til veien ved det største tjernet. Til veien nær det minste tjernet er det ca. 1,7 km.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=204097&lat=6572321&zoom=14&backgroundLayer=topo",
      status: "kildebelagt",
    },

    parkering: {
      tekst: "Det er en liten grusparkering langs Oklungveien.",
      kildeNavn: null,
      kildeUrl: null,
      status: "ikke bekreftet",
    },

    bom: {
      tekst:
        "Statens vegvesen har registrert en låst bom ved adkomsten fra Oklungvegen, nær Tjennane. Registreringen forteller ikke om bommen er låst akkurat nå.",
      kildeNavn: "Statens vegvesen – NVDB",
      kildeUrl:
        "https://nvdbapiles.atlas.vegvesen.no/vegobjekter/api/v4/vegobjekter/607/119346391",
      status: "kildebelagt",
    },

    nokkel: {
      tekst: "Ikke bekreftet en nøkkelordning for denne bommen.",
      kildeNavn: null,
      kildeUrl: null,
      status: "ikke bekreftet",
    },
  },
  {
    adresseNavn: "limtjenn",

    fiske: {
      tekst: "Porsgrunn JFF oppgir at det finnes ørret i Limtjenn.",
      kildeNavn: "Porsgrunn JFF",
      kildeUrl: "https://www.njff.no/telemark/porsgrunn/fiske",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Beregnet avstand langs veien fra den registrerte bommen til nær Limetjønn er omtrent 1,7 km én vei.",
      kildeNavn: "Beregnet fra Statens vegvesens veinett og NVEs innsjøkart",
      kildeUrl: null,
      status: "kildebelagt",
    },

    parkering: {
      tekst: "Ikke bekreftet hvor det er tillatt å parkere.",
      kildeNavn: null,
      kildeUrl: null,
      status: "ikke bekreftet",
    },

    bom: {
      tekst:
        "Statens vegvesen har registrert en låst bom på veiforbindelsen mot Limetjønn. Registreringen forteller ikke om bommen er låst akkurat nå.",
      kildeNavn: "Statens vegvesen – NVDB",
      kildeUrl:
        "https://nvdbapiles.atlas.vegvesen.no/vegobjekter/api/v4/vegobjekter/607/114183301",
      status: "kildebelagt",
    },

    nokkel: {
      tekst: "Ikke bekreftet noen nøkkelordning.",
      kildeNavn: null,
      kildeUrl: null,
      status: "ikke bekreftet",
    },
  },
  {
    adresseNavn: "galtetjonn",

    fiske: {
      tekst: "Ørret og abbor ble påvist ved prøvefiske i 2017.",
      kildeNavn: "NaturPartner – rapport om prøvefiske i 2017",
      kildeUrl:
        "https://www.vannportalen.no/sharepoint/downloaditem?id=01FM3LD2WNGS4RV2QR4NC3QN2WB4AGZE2J",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Ca. 0,9 km langs vei fra bommen på Galtetjønnveien til vestsiden av vannet. Avstanden starter ved bommen, ikke ved en bekreftet parkeringsplass.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=197367&lat=6582379&zoom=14&backgroundLayer=topo",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Den eldre DNT-brosjyren viser til parkering bak Solvika kafé. Dagens parkeringsmuligheter og vilkår er ikke kontrollert.",
      kildeNavn: "DNT Grenland – En tur for alle",
      kildeUrl:
        "https://www.skien.kommune.no/media/vo5dpgau/en-tur-for-alle-dnt-grenland.pdf",
      status: "ikke bekreftet",
    },

    bom: {
      tekst:
        "DNTs brosjyre beskriver en bom på grusveien til vannet, med passasje ved siden av. Beskrivelsen er eldre, dagens låsestatus og passasje er ikke kontrollert.",
      kildeNavn: "DNT Grenland – En tur for alle",
      kildeUrl:
        "https://www.skien.kommune.no/media/vo5dpgau/en-tur-for-alle-dnt-grenland.pdf",
      status: "kildebelagt",
    },

    nokkel: {
      tekst: "Ikke bekreftet noen nøkkelordning for denne bommen.",
      kildeNavn: null,
      kildeUrl: null,
      status: "ikke bekreftet",
    },
  },
  {
    adresseNavn: "eiangen",

    fiske: {
      tekst:
        "DNT Telemark oppgir at de selger fiskekort for Eiangen Grunneierlag.",
      kildeNavn: "Skien Turlag – Sommerseter",
      kildeUrl: "https://ut.no/hytte/10666/sommerseter",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Ca. 8,3 km langs vei fra bommen ved Øvre Dale til sørøstenden av Eiangen. Dette er en lang tur til fots. Siste bit til fiskeplassen er ikke målt.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=184827&lat=6605290&zoom=14&backgroundLayer=topo",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Vinterbeskrivelsen viser til parkering ved bommen på Eiangsvegen. Parkeringsmuligheter og vilkår om sommeren er ikke avklart.",
      kildeNavn: "Skien Turlag – Sommerseter",
      kildeUrl: "https://ut.no/hytte/10666/sommerseter",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Skien Turlag beskriver en låst bom på Eiangsvegen, 1,1 km fra Dale bru. Veien videre blir ikke vinterbrøytet.",
      kildeNavn: "Skien Turlag – Sommerseter",
      kildeUrl: "https://ut.no/hytte/10666/sommerseter",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Ved bestilling av Foreningshytta på Sommerseter kan man om sommeren låne bomnøkkel på DNT Telemarks tursenter, Torggate 15 i Skien. Sjekk åpningstidene. Bomnøkkel følger ikke med ved opphold i Stallen.",
      kildeNavn: "Skien Turlag – Sommerseter",
      kildeUrl: "https://ut.no/hytte/10666/sommerseter",
      status: "kildebelagt",
    },
  },
  {
    adresseNavn: "nedre-garvann",

    fiske: {
      tekst:
        "Fiskearter og fiskekortvilkår er ikke dokumentert i denne oppføringen ennå.",
      kildeNavn: null,
      kildeUrl: null,
      status: "ikke bekreftet",
    },

    adkomst: {
      tekst:
        "Ca. 2,7 km langs Garvannsvegen fra bommen ved Valeseter til sørenden av vannet. Veien stiger opp mot vannet.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=182218&lat=6590223&zoom=14&backgroundLayer=topo",
      status: "kildebelagt",
    },

    parkering: {
      tekst: "Ikke dokumentert hvor det er tillatt å parkere før bommen.",
      kildeNavn: null,
      kildeUrl: null,
      status: "ikke bekreftet",
    },

    bom: {
      tekst:
        "Grenland JFF beskriver en bom ved Valeseter på adkomsten via Garvannsvegen.",
      kildeNavn: "Grenland JFF – Garvannshytta",
      kildeUrl:
        "https://telemarkjff.no/productDetails/6864813e-27e9-4c1d-908d-d3168116cdec",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Ved leie av Garvannshytta følger bomnøkkel og kjøretillatelse på Garvannsvegen med. Nøklene hentes og leveres i nøkkelskapet på UnoX Wattenberg i Skien.",
      kildeNavn: "Grenland JFF – Garvannshytta",
      kildeUrl:
        "https://telemarkjff.no/productDetails/6864813e-27e9-4c1d-908d-d3168116cdec",
      status: "kildebelagt",
    },
  },
  {
    adresseNavn: "fjellvannet",

    fiske: {
      tekst:
        "Grenland Sportsfiskere oppgir at det finnes ørret og røye i Fjellvannet.",
      kildeNavn: "Grenland Sportsfiskere – Sildrevika",
      kildeUrl: "https://grenlandsportsfiskere.no/sildrevika/",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Ca. 3,4 km langs vei fra den første bommen på Grønnsjøvegen til området ved Sildrevika-hytta. Avstanden gjelder denne adkomsten til Fjellvannet.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=190696&lat=6594901&zoom=14&backgroundLayer=topo",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Foreningen beskriver parkering utenfor Sildrevika ved hytteleie. Parkering før bommen for andre besøkende er ikke dokumentert her.",
      kildeNavn: "Grenland Sportsfiskere – Sildrevika",
      kildeUrl: "https://grenlandsportsfiskere.no/sildrevika/",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Foreningen beskriver en bom på adkomsten til Sildrevika. Den første bommen står ifølge beskrivelsen normalt åpen om sommeren, men åpning er ikke garantert.",
      kildeNavn: "Grenland Sportsfiskere – Sildrevika",
      kildeUrl: "https://grenlandsportsfiskere.no/sildrevika/",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Grenland Sportsfiskere oppgir rød bomnøkkel for Fjellvannet. Ved hytteleie innenfor bomvei følger bomnøkkel og kjøretillatelse med. Utlevering skjer hos Jakt & Fjellsport i Duestien i Skien. Se foreningens medlems- og leievilkår.",
      kildeNavn: "Grenland Sportsfiskere – hytter og nøkler",
      kildeUrl: "https://grenlandsportsfiskere.no/vare-hytter/",
      status: "kildebelagt",
    },
  },
  {
    adresseNavn: "dolatjonn",

    fiske: {
      tekst:
        "Grenland Sportsfiskere tilbyr leie av robåt i Dølatjønn. Se foreningens fiskeregler og vilkår før turen.",
      kildeNavn: "Grenland Sportsfiskere – utleie",
      kildeUrl: "https://grenlandsportsfiskere.no/vare-hytter/",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Ca. 3,8 km langs vei fra bommen på Hortavegen til veien nord for Dølatjønn. Veien går oppover. Det gjenstår en bit frem til vannet som ikke er målt som gangrute.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=187515&lat=6594194&zoom=14&backgroundLayer=topo",
      status: "kildebelagt",
    },

    parkering: {
      tekst: "Ikke dokumentert parkeringsplass for denne adkomsten ennå.",
      kildeNavn: null,
      kildeUrl: null,
      status: "ikke bekreftet",
    },

    bom: {
      tekst:
        "Statens vegvesen har registrert en låst bom på Hortavegen. Det kartlagte veinettet forbinder denne bommen med området nær Dølatjønn. Registreringen viser ikke om bommen er låst akkurat nå.",
      kildeNavn: "Statens vegvesen – NVDB",
      kildeUrl:
        "https://nvdbapiles.atlas.vegvesen.no/vegobjekter/api/v4/vegobjekter/607/119346442",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Foreningen oppgir nøkkelutlevering ved båtutleie hos Jakt & Fjellsport i Skien. Vi har ikke bekreftet om bomnøkkel og kjøretillatelse følger med ved leie av båt i Dølatjønn.",
      kildeNavn: "Grenland Sportsfiskere – utleie",
      kildeUrl: "https://grenlandsportsfiskere.no/vare-hytter/",
      status: "kildebelagt",
    },
  },
  {
    adresseNavn: "stodalstjonn",

    fiske: {
      tekst:
        "Stodalstjønn er et av fiskevannene til Grenland Sportsfiskere. Foreningen tilbyr båtleie og har egne regler for fisket. Ørret er tidligere registrert i vannet, men har ikke nyere opplysninger om bestanden. Se foreningens fiskeregler og vilkår før turen.",
      kildeNavn: "Grenland Sportsfiskere – utleie",
      kildeUrl: "https://grenlandsportsfiskere.no/vare-hytter/",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Ca. 2,8 km langs vei fra bommen på Hortavegen til nordenden av Stødalstjønn. Veien stiger og har flere svinger. Siste bit til fiskeplassen er ikke målt.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=188784&lat=6593936&zoom=14&backgroundLayer=topo",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Parkeringsplass for tur til Stodalstjønn er ikke avklart. Kontakt Grenland Sportsfiskere for informasjon før turen.",
      kildeNavn: null,
      kildeUrl: null,
      status: "ikke bekreftet",
    },

    bom: {
      tekst:
        "Statens vegvesen har registrert en låst bom på Hortavegen. Det kartlagte veinettet forbinder bommen med området nær Stodalstjønn. Registreringen viser ikke om bommen er låst akkurat nå.",
      kildeNavn: "Statens vegvesen – NVDB",
      kildeUrl:
        "https://nvdbapiles.atlas.vegvesen.no/vegobjekter/api/v4/vegobjekter/607/119346442",
      status: "kildebelagt",
    },
    nokkel: {
      tekst:
        "Nøkler ved båtutleie hentes hos Jakt & Fjellsport i Skien. Det er ikke avklart om bomnøkkel og kjøretillatelse følger med ved leie av bare båten i Stodalstjønn.",
      kildeNavn: "Grenland Sportsfiskere – utleie",
      kildeUrl: "https://grenlandsportsfiskere.no/vare-hytter/",
      status: "kildebelagt",
    },
  },
  {
    adresseNavn: "albogatjonn",

    fiske: {
      tekst:
        "Grenland Sportsfiskere beskriver fiskemuligheter i Albogatjønn. Ved leie av Kristiansbu har man tilgang til båt i vannet. Se foreningens fiskeregler før turen.",
      kildeNavn: "Grenland Sportsfiskere – Kristiansbu",
      kildeUrl: "https://grenlandsportsfiskere.no/kristiansbu/",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Adkomsten går over Dale bru og videre på skogsbilvei. Foreningen oppgir ca 4 km fra bommen til parkeringen for Kristiansbu, deretter 5 minutter til fots til hytta ved Albogatjønn.",
      kildeNavn: "Grenland Sportsfiskere – Kristiansbu",
      kildeUrl: "https://grenlandsportsfiskere.no/kristiansbu/",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Foreningen beskriver en parkeringsplass for Kristiansbu på en avstikker før veien ender ved Åslivatn. Det er ikke avklart om plassen kan brukes uten hytteleie.",
      kildeNavn: "Grenland Sportsfiskere – Kristiansbu",
      kildeUrl: "https://grenlandsportsfiskere.no/kristiansbu/",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Foreningen beskriver en bom ved Øvre Dale, omtrent 1 km etter avkjøringen over Dale bru.",
      kildeNavn: "Grenland Sportsfiskere – Kristiansbu",
      kildeUrl: "https://grenlandsportsfiskere.no/kristiansbu/",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Ved leie av Kristiansbu følger bomnøkkel og kjøretillatelse med. Nøklene hentes hos Jakt & Fjellsport i Skien. Se foreningens medlems- og leievilkår.",
      kildeNavn: "Grenland Sportsfiskere – hytter og nøkler",
      kildeUrl: "https://grenlandsportsfiskere.no/vare-hytter/",
      status: "kildebelagt",
    },
  },
  {
    adresseNavn: "aslivatn",

    fiske: {
      tekst:
        "Grenland Sportsfiskere beskriver fiskemuligheter i Åslivatn. Ved leie av Stegaberget har man tilgang til robåt i vannet. Se foreningens fiskeregler før turen.",
      kildeNavn: "Grenland Sportsfiskere – Stegaberget",
      kildeUrl: "https://grenlandsportsfiskere.no/stegaberget/",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Ca. 4,2 km langs vei fra bommen ved Øvre Dale til sørenden av Åslivatn. Denne avstanden gjelder ikke hytta Stegaberget i nord. Terrenget på vestsiden av vannet er bratt.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=188743&lat=6603232&zoom=14&backgroundLayer=topo",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Foreningen oppgir at det brøytes parkering innenfor bommen om vinteren. Parkeringsplass og vilkår for en sommertur er ikke avklart her.",
      kildeNavn: "Grenland Sportsfiskere – Stegaberget",
      kildeUrl: "https://grenlandsportsfiskere.no/stegaberget/",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Foreningen beskriver en bom ved Øvre Dale, omtrent 1 km etter avkjøringen over Dale bru.",
      kildeNavn: "Grenland Sportsfiskere – Stegaberget",
      kildeUrl: "https://grenlandsportsfiskere.no/stegaberget/",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Ved leie av Stegaberget følger bomnøkkel og kjøretillatelse med. Nøklene hentes hos Jakt & Fjellsport i Skien. Se foreningens medlems- og leievilkår.",
      kildeNavn: "Grenland Sportsfiskere – hytter og nøkler",
      kildeUrl: "https://grenlandsportsfiskere.no/vare-hytter/",
      status: "kildebelagt",
    },
  },
  {
    adresseNavn: "orjevatn",

    fiske: {
      tekst:
        "Grenland Sportsfiskere beskriver fiskemuligheter i Ørjevatn. Ved leie av Ørjebu følger robåt med. Se foreningens fiskeregler før turen.",
      kildeNavn: "Grenland Sportsfiskere – Ørjebu",
      kildeUrl: "https://grenlandsportsfiskere.no/orjebu/",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Adkomsten går over Dale bru og videre på skogsbilvei. Foreningen oppgir 3,6 km fra bommen ved Øvre Dale til parkeringen ved Ørjebu. Hytta ligger nedenfor demningen i sørenden av Ørjevatn.",
      kildeNavn: "Grenland Sportsfiskere – Ørjebu",
      kildeUrl: "https://grenlandsportsfiskere.no/orjebu/",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Foreningen beskriver parkering omtrent 30 meter fra Ørjebu. Det er ikke avklart om denne plassen kan brukes uten hytteleie. Om vinteren beskrives brøytet parkering innenfor bommen.",
      kildeNavn: "Grenland Sportsfiskere – Ørjebu",
      kildeUrl: "https://grenlandsportsfiskere.no/orjebu/",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Foreningen beskriver en bom ved Øvre Dale, omtrent 1 km etter avkjøringen over Dale bru.",
      kildeNavn: "Grenland Sportsfiskere – Ørjebu",
      kildeUrl: "https://grenlandsportsfiskere.no/orjebu/",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Ved leie av Ørjebu følger bomnøkkel og kjøretillatelse med. Nøklene hentes hos Jakt & Fjellsport i Skien. Se foreningens medlems- og leievilkår.",
      kildeNavn: "Grenland Sportsfiskere – hytter og nøkler",
      kildeUrl: "https://grenlandsportsfiskere.no/vare-hytter/",
      status: "kildebelagt",
    },
  },
  {
    adresseNavn: "grantjonn",

    fiske: {
      tekst:
        "Grenland Sportsfiskere oppgir at det finnes ørret og røye i Grantjønn. Ved leie av Grantjønnhytta har man tilgang til robåt i vannet.",
      kildeNavn: "Grenland Sportsfiskere – Grantjønnhytta",
      kildeUrl: "https://grenlandsportsfiskere.no/grantjonnhytta/",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Adkomsten går over Dale bru og videre på skogsbilvei. Foreningen oppgir omtrent 7 km langs veien fra bommen ved Øvre Dale til Grantjønnhytta. Hytta ligger ved dammen i Grantjønn.",
      kildeNavn: "Grenland Sportsfiskere – Grantjønnhytta",
      kildeUrl: "https://grenlandsportsfiskere.no/grantjonnhytta/",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Foreningen beskriver parkering ved Grantjønnhytta. Det er ikke avklart om plassen kan brukes uten hytteleie. Om vinteren beskrives brøytet parkering innenfor bommen ved Øvre Dale.",
      kildeNavn: "Grenland Sportsfiskere – Grantjønnhytta",
      kildeUrl: "https://grenlandsportsfiskere.no/grantjonnhytta/",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Foreningen beskriver en bom ved Øvre Dale, omtrent 1 km etter avkjøringen over Dale bru.",
      kildeNavn: "Grenland Sportsfiskere – Grantjønnhytta",
      kildeUrl: "https://grenlandsportsfiskere.no/grantjonnhytta/",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Ved leie av Grantjønnhytta følger bomnøkkel og kjøretillatelse med. Nøklene hentes hos Jakt & Fjellsport i Skien. Se foreningens medlems- og leievilkår.",
      kildeNavn: "Grenland Sportsfiskere – hytter og nøkler",
      kildeUrl: "https://grenlandsportsfiskere.no/vare-hytter/",
      status: "kildebelagt",
    },
  },
  {
    adresseNavn: "hortavatn",

    fiske: {
      tekst:
        "Grenland Sportsfiskere beskriver fiskemuligheter i Hortavatn. Ved leie av Hortahytta følger robåt i vannet med. Se foreningens fiskeregler før turen.",
      kildeNavn: "Grenland Sportsfiskere – Horta",
      kildeUrl: "https://grenlandsportsfiskere.no/horta/",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Adkomsten følger veien på vestsiden av Fjellvannet og videre mot Horta. Foreningen oppgir omtrent 12 km fra første bom til Hortahytta på østsiden av Hortavatn. Dette er veiavstanden til hytta, ikke til nærmeste fiskeplass.",
      kildeNavn: "Grenland Sportsfiskere – Horta",
      kildeUrl: "https://grenlandsportsfiskere.no/horta/",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Foreningen beskriver parkering utenfor Hortahytta. Det er ikke avklart om plassen kan brukes uten hytteleie, eller hvor man kan parkere før bommene.",
      kildeNavn: "Grenland Sportsfiskere – Horta",
      kildeUrl: "https://grenlandsportsfiskere.no/horta/",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Den første bommen på adkomsten står ifølge foreningen normalt åpen om sommeren. På Hortavegen videre mot Horta har Statens vegvesen registrert en låst bom. Dagens låsestatus er ikke kontrollert.",
      kildeNavn: "Statens vegvesen – bom på Hortavegen",
      kildeUrl:
        "https://nvdbapiles.atlas.vegvesen.no/vegobjekter/api/v4/vegobjekter/607/119346442",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Ved leie av Hortahytta følger bomnøkkel og kjøretillatelse med. Nøklene hentes hos Jakt & Fjellsport i Skien. Se foreningens medlems- og leievilkår.",
      kildeNavn: "Grenland Sportsfiskere – hytter og nøkler",
      kildeUrl: "https://grenlandsportsfiskere.no/vare-hytter/",
      status: "kildebelagt",
    },
  },
  {
    adresseNavn: "blekktjonn",

    fiske: {
      tekst:
        "Grenland Sportsfiskere beskriver fiskemuligheter i Blekktjønn. Foreningen har ikke robåt i dette vannet.",
      kildeNavn: "Grenland Sportsfiskere – Blekktjønn",
      kildeUrl: "https://grenlandsportsfiskere.no/blekktjonn/",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Ca. 5,5 km langs vei fra bommen ved Øvre Dale til enden av veien mot Blekktjønn. Derfra oppgir Grenland Sportsfiskere omtrent 20 minutters gange til hytta. Dette kommer i tillegg til veistrekningen. Hele turen er ikke målt i kilometer.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=184789&lat=6602087&zoom=14&backgroundLayer=topo",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Foreningen beskriver brøytet parkering innenfor bommen om vinteren. Parkering om sommeren er ikke avklart her.",
      kildeNavn: "Grenland Sportsfiskere – Blekktjønn",
      kildeUrl: "https://grenlandsportsfiskere.no/blekktjonn/",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Foreningen beskriver en bom ved Øvre Dale, omtrent 1 km etter avkjøringen over Dale bru.",
      kildeNavn: "Grenland Sportsfiskere – Blekktjønn",
      kildeUrl: "https://grenlandsportsfiskere.no/blekktjonn/",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Ved leie av Blekktjønnhytta følger bomnøkkel og kjøretillatelse med. Nøklene hentes hos Jakt & Fjellsport i Skien. Se foreningens leievilkår.",
      kildeNavn: "Grenland Sportsfiskere – hytter og nøkler",
      kildeUrl: "https://grenlandsportsfiskere.no/vare-hytter/",
      status: "kildebelagt",
    },
  },

  {
    adresseNavn: "tverrvannet",

    fiske: {
      tekst:
        "Fritzøe Skoger tilbyr ørretfiske i Sørmyrområdet. Opplysningen gjelder området, ikke en egen undersøkelse av Tverrvannet.",
      kildeNavn: "Fritzøe Skoger – fiske",
      kildeUrl: "https://www.fritzoeskoger.no/fiske",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Ca. 0,8 km langs vei fra bommen på sideveien mot Tverrvannet til området ved østsiden av vannet. Siste bit til fiskeplassen er ikke målt. Kartet viser myr nær vannet.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=196050&lat=6605797&zoom=14&backgroundLayer=topo",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Fritzøe Skoger oppgir parkering i Langlidalen om sommeren og ved Velenekrysset om vinteren. Gangruten derfra til vannet er ikke kontrollert.",
      kildeNavn: "Fritzøe Skoger – bomveier",
      kildeUrl: "https://www.fritzoeskoger.no/bomveier",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Sørmyrveien har veiavgift med skiltgjenkjenning. Ikke ferdig kartlagt hvilke låste bommer man møter på vei til Tverrvannet.",
      kildeNavn: "Fritzøe Skoger – bomveier",
      kildeUrl: "https://www.fritzoeskoger.no/bomveier",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Fiskekort og et begrenset antall utleienøkler finnes på YX Siljan. Spør hvilken bom nøkkelen gjelder.",
      kildeNavn: "Fritzøe Skoger – fiske",
      kildeUrl: "https://www.fritzoeskoger.no/fiske",
      status: "kildebelagt",
    },
  },

  {
    adresseNavn: "oyvannet",

    fiske: {
      tekst:
        "Fritzøe Skoger tilbyr ørretfiske i Sørmyrområdet. Opplysningen gjelder området, ikke en egen undersøkelse av Øyvannet.",
      kildeNavn: "Fritzøe Skoger – fiske",
      kildeUrl: "https://www.fritzoeskoger.no/fiske",
      status: "kildebelagt",
    },
    adkomst: {
      tekst:
        "Kartet viser veier og stier i området, men en sammenhengende gangrute fra bom til Maurlivannet er ikke avklart. Oppgir derfor ikke en full gangavstand ennå.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=196699&lat=6604783&zoom=14&backgroundLayer=topo",
      status: "ikke bekreftet",
    },

    parkering: {
      tekst:
        "Fritzøe Skoger oppgir parkering i Langlidalen om sommeren og ved Velenekrysset om vinteren. Gangruten derfra til vannet er ikke kontrollert.",
      kildeNavn: "Fritzøe Skoger – bomveier",
      kildeUrl: "https://www.fritzoeskoger.no/bomveier",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Sørmyrveien har veiavgift med skiltgjenkjenning. Vi har ikke ferdig kartlagt hvilke låste bommer man møter på vei til Øyvannet.",
      kildeNavn: "Fritzøe Skoger – bomveier",
      kildeUrl: "https://www.fritzoeskoger.no/bomveier",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Fiskekort og et begrenset antall utleienøkler finnes på YX Siljan. Spør hvilken bom nøkkelen gjelder.",
      kildeNavn: "Fritzøe Skoger – fiske",
      kildeUrl: "https://www.fritzoeskoger.no/fiske",
      status: "kildebelagt",
    },
  },

  {
    adresseNavn: "maurlivannet",

    fiske: {
      tekst:
        "Fritzøe Skoger tilbyr ørretfiske i Sørmyrområdet. Opplysningen gjelder området, ikke en egen undersøkelse av Maurlivannet.",
      kildeNavn: "Fritzøe Skoger – fiske",
      kildeUrl: "https://www.fritzoeskoger.no/fiske",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Gangruten og avstanden til Maurlivannet er ikke ferdig kartlagt. Spør om adkomst når du kjøper fiskekort.",
      kildeNavn: null,
      kildeUrl: null,
      status: "ikke bekreftet",
    },

    parkering: {
      tekst:
        "Fritzøe Skoger oppgir parkering i Langlidalen om sommeren og ved Velenekrysset om vinteren. Gangruten derfra til vannet er ikke kontrollert.",
      kildeNavn: "Fritzøe Skoger – bomveier",
      kildeUrl: "https://www.fritzoeskoger.no/bomveier",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Sørmyrveien har veiavgift med skiltgjenkjenning. Vi har ikke ferdig kartlagt hvilke låste bommer man møter på vei til Maurlivannet.",
      kildeNavn: "Fritzøe Skoger – bomveier",
      kildeUrl: "https://www.fritzoeskoger.no/bomveier",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Fiskekort og et begrenset antall utleienøkler finnes på YX Siljan. Spør hvilken bom nøkkelen gjelder.",
      kildeNavn: "Fritzøe Skoger – fiske",
      kildeUrl: "https://www.fritzoeskoger.no/fiske",
      status: "kildebelagt",
    },
  },

  {
    adresseNavn: "bjorntjern",

    fiske: {
      tekst:
        "Fritzøe Skoger tilbyr ørretfiske i Sørmyrområdet. Opplysningen gjelder området, ikke en egen undersøkelse av Bjørntjern.",
      kildeNavn: "Fritzøe Skoger – fiske",
      kildeUrl: "https://www.fritzoeskoger.no/fiske",
      status: "kildebelagt",
    },

    adkomst: {
      tekst:
        "Grovt kartanslag: ca. 2,7 km fra bommen ved Tverrvannet, først langs vei og deretter på sti mot Bjørntjern. Stien går gjennom kupert terreng nær myr.",
      kildeNavn: "Kartgrunnlag: Kartverket/Norgeskart, NVDB og NVE",
      kildeUrl:
        "https://www.norgeskart.no/?lon=196123&lat=6604452&zoom=14&backgroundLayer=topo",
      status: "kildebelagt",
    },

    parkering: {
      tekst:
        "Fritzøe Skoger oppgir parkering i Langlidalen om sommeren og ved Velenekrysset om vinteren. Gangruten derfra til vannet er ikke kontrollert.",
      kildeNavn: "Fritzøe Skoger – bomveier",
      kildeUrl: "https://www.fritzoeskoger.no/bomveier",
      status: "kildebelagt",
    },

    bom: {
      tekst:
        "Sørmyrveien har veiavgift med skiltgjenkjenning. Ikke ferdig kartlagt hvilke låste bommer man møter på vei til Bjørntjern.",
      kildeNavn: "Fritzøe Skoger – bomveier",
      kildeUrl: "https://www.fritzoeskoger.no/bomveier",
      status: "kildebelagt",
    },

    nokkel: {
      tekst:
        "Fiskekort og et begrenset antall utleienøkler finnes på YX Siljan. Spør hvilken bom nøkkelen gjelder.",
      kildeNavn: "Fritzøe Skoger – fiske",
      kildeUrl: "https://www.fritzoeskoger.no/fiske",
      status: "kildebelagt",
    },
  },
];
