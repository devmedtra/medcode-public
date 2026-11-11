// indicatif-lieu.ts : indicatifs régionaux recommandés d'après le lieu d'une entreprise canadienne.
//
// Sans lieu, aucun indicatif n'est proposé.
// 1. Code postal canadien (le plus sûr) : la RTA (3 premiers caractères) donne la région de numérotation.
// 2. Sinon la ville, dans une liste des villes principales.
// Correspondance région → indicatifs : plans de numérotation de l'Administrateur canadien de la numérotation (CNA,
// cnac.ca). L'ordre = indicatif d'origine d'abord, puis les indicatifs superposés (même territoire, mêmes appels
// locaux).

export interface Recommandation {
  region: string; indicatifs: string[];
  /** Nom de la région en anglais (menu des indicatifs, parcours en anglais). */
  regionEn?: string;
  /** Ville pour Twilio (InLocality, sans accents) : les numéros proposés sont LOCAUX à cette ville. */
  localite?: string;
}

const R = {
  montreal: { region: "Montréal", regionEn: "Montréal", indicatifs: ["514", "438", "263"] },
  couronne: { region: "Couronne de Montréal", regionEn: "Greater Montréal", indicatifs: ["450", "579", "354"] },
  quebec: { region: "Québec et Est du Québec", regionEn: "Québec City and Eastern Québec", indicatifs: ["418", "581", "367"] },
  ouestQc: { region: "Ouest et Centre du Québec", regionEn: "Western and Central Québec", indicatifs: ["819", "873", "468"] },
  ottawa: { region: "Ottawa et Est de l'Ontario", regionEn: "Ottawa and Eastern Ontario", indicatifs: ["613", "343", "753"] },
  toronto: { region: "Toronto", regionEn: "Toronto", indicatifs: ["416", "647", "437", "942"] },
  gta: { region: "Couronne de Toronto", regionEn: "Greater Toronto", indicatifs: ["905", "289", "365", "742"] },
  sudOuestOn: { region: "Sud-Ouest de l'Ontario", regionEn: "Southwestern Ontario", indicatifs: ["519", "226", "548", "382"] },
  nordOn: { region: "Nord de l'Ontario", regionEn: "Northern Ontario", indicatifs: ["705", "249", "683"] },
  nordOuestOn: { region: "Nord-Ouest de l'Ontario", regionEn: "Northwestern Ontario", indicatifs: ["807"] },
  vancouver: { region: "Vancouver et Lower Mainland", regionEn: "Vancouver and Lower Mainland", indicatifs: ["604", "778", "236", "672"] },
  cb: { region: "Colombie-Britannique", regionEn: "British Columbia", indicatifs: ["250", "778", "236", "672"] },
  calgary: { region: "Sud de l'Alberta", regionEn: "Southern Alberta", indicatifs: ["403", "587", "825", "368"] },
  edmonton: { region: "Nord de l'Alberta", regionEn: "Northern Alberta", indicatifs: ["780", "587", "825", "368"] },
  manitoba: { region: "Manitoba", regionEn: "Manitoba", indicatifs: ["204", "431", "584"] },
  sask: { region: "Saskatchewan", regionEn: "Saskatchewan", indicatifs: ["306", "639", "474"] },
  maritimes: { region: "Nouvelle-Écosse et Î.-P.-É.", regionEn: "Nova Scotia and P.E.I.", indicatifs: ["902", "782"] },
  nb: { region: "Nouveau-Brunswick", regionEn: "New Brunswick", indicatifs: ["506", "428"] },
  tnl: { region: "Terre-Neuve-et-Labrador", regionEn: "Newfoundland and Labrador", indicatifs: ["709", "879"] },
  nord: { region: "Territoires", regionEn: "Territories", indicatifs: ["867"] },
} satisfies Record<string, Recommandation>;

/** Code postal canadien normalisé (« H2X 1Y4 »), ou null. */
export function codePostalCanadien(x: string): string | null {
  const s = x.toUpperCase().replace(/[^A-Z0-9]/g, "");
  return /^[ABCEGHJ-NPRSTVXY]\d[A-Z](\d[A-Z]\d)?$/.test(s) ? s : null;
}

/**
 * Région d'après la RTA. Règles par lettre de province, affinées là où une province a plusieurs régions de
 * numérotation (Québec, Ontario, Colombie-Britannique, Alberta). Les cas limites de la couronne se règlent par la
 * ville (VILLES) : la ville, quand elle est connue, passe avant ces règles larges.
 */
