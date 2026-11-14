export type ServiceLocation = {
  slug: string;
  city: string;
  stateAbbr: string;
  name: string;
  county: string;
  isPrimary: boolean;
  intro: string;
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
  },
];

export const PRIMARY_LOCATION = SERVICE_LOCATIONS.find((location) => location.isPrimary)!;
