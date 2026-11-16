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
      'Edgerton is the home base for WISCo Inspections, LLC. Spanning Rock and Dane counties near Lake Koshkonong, we provide thorough home inspection and environmental testing services to buyers, sellers, and homeowners throughout the Edgerton community.',
    primaryKeyword: 'Home Inspector Edgerton WI',
    contentAngle:
      'Local home inspection services for buyers and sellers in Edgerton, including property condition assessments, radon testing and other available inspection services.',
    housingProfile:
      'Historic brick and frame residences near downtown Edgerton, Lake Koshkonong waterfront cottages, and established neighborhood single-family homes.',
    keyConcerns: [
      'Elevated moisture around Lake Koshkonong and Yahara River tributaries',
      'Basement groundwater intrusion, weeping foundation walls, and sump pump reliability',
      'Older electrical service panels, fuse boxes, and ungrounded branch wiring',
      'Attic insulation depth and thermal bypass air leaks causing winter ice dams',
      'Elevated radon levels from regional glacial drift soils requiring continuous testing',
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
      'Janesville is Rock County’s largest city, featuring classic historic districts along the Rock River, mid-century ranch homes, and expanding modern developments. WISCo Inspections provides fast, comprehensive inspections throughout Janesville.',
    primaryKeyword: 'Home Inspector Janesville WI',
    contentAngle:
      'Help buyers understand older and newer residential properties, major home systems and inspection findings before closing.',
    housingProfile:
      'Rock County’s largest housing market featuring turn-of-the-century riverfront homes, mid-century ranch-style subdivisions, and expanding east-side developments.',
    keyConcerns: [
      'Aging cast-iron drain lines and cloth-sheathed wiring in older neighborhoods',
      'Heating performance and boiler/furnace heat exchanger safety during Wisconsin freezes',
      'Grading and perimeter downspout drainage directing roof runoff away from walls',
      'Concrete block basement wall deflection and seasonal moisture penetration',
      'Radon gas accumulation in finished basements and ground-floor bedrooms',
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
      'Wisconsin’s capital city offers a rich variety of properties from vintage craftsman bungalows to contemporary lakeside homes. WISCo Inspections delivers detailed, independent property assessments and environmental testing across Greater Madison.',
    primaryKeyword: 'Home Inspector Madison WI',
    contentAngle:
      'Buyer and seller inspection services for Madison-area homes, including property condition, environmental testing and inspection reporting.',
    housingProfile:
      'Diverse architecture including craftsman bungalows on the Near East/West sides, mid-century homes, modern lakeside properties, and fast-paced competitive real estate transactions.',
    keyConcerns: [
      'Knob-and-tube wiring, cloth insulation, and ungrounded two-prong outlets in pre-1960 homes',
      'Stone and brick masonry foundation mortar deterioration and efflorescence',
      'Attic bypass heat loss melting roof snow and causing damaging winter ice dams',
      'High radon gas concentrations naturally occurring in Dane County glacial soil (EPA Zone 1)',
      'Corrosion in older galvanized plumbing supply lines and cast-iron sewer stacks',
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
      'Located in southern Rock County, Beloit features vibrant historic neighborhoods, brick craftsman homes, and newly revitalized residential areas. We provide clear, objective property inspections for buyers, sellers, and owners in Beloit.',
    primaryKeyword: 'Home Inspector Beloit WI',
    contentAngle:
      'Explain what buyers should know about foundations, roofing, basements, plumbing and electrical systems during a property inspection.',
    housingProfile:
      'Stately historic residences, brick colonials, and active revitalized residential neighborhoods along the Rock River and near Beloit College.',
    keyConcerns: [
      'Hydrostatic pressure on foundation walls along the river corridor',
      'Outdated fuse panels, double-tapped circuit breakers, and ungrounded circuits',
      'Older galvanized water pipes and sewer drain line settlement',
      'Roof shingle aging, chimney masonry cracks, and step flashing gaps',
      'Basement humidity, efflorescence, and crawl space ventilation',
    ],
    nearbySlugs: ['janesville-wi', 'edgerton-wi', 'milton-wi', 'stoughton-wi'],
  },
  {
    slug: 'stoughton-wi',
    city: 'Stoughton',
    stateAbbr: 'WI',
    name: 'Stoughton, WI',
    county: 'Dane County',
    isPrimary: false,
    intro:
      'Situated just north of Edgerton on the Yahara River, Stoughton is known for its celebrated heritage and well-preserved older housing stock. WISCo Inspections helps Stoughton residents make informed real estate and maintenance decisions.',
    primaryKeyword: 'Home Inspector Stoughton WI',
    contentAngle:
      'Residential inspection services for prospective buyers and homeowners, with practical guidance on moisture, attic ventilation and property maintenance.',
    housingProfile:
      'Historic Norwegian heritage homes, Victorian residences along the Yahara River, mid-century single-family properties, and quiet suburban cul-de-sacs.',
    keyConcerns: [
      'Attic baffle airflow and ventilation balance to prevent severe winter ice dams',
      'Riverfront soil moisture and sump pump check valve performance',
      'Efflorescence and horizontal cracking on masonry foundation walls',
      'Aging water heaters and boiler system safety checks',
      'Continuous electronic radon testing in finished living areas and basements',
    ],
    nearbySlugs: ['edgerton-wi', 'madison-wi', 'fitchburg-wi', 'verona-wi'],
  },
  {
    slug: 'sun-prairie-wi',
    city: 'Sun Prairie',
    stateAbbr: 'WI',
    name: 'Sun Prairie, WI',
    county: 'Dane County',
    isPrimary: false,
    intro:
      'As one of Dane County’s fastest-growing communities, Sun Prairie features extensive new construction subdivisions alongside established neighborhoods. We provide rigorous buyer, pre-listing, and warranty inspections in Sun Prairie.',
    primaryKeyword: 'Home Inspector Sun Prairie WI',
    contentAngle:
      'Home inspection information for buyers evaluating established properties and newer residential construction.',
    housingProfile:
      'Dynamic mix of rapid new construction master-planned communities, 11-month builder warranty homes, and charming historic downtown residences.',
    keyConcerns: [
      'Truss uplift and interior drywall settlement cracks in newer builds',
      'Missing or displaced blown-in attic insulation around bath exhaust fans and hatches',
      'Builder grading settlement causing rainwater to pond against foundation walls',
      'Roof penetration flashing defects around plumbing stacks and valley intersections',
      'Radon gas migration in tightly sealed modern energy-efficient building envelopes',
    ],
    nearbySlugs: ['madison-wi', 'fitchburg-wi', 'verona-wi', 'edgerton-wi'],
  },
  {
    slug: 'fitchburg-wi',
    city: 'Fitchburg',
    stateAbbr: 'WI',
    name: 'Fitchburg, WI',
    county: 'Dane County',
    isPrimary: false,
    intro:
      'Fitchburg combines suburban convenience with rural tranquility just south of Madison. Our licensed inspectors inspect single-family homes, multi-level townhomes, and new developments throughout the Fitchburg area.',
    primaryKeyword: 'Home Inspector Fitchburg WI',
    contentAngle:
      'Property inspections covering accessible structural components, roofing, electrical systems and potential moisture concerns.',
    housingProfile:
      'Established suburban neighborhoods, multi-story modern townhomes, contemporary single-family developments, and semi-rural acreage properties.',
    keyConcerns: [
      'Basement hydrostatic water seepage during intense Wisconsin spring thaws',
      'Roof valley flashing and gutter discharge clearance away from foundation walls',
      'Modern 200A electrical service panel wiring safety and GFCI/AFCI verification',
      'HVAC ductwork airflow balance across multiple residential living stories',
      'Continuous digital radon monitoring in finished lower levels and recreation rooms',
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
      'Known as Hometown USA, Verona has experienced substantial residential growth with premium new homes and scenic rural properties. WISCo Inspections provides meticulous, unbiased inspection reports for Verona buyers and homeowners.',
    primaryKeyword: 'Home Inspector Verona WI',
    contentAngle:
      'Inspection guidance for buyers and sellers, including new-home inspections, pre-listing inspections and available testing services.',
    housingProfile:
      'High-demand residential market with upscale contemporary subdivisions, newly constructed custom homes, and scenic rolling farmland properties.',
    keyConcerns: [
      'New construction warranty punch-list defects before 1-year builder expiration',
      'Thermal building envelope efficiency and hidden air leaks around windows/doors',
      'Foundation settlement hairline cracks vs structural block shifting',
      'Radon accumulation in energy-efficient tight building assemblies',
      'Exterior stone veneer drainage weeping and flashing detail integrity',
    ],
    nearbySlugs: ['madison-wi', 'fitchburg-wi', 'stoughton-wi', 'edgerton-wi'],
  },
  {
    slug: 'milton-wi',
    city: 'Milton',
    stateAbbr: 'WI',
    name: 'Milton, WI',
    county: 'Rock County',
    isPrimary: false,
    intro:
      'Located just south of Edgerton, Milton offers small-town charm, historic properties, and lakeside homes near Lake Koshkonong. We deliver complete structural and mechanical inspections tailored to Milton properties.',
    primaryKeyword: 'Home Inspector Milton WI',
    contentAngle:
      'Local property inspection information, including basement conditions, roofing, moisture and major home systems.',
    housingProfile:
      'Historic nineteenth-century homes, quiet family neighborhoods, and lakeside residences surrounding Lake Koshkonong and Clear Lake.',
    keyConcerns: [
      'High seasonal water tables impacting basements and crawl spaces',
      'Sump pump check valve failure and emergency battery backup readiness',
      'Crawl space vapor retarder integrity and floor joist deflection/rot',
      'Chimney masonry mortar decay and roof shingle granule erosion',
      'Radon gas entering through stone or block foundation perimeters',
    ],
    nearbySlugs: ['edgerton-wi', 'janesville-wi', 'fort-atkinson-wi', 'beloit-wi'],
  },
  {
    slug: 'fort-atkinson-wi',
    city: 'Fort Atkinson',
    stateAbbr: 'WI',
    name: 'Fort Atkinson, WI',
    county: 'Jefferson County',
    isPrimary: false,
    intro:
      'Fort Atkinson in Jefferson County features a scenic riverfront, vintage architecture, and established residential pockets. WISCo Inspections is proud to serve Fort Atkinson with dependable home inspections and specialty testing.',
    primaryKeyword: 'Home Inspector Fort Atkinson WI',
    contentAngle:
      'Home inspection guidance for buyers and sellers, focusing on property condition, visible defects and inspection planning.',
    housingProfile:
      'Picturesque Rock River community with historic commercial-residential corridors, Craftsman homes, and mid-century family neighborhoods in Jefferson County.',
    keyConcerns: [
      'River valley humidity and seasonal basement moisture intrusion',
      'Aging electrical distribution panels, ungrounded circuits, and GFCI protection gaps',
      'Attic insulation thermal R-values needed for harsh Wisconsin winters',
      'Perimeter grading slope directing roof runoff toward foundation walls',
      'Radon gas testing in lower-level living and recreation areas',
    ],
    nearbySlugs: ['edgerton-wi', 'milton-wi', 'stoughton-wi', 'madison-wi'],
  },
];

export const PRIMARY_LOCATION = SERVICE_LOCATIONS.find((location) => location.isPrimary)!;