function parRta(cp: string): Recommandation | null {
  const l = cp[0], d = cp[1], rta = cp.slice(0, 3);
  switch (l) {
    case "H": return d === "7" ? R.couronne : R.montreal;                 // H7 = Laval
    case "G": return /^G(8[T-Z]|9[A-Z])$/.test(rta) ? R.ouestQc : R.quebec; // Trois-Rivières, Shawinigan = 819
    case "J": return d === "1" || d === "8" || d === "9" ? R.ouestQc : R.couronne; // Estrie, Outaouais, Abitibi = 819
    case "K": return R.ottawa;
    case "L": return R.gta;
    case "M": return R.toronto;
    case "N": return R.sudOuestOn;
    case "P": return d === "7" ? R.nordOuestOn : R.nordOn;               // P7 = Thunder Bay
    case "V": return d === "3" || d === "4" || d === "5" || d === "6" || d === "7" ? R.vancouver : R.cb;
    case "T": return d === "5" || d === "6" || d === "7" || d === "8" || d === "9" ? R.edmonton : R.calgary;
    case "R": return R.manitoba;
    case "S": return R.sask;
    case "B": case "C": return R.maritimes;
    case "E": return R.nb;
    case "A": return R.tnl;
    case "X": case "Y": return R.nord;
    default: return null;
  }
}

const sansAccents = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z]/g, "");

const VILLES: Record<string, Recommandation> = Object.fromEntries(([
  [R.montreal, ["montreal", "westmount", "verdun", "lachine", "anjou", "outremont", "montrealnord", "saintlaurent", "pointeclaire", "dorval", "kirkland", "beaconsfield"]],
  [R.couronne, ["laval", "longueuil", "brossard", "terrebonne", "repentigny", "saintjerome", "blainville", "mirabel", "chateauguay", "vaudreuildorion", "vaudreuil", "saintjeansurrichelieu", "granby", "saintehyacinthe", "sainthyacinthe", "boucherville", "mascouche", "salaberrydevalleyfield", "joliette", "sorel", "soreltracy", "beloeil", "chambly", "candiac", "laprairie", "boisbriand", "sainteeustache", "rosemere", "lachute", "beauharnois"]],
  [R.quebec, ["quebec", "levis", "saguenay", "chicoutimi", "jonquiere", "rimouski", "rivieredulou", "alma", "baiecomeau", "septiles", "gaspe", "saintgeorges", "thetfordmines", "lapocatiere", "montmagny", "charlesbourg", "beauport", "saintefoy", "anciennelorette", "matane"]],
  [R.ouestQc, ["gatineau", "hull", "sherbrooke", "troisrivieres", "shawinigan", "drummondville", "victoriaville", "rouynnoranda", "valdor", "magog", "montlaurier", "sainteagathedesmonts"]],
  [R.ottawa, ["ottawa", "kingston", "cornwall", "belleville", "brockville", "pembroke", "kanata", "orleans", "nepean"]],
  [R.toronto, ["toronto", "northyork", "scarborough", "etobicoke", "eastyork", "york"]],
  [R.gta, ["mississauga", "brampton", "hamilton", "oakville", "burlington", "markham", "vaughan", "richmondhill", "oshawa", "whitby", "ajax", "pickering", "stcatharines", "saintcatharines", "niagarafalls", "newmarket", "milton", "aurora"]],
  [R.sudOuestOn, ["london", "kitchener", "waterloo", "cambridge", "guelph", "windsor", "sarnia", "brantford", "stratford", "woodstock", "chatham"]],
  [R.nordOn, ["sudbury", "grandsudbury", "barrie", "peterborough", "northbay", "saultstemarie", "timmins", "orillia", "huntsville"]],
  [R.nordOuestOn, ["thunderbay", "kenora", "dryden"]],
  [R.vancouver, ["vancouver", "surrey", "burnaby", "richmond", "coquitlam", "langley", "delta", "northvancouver", "westvancouver", "newwestminster", "abbotsford", "mapleridge", "portcoquitlam", "whiterock", "chilliwack", "squamish", "whistler"]],
  [R.cb, ["victoria", "kelowna", "kamloops", "nanaimo", "princegeorge", "vernon", "penticton", "courtenay", "campbellriver", "cranbrook", "nelson"]],
  [R.calgary, ["calgary", "lethbridge", "reddeer", "medicinehat", "airdrie", "okotoks", "cochrane", "banff", "canmore"]],
  [R.edmonton, ["edmonton", "stalbert", "saintalbert", "sherwoodpark", "fortmcmurray", "grandeprairie", "sprucegrove", "leduc", "fortsaskatchewan"]],
  [R.manitoba, ["winnipeg", "brandon", "steinbach", "thompson"]],
  [R.sask, ["saskatoon", "regina", "princealbert", "moosejaw", "swiftcurrent"]],
  [R.maritimes, ["halifax", "dartmouth", "sydney", "truro", "charlottetown", "summerside"]],
  [R.nb, ["moncton", "saintjohn", "fredericton", "dieppe", "bathurst", "edmundston"]],
  [R.tnl, ["stjohns", "saintjohns", "mountpearl", "cornerbrook", "gander"]],
  [R.nord, ["whitehorse", "yellowknife", "iqaluit"]],
] as [Recommandation, string[]][]).flatMap(([r, villes]) => villes.filter(Boolean).map((v) => [v, r])));

