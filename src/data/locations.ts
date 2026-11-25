export type ServiceLocation = {
  slug: string;
  city: string;
  stateAbbr: string;
  name: string;
  county: string;
  isPrimary: boolean;
  intro: string;
  primaryKeyword: string;
  contentAngle: string;
  housingProfile: string;
  keyConcerns: string[];
  nearbySlugs: string[];
};

export const SERVICE_LOCATIONS: ServiceLocation[] = [
  {
    slug: 'edgerton-wi',
    city: 'Edgerton',
    stateAbbr: 'WI',
    name: 'Edgerton, WI',
    county: 'Rock / Dane County',
    isPrimary: true,
    intro:
      'Edgerton is the central headquarters for WISCo Mold & Water Damage. Bordering Lake Koshkonong and the Yahara River, we provide 24/7 emergency water extraction, flood cleanup, certified mold remediation, and moisture mitigation across Edgerton and surrounding lake communities.',
    primaryKeyword: 'Mold Remediation & Water Damage Edgerton WI',
    contentAngle:
      'Immediate 24/7 water damage mitigation, basement flood extraction, and certified mold removal for Edgerton homeowners, cottages, and lakefront residences.',
    housingProfile:
      'Lake Koshkonong waterfront cottages, historic brick residences near downtown Edgerton, and established single-family homes with high seasonal water tables.',
    keyConcerns: [
      'Elevated water tables and shoreline humidity around Lake Koshkonong and Yahara River',
      'Basement hydrostatic seepage, saturated block foundation walls, and sump pump failures',
      'Frozen burst copper pipes during sub-zero Wisconsin winter cold snaps',
      'Attic mold from winter condensation and ice dam moisture backups under roof shingles',
      'Crawl space wood rot, dirt floor humidity, and fungal colonies under living rooms',
    ],
    nearbySlugs: ['milton-wi', 'stoughton-wi', 'janesville-wi', 'madison-wi'],
  },
  {
    slug: 'janesville-wi',
    city: 'Janesville',
    stateAbbr: 'WI',
    name: 'Janesville, WI',
    county: 'Rock County',
    isPrimary: false,
    intro:
      'Janesville is Rock County’s largest city. Featuring classic historic districts along the Rock River, mid-century ranch homes, and expanding suburban developments, WISCo Mold & Water Damage provides rapid emergency water extraction and certified mold remediation throughout Janesville.',
    primaryKeyword: 'Water Damage Restoration & Mold Remediation Janesville WI',
    contentAngle:
      '24/7 emergency flood response, residential structural drying, and certified mold eradication for Janesville homeowners and private residences.',
    housingProfile:
      'Turn-of-the-century riverfront homes, mid-century ranch subdivisions with finished basements, and modern residential developments subject to storm runoff.',
    keyConcerns: [
      'Rock River flood surges and seasonal groundwater seepage into basement slabs',
      'Aging plumbing pipes bursting during severe winter freezes',
      'Hidden mold colonies behind basement paneling, drywall, and wet carpeting',
      'Sump pump burnouts during heavy thunderstorm power outages',
      'Basement drain and residential sewer backups requiring biohazard extraction',
    ],
    nearbySlugs: ['edgerton-wi', 'beloit-wi', 'milton-wi', 'stoughton-wi'],
  },
  {
    slug: 'madison-wi',
    city: 'Madison',
    stateAbbr: 'WI',
    name: 'Madison, WI',
    county: 'Dane County',
    isPrimary: false,
    intro:
      'As Wisconsin’s capital city, Greater Madison features a dense mix of vintage craftsman homes, lakeside residences, and multi-story apartment communities. WISCo Mold & Water Damage delivers 24/7 emergency water removal and certified mold remediation across Madison.',
    primaryKeyword: 'Mold Remediation & Water Damage Madison WI',
    contentAngle:
      'Rapid emergency water extraction, structural drying, and certified toxic mold removal for Madison homeowners, condo owners, and residential properties.',
    housingProfile:
      'Historic craftsman bungalows on the Near East/West sides, Lake Mendota and Monona properties, and active residential rental and condominium markets.',
    keyConcerns: [
      'Old stone and brick masonry foundation seepage during spring thaw cycles',
      'Plumbing supply line leaks in multi-story residential buildings affecting multiple levels',
      'Attic mold growth from improper bathroom exhaust venting and winter ice damming',
      'Basement flooding in low-lying isthmus and lake-adjacent neighborhoods',
      'High indoor humidity fueling hidden toxic black mold behind bathroom tiles and drywall',
    ],
    nearbySlugs: ['fitchburg-wi', 'verona-wi', 'sun-prairie-wi', 'stoughton-wi'],
  },
  {
    slug: 'beloit-wi',
    city: 'Beloit',
    stateAbbr: 'WI',
    name: 'Beloit, WI',
    county: 'Rock County',
    isPrimary: false,
    intro:
      'Located in southern Rock County along the Illinois border, Beloit features stately historic residences, vibrant neighborhoods along the Rock River, and charming residential streets. We provide 24/7 emergency water extraction and certified mold cleanup throughout Beloit.',
    primaryKeyword: 'Water Damage Restoration & Mold Removal Beloit WI',
    contentAngle:
      'Professional water extraction, sewage cleanup, and comprehensive mold remediation for Beloit homeowners and residential properties.',
    housingProfile:
      'Stately historic brick colonials, college-area residential homes, and single-family river corridor neighborhoods.',
    keyConcerns: [
      'Rock River groundwater pressure creating continuous basement floor moisture',
      'Outdated galvanized and cast iron plumbing corrosion causing sudden water leaks',
      'Black mold in older basements lacking mechanical dehumidification',
      'Crawl space dampness causing cupped hardwood floors in historic properties',
      'Storm sewer backups during intense summer flash-flooding events',
    ],
    nearbySlugs: ['janesville-wi', 'edgerton-wi', 'milton-wi'],
  },
  {
    slug: 'stoughton-wi',
    city: 'Stoughton',
    stateAbbr: 'WI',
    name: 'Stoughton, WI',
    county: 'Dane County',
    isPrimary: false,
    intro:
      'Situated along the Yahara River just north of Lake Koshkonong, Stoughton features historic Norwegian heritage homes, riverside cottages, and contemporary neighborhoods. WISCo Mold & Water Damage provides fast emergency water extraction and mold remediation in Stoughton.',
    primaryKeyword: 'Mold Remediation & Water Damage Stoughton WI',
    contentAngle:
      'Rapid flood pumping, structural dehumidification, and certified mold removal tailored to Yahara River basin properties.',
    housingProfile:
      'Riverside homes, historic frame residences with stone foundations, and modern subdivisions with finished basements.',
    keyConcerns: [
      'Yahara River high water tables causing seasonal basement wall weeping',
      'Sump pump failures resulting in flooded finished lower levels',
      'Damp crawl spaces with fungal growth on subfloor framing',
      'Attic frost buildup and subsequent spring thaw water leaks into ceilings',
      'Appliance supply line failures (washing machines, dishwashers, water heaters)',
    ],
    nearbySlugs: ['edgerton-wi', 'madison-wi', 'fitchburg-wi', 'sun-prairie-wi'],
  },
  {
    slug: 'sun-prairie-wi',
    city: 'Sun Prairie',
    stateAbbr: 'WI',
    name: 'Sun Prairie, WI',
    county: 'Dane County',
    isPrimary: false,
    intro:
      'One of Dane County’s fastest-growing communities, Sun Prairie features extensive modern housing subdivisions, finished multi-level basements, and historic downtown homes. We provide 24/7 water damage mitigation and certified mold remediation in Sun Prairie.',
    primaryKeyword: 'Water Damage Restoration & Mold Remediation Sun Prairie WI',
    contentAngle:
      '24/7 emergency flood drying, water extraction, and certified mold removal for Sun Prairie homeowners and residential communities.',
    housingProfile:
      'Modern suburban developments with large finished basements, multi-level homes, and surrounding rural agricultural residences.',
    keyConcerns: [
      'Finished basement flooding destroying drywall, baseboards, and carpet pad',
      'Sump pump circuit breaker trips during severe thunderstorms',
      'Attic mold from inadequate roof ventilation and heavy winter snow loads',
      'Hidden plumbing leaks in multi-bathroom modern home construction',
      'Rapid mold spread behind insulated basement perimeter framing',
    ],
    nearbySlugs: ['madison-wi', 'fitchburg-wi', 'stoughton-wi', 'edgerton-wi'],
  },
  {
    slug: 'fitchburg-wi',
    city: 'Fitchburg',
    stateAbbr: 'WI',
    name: 'Fitchburg, WI',
    county: 'Dane County',
    isPrimary: false,
    intro:
      'Bordering Madison’s southern edge, Fitchburg features a mix of suburban neighborhoods, walkout basement homes, and multi-family developments. WISCo Mold & Water Damage responds 24/7 for emergency water extraction and certified mold cleanup in Fitchburg.',
    primaryKeyword: 'Mold Remediation & Water Damage Restoration Fitchburg WI',
    contentAngle:
      'Rapid response water extraction, thermal leak detection, and certified mold removal for Fitchburg homeowners and residential neighborhoods.',
    housingProfile:
      'Modern single-family homes with walkout basements, master-planned developments, and contemporary multi-family complexes.',
    keyConcerns: [
      'Walkout basement sliding door rainwater intrusion and grading overflow',
      'Water heater ruptures and second-floor laundry room supply hose leaks',
      'Elevated basement humidity feeding Aspergillus and Penicillium mold',
      'Subfloor moisture saturation beneath hardwood and luxury vinyl plank (LVP) flooring',
      'Hidden leaks detected with non-invasive infrared thermal imaging',
    ],
    nearbySlugs: ['madison-wi', 'verona-wi', 'stoughton-wi', 'edgerton-wi'],
  },
  {
    slug: 'verona-wi',
    city: 'Verona',
    stateAbbr: 'WI',
    name: 'Verona, WI',
    county: 'Dane County',
    isPrimary: false,
    intro:
      'Known as "Hometown U.S.A." and home to major tech campuses, Verona features high-value custom residences, finished walkouts, and new construction. WISCo Mold & Water Damage provides premium water damage restoration and certified mold remediation in Verona.',
    primaryKeyword: 'Water Damage Restoration & Mold Remediation Verona WI',
    contentAngle:
      'High-precision water damage restoration, hardwood floor drying, and certified mold remediation for Verona homeowners.',
    housingProfile:
      'Custom single-family residences, finished walkout lower levels, and modern luxury homes with premium architectural finishes.',
    keyConcerns: [
      'High-end hardwood floor water saturation requiring specialty vacuum mat drying',
      'Finished basement entertainment rooms damaged by sudden sump pump failures',
      'Plumbing supply line leaks behind custom tile showers and built-in cabinetry',
      'Attic condensation and moisture retention during sub-zero Wisconsin freezes',
      'Direct insurance claims coordination and itemized Xactimate estimates',
    ],
    nearbySlugs: ['fitchburg-wi', 'madison-wi', 'stoughton-wi'],
  },
  {
    slug: 'milton-wi',
    city: 'Milton',
    stateAbbr: 'WI',
    name: 'Milton, WI',
    county: 'Rock County',
    isPrimary: false,
    intro:
      'Located directly south of Edgerton, Milton features established community neighborhoods, historic frame residences, and rural single-family properties. WISCo Mold & Water Damage delivers fast emergency water removal and certified mold remediation throughout Milton.',
    primaryKeyword: 'Mold Remediation & Water Damage Milton WI',
    contentAngle:
      'Local 24/7 emergency water extraction, crawl space encapsulation, and certified mold removal for Milton homes.',
    housingProfile:
      'Classic mid-century and historic residential properties, rural farmsteads with stone foundations, and quiet single-family subdivisions.',
    keyConcerns: [
      'Unsealed stone and concrete foundation seepage during heavy rains',
      'Dirt-floor crawl space moisture and fungal rot attacking floor joists',
      'Frozen well line or internal copper pipe bursts during winter freezes',
      'Basement mold colonies flourishing in unventilated storage rooms',
      'Storm drainage overflow pooling against exterior foundation perimeters',
    ],
    nearbySlugs: ['edgerton-wi', 'janesville-wi', 'fort-atkinson-wi'],
  },
  {
    slug: 'fort-atkinson-wi',
    city: 'Fort Atkinson',
    stateAbbr: 'WI',
    name: 'Fort Atkinson, WI',
    county: 'Jefferson County',
    isPrimary: false,
    intro:
      'Located along the Rock River in Jefferson County, Fort Atkinson features historic riverside neighborhoods, vintage properties, and expanding residential areas. We provide 24/7 emergency water damage restoration and certified mold remediation in Fort Atkinson.',
    primaryKeyword: 'Water Damage Restoration & Mold Remediation Fort Atkinson WI',
    contentAngle:
      'Fast 24/7 emergency flood pumping, structural drying, and certified toxic mold removal for Fort Atkinson residential properties.',
    housingProfile:
      'Rock River valley residences, historic downtown neighborhoods, and quiet single-family subdivisions in Jefferson County.',
    keyConcerns: [
      'Rock River seasonal cresting and groundwater infiltration into basements',
      'Severe mold growth in older basements and utility rooms following leaks',
      'Sump pump overflows during heavy spring thunderstorms and snowmelt',
      'Attic timber mold resulting from roof ice dams and inadequate ventilation',
      'Rapid emergency extraction to save carpets, walls, and structural framing',
    ],
    nearbySlugs: ['edgerton-wi', 'milton-wi', 'stoughton-wi'],
  },
];

export const PRIMARY_LOCATION = SERVICE_LOCATIONS[0];

export const LOCATION_BY_SLUG = SERVICE_LOCATIONS.reduce<Record<string, ServiceLocation>>((acc, loc) => {
  acc[loc.slug] = loc;
  return acc;
}, {});
