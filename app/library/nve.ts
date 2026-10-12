
export type Fiskevann = {
    vatnlnr: number;
    navn: string | null;
    areal_km2: number | null;
};
type NveResponse ={
    features?: {
        attributes: Fiskevann;
    }[];
    error?: {
        message: string;
};
};
export async function hentFiskevann(){
    const vannIder= [
            4, 21, 6384, 6392, 6396, 6405, 6409, 6414, 6424,
    6426, 6481, 6487, 6488, 6510, 6551, 6589, 128701,
    129137, 129141,
    ];
    const url = new URL(
         "https://kart.nve.no/enterprise/rest/services/Innsjodatabase2/MapServer/5/query"
    );
    url.searchParams.set("f", "json");
    url.searchParams.set("where", `vatnlnr IN (${vannIder.join(",")})`);
    url.searchParams.set("outFields", "vatnlnr,navn,areal_km2");
    url.searchParams.set("returnGeometry", "false");
    const response= await fetch (url);
    if (!response.ok) {
  throw new Error("Kunne ikke hente fiskevann fra NVE.");
}
const data: NveResponse = await response.json();
if (data.error || !Array.isArray(data.features)) {
    throw new Error("NVE returnerte et uventet svar");
}
return data.features.map((feature) => feature.attributes);
}