/**
 * Indicatifs recommandés pour le lieu saisi (« H2X 1Y4 », « Vancouver », « 5 rue X, Gatineau, J8Y 3B2 »…).
 * La ville connue passe avant la RTA (règles larges) ; un code postal seul suffit. null = lieu inconnu : on ne propose
 * rien plutôt que de deviner, la personne entre son indicatif elle-même.
 */
export function indicatifsRecommandes(lieu: string): Recommandation | null {
  const s = (lieu || "").slice(0, 200);
  const cp = s.toUpperCase().match(/\b([ABCEGHJ-NPRSTVXY]\d[A-Z])\s?(\d[A-Z]\d)?\b/);
  const morceaux = s.split(/[,;\n]/).map((x) => x.trim()).filter(Boolean);
  for (const m of [...morceaux, s].reverse()) {
    const r = VILLES[sansAccents(m)];
    if (r) return { ...r, localite: nomTwilio(m) };
  }
  if (cp) { const r = parRta(cp[1]); return r ? { ...r, ...(VILLE_RTA(cp[1]) ? { localite: VILLE_RTA(cp[1]) } : {}) } : null; }
  return null;
}

/**
 * « Trois-Rivières » → « Troisrivieres » : forme MESURÉE des localités Twilio le 10 nov. 2026 (Troisrivieres,
 * Ottawahull, Valdor, Saintjovite : sans accents, sans espaces ni tirets, majuscule initiale seulement). Avec
 * « Trois-Rivieres », Twilio rend 0 numéro ; avec « Troisrivieres », 30.
 */
function nomTwilio(x: string): string {
  const c = x.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]/g, "");
  return c.charAt(0).toUpperCase() + c.slice(1);
}

/** Ville principale d'une RTA quand le code postal seul est connu (cœurs urbains seulement ; sinon aucune ville). */
function VILLE_RTA(rta: string): string | undefined {
  const l = rta[0], d = rta[1];
  if (l === "H") return d === "7" ? "Laval" : "Montreal";
  if (l === "G" && (d === "1" || d === "2")) return "Quebec";
  if (l === "M") return "Toronto";
  if (l === "K" && (d === "1" || d === "2")) return "Ottawa";
  if (l === "V" && (d === "5" || d === "6")) return "Vancouver";
  if (l === "T" && (d === "2" || d === "3")) return "Calgary";
  if (l === "T" && (d === "5" || d === "6")) return "Edmonton";
  if (l === "R" && (d === "2" || d === "3")) return "Winnipeg";
  if (rta.startsWith("J8")) return "Gatineau";
  if (rta.startsWith("B3")) return "Halifax";
  return undefined;
}

/** Une ligne du menu des indicatifs : « 514, Montréal ». */
export interface LigneIndicatif { indicatif: string; region: string; regionEn: string }

/**
 * Tous les indicatifs canadiens du menu, dans l'ordre des régions (indicatif d'origine puis superposés), chacun une
 * seule fois : un indicatif partagé (778, 587…) reste dans la PREMIÈRE région qui le nomme (Vancouver, Sud de
 * l'Alberta). Régions de numérotation, plus les Territoires (867).
 */
export const LISTE_INDICATIFS: readonly LigneIndicatif[] = (() => {
  const vus = new Set<string>();
  const l: LigneIndicatif[] = [];
  for (const r of Object.values(R) as Recommandation[]) {
    for (const i of r.indicatifs) {
      if (vus.has(i)) continue;
      vus.add(i);
      l.push({ indicatif: i, region: r.region, regionEn: r.regionEn || r.region });
    }
  }
  return l;
})();

/**
 * Noms propres des localités Twilio connues (forme compacte MESURÉE le 10 nov. 2026 : « Troisrivieres »,
 * « Ottawahull », « Saintjovite », « Valdor »). La clé est la forme compacte (minuscules, sans accents ni séparateurs).
 */
