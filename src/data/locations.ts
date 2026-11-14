export type ServiceLocation = {
  slug: string;
  city: string;
  stateAbbr: string;
  name: string;
  isPrimary: boolean;
  intro: string;
};

export const SERVICE_LOCATIONS: ServiceLocation[] = [
  {
    slug: 'edgerton-wi',
    city: 'Edgerton',
    stateAbbr: 'WI',
    name: 'Edgerton, WI',
    isPrimary: true,
    intro:
      'Edgerton is a city in Rock County, Wisconsin. WISCo Inspections, LLC offers home inspection services to buyers, sellers, and homeowners in the Edgerton area. Call to confirm availability for a property in Edgerton before scheduling.',
  },
];

export const PRIMARY_LOCATION = SERVICE_LOCATIONS.find((location) => location.isPrimary)!;