const NOMS_PROPRES: Record<string, string> = Object.fromEntries([
  "Montréal", "Westmount", "Verdun", "Lachine", "Anjou", "Outremont", "Montréal-Nord", "Saint-Laurent", "Pointe-Claire", "Dorval",
  "Kirkland", "Beaconsfield", "Laval", "Longueuil", "Brossard", "Terrebonne", "Repentigny", "Saint-Jérôme", "Blainville", "Mirabel",
  "Châteauguay", "Vaudreuil-Dorion", "Vaudreuil", "Saint-Jean-sur-Richelieu", "Granby", "Saint-Hyacinthe", "Boucherville", "Mascouche",
  "Salaberry-de-Valleyfield", "Valleyfield", "Joliette", "Sorel", "Sorel-Tracy", "Beloeil", "Chambly", "Candiac", "La Prairie", "Boisbriand",
  "Saint-Eustache", "Rosemère", "Lachute", "Beauharnois", "Québec", "Lévis", "Saguenay", "Chicoutimi", "Jonquière",
  "Rimouski", "Rivière-du-Loup", "Alma", "Baie-Comeau", "Sept-Îles", "Gaspé", "Saint-Georges", "Thetford Mines", "La Pocatière",
  "Montmagny", "Charlesbourg", "Beauport", "Sainte-Foy", "L'Ancienne-Lorette", "Matane", "Gatineau", "Hull", "Ottawa-Hull", "Sherbrooke",
  "Trois-Rivières", "Shawinigan", "Drummondville", "Victoriaville", "Rouyn-Noranda", "Val-d'Or", "Magog", "Mont-Laurier",
  "Sainte-Agathe-des-Monts", "Saint-Jovite", "Mont-Tremblant", "Saint-Sauveur", "Ottawa", "Kingston", "Cornwall", "Belleville",
  "Brockville", "Pembroke", "Kanata", "Orléans", "Nepean", "Toronto", "North York", "Scarborough", "Etobicoke", "East York", "York",
  "Mississauga", "Brampton", "Hamilton", "Oakville", "Burlington", "Markham", "Vaughan", "Richmond Hill", "Oshawa", "Whitby", "Ajax",
  "Pickering", "St. Catharines", "Niagara Falls", "Newmarket", "Milton", "Aurora", "London", "Kitchener", "Waterloo", "Cambridge",
  "Guelph", "Windsor", "Sarnia", "Brantford", "Stratford", "Woodstock", "Chatham", "Sudbury", "Barrie", "Peterborough", "North Bay",
  "Sault Ste. Marie", "Timmins", "Orillia", "Huntsville", "Thunder Bay", "Kenora", "Dryden", "Vancouver", "Surrey", "Burnaby",
  "Richmond", "Coquitlam", "Langley", "Delta", "North Vancouver", "West Vancouver", "New Westminster", "Abbotsford", "Maple Ridge",
  "Port Coquitlam", "White Rock", "Chilliwack", "Squamish", "Whistler", "Victoria", "Kelowna", "Kamloops", "Nanaimo", "Prince George",
  "Vernon", "Penticton", "Courtenay", "Campbell River", "Cranbrook", "Nelson", "Calgary", "Lethbridge", "Red Deer", "Medicine Hat",
  "Airdrie", "Okotoks", "Cochrane", "Banff", "Canmore", "Edmonton", "St. Albert", "Sherwood Park", "Fort McMurray", "Grande Prairie",
  "Spruce Grove", "Leduc", "Fort Saskatchewan", "Winnipeg", "Brandon", "Steinbach", "Thompson", "Saskatoon", "Regina", "Prince Albert",
  "Moose Jaw", "Swift Current", "Halifax", "Dartmouth", "Sydney", "Truro", "Charlottetown", "Summerside", "Moncton", "Saint John",
  "Fredericton", "Dieppe", "Bathurst", "Edmundston", "St. John's", "Mount Pearl", "Corner Brook", "Gander", "Whitehorse", "Yellowknife",
  "Iqaluit",
].map((n) => [sansAccents(n), n]));

/**
 * Nom lisible d'une localité Twilio (« Troisrivieres » → « Trois-Rivières »), ou null si elle n'est pas dans la
 * table : une forme compacte inconnue (« Stjeansurrichelieu ») ne s'affiche pas plutôt que de s'afficher mal.
 */
export function villeLisible(localite: string | null | undefined): string | null {
  if (!localite) return null;
  return NOMS_PROPRES[sansAccents(localite)] || null;
}